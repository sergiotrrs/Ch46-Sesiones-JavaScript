import "/styles.scss";
import * as bootstrap from "bootstrap";
import "./login.css";
import { navbarApp } from "../../components/navbar/navbar-app.js";
import { validateLoginForm } from "../../components/validateInputsForm/validateLoginForm.js";
import { postLogin } from "../../components/api/postLogin.js";

document.querySelector("#navbar-app").innerHTML = navbarApp();

const loginForm = document.forms["loginForm"];

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const emailRef = loginForm.elements["email"];
  const passwordRef = loginForm.elements["password"];
  emailRef.value = emailRef.value.trim().toLowerCase();

  const formData = {
    email: emailRef.value,
    password: passwordRef.value,
  };

  const results = validateLoginForm(formData);
  if (results.isValid) {
    try {
      const user = await postLogin(formData);
      const userSesion = {
        user,
        isAdmin: user.roles.some((role) => role.name === "ADMIN"),
        expiration: 0,
      };
      localStorage.setItem("userSesion", JSON.stringify(userSesion));
      loginForm.reset();
      alert("Hola " + user.firstName);
      if (userSesion.isAdmin)
        window.location.href = "/src/pages/admin/admin.html";
      else
        window.location.href = "/index.html";
    } catch (error) {
      const errorMessage = document.getElementById("post-error-message");
      errorMessage.innerHTML = error;
      errorMessage.style.display = "block";
      setTimeout(() => (errorMessage.style.display = "none"), 5000);
    }
  } else {
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = results.error;
    errorMessage.style.display = "block";
    setTimeout(() => (errorMessage.style.display = "none"), 5000);
  }
});
