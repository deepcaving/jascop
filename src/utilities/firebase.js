// Firebase App (the core Firebase SDK) is always required and must be listed first

//var firebase = require("firebase/app");
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use

import * as firebase from "@firebase/app";

import "@firebase/auth";
//import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCER_qg3NixZ2jFyy8CreEbCPVCBhCXudo",
    authDomain: "jascop-5acd6.firebaseapp.com",
    projectId: "jascop-5acd6",
    storageBucket: "jascop-5acd6.appspot.com",
    messagingSenderId: "41512304192",
    appId: "1:41512304192:web:4d2d17598f5f75f6cd69a5",
    measurementId: "G-DYJY4FXDJS"
};

// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);

export default firebase;
//const db = firebase.firestore()
//const firebaseAuth = firebase.auth()

