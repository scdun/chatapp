// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEWBNaSyKN3U0kMNZ22No0Yb2xre5HkjI",
  authDomain: "chat-d8bbb.firebaseapp.com",
  projectId: "chat-d8bbb",
  storageBucket: "chat-d8bbb.appspot.com",
  messagingSenderId: "451418584073",
  appId: "1:451418584073:web:1d42825a4d372eedf6f4d8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
