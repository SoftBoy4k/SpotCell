import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCuf_mYV1OHJOaUAW9dbFw4PWg9U3snWLQ",
  authDomain: "spotcell-75673.firebaseapp.com",
  projectId: "spotcell-75673",
  storageBucket: "spotcell-75673.appspot.com",
  messagingSenderId: "545719937628",
  appId: "1:545719937628:web:a27d611077f11aeb0b9499"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);