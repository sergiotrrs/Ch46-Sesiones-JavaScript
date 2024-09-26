console.log("Sesión JS 02 - funciones");


/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions

Función: Conjunto de instrucciones que realiza una tarea o calcula un valor.
  Código que se puede reutilizar.


  ----------- Funciones declaradas --------------
    (function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
    function nombreFuncionCamelCase ( parámetros ){
        //cuerpo de la función
        instrucciones;
    }

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/

console.log( greeting()   );

function greeting(){
    return "Hola Ch46";
}

/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/
// console.log( sum(2,5) ); // Uncaught ReferenceError: Cannot access 'sum' before initialization

const sum = function sumatoria( a, b) {
    return a + b;
}

console.log( sum(2,5) ); // 7
console.log( typeof sum ); // function

/*
  Ejercicio 1
  - Realizar función declarada que realice la resta de dos números
  - Realizar función expresa que realice la división de dos números
  - Imprimir en consola el retorno de las dos funciones.
*/
