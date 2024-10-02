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
 * - imprimir el resultado ['🍉', '🥥', '🍍', '🍌', '🍓' ]
 */
const fruits = [];
fruits.push("🥥");
fruits.push("🍌");
fruits.splice(1, 0, "🍍");
fruits.push("🍓");
fruits.unshift("🍉");
console.log(fruits); // ['🍉', '🥥', '🍍', '🍌', '🍓' ]

/**
 *  PEPS: Primeras entradas, primeras salidas 
 *  FIFO: First in, First out
 *  QUEUE: colas
 * 
 *  Usos:
 *   - Colas de impresión, se imprimen los trabajor en el orden que fueron recibidos
 *   - Buffer de datos: transmisión de audio y video
 *   - Manejo de solicitudes en servidores
 * 
 */
const queue = [];
queue.push("Elemento 1");
queue.push("Elemento 2");
queue.shift(); // "Elemento 1"

/**
 *  UEPS: Últimas entradas, primeras salidas
 *  LIFO: Last in, First Out
 *  Stack: pila
 * 
 *  Usos:
 *    - Llamadas a funciones recursivas (pila de ejecusión)
 *    - Deshacer/rehacer acciones en aplicaciones
 */
const stack = [];
stack.push("Plato 1");
stack.push("Plato 2");
stack.push("Plato 3");
stack.pop(); // Plato 3

// ==========================================================
/**
 * El pase de datos de los objetos es por referencia
 * 
 * El pase de datos por referencia significa que, en lugar de pasar 
 * una copia del valor a una función o variable, se pasa una 
 * referencia a la ubicación en memoria de los datos originales. 
 * Esto implica que cualquier cambio realizado a los datos 
 * dentro de la función afectará directamente al valor original.
 * 
 * */

const colores = ["Amarillo", "Verde", "Azul"];
const tema = colores; // Se pasa la referencia del arreglo en colores a tema
// Cualquier modificación en tema, ocurrirá en colores.

function agregarColor( array ){
  array.push("Magenta");
}

agregarColor( tema );

console.log( colores );
console.log( tema );

// Para copiay y clolar un arreglo a un nuevo arreglo se uesa slice()
const coloresPreferidos = colores.slice();
coloresPreferidos.pop();
coloresPreferidos.pop();
coloresPreferidos.pop();
console.log( coloresPreferidos ); // ['Amarillo']
console.log( colores ); // ['Amarillo', 'Verde', 'Azul', 'Magenta']

//***********************************************************
// Iterar arreglos.

const names = ["Sari", "Estefany", "Circe", "Ranfi"];

// for (let index = 0; index < 4  ; index++ ) console.log( names[index] );

/*for (let index = 0; index <= names.length-1  ; index++ ) { 
  console.log( names[index] );
}*/


for (let index = 0; index < names.length  ; index++ ) { // bloque de código
  console.log( names[index] );
}

// while( condición ) instrucción;
/*
let counter  = 0;
while(  confirm("Deseas continuar?")  ){
 counter ++;
 console.log("Números de veces que has confirmado:" + counter);
}
console.log("Se ha terminado el ciclo while");
*/

const animales = ["León", "Cerdito", "Cabra", "Pony Salvaje"];

// Imprimir en la consola el siguiente mensaje
// "Hola amiguito <Nombre de animal>"
// Realiza la iteración usando un ciclo for
for (let index = 0; index < animales.length; index++) {
  const element = animales[index];
  console.log("Hola Amiguito " + element); 
}

let indice = 0;
while( indice < animales.length ){
  const element = animales[indice];
  console.log("Hola amiguis " + element); 
  indice++;
}

// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/

for (const animal of animales ){
  console.log("Hola animalito " + animal);
}

// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.

for (const animal of animales ){
  if( animal === "Cerdito") break;
  console.log("Hola  " + animal);
  console.log("Holi  " + animal);
}

// ---------------- forEach -------------------------
/*
 Método que se utiliza para iterar colecciones, arreglos.
 Permite ejecutar una función de callback por cada elemento del arreglo.

*/


const imprimirDato = (element, index, array ) => console.log(element, index, array);

const saboresHelados = ["Cereza", "Choco chips", "Oreo", "Leche Quemada", "Napolitano"];

// saboresHelados.forEach( imprimirDato );
saboresHelados.forEach( ( helado )=> console.warn("Helado: " + helado) );

/*
 Método map()
 Permite transformar cada elemento de un array y devolver un nuevo array 
 con los resultados. No modifica el array original.

*/

const categorias = ["Skincare", "Sueros", "Maquillaje", "Cremas", "Shampoo"];
console.table( categorias );
/*
const listItems = categorias.map( (categoria)=> {
  return `<li> ${categoria} </li>`
}    );
    */

const listItems = categorias.map( (categoria)=> `<li> ${categoria} </li>` );
console.table( listItems );

const refCategorias = document.getElementById("categorias");
console.log(refCategorias.innerHTML);

const stringListItems = listItems.join("");
console.log( stringListItems );

refCategorias.innerHTML = stringListItems;

/*
  [1 , 2 , 3 , 60 ] convertir a string -> 1,2,3,60
*/

/*
 Realizar un arreglo de productos, que tenga 5 productos para Geckos.

 Mostrar en la interfaz de usuario los productos.
 - Se puede mostrar como una <ul>
 * Forma difícil, pro-max, nivel super Sayajin fase 3: mostrar como cards
*/

const productosGecko = ["Sustrato", "Calcio con vitaminas", "Gusanos", "Agua", "Placa térmica", "Volcán"];
console.table(productosGecko);

// const listProductosGecko = productosGecko.map((producto) => `<li>${producto}</li>`);
const listProductosGecko = productosGecko.map((producto) => `
  <div class="col-6 col-md-4 mt-4">
    <div class="card" >
      <div class="card-body">
        <h5 class="card-title">${producto}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>

`);


console.table(listProductosGecko);

const refProductosGecko = document.getElementById("productos");

const stringProductosGecko = listProductosGecko.join(" ");
console.log(stringProductosGecko);

refProductosGecko.innerHTML = stringProductosGecko;