const admin = require("firebase-admin");
const yup = require("yup");

/* ──────────────────────────────────────────────────────────────
1) Firebase Admin init (expects FIREBASE_SERVICE_ACCOUNT_KEY base64)
────────────────────────────────────────────────────────────── */
let initError;

try {
  if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    throw new Error(
      "Missing FIREBASE_SERVICE_ACCOUNT_KEY. Put a base64-encoded service account JSON in .env.local"
    );
  }

  if (!admin.apps.length) {
    const svc = JSON.parse(
      Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_KEY, "base64").toString(
        "utf8"
      )
    );
    admin.initializeApp({ credential: admin.credential.cert(svc) });
  }
} catch (err) {
  initError = err;
  console.error("[submit-application] Firebase Admin init error:", err.message);
}

const db = admin.firestore();

/* ──────────────────────────────────────────────────────────────
2) Security: only allow writes to these collections
────────────────────────────────────────────────────────────── */
const ALLOWED_PATHS = new Set([
  "2025/officer-application/submitted-applications",
]);

/* ──────────────────────────────────────────────────────────────
3) Validation schema (server-trusted)
────────────────────────────────────────────────────────────── */
const standingEnum = ["Freshman", "Sophomore", "Junior", "Senior", "Graduate"];

const positionEnum = [
  "EO",
  "CM",
  "Inventory",
  "Treasury",
  "Fundraising",
  "Sponsorship",
  "MarCom",
  "Design",
  "Documentation",
  "WebDev",
];

const schemaOfficerApplication = yup
  .object()
  .shape({
    firstName: yup.string().trim().required("First name is required."),
    lastName: yup.string().trim().required("Last name is required."),
    phoneNumber: yup
      .string()
      .trim()
      .matches(/^[0-9()+\-\s.]{7,}$/i, "Invalid phone number.")
      .required("Phone number is required."),

    personalEmail: yup
      .string()
      .trim()
      .email("Invalid personal email format.")
      .required("Personal email is required."),

    uwEmail: yup
      .string()
      .trim()
      .matches(/^\w+@uw\.edu$/i, "UW email must be @uw.edu")
      .required("UW email is required."),

    major: yup.string().trim().required("Major is required."),
    standing: yup
      .string()
      .oneOf(standingEnum, "Standing must be a valid option.")
      .required("Standing is required."),

    firstChoice: yup
      .string()
      .oneOf(positionEnum, "First choice must be a valid position.")
      .required("First choice is required."),
    secondChoice: yup
      .string()
      .oneOf(positionEnum, "Second choice must be a valid position.")
      .required("Second choice is required."),
    thirdChoice: yup
      .string()
      .oneOf(positionEnum, "Third choice must be a valid position.")
      .required("Third choice is required."),

    strengthsWeaknesses: yup
      .string()
      .trim()
      .required("This field is required."),
    pastExperiences: yup.string().trim().required("This field is required."),
    whyISAUW: yup.string().trim().required("This field is required."),

    // Optional URLs
    resume: yup
      .string()
      .transform((v) => (v === "" ? undefined : v))
      .trim()
      .url("Resume must be a URL")
      .nullable(),
    portfolio: yup
      .string()
      .transform((v) => (v === "" ? undefined : v))
      .trim()
      .url("Portfolio must be a URL")
      .nullable(),

    // Client must send ISO string; server will also add server timestamp
    timestamp: yup.date().required("timestamp is required."),
  })
  .test(
    "distinct-positions",
    "First, second, and third choices must be distinct.",
    (obj) => {
      if (!obj) return false;
      const { firstChoice, secondChoice, thirdChoice } = obj;
      return new Set([firstChoice, secondChoice, thirdChoice]).size === 3;
    }
  );

const SCHEMAS_BY_PATH = {
  "2025/officer-application/submitted-applications": schemaOfficerApplication,
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

    // 4b) Choose & run the right schema
    const schema = SCHEMAS_BY_PATH[firestorePath];
    if (!schema) {
      return res
        .status(400)
        .json({ error: "No validation schema for this firestorePath" });
    }

    const cleaned = await schema.validate(formData, {
      abortEarly: false,
      stripUnknown: true,
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
    console.error("[submit-application] Internal error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
