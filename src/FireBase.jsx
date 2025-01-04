// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9vOLt_94ssALFwe4IW6KQOnR-MIv_iLQ",
  authDomain: "severyanochka-b257e.firebaseapp.com",
  projectId: "severyanochka-b257e",
  storageBucket: "severyanochka-b257e.firebasestorage.app",
  messagingSenderId: "790063594816",
  appId: "1:790063594816:web:80a8bd18f567a219830ea5",
  measurementId: "G-RBD6357CM5",
};
let app;

// Initialize Firebase
const Firebase = () => {
  if (!app) {
    app = initializeApp(firebaseConfig);
  }
  return app
};

// const analytics = getAnalytics(app);
export default Firebase;
