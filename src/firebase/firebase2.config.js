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

const exists = getApps().find(app=>app.name ==="secondapp") //getApps is read only array of the intialize app and find the app named as secondapp


if(exists){
    secondapp=exists; // if it find already exists app name second appp then it reuse it rather then creating new one
}
else{
    secondapp=initializeApp(firebaseSecondConfig,"secondapp"); //oterwise it intialize the new app of secondapp  
}


const analytics = getAnalytics(secondapp);
const auth2=getAuth(secondapp);


export {auth2};