
// Obtener la referencia del formulario
// const register = document.getElementById("register-form");
// const register = document.querySelector("form");
// const register = document.querySelector("#register-form");
const register = document.forms["register-form"];

/**
 *  AddEventListener permite agregar funciones que se ejecutarán
 *  en respuesta a un evento específico que ocurre aun elemento del DOM.
 * 
 *  register.addEventListener( type  , fncCallback );
 * 
 *  addEvenListener podemos manejar interacciones del usuario como clics,
 * cambios de teclado, movimientos del mouse, entre otros.
 */

// register.addEventListener( "submit" , ()=> {} );
register.addEventListener( "submit" , ( event )=> {
    event.preventDefault();
    console.log( event ); 
    console.log("Atendiendo al formulario");

    // Leer los inputs del formulario
    const newUser = {
        firstName: register.elements["firstName"].value,
        lastName: register.elements["lastName"].value,
        email: register.elements["email"].value,
        password: register.elements["password"].value,
        checkbox: register.elements["gridCheck"].checked
    }

    console.table( newUser );

} );