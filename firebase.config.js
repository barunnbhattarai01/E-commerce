import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAOqXkhXggrK2OWsXnLT3BvNm5T5GAx9K4",
  authDomain: "ecommrece-34edd.firebaseapp.com",
  projectId: "ecommrece-34edd",
  storageBucket: "ecommrece-34edd.firebasestorage.app",
  messagingSenderId: "560230431669",
  appId: "1:560230431669:web:142ba7a7abd63d6af3f7fc",
  measurementId: "G-G82RC4FPC1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app);

export {auth}