// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtNV7lLjbS6OqnnpH7Umw2vtPbLGI6kDA",
  authDomain: "neflixgpt-aa358.firebaseapp.com",
  projectId: "neflixgpt-aa358",
  storageBucket: "neflixgpt-aa358.firebasestorage.app",
  messagingSenderId: "897223410326",
  appId: "1:897223410326:web:c1085ab3bebd444d69b8b7",
  measurementId: "G-Z2TEB1DYRN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
