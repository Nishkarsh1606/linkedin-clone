import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhmg5eRSTMtmWLHRA8qLOUh6Ianmd8T5U",
  authDomain: "linkedin-clone-5890a.firebaseapp.com",
  databaseURL: "https://linkedin-clone-5890a-default-rtdb.firebaseio.com",
  projectId: "linkedin-clone-5890a",
  storageBucket: "linkedin-clone-5890a.appspot.com",
  messagingSenderId: "639199553348",
  appId: "1:639199553348:web:ab3e4a214cd8af62c5d911",
  measurementId: "G-WK0Q0YMXCS"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
signInWithPopup(auth,provider)
