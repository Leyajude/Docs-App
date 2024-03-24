import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOmxwr07STSKhaSOyG_MaIgIoBZHARXpE",
  authDomain: "docs-app-d4ba1.firebaseapp.com",
  projectId: "docs-app-d4ba1",
  storageBucket: "docs-app-d4ba1.appspot.com",
  messagingSenderId: "644498717746",
  appId: "1:644498717746:web:3fe74c5a3759fa1349902b",
  measurementId: "G-BVCZ8BJBWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore=getFirestore(app);