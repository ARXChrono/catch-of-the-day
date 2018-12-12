import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAqCbHvn9s9nK26ORajdUjGPVnJqqJTQ2k",
    authDomain: "catch-of-the-day-b0239.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-b0239.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
