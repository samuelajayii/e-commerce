// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBVpqM3aD-0TUEu5ki11heaFWBHatZiGeo",
  authDomain: "login-auth-4d3b8.firebaseapp.com",
  projectId: "login-auth-4d3b8",
  storageBucket: "login-auth-4d3b8.appspot.com",
  messagingSenderId: "162964223394",
  appId: "1:162964223394:web:cfb353c3a9ffab21cf2efb"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore()
export default app