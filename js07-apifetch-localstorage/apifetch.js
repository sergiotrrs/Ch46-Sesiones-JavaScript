console.log("JS07- API FETCH");

/*
 Las promesa es un patrón asincrónico que se utiliza
 para manejar operaciones asíncronas.

 Las promesas permite realizar tareas asíncronas y
 manejar los resultados (éxito o error) en un momento posterior.

 Las promesas tiene 3 estados:

 1.- Pending: El estado inicial de una promesa antes de que se resuelva o rechace
 2.- Resolved: La promesa se resuelve con un valor
 3.- Rejected: La promesa se rechaza con un razón

Resolve y reject son funciones de callback.
Para crear una promesa se usa el constructor de la clase Promise. 

Para manejar una promesa se usa los métodos:
 1.- then() : Se ejecuta cuando la promesa se resuelve correctamente.
 2.- catch() :  Se ejecuta cuando la promesa es rechazada (error).
 3.- finally() : Se ejecuta al finalizar, independientemente del resultado.

 Las promesas se utilizan mucho en operaciones como solicitudes HTTP con fetch, 
 donde no se sabe cuándo se recibirán los datos del servidor.

 La API Fetch nos ayuda a acceder y manipular 
 peticiones HTTP ( GET, POST, PUT, DELETE).
 
 Sintaxis:
    fetch(resource, options)

*/

const datosDelProducto = () =>{
    const url = "./assets/json/lego-chef.json";

    const callbackParaThen = ( valorDeResolved ) => {
        console.log( valorDeResolved );
        // Devuelve una promesa, convertir de json a object
        valorDeResolved.json()
            .then( producto => console.log(producto)  )
            .catch( error => console.log(error) )
    }

    const callbackParaError = ( valorDeRejected) => {
        console.log( valorDeRejected)
    }

    const callbackParaFinally = ( ) => {
        console.log( "He terminado de manejar la api Fetch")
    }

    // fetch( url ).then().catch().finally();
    fetch( url )
        .then( callbackParaThen )
              
        .catch( callbackParaError )
        .finally( callbackParaFinally );
}

// datosDelProducto();

const datosDelProductoRefactorizado = ( url ) =>{
    fetch( url )
     .then(  (resolve)=> resolve.json()  )
     .then(  (objProduct) => console.table( objProduct.data ) )
     .catch( (error) => console.error(error))
     .finally( ()=> console.log("He terminado") )

}

// datosDelProductoRefactorizado("./assets/json/lego-chef.json");
// datosDelProductoRefactorizado("./assets/json/productos.json");
// datosDelProductoRefactorizado("https://rickandmortyapi.com/api/character"); //  id 1-20 Acceder al array en .results
// datosDelProductoRefactorizado("https://rickandmortyapi.com/api/character?page=2"); // id 21-40
datosDelProductoRefactorizado("https://reqres.in/api/users?page=2"); // accdeder al array en .data



//---------------- manejar las promesas con async y await-------------
/*
 Async y Await facilita la escritura y lectura de código asíncrono.
 Permite escribir código asíncrono de manera similar a cómo se escribiría
 código síncrono.

 async:
 La palabra clave async se utiliza para declarar una función asíncrona. 
 Esto significa que esta función siempre retornará una promesa, 
 y podemos usar await dentro de ella.

 await:
 La palabra clave await detiene la ejecución de la función asíncrona 
 hasta que una promesa sea resuelta o rechazada. Solo puede ser 
 utilizada dentro de funciones declaradas con async.

*/
const datosDelProductoUsandoAsyncYAwait = async ( url ) =>{
   const resolve = await fetch(url);
   const products = await resolve.json();
   console.table( products.data );
   console.log("He terminado con async y await");
}

datosDelProductoUsandoAsyncYAwait("https://reqres.in/api/users?page=2");

/*
    En JavaScript, try y catch son bloques utilizados para 
    manejar errores. Permiten controlar el flujo de ejecución 
    del código cuando ocurren excepciones, lo que ayuda a evitar 
    que los errores detengan abruptamente el programa.

    sintaxis:
       try{

       } catch( exception) {

       }
  */
const datosDelProductoUsandoAsyncYAwaitYTryCatch = async (url) => {
  try {
    const resolve = await fetch(url);
    const products = await resolve.json();
    console.table(products.data);
  } catch (exception) {
    console.error("Ocurrió un problema", exception);
  }
  console.log("He terminado con async y await");
};

/*
datosDelProductoUsandoAsyncYAwaitYTryCatch(
  "https://gggggg.in/api/users?page=2"
);*/


const mostrarProductos = ( products ) => {
    console.table(products);
}

const mostrarCardId2 = ( cards ) => {
    console.table( cards[1].products);
}

const solicitudHttp = async (url, fncManejoDatos ) => {
    try {
      const resolve = await fetch(url);
      const info = await resolve.json();
      fncManejoDatos( info );
    } catch (exception) {
      console.error("Ocurrió un problema", exception);
    }
    console.log("He terminado con async y await");
  };

/*
Ejercicio:
Dada la siguiente URL: https://fakestoreapi.com/products
Mostrar en la consola con console.table la lista de productos.
*/
solicitudHttp( "https://fakestoreapi.com/products" , mostrarProductos);

/*
Ejercicio Opcional:
Dada la siguiente URL:https://fakestoreapi.com/carts
Mostrar en la consola con console.table la lista de productos del índice id:2
*/
solicitudHttp( "https://fakestoreapi.com/carts" , mostrarCardId2);

/*
JSON (JavaScript Object Notation) es un formato de texto ligero para el intercambio de datos. 
Algunas de sus características incluyen:

-Es un formato de texto plano y fácil de leer.
-Utiliza una estructura de pares clave-valor para representar datos.
-Utiliza comillas dobles para encerrar las claves y los valores.
-Utiliza comas para separar los pares clave-valor.
-Utiliza corchetes para representar arreglos.
-Utiliza llaves para representar objetos.
-Utiliza valores booleanos, números, cadenas, arreglos y objetos 
para representar datos.
-Es independiente del lenguaje, ya que se puede utilizar en 
una variedad de lenguajes de programación.
-Es ampliamente utilizado en aplicaciones web y móviles para transmitir 
y recibir datos de un servidor.
-Es un estándar abierto y no tiene restricciones de uso ni de licencia.


Es importante mencionar que JSON es un subconjunto de JavaScript y por lo tanto, 
es una forma de representar objetos y arreglos en JavaScript, 
pero no es lo mismo que JavaScript. 
JSON solo puede representar un subconjunto de los valores que 
se pueden representar en JavaScript.

JSON tiene algunas restricciones de datos que debes tener en cuenta al trabajar con él:

-Solo puede contener pares clave-valor: cada elemento en un objeto JSON 
 debe ser un par clave-valor.
-Las claves deben ser cadenas: las claves en un objeto JSON deben 
 ser cadenas y deben estar encerradas entre comillas dobles.
-Los valores pueden ser de ciertos tipos: los valores en un objeto 
 JSON pueden ser números, cadenas, booleanos, objetos, arreglos o null. 
 No se permiten otros tipos de datos como funciones o fechas.
-No se permite la notación de punto flotante: los números en 
 JSON deben ser enteros o de punto flotante en notación decimal. 
 No se permiten notaciones científicas.
-Las cadenas deben estar encerradas en comillas dobles: las cadenas 
 en JSON deben estar encerradas entre comillas dobles. No se permiten comillas simples.
-No se permite el uso de comentarios: JSON no admite comentarios, 
 así que si necesitas incluir información adicional sobre tus datos, 
 tendrás que utilizar otro medio para hacerlo.
-Las comas son necesarias: cada elemento en un objeto o arreglo 
JSON debe estar separado por una coma, excepto el último.



*/







