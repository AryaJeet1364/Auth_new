
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAkpJ2G7LFO2qBl1d0CJ8lK3gDK8O3yeQw",
  authDomain: "authbasics-62714.firebaseapp.com",
  projectId: "authbasics-62714",
  storageBucket: "authbasics-62714.appspot.com",
  messagingSenderId: "355673396507",
  appId: "1:355673396507:web:2faa42828ead103697efbe",
  measurementId: "G-3XT5X8RFLG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;