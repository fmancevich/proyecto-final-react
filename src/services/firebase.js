// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6jJ6xfE7acT9HHdZMJaMbG00yXaptTjc",
  authDomain: "proyecto-final-react-aa9b7.firebaseapp.com",
  projectId: "proyecto-final-react-aa9b7",
  storageBucket: "proyecto-final-react-aa9b7.appspot.com",
  messagingSenderId: "440949461628",
  appId: "1:440949461628:web:ebc01d0895b19da02e6ff9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)