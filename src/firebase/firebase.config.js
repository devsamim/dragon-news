// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQd2aUgmNorsMNrHblGlbIPyBijrQcSVY",
  authDomain: "dragon-news-samim.firebaseapp.com",
  projectId: "dragon-news-samim",
  storageBucket: "dragon-news-samim.firebasestorage.app",
  messagingSenderId: "815486513441",
  appId: "1:815486513441:web:7e6e9db4db430579b68e60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);