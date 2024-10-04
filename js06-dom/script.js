console.log("Sesión JS06 - DOM");

/**
 *  Cambiar el contenido de un elemento HTML por medio de su ID
 */
const changeElementById = (idName, newMessage) => {
  const refElement = document.getElementById(idName);
  // const refElement = document.getElementById("title");
  console.log(refElement);

  // refElement.textContent = 
  refElement.innerHTML  = newMessage;

};

changeElementById("title", "Es tan fetch la sesión");

// Ejercicio: Modifica el texto del h2 a "Get in loser we're going shopping!"

