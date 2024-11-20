import "./styles.scss";
import * as bootstrap from "bootstrap";
import "./src/components/navbar/navbar-app";
import { navbarApp } from "./src/components/navbar/navbar-app.js";
import { domainName } from "./src/components/api/domainName.js";
import { getProducts } from "./src/components/api/getProducts.js";

document.querySelector("#navbar-app").innerHTML = navbarApp();
const spinnerWrapper = document.querySelector(".spinner-wrapper");

const url = `${domainName()}/api/v3/products`;

const loadProducts = async (url) => {
  const loader = document.getElementById("loader");
  try {
    loader.style.display = "flex";
    const products = await getProducts(url);
    document.querySelector("#list-container").innerHTML = products;
  } catch (error) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = error;
    errorMessage.style.display = "block";
    setTimeout(() => (errorMessage.style.display = "none"), 5000);
  } finally {
    spinnerWrapper.style.opacity = '0';
    loader.style.display = "none"; 
  }
};


loadProducts(url);
