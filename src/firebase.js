import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA85BYCasU9-a1AR0ZL_M2g0KrsCeU7XuY",
  authDomain: "linkedin-8ed21.firebaseapp.com",
  projectId: "linkedin-8ed21",
  storageBucket: "linkedin-8ed21.appspot.com",
  messagingSenderId: "556232310441",
  appId: "1:556232310441:web:1e5535f6d081e809c9f3b8"
}
const app=initializeApp(firebaseConfig)
const db = getFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
})
const auth = getAuth(app)
const collectionRef = collection(db, "posts")
const provider = new GoogleAuthProvider()

export {app, db, auth, collectionRef, provider}