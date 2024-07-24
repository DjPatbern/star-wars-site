// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATBYEnhQsKYb1tL6uNSGBcaFxDUWkJ-bk",
  authDomain: "chatter-df5b7.firebaseapp.com",
  projectId: "chatter-df5b7",
  storageBucket: "chatter-df5b7.appspot.com",
  messagingSenderId: "67925119835",
  appId: "1:67925119835:web:37328a79f6e2312616c07e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
