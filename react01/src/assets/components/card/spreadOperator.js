
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
