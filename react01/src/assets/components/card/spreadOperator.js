
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
