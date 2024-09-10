// /**
//  * Import function triggers from their respective submodules:
//  *
//  * const {onCall} = require("firebase-functions/v2/https");
//  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// const { Parser } = require("json2csv");
// const fs = require("fs");
// const os = require("os");
// const path = require("path");

// admin.initializeApp();

// // Cloud Function to export Firestore data as a CSV file
// exports.exportToCSV = functions.https.onRequest(async (req, res) => {
//   try {
//     // Access your Firestore collection
//     const collectionRef = admin.firestore().collection("event-registrations");
//     const snapshot = await collectionRef.get();

//     if (snapshot.empty) {
//       console.log('No documents found');
//       res.status(404).send("No data found to export.");
//       return;
//     }

//     const data = [];
//     snapshot.forEach(doc => {
//       data.push(doc.data());
//     });

//     // Convert the data to CSV using json2csv
//     const fields = Object.keys(data[0]); // Use keys from the first document
//     const json2csvParser = new Parser({ fields });
//     const csv = json2csvParser.parse(data);

//     // Write the CSV to a temporary file
//     const tempFilePath = path.join(os.tmpdir(), "firestore-export.csv");
//     fs.writeFileSync(tempFilePath, csv);

//     // Set headers to serve the CSV file
//     res.setHeader("Content-Disposition", 'attachment; filename="firestore-export.csv"');
//     res.setHeader("Content-Type", "text/csv");

//     // Send the CSV data
//     res.send(csv);
    
//   } catch (error) {
//     console.error("Error exporting Firestore data to CSV:", error);
//     res.status(500).send("Error exporting data.");
//   }
// });


// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

// // exports.helloWorld = onRequest((request, response) => {
// //   logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });
