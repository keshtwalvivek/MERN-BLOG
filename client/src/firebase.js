// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b8207.firebaseapp.com",
  projectId: "mern-blog-b8207",
  storageBucket: "mern-blog-b8207.appspot.com",
  messagingSenderId: "792363620696",
  appId: "1:792363620696:web:85238c6aadb4ef3ff42d2d",
  measurementId: "G-SHMT1QQYTC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
