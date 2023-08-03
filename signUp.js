import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { db, auth } from "./firebase.js";

const signUpBtn = document.querySelector("#signupBtn");
signUpBtn.addEventListener("click", signUp);

async function signUp(e) {
    // e.preventDefault();
    try {
        const fullName = document.getElementById("fullName").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const userType = document.getElementById("userType");

        if (!fullName || !phoneNumber || !email || !password) {
            alert("Please enter all required fields.");
            return;
        }

        if (userType.selectedIndex === 0) {
            alert("Please select a user type.");
            return;
        }

        const userAuth = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userAuth.user.uid, "sign up successfully");

        const uid = userAuth.user.uid;
        const userObj = {
            fullName,
            phoneNumber,
            email,
            accountActivate: true,
            uid,
            type: userType.value
        };

        const userRef = doc(db, "users", uid);
        console.log(userRef, "error aya hai yahan")
    const userDB = await setDoc(userRef, userObj);
        console.log(setDoc.message, "setdoc mein aya hai error")
        window.location.assign("/");
    } catch (error) {
        console.log("error", error.message);
        alert(error.message);
    }
}
