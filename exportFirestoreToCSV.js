const admin = require("firebase-admin");
const { Parser } = require("json2csv");
const fs = require("fs");

// Initialize Firebase Admin SDK
const serviceAccount = require("./serviceAccountKey.json"); // Replace with the path to your service account JSON key file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firestore = admin.firestore();

async function exportCollectionToCSV() {
  const collectionRef = firestore.collection("2024/stamp-quest/event-registrations-dev"); // Replace with your collection name
  const snapshot = await collectionRef.get();

  const data = [];
  snapshot.forEach(doc => {
    data.push(doc.data());
  });

  if (data.length === 0) {
    console.log("No documents found.");
    return;
  }

  // Convert to CSV using json2csv
  const fields = Object.keys(data[0]); // Use the first document's keys for field names
  const json2csvParser = new Parser({ fields });
  const csv = json2csvParser.parse(data);

  // Write CSV to a file
  fs.writeFileSync("firestore-export.csv", csv);
  console.log("Export complete. CSV file saved as firestore-export.csv");
}

exportCollectionToCSV();
