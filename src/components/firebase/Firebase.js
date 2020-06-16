import firebase from "firebase";
import "firebase/auth";
require('dotenv').config()



const config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};


const firebaseApp = firebase.initializeApp(config);
firebase.analytics();


const fireAuth = firebaseApp.auth();
export {
    fireAuth,
    firebase
};