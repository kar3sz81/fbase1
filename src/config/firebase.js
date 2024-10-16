// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfnEOiZMk9F6F0i4ouB2NfMHXTnItoCTk",
  authDomain: "fbase1-27eaf.firebaseapp.com",
  projectId: "fbase1-27eaf",
  storageBucket: "fbase1-27eaf.appspot.com",
  messagingSenderId: "332635919209",
  appId: "1:332635919209:web:5a1678254a115aeab8a3f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
