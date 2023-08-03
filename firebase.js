import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCEgknxseGlQej5ks2YcIU3g5rD2K_V1uY",
    authDomain: "food-application-1e748.firebaseapp.com",
    projectId: "food-application-1e748",
    storageBucket: "food-application-1e748.appspot.com",
    messagingSenderId: "601391613349",
    appId: "1:601391613349:web:5d66e677b1627e332bd44c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {
    db,
    auth,
}

