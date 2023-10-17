// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDynVm8X183Jk3tq9qsJklwu55-vsN5dlE",
  authDomain: "articx-2ef05.firebaseapp.com",
  projectId: "articx-2ef05",
  storageBucket: "articx-2ef05.appspot.com",
  messagingSenderId: "924963892631",
  appId: "1:924963892631:web:89e644c3719fd493c9e8d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const fireStore = getFirestore(app);