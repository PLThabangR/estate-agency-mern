// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyBjjw0-TAiQA400FKGNOF8bXlMYTyEXvuI", 
  authDomain: "mern-estate-24c78.firebaseapp.com",
  projectId: "mern-estate-24c78",
  storageBucket: "mern-estate-24c78.appspot.com",
  messagingSenderId: "533480509616",
  appId: "1:533480509616:web:0a0239d995107d41836b75",
  measurementId: "G-3VQNR9YH55"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);