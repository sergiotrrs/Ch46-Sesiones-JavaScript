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

// Acceder a los elementos. =======================================
const nombres = ["Estefany", "América", "Karen", "Lorena"];

// Los arrays son zero index ( el primer elemento es índice cero ).
console.log( nombres[0] ); // "Estefany"
console.log( nombres[2] ); // "Karen"

// Modificar un elementos del arreglo.
console.log( nombres ); // "Estefany", "América", "Karen", "Lorena"
nombres[2] = "Andrea";
console.log( nombres ); // "Estefany", "América", "Andrea", "Lorena"

// el dato string es un dato inmutable;
let nombreMascota = "Steve";
console.log( nombreMascota[1] ); // t
console.log( nombreMascota ); // Steve
nombreMascota[1] = "x"; // NO se puede cambiar por que es un string es un dato inmutable
console.log( nombreMascota ); // Steve

// Obtener el número de elementos de un arreglo: propiedad length
console.log( nombres.length ); // 4
console.log( [1,2,3].length ); // 3
console.log( nombres.lenght ); // undefined

// El último elemento del arreglo se puede obtener con [ nameArray.length -1 ]
// Obtener el último elemento de la variable nombres: "Lorena"
console.log( nombres[nombres.length-1] ); // "Lorena"
const cohortes = ["Ch46", "Ch47", "Ch48"];
// Obtener el nombre de la última cohorte
console.log(cohortes[cohortes.length-1]); // Ch48
// Si tratamos de acceder a un elemento que no exista
// JS devuelve undefined
console.log( cohortes[10] ); // undefined

//================ Métodos comunes de los arreglos =================

/**
 *  Index Of
 * 
 *  Retorna el primer índice en el que se puede encontrar un elemento
 * en el arreglo.
 * 
 * Si el elemento buscado no se encuentra, retorna -1.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */

console.log( nombres ); // ['Estefany', 'América', 'Andrea', 'Lorena']
console.log( nombres.indexOf("Andrea") ); // 2
console.log( nombres.indexOf("Karina") ); // -1
// Agregar a Sara (Sara Abigail)
// nombres[4]= "Sara";
nombres[nombres.length] = "Sara"; 
console.log( nombres ); // ['Estefany', 'América', 'Andrea', 'Lorena', 'Sara']
// Agregar a "Sara" (Sara Vergara)
nombres[nombres.length] = "Sara";
console.log( nombres ); // ['Estefany', 'América', 'Andrea', 'Lorena', 'Sara', 'Sara']

console.log( nombres.indexOf("Sara") ); // 4
console.log( nombres.indexOf("Sara", 5) ); // 5

/**
 *  push()
 * 
 *  Añade elementos al final del arreglo
 *
 * */ 
const frutas = ["🍍", "🍎", "🍐"];
console.log( frutas );

// Agregamos cereza y durazno
frutas.push("🍒", "🍑");
console.log( frutas ); // ['🍍', '🍎', '🍐', '🍒', '🍑']

/**
 *  unshift()
 * 
 *  Añade elementos al inicio del arreglo
 */

// Agregar  sandía y fresa
frutas.unshift("🍉", "🍓");
console.log( frutas ); // ['🍉', '🍓', '🍍', '🍎', '🍐', '🍒', '🍑']

/**
 *  pop()
 * 
 *  Eliminar el último elemento del arreglo
 */
console.log( frutas.pop() ); // '🍑'
console.log( frutas ); // ['🍉', '🍓', '🍍', '🍎', '🍐', '🍒']

/**
 *  shift()
 * 
 *  Eliminar el primer elemento del arreglo
 * 
 */
console.log( frutas.shift() ); // '🍉'
console.log( frutas ); // ['🍓', '🍍', '🍎', '🍐', '🍒']

/**
 * splice()
 * 
 *  Elimina elementos de un arreglo.
 *  Retorna los elementos eliminados y modifica el arreglo original.
 *  Es posible añadir nuevos elementos en la posición que se ha eliminado.
 */

// Eliminar manzana y pera
console.log( frutas.splice(2, 2 )  ); // ['🍎', '🍐'];
console.log( frutas ); // ['🍓', '🍍', '🍒']

// Eliminar la piña y agregar kiwi y coco
console.log( frutas.splice(1, 1, "🥝", "🥥") ); // ['🍍']
console.log( frutas ); ['🍓', '🥝', '🥥', '🍒'];

// Agregar banana entre kiwi y coco
console.log( frutas.splice(2, 0, "🍌") ); // []
console.log( frutas ); // ['🍓', '🥝', '🍌', '🥥', '🍒']

/**
 * Ejercicio ir a martes de frutas y verduras
 * 
 * - Comenzar con cesta vacía
 * - Comprar coco '🥥'
 * - Comprar banana '🍌'
 * - Comprar piña ( ponerla entre el coco y banana) '🍍'
 * - Comprar fresa (al último, después de la banana) '🍓'
 * - Comprar sandía (poner al fondo, antes del coco) '🍉'
 */

