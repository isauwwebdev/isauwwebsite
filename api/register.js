const admin = require("firebase-admin");
const yup = require("yup");

// ---- Firebase Admin init ----
let initError;
if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
  console.error("Missing FIREBASE_SERVICE_ACCOUNT_KEY env var");
}
if (!admin.apps.length) {
  try {
    const svc = JSON.parse(
      Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_KEY, "base64").toString(
        "utf-8"
      )
    );
    admin.initializeApp({ credential: admin.credential.cert(svc) });
  } catch (err) {
    initError = err;
    console.error("Firebase admin initialization error", err.stack || err);
  }
}
const db = admin.firestore();

// ---- Allowed collections (keep this list tight) ----
const ALLOWED_PATHS = new Set([
  "2025/seattle101/events_registration",
  "2025/IsauwSeattleSendOff/event_registration",
]);

// ---- Reusable validation for form payload (not the path) ----
const schema = yup.object().shape({
  firstName: yup.string().required("First name is required."),
  lastName: yup.string().required("Last name is required."),
  email: yup
    .string()
    .email("Invalid email format.")
    .required("Email is required."),
  phoneNumber: yup.string().required("Phone number is required."),
  major: yup.string().required("Major is required."),
  cityOfOrigin: yup.string().required("City of origin is required."),
  incomingSchool: yup.string().nullable(), // optional in your UI, make optional if desired
  batch: yup.string().required("Batch is required."),
  additionalQuestion: yup.string().nullable(),
  isWARegistered: yup.boolean(),
  subscribe: yup.boolean(),
  timestamp: yup.date().required("timestamp is required."),
});

module.exports = async (req, res) => {
  if (initError) {
    return res
      .status(500)
      .json({ error: "Firebase Admin failed to initialize" });
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

    // Validate and protect the collection path
    if (!firestorePath || !ALLOWED_PATHS.has(firestorePath)) {
      return res
        .status(400)
        .json({ error: "Invalid or missing firestorePath" });
    }

    // Validate the rest of the fields
    await schema.validate(formData, { abortEarly: false });

    // Write to Firestore (add server timestamp as canonical time)
    const docRef = await db.collection(firestorePath).add({
      ...formData,
      serverCreatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return res.status(200).json({ ok: true, id: docRef.id });
  } catch (err) {
    // yup validation errors
    if (err && err.name === "ValidationError") {
      return res.status(400).json({ error: err.errors.join(", ") });
    }
    console.error("Error in /api/register:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
