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

const listItems = categorias.map( (categoria)=> `<li> ${categoria} </li>` );
const refCategorias = document.getElementById("categorias");
const stringListItems = listItems.join("");
refCategorias.innerHTML = stringListItems;

//===============================================
// ---------------- Opéradores aritméticos ----------------
/* 
   adición +
   multiplicación *
   substracción -
   división /
   resto %
   exponencial **  - Math.pow(2, 3)   2**3
*/
// Se realiza una conversión implícita
console.log("3" *  "3"); // 9
console.log("5" - 4 ); // 1
console.log("10" / 2 ); // 5
console.log( "20" % 4 ); // 0
// Saber si 3 números terminan con el mis dígito
// Ejemplo 1098, 78,  8  -> true
//           77,  6, 23  -> false

const verificarUltimoDigitoUsandoString = (numA, numB, numC) =>{
  const strNumA = String( numA );
  const strNumB = String( numB );
  const strNumC = String( numC );

  const lastDigitNumA = strNumA[ strNumA.length - 1 ];
  const lastDigitNumB = strNumB[ strNumB.length - 1 ];
  const lastDigitNumC = strNumC[ strNumC.length - 1 ];

  const result =  lastDigitNumA === lastDigitNumB && lastDigitNumA === lastDigitNumC;
  return result;
}

const verificarUltimoDigitoUsandoResiduo = (numA, numB, numC) =>{
  const lastDigitNumA = numA % 10; 
  const lastDigitNumB = numB % 10; 
  const lastDigitNumC = numC % 10; 
  
  const result = lastDigitNumA === lastDigitNumB && lastDigitNumA === lastDigitNumC;
  return result;
}


console.log(verificarUltimoDigitoUsandoString( 1098, 78, 8 ) ); // true
console.log(verificarUltimoDigitoUsandoString( 77, 6, 23 ) ); // false

console.log(verificarUltimoDigitoUsandoResiduo( 1098, 78, 8 ) ); // true
console.log(verificarUltimoDigitoUsandoResiduo( 77, 6, 23 ) ); // false




// Uso de rest parameters ( ...restParameters )
const verificarUltimoDigitoDeVariosNumeros = ( name, ...numeros  ) =>{
  console.log( name, numeros );

}
console.log( verificarUltimoDigitoDeVariosNumeros("Eli", 2, 22 ) ); // true
console.log( verificarUltimoDigitoDeVariosNumeros("Eli", 2, 22, 52 ) ); // true
console.log( verificarUltimoDigitoDeVariosNumeros("Eli", 2, 22, 52, 44 ) ); // false