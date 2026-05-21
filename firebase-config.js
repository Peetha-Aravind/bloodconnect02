import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut as fbSignOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, query, where, onSnapshot, addDoc, updateDoc, getDocs, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJOcJ1yRV-CVO92Okpvg8YXR3h6u6CN7Q",
  authDomain: "blood-connect-608b2.firebaseapp.com",
  projectId: "blood-connect-608b2",
  storageBucket: "blood-connect-608b2.firebasestorage.app",
  messagingSenderId: "60567900670",
  appId: "1:60567900670:web:e1ae781c4674c12e5e30af"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider, signInWithPopup, onAuthStateChanged, fbSignOut, doc, setDoc, getDoc, collection, query, where, onSnapshot, addDoc, updateDoc, getDocs, serverTimestamp };
