console.log("Sesión JS04 - Arreglos");

/**
 *  Los arreglos en JavaScript son una estructura de datos utilizada 
 * para almacenar múltiples valores en una sola variable. Cada valor 
 * dentro del arreglo se llama elemento y se accede a través de su 
 * índice (comenzando desde 0).
 */

// Crear un arreglo usando corchetes (brackets).
// recomendación: el nombre de las variables se usa en plural
let juguetes = [];
const autos = []; // empty array

console.log( typeof juguetes ); // object
console.log( typeof autos ); // object
console.log( typeof {name:"sergio", job: "instructor"} ); // object
console.log( Array.isArray( juguetes) ); // true
console.log( Array.isArray( autos) ); // true
console.log( Array.isArray( {name:"sergio", job: "instructor"} ) ); // false

juguetes = 30;
console.log( Array.isArray( juguetes) ); // false
console.log( typeof juguetes ); // number
// autos = 9; // Assignment to constant variable

// Otra forma de crear arreglos es usar el constructor de la clase Array
const apellidos = new Array(); // instanciar la clase Array

const numeros = [9]; // [9]
const numbers = new Array(9); // [ , , , , , , , , ]
console.log( numeros );
console.log( numbers );
