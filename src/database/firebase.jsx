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
  apiKey: "AIzaSyDLQohlTBnoBiQhOqx7aQyyAUFeLUN9Q-U",
  authDomain: "hero-fb2ea.firebaseapp.com",
  databaseURL: "https://hero-fb2ea-default-rtdb.firebaseio.com",
  projectId: "hero-fb2ea",
  storageBucket: "hero-fb2ea.appspot.com",
  messagingSenderId: "242411924125",
  appId: "1:242411924125:web:e97cc8dcfa25db72c70274",
  measurementId: "G-LL6E5CW539",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(firebaseApp);
const storage = getStorage(app);
const database = getDatabase(app);

export { storage, app as default, database };
