// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhmg5eRSTMtmWLHRA8qLOUh6Ianmd8T5U",
  authDomain: "linkedin-clone-5890a.firebaseapp.com",
  projectId: "linkedin-clone-5890a",
  storageBucket: "linkedin-clone-5890a.appspot.com",
  messagingSenderId: "639199553348",
  appId: "1:639199553348:web:ab3e4a214cd8af62c5d911",
  measurementId: "G-WK0Q0YMXCS"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db=getFirestore(firebaseApp)
const auth=getAuth(firebaseApp)
export {db,auth}