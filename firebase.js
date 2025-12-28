// firebase.js
// 🔹 Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// 🔹 Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDT4XZtLbYRsSwM5doqkjMANf2d6oWLCuE",
  authDomain: "harvyakti.firebaseapp.com",
  databaseURL: "https://harvyakti-default-rtdb.firebaseio.com",
  projectId: "harvyakti",
  storageBucket: "harvyakti.appspot.com",
  messagingSenderId: "394497239762",
  appId: "1:394497239762:web:8445303e857f9aeff8db0b",
  measurementId: "G-EPRQZ4ZH5T"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔹 Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const rtdb = getDatabase(app);

// 🔹 Export for other modules
export { app, auth, db, rtdb };
