// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-d7417.firebaseapp.com",
  projectId: "real-estate-d7417",
  storageBucket: "real-estate-d7417.appspot.com",
  messagingSenderId: "1097558453097",
  appId: "1:1097558453097:web:bfb6e2bf949c785c25abf8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);