import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAXw4RvqK8Io3Tee2Hj1FvhkfDzgCa4dsA",
  authDomain: "prish123-c2198.firebaseapp.com",
  databaseURL: "https://prish123-c2198-default-rtdb.firebaseio.com",
  projectId: "prish123-c2198",
  storageBucket: "prish123-c2198.appspot.com",
  messagingSenderId: "505694531652",
  appId: "1:505694531652:web:7fcb8382c5f0b63e1ecc11",
  measurementId: "G-55T1S8NMS7",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
