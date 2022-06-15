import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7AWf_AISZlqSEXc-ZAfRglxqd1M7GT5A",
  authDomain: "authproject-311ef.firebaseapp.com",
  projectId: "authproject-311ef",
  storageBucket: "authproject-311ef.appspot.com",
  messagingSenderId: "211275355167",
  appId: "1:211275355167:web:ebe4f2150643db7b33b12a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
