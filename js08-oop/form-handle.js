import {saludo} from "./src/components/saludo.js"
import { isValid } from "./src/components/userValidations.js";
import { postUser } from "./src/components/postUser.js";
import { mostrarEnConsolaASteve } from "./src/components/objetos.js";
import { jugarConMascotas } from "./src/components/mascotasCh46.js";


const register = document.forms["register-form"];

// mostrarEnConsolaASteve();
jugarConMascotas();

register.addEventListener( "submit" , ( event )=> {
    event.preventDefault();
    console.log( event ); 
    console.log("Atendiendo al formulario");

    const newUser = {
        firstName: register.elements["firstName"].value,
        lastName: register.elements["lastName"].value,
        email: register.elements["email"].value,
        password: register.elements["password"].value,
        checkbox: register.elements["gridCheck"].checked
    }

    console.table( newUser );

    if( isValid(newUser) === true ){
        postUser( newUser); // enviar datos al servidor
    } 

} );


console.log(  saludo("Burrito") );