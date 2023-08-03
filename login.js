import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.1 .0/firebase-firestore.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth, db } from "./firebase.js";

const loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", login);

async function login(e) {
    e.preventDefault(); 
    try {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        console.log(email, password);

        loginBtn.className = "btn btn-info";
        loginBtn.innerHTML = `<div class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>`;

        const userLogin = await signInWithEmailAndPassword(auth, email, password);
        console.log(userLogin);

        const userRef = doc(db, "users", userLogin.user.uid);
        const docSnap = await getDoc(userRef);

        if (!docSnap.exists()) {
            console.log("No such document!");
            alert("Invalid user");
            return;
        }

        console.log("Document data:", docSnap.data());
        const userData = docSnap.data();
        localStorage.setItem("user", JSON.stringify(userData));

        if (userData.type === "admin") {
            window.location.replace("/dashboard-admin.html");
        } else if (userData.type === "Vendor") {
            window.location.replace("/dashboard-vendor.html");
        } else if (userData.type === "Customer") {
            window.location.replace("/dashboard-customer.html");
        }
    } catch (error) {
        console.log("error", error.message);
        loginBtn.className = "btn btn-danger";
        loginBtn.innerHTML = `Login`;
        alert(error.message);
    }
}
