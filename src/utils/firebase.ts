// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtNGmmKkKTzaKZ8sCkZD_G_hWttvArBKM",
  authDomain: "netflixgpt-651ee.firebaseapp.com",
  projectId: "netflixgpt-651ee",
  storageBucket: "netflixgpt-651ee.firebasestorage.app",
  messagingSenderId: "426977499620",
  appId: "1:426977499620:web:8f8425fb8cf6361e344ff1",
  measurementId: "G-6KMB9Y9TCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);