// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg6FOKfNMkj1L-UyxkGqEpPuyw76jLq_c",
  authDomain: "masitech-solutions.firebaseapp.com",
  projectId: "masitech-solutions",
  storageBucket: "masitech-solutions.firebasestorage.app",
  messagingSenderId: "627121817663",
  appId: "1:627121817663:web:1d8bc441f6a2daf83bd08a",
  measurementId: "G-LZQQCZTF1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);