// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHh-maMhdNDopTrBfb3OpR_d3zi-7OkYk",
  authDomain: "poems-website-8adc4.firebaseapp.com",
  projectId: "poems-website-8adc4",
  storageBucket: "poems-website-8adc4.appspot.com",
  messagingSenderId: "108481026081",
  appId: "1:108481026081:web:2616bd506a28b707026b60",
  measurementId: "G-Z13PM15SGW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const initFirebase = () => {
    return app;
};

export const auth = getAuth(app);

export const initAuth = () => {
    return auth;
}