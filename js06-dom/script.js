console.log("Sesión JS06 - DOM");

/**
  Cambiar el contenido de un elemento HTML por medio de su ID
  
  Las principales diferencias entre innerHTML y textContent son:

  Contenido interpretado:
     innerHTML: Inserta y retorna el contenido HTML, interpretando 
      las etiquetas y creando elementos.
     textContent: Inserta y retorna solo el texto, sin interpretar 
      ni procesar etiquetas HTML.       
   
  Seguridad:
     innerHTML: Es vulnerable a ataques XSS si no se valida 
      adecuadamente el contenido.
     textContent: Es más seguro, ya que trata todo el contenido 
      como texto, sin ejecutar código HTML o scripts.

  Rendimiento:
    innerHTML: Puede ser más lento si el contenido HTML tiene que ser reanalizado o renderizado.
    textContent: Es más rápido ya que solo maneja texto plano.
 */
const changeElementById = (idName, newMessage) => {
  const refElement = document.getElementById(idName);
  // const refElement = document.getElementById("title");
  console.log(refElement);

  //refElement.textContent = newMessage;
  refElement.innerHTML  = newMessage;

};

changeElementById("title", "Es tan fetch la sesión");

// Ejercicio: Modifica el texto del h2 a "Get in loser we're going shopping!"
changeElementById("subtitle", "Get in loser we're going <em>shopping!</em>" );


/**
 * Modificar elementos por su tag(etiqueta HTML)
 */
const changeElementsByTagName = () =>{
  // Obteniendo la referencia de los <li></li>
  const listItems = document.getElementsByTagName("li");
  console.log( listItems );

  for (let index = 0; index < listItems.length; index++) {    
    listItems[index].textContent = `Soy el índice ${index} `;
  }

}

changeElementsByTagName();