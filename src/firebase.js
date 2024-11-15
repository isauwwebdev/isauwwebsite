// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// TODO: these IDs and secrets should come from a .env file.
const firebaseConfig = {
  apiKey: "AIzaSyBGu6HsBCf5Cmn0JDzpXmHquJs0sGw-ORA",
  authDomain: "isauw-88012.firebaseapp.com",
  projectId: "isauw-88012",
  storageBucket: "isauw-88012.appspot.com",
  messagingSenderId: "864353529861",
  appId: "1:864353529861:web:0e2b9002b5dfd3d1dbac6c",
  measurementId: "G-TL0QBC1FGV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Optional: Initialize Analytics (remove if not needed)
// const analytics = getAnalytics(app);

const storage = getStorage(app);

export { db, storage };
