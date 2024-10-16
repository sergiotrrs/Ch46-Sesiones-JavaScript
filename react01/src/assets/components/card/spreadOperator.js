
/*
 El operador Spread permite esparcir elementos de arrays y objetos.
 Es muy útil para combinar, copiar, distribuir elementos de forma
 sencilla.

*/

const numeros = [1,2,3,4];
// agregar 'numeros y agregar los números 5 y 6
// const nuevosNumeros = [ numeros, 5, 6];    // [ [ 1, 2, 3, 4 ], 5, 6 ]
const nuevosNumeros = [ ...numeros, 5, 6 ]; // [ 1, 2, 3, 4 , 5, 6 ]

console.log( nuevosNumeros );

// ====================================================
const numsA = [10,11,12];
const numsB = [12,13,14];
// Obtener un arrays con los elementos de numsA y numsB
// const nums = numsA.concat( numsB );
const nums = [ ...numsA, ...numsB] ;
console.log( nums ); 

// ===================================================
// Obtener el valor Máximo del número del sig. array
// edades = [ 13, 56, 8, 23, 33];
const edades = [ 13, 12,  56, 8, 23, 33];

/*
// Ordenar de mayor a menos
console.log("desordenado", edades );
edades.sort((a,b)=>  a - b );
console.log("ordenado", edades );

// Seleccionar el último valor
console.log("edad mayor:" , edades.pop() ) // 56
*/
console.log("Math.max",  Math.max( 3,6,88,12) );
console.log("Mayor edad",  Math.max( ...edades  ) );

// Uso de spred con objetos
const persona = { name: "Liz", age: 22 };
// const liz = { persona, city: "CDmx"  }; // { persona: { name: 'Liz', age: 22 }, city: 'CDmx' }
// console.log("nombre: ",  liz.persona.name ); // Liz
const liz = { ...persona, city: "CDmx"  }; //{  name: 'Liz', age: 22 , city: 'CDmx' }
console.log("nombre: ", liz.name );

const lizbeth = { ...persona, name: "Lizbeth Diaz" };
console.log( lizbeth ); // { name: 'Lizbeth Diaz', age: 22 }
console.log("nombre: ", lizbeth.name ); // "Lizbeth Diaz"

// Ejercicio
const producto = { id: 1, nombre: "Camiseta", precio: 20, cantidad: 2 };
// Actualizar el valor de cantidad con el valor de la sig. variable
const nuevaCantidad = 100;

/*
producto["cantidad"] = nuevaCantidad;
const temu = producto;
console.log( temu );
*/
const temu = {...producto, cantidad: nuevaCantidad};
console.log( temu );
console.log( producto );


