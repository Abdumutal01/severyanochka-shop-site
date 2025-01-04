
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
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
