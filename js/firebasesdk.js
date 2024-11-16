// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmvg95GnmwIXrDwrhJLfyOSegSnMNHoEM",
  authDomain: "ak-pwa-01.firebaseapp.com",
  databaseURL: "https://ak-pwa-01-default-rtdb.firebaseio.com",
  projectId: "ak-pwa-01",
  storageBucket: "ak-pwa-01.firebasestorage.app",
  messagingSenderId: "877099179198",
  appId: "1:877099179198:web:308c6432c4fa7a986a12ef",
  measurementId: "G-K9RV0QES03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
