console.log("Sesión JS05 - Operadores");

// Tipos de operadores
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators
const categorias = [
  "Aritméticos", 
  "Asignación", 
  "Comparación", 
  "Lógicos",
  "Incremento y decremento",
  "Ternarios"
];
console.table( categorias );


const listItems = categorias.map( (categoria)=> `<li> ${categoria} </li>` );
console.table( listItems );

const refCategorias = document.getElementById("categorias");
console.log(refCategorias.innerHTML);

const stringListItems = listItems.join("");
console.log( stringListItems );

refCategorias.innerHTML = stringListItems;
