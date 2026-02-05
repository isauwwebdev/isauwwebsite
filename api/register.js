// api/register.js  (Vercel serverless function - CommonJS)

const admin = require("firebase-admin");
const yup = require("yup");

/* ──────────────────────────────────────────────────────────────
   1) Firebase Admin init (expects FIREBASE_SERVICE_ACCOUNT_KEY base64)
   ────────────────────────────────────────────────────────────── */
let initError;

try {
  if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    throw new Error(
      "Missing FIREBASE_SERVICE_ACCOUNT_KEY. Put a base64-encoded service account JSON in .env.local",
    );
  }

  if (!admin.apps.length) {
    const svc = JSON.parse(
      Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_KEY, "base64").toString(
        "utf8",
      ),
    );
    admin.initializeApp({ credential: admin.credential.cert(svc) });
  }
} catch (err) {
  initError = err;
  console.error("[register] Firebase Admin init error:", err.message);
}

const db = admin.firestore();

/* ──────────────────────────────────────────────────────────────
   2) Security: only allow writes to these collections
   ────────────────────────────────────────────────────────────── */
const ALLOWED_PATHS = new Set([
  "2025/friendsGiving/events_registration",
  "2026/winterball/event_registration",
]);

/* ──────────────────────────────────────────────────────────────
   3) Validation schemas (per-form)
   ────────────────────────────────────────────────────────────── */
const baseCommon = {
  firstName: yup.string().required("First name is required."),
  lastName: yup.string().required("Last name is required."),
  email: yup
    .string()
    .email("Invalid email format.")
    .required("Email is required."),
  phoneNumber: yup.string().required("Phone number is required."),
  major: yup.string().required("Major is required."),
  batch: yup.string().required("Batch is required."),
  additionalQuestion: yup.string().nullable(),
  isWARegistered: yup.boolean(),
  subscribe: yup.boolean(),
  timestamp: yup.date().required("timestamp is required."),
};

const schemaFriendsGiving = yup.object().shape({
  ...baseCommon,
  proofOfPayment: yup.string().required("This field is required."),
});

const schemaWinterball = yup.object().shape({
  ...baseCommon,
  proofOfPayment: yup.string().required("Proof of payment is required."),
});

/* Map collection → schema so we can pick per form */
const SCHEMAS_BY_PATH = {
  "2025/friendsGiving/events_registration": schemaFriendsGiving,
  "2026/winterball/event_registration": schemaWinterball,
};

/* ──────────────────────────────────────────────────────────────
   4) Handler
   ────────────────────────────────────────────────────────────── */
module.exports = async (req, res) => {
  if (initError) {
    return res
      .status(500)
      .json({ error: "Firebase Admin failed to initialize on the server." });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const raw = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    if (!raw || typeof raw !== "object") {
      return res.status(400).json({ error: "Invalid JSON body" });
    }

    const { firestorePath, ...formData } = raw;

    // 4a) Guard collection path
    if (!firestorePath || !ALLOWED_PATHS.has(firestorePath)) {
      return res
        .status(400)
        .json({ error: "Invalid or missing firestorePath" });
    }

    // 4b) Choose and run the right schema
    const schema = SCHEMAS_BY_PATH[firestorePath];
    if (!schema) {
      return res
        .status(400)
        .json({ error: "No validation schema for this firestorePath" });
    }

    const cleaned = await schema.validate(formData, {
      abortEarly: false,
      stripUnknown: true, // drop any unexpected fields
    });

    // 4c) Write to Firestore (server timestamp)
    const docRef = await db.collection(firestorePath).add({
      ...cleaned,
      serverCreatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return res.status(200).json({ ok: true, id: docRef.id });
  } catch (err) {
    if (err && err.name === "ValidationError") {
      return res.status(400).json({ error: err.errors.join(", ") });
    }
    console.error("[register] Internal error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
