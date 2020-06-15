import firebase from "firebase";
import "firebase/auth";



const config = {
    apiKey: "AIzaSyC-aRqRBGaodd-oLzJ4waD4Zuz_x7CHZww",
    authDomain: "cinema-60319.firebaseapp.com",
    databaseURL: "https://cinema-60319.firebaseio.com",
    projectId: "cinema-60319",
    storageBucket: "cinema-60319.appspot.com",
    messagingSenderId: "387748686853",
    appId: "1:387748686853:web:06f12072d418ff7437006c",
    measurementId: "G-CYVE34P9V4"
};


const firebaseApp = firebase.initializeApp(config);
firebase.analytics();


const fireAuth = firebaseApp.auth();
export {
    fireAuth,
    firebase
};