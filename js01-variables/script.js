// ================ Reassigment and Redeclaration========
/*
 Declarar una variable significa que se reserva el nombre 
 en memoria en el scope actual. 
 
 Inicializar una variable es establecer el valor de la variable

*/
// Pueden ser reasignadas y redeclaradas dentro del 
// mismo contexto de función.
var userName = 10;
userName = 20; // Reasignación válida
var userName = 30; // Redeclaración válida en el mismo contexto de función

// Pueden ser reasignadas dentro del mismo bloque y no pueden 
// ser redeclaradas en el mismo ámbito.
let age = 10;
age = 20; // Reasignación válida
// let age = 30; // Error: No se puede redeclarar en el mismo ámbito

// No pueden ser reasignadas después de su inicialización y tampoco 
// pueden ser redeclaradas en el mismo ámbito.
const address = 10;
// address = 20; // Error: No se puede reasignar
// const address = 30; // Error: No se puede redeclarar


// ================ Function Scope ====================
/*
  Variables declaradas con var, let y const tienen un alcance de función. 
  Esto significa que están limitadas al contexto de la función 
  en la que se declaran.
*/
function functionScope(){
    var myVar = 10;
    let myLet = 20;
    const myConst = 30;

    console.log(myVar);
    console.log(myLet);
    console.log(myConst);
    
}
functionScope();

// console.log(myVar);
// console.log(myLet);
// console.log(myConst);

// ================ Block Scope ====================
/*
  Variables declaradas con let y const tienen un alcance de bloque. 
  Esto significa que están limitadas al bloque en el que se declaran.
*/
{
    var a = "a";
    let b = "b";
    const c = "c"; 

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
// console.log(b);
// console.log(c);

// ================ Hoisting =======================
/*
  El "hoisting" en JavaScript es un comportamiento que ocurre durante 
  la fase de compilación antes de la ejecución del código. 
  Se refiere a la elevación (movimiento) de las declaraciones 
  de variables y funciones al inicio de su contexto de ejecución

*/


/*
  Las variables declaradas con var son elevadas al inicio de su contexto 
  de ejecución (ya sea el ámbito de función o el ámbito global).
  
  Sin embargo, solo la declaración de la variable es elevada, 
  no la asignación. Esto significa que la variable existe, 
  pero su valor es undefined hasta que llega a la línea de asignación.
*/

console.log(phone); // undefined
var phone = "55-65-123-123";
console.log(phone); // 55-65-123-123

/*
  Las variables declaradas con let y const también se elevan al 
  inicio de su contexto, pero a diferencia de var, no se inicializan 
  automáticamente con undefined. La fase de inicialización de estas 
  variables no ocurre hasta llegar a la línea de código donde se declaran.

*/

// console.log(email); // ReferenceError: Cannot access 'email' before initialization
let email = 10;

// ================ Temporal Dead Zone ==================
/*
  La "Temporal Dead Zone" (TDZ) se refiere a un período en el cual una 
  variable no puede ser accesada (referenciada) antes de su declaración. 
  Este fenómeno ocurre con variables declaradas utilizando let y const, 
  pero no con var.

*/

/*
  Las variables declaradas con var son elevadas al inicio de su contexto 
  de ejecución, y durante esta fase de "hoisting", se les asigna 
  automáticamente el valor undefined.

  Esto significa que se puede acceder a la variable antes de su 
  declaración sin resultar en un error.
*/
console.log(occupation); // undefined
var occupation = "developer";
console.log(occupation); // "developer"


/*
Las variables declaradas con let y const también son elevadas, 
pero a diferencia de var, no se les asigna un valor automáticamente. 
En cambio, entran en la "Temporal Dead Zone" (zona muerta temporal).

Durante la TDZ, intentar acceder a la variable resultará en un error.

La TDZ es una característica que ayuda a detectar errores tempranos 
y promueve buenas prácticas de programación, ya que evita el acceso 
a variables antes de que se les haya dado un valor significativo.
*/

// console.log(eyeColor); // ReferenceError: Cannot access 'y' before initialization
let eyeColor = 10;

// ================ Global Object property (window) ==================
/*
  La diferencia en cómo las variables (var, let, const) interactúan 
  con el objeto global (window en navegadores o global en 
  entornos de Node.js) es notable y varía entre ellas.

  Las variables declaradas con var en el ámbito global se agregan 
  como propiedades al objeto global (window en navegadores).
  Esto significa que, si declaras una variable con var en el ámbito 
  global, esa variable se convierte en una propiedad del objeto global.

  Variables declaradas con let o const en el ámbito global no se añaden 
  como propiedades al objeto global.
  Esto es una mejora sobre var, ya que ayuda a prevenir la 
  contaminación del espacio global.
*/

var hairColor = "chocolate";
console.log(window.hairColor); // chocolate (en un navegador)

let height = 20;
console.log(window.height); // undefined (en un navegador)

console.log(this);