import "/styles.scss";
import * as bootstrap from "bootstrap";
import "./register.css";
import { navbarApp } from "../../components/navbar/navbar-app.js";
import { validateInputsForm } from "../../components/validateInputsForm/validateInputsForm.js";
import { postRegisterForm } from "../../components/api/postUser.js";

document.getElementById("navbar-app").innerHTML = navbarApp();

const contactForm = document.forms["contactForm"];

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const emailRef = contactForm.elements["email"];
  const firstNameRef = contactForm.elements["firstName"];
  const lastNameRef = contactForm.elements["lastName"];
  const passwordRef = contactForm.elements["password"];
  const birthdateRef = contactForm.elements["birthdate"];

  const termsAndCondictionsRef = contactForm.elements["terminos-condiciones"];

  emailRef.value = emailRef.value.trim().toLowerCase();
  firstNameRef.value = firstNameRef.value.trim();
  lastNameRef.value = lastNameRef.value.trim();

  const formData = {
    firstName: firstNameRef.value,
    lastName: lastNameRef.value,
    email: emailRef.value,
    password: passwordRef.value,
    birthdate: birthdateRef.value,
    avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
    termsAndConditions: termsAndCondictionsRef.checked,
  };

  console.table(formData);

  const results = validateInputsForm(formData);
  if (results.isValid) {
    try {
      await postRegisterForm(formData);
      alert("Gracias por registrarte");
      contactForm.reset();
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
