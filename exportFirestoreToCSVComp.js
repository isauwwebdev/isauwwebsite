const admin = require("firebase-admin");
const { Parser } = require("json2csv");
const fs = require("fs");

// Initialize Firebase Admin SDK only once
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const firestore = admin.firestore();

// Export Firestore Data to CSV
async function exportFirestoreToCSVComp(pathType) {
  try {
    let firestorePath = "";

    // Dynamically choose the Firestore path
    if (pathType === "stamp-quest") {
      firestorePath = "2024/stamp-quest/event-registrations";
    } else if (pathType === "seathrough") {
      firestorePath = "2024/seathrough/event-registrations";
    } else {
      throw new Error("Invalid path type specified");
    }

    // Get data from Firestore collection
    const collectionRef = firestore.collection(firestorePath);
    const snapshot = await collectionRef.get();

    const data = [];
    snapshot.forEach((doc) => {
      const docData = doc.data();
      data.push(docData);
    });

    if (data.length === 0) {
      console.log("No documents found.");
      return;
    }

    // Convert JSON to CSV using json2csv
    const fields = Object.keys(data[0]); // Use the first document's keys for the CSV headers
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(data);

    // Write CSV to a file with a dynamic name based on pathType
    const fileName = `firestore-export-${pathType}.csv`;
    fs.writeFileSync(fileName, csv);
    console.log(`Export complete. CSV file saved as ${fileName}`);
  } catch (error) {
    console.error("Error exporting collection to CSV: ", error.message);
  }
}

// Get command-line arguments
const pathType = process.argv[2];
if (!pathType) {
  console.error("Please provide a pathType (e.g., 'stamp-quest' or 'seathrough').");
  process.exit(1);
}

exportFirestoreToCSVComp(pathType);
