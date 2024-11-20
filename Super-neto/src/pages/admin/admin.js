import '/styles.scss'
import * as bootstrap from 'bootstrap'
import './admin.css'
import { navbarApp } from '../../components/navbar/navbar-app.js'
import { getUsers } from '../../components/api/getUsers.js';
import { domainName } from '../../components/api/domainName.js';

document.querySelector("#navbar-app").innerHTML= navbarApp();
const spinnerWrapper = document.querySelector(".spinner-wrapper");
const url = `${domainName()}/api/v2/users`;
const logout = document.querySelector("#logout");

logout.addEventListener( "click"  , ( event )=>{ 
    localStorage.removeItem("userSesion");

    window.location.href = '/index.html';
});


const loadUsers = async (url) => {
  const loader = document.getElementById("loader");
  try {
    loader.style.display = "flex";
    const products = await getUsers(url);
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

loadUsers(url);
