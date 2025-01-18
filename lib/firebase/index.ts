// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKOyr5AO0KhJLKxMSg4bZsSwabtz7GB6s",
    authDomain: "sofe-group.firebaseapp.com",
    projectId: "sofe-group",
    storageBucket: "sofe-group.appspot.com",
    messagingSenderId: "455987888191",
    appId: "1:455987888191:web:8abafb9ccd18ba4bd5788a"
};

// Initialize Firebase
const app = firebase.apps.length ? firebase.apps[0] : initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)