// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJZFBNY37texYVrayJyUQMEKK_ErIXgLs",
  authDomain: "flickfix-ea829.firebaseapp.com",
  projectId: "flickfix-ea829",
  storageBucket: "flickfix-ea829.appspot.com",
  messagingSenderId: "819871386386",
  appId: "1:819871386386:web:d94e2758aa374c65aec1cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);