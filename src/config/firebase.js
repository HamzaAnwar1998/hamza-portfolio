/* eslint-disable no-unused-vars */
// import firebase/app
import 'firebase/app'

// we need to import and firebase/auth
import 'firebase/auth'

// import initializeApp to initialize app from firebase/app
import { initializeApp } from 'firebase/app';

// neccessary tools from firebase/auth
import { getAuth } from 'firebase/auth';

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyCwL4mYYGeuqjkYgktTr3fEp4MlUc7GTm4",
    authDomain: "hamza-portfolio-f30ba.firebaseapp.com",
    projectId: "hamza-portfolio-f30ba",
    storageBucket: "hamza-portfolio-f30ba.appspot.com",
    messagingSenderId: "526692752996",
    appId: "1:526692752996:web:f17741db0f840ad5ee4971",
    measurementId: "G-TWBJEEF714"
});

const auth = getAuth(firebaseConfig);

export default auth;