// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "neflixgpt-aa358.firebaseapp.com",
  projectId: "neflixgpt-aa358",
  storageBucket: "neflixgpt-aa358.firebasestorage.app",
  messagingSenderId: "897223410326",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-Z2TEB1DYRN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth();
