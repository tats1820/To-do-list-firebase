// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzEJV3j7WHTYXODug838fua986XeRRssY",
  authDomain: "to-do-list-7edee.firebaseapp.com",
  projectId: "to-do-list-7edee",
  storageBucket: "to-do-list-7edee.appspot.com",
  messagingSenderId: "408718670570",
  appId: "1:408718670570:web:ad0f7cc315640a40417593",
  measurementId: "G-ESPTG7CHNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);