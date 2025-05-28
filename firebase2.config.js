import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getApps } from "firebase/app";

const firebaseSecondConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_SECOND_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_SECOND_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_SECOND_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_SECOND_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_SECOND_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_SECOND_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_SECOND_MEASUREMENT_ID,
};

let secondapp;
const exist = getApps().find(app=>app.name==="secondapp"); //getapp helps to get app and find the app named second

if(exist){
    secondapp=exist; // it exists then secondapp become existing config
}
else{
    secondapp=initializeApp(firebaseSecondConfig,"secondapp") //ifnot then it intailize app
}




const analytics = getAnalytics(secondapp);
const auth2=getAuth(secondapp);


export {auth2};