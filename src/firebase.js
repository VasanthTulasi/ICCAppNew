import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBiQx6Q38-RE9Ck3JWPkzY7DpwY5nkOI9M",
    authDomain: "whiteboardapp-iccg20.firebaseapp.com",
    projectId: "whiteboardapp-iccg20",
    storageBucket: "whiteboardapp-iccg20.appspot.com",
    messagingSenderId: "924611775786",
    appId: "1:924611775786:web:ec5a71142aec01128b2253",
    measurementId: "G-01WTD7CE0H"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;