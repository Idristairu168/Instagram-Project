import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCGhPUDDLMpv_IbtbB0LM-oVFF06nSBRBg",
  authDomain: "instagram2-9bcc6.firebaseapp.com",
  projectId: "instagram2-9bcc6",
  storageBucket: "instagram2-9bcc6.appspot.com",
  messagingSenderId: "683966400385",
  appId: "1:683966400385:web:59fb131bc08ef29ee64a80"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);


export {app, auth, firestore, storage};