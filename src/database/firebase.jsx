import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";
import { getDatabase, ref, onValue } from "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyDLQohlTBnoBiQhOqx7aQyyAUFeLUN9Q-U",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "hero-fb2ea.firebaseapp.com",
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL || "https://hero-fb2ea-default-rtdb.firebaseio.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "hero-fb2ea",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "hero-fb2ea.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "242411924125",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:242411924125:web:e97cc8dcfa25db72c70274",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-LL6E5CW539",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(firebaseApp);
const storage = getStorage(app);
const database = getDatabase(app);

export { storage, app as default, database };
