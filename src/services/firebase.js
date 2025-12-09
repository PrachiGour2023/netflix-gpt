// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt-yZWtgRMATAj9maiAp8bxuMu3AHN0SQ",
  authDomain: "netflix-gpt-e7f3a.firebaseapp.com",
  projectId: "netflix-gpt-e7f3a",
  storageBucket: "netflix-gpt-e7f3a.firebasestorage.app",
  messagingSenderId: "1061979274950",
  appId: "1:1061979274950:web:30e096ea2ce88852f9a1c7",
  measurementId: "G-8N9SKJZYFN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
