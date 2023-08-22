// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMjcVYWp0uG313BifEUp9TlyfFid8TGcM",
  authDomain: "real-state-4087d.firebaseapp.com",
  projectId: "real-state-4087d",
  storageBucket: "real-state-4087d.appspot.com",
  messagingSenderId: "136269885376",
  appId: "1:136269885376:web:b245d976f9938d16206225"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
