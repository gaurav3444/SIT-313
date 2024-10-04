import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyxszuKTdw9qFhwA9ujcMJaFXkUF3mgm0",
  authDomain: "task7p-1080b.firebaseapp.com",
  projectId: "task7p-1080b",
  storageBucket: "task7p-1080b.appspot.com",
  messagingSenderId: "451623753591",
  appId: "1:451623753591:web:f38aed39156d2b4f4af372",
  measurementId: "G-88HJGLPVD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);