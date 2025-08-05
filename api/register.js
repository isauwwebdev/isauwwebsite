const admin = require("firebase-admin");
const yup = require("yup");

// Initialize the Firebase Admin SDK
// You need to set the FIREBASE_SERVICE_ACCOUNT_KEY environment variable in Vercel
// uses vercel serverless function, hosts all /api endpts in vercel
if (!admin.apps.length) {
  try {
    const serviceAccount = JSON.parse(
      Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_KEY, "base64").toString(
        "utf-8"
      )
    );
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error) {
    console.error("Firebase admin initialization error", error.stack);
  }
}

const db = admin.firestore();

module.exports = async (req, res) => {
  if (req.method === "POST") {
    console.log("Received registration request.");
    const formData = req.body;
    console.log("Form data:", formData);
    const firestorePath = "2025/seattle101/events_registration";

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
      batch: yup.string().required("Batch is required."),
      additionalQuestion: yup.string(),
      isWARegistered: yup.boolean(),
      subscribe: yup.boolean(),
      timestamp: yup.date().required(),
    });

    try {
      await schema.validate(formData);
      console.log("Validation successful.");
    } catch (error) {
      console.error("Validation failed:", error.errors.join(", "));
      return res.status(400).json({ error: error.errors.join(", ") });
    }

    try {
      const docRef = await db.collection(firestorePath).add(formData);
      console.log(
        "Registration successful. Document written with ID: ",
        docRef.id
      );
      res.status(200).json({ message: "Registration successful" });
    } catch (error) {
      console.error("Error adding document: ", error);
      res.status(500).json({ error: "Error adding document to Firestore" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
