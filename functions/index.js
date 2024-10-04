const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { exec } = require("child_process");

admin.initializeApp();

// Function to handle Google Sheets update using curl
const updateGoogleSheetsWithCurl = (dataToSend, sheetUrl) => {
  return new Promise((resolve, reject) => {
    const jsonData = JSON.stringify(dataToSend);

    const curlCommand = `curl -X POST ${sheetUrl} -H "Content-Type: application/json" -d '${jsonData}'`;

    exec(curlCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(
          `Error updating Google Sheets with curl: ${error.message}`
        );
        return reject(error);
      }
      console.log(`Google Sheets updated: ${stdout}`);
      resolve({ success: true });
    });
  });
};

exports.syncFirestoreWithGoogleSheets = functions.firestore
  .document("2024/officer-application/submitted-applications/{docId}")
  .onWrite(async (change, context) => {
    // Get the document data after the change
    const document = change.after.exists ? change.after.data() : null;

    if (!document) {
      console.log("No document data after the change. Exiting.");
      return;
    }

    const sheetUrl =
      "https://script.google.com/macros/s/AKfycbwyV3LEU-3SN1s4e3MwqthNiFLQTZqCwSJmzyWG0Ly6gddvxNj9PJ3zl2_gLFU5LahpVw/exec";

    // Transform the Firestore document fields to the format expected by the Google Sheets App Script
    const transformedDocument = {
      name: change.after.ref.path,
      fields: {
        firstName: { stringValue: document.firstName || "" },
        lastName: { stringValue: document.lastName || "" },
        major: { stringValue: document.major || "" },
        standing: { stringValue: document.standing || "" },
        uwEmail: { stringValue: document.uwEmail || "" },
        personalEmail: { stringValue: document.personalEmail || "" },
        phoneNumber: { stringValue: document.phoneNumber || "" },
        firstChoice: { stringValue: document.firstChoice || "" },
        secondChoice: { stringValue: document.secondChoice || "" },
        thirdChoice: { stringValue: document.thirdChoice || "" },
        resume: { stringValue: document.resume || "" },
        portfolio: { stringValue: document.portfolio || "" },
        pastExperiences: { stringValue: document.pastExperiences || "" },
        strengthsWeaknesses: {
          stringValue: document.strengthsWeaknesses || "",
        },
        whyISAUW: { stringValue: document.whyISAUW || "" },
        timestamp: {
          timestampValue: document.timestamp
            ? document.timestamp.toDate().toISOString()
            : "",
        },
      },
    };

    const dataToSend = {
      documents: [transformedDocument],
    };

    console.log("Data to send to Google Sheets:", dataToSend);

    // Use curl to send data to the Google Apps Script Web App
    try {
      const result = await updateGoogleSheetsWithCurl(dataToSend, sheetUrl);
      console.log(result);
    } catch (error) {
      console.error("Error during Google Sheets update:", error);
    }
  });
