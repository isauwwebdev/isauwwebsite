const admin = require("firebase-admin");

// Initialize the Firebase Admin SDK
// You need to set the FIREBASE_SERVICE_ACCOUNT_KEY environment variable in Vercel
// uses vercel serverless function, hosts all /api endpts in vercel
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(
        JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
      ),
    });
  } catch (error) {
    console.error("Firebase admin initialization error", error.stack);
  }
}

const db = admin.firestore();

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const formData = req.body;
    const firestorePath = "2025/seattle101/events_registration";

    if (!formData) {
      return res.status(400).json({ error: "Missing form data" });
    }

    try {
      await db.collection(firestorePath).add(formData);
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
