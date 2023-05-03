// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "react-admin-dashboard-5a835.firebaseapp.com",
  projectId: "react-admin-dashboard-5a835",
  storageBucket: "react-admin-dashboard-5a835.appspot.com",
  messagingSenderId: "573826287079",
  appId: "1:573826287079:web:997cf076aaa0b612fa6942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);