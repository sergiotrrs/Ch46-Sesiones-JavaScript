console.log("Sesión JS07 - api Fetch y local storage");

// Api: Interfaz, algo que conecta a con b
// API: Interfaces que permiten que diferentes aplicaciones se comuniquen entre sí.


/*
    Programación síncrona.
 
  Ejecutar una tarea después de otra, de manera secuencial.
  Si una tarea tarda mucho tiempo en completarse, pruede bloquear el hilo
  de ejecución.

*/

const primerPaso = () => {
  console.log("01 - Inicio de mi programa");
};

const segundoPaso = () => {
  console.log("02 - Desarrollo de mi programa");
  for (let i = 0; i < 1_000_000_000 ; i++) {
    i * 2;
  }
};

const tercerPaso = () => {
  console.log("03 - Fin de mi programa");
};

/*
primerPaso(); // 01 - Inicio de mi programa
segundoPaso(); // 02 - Desarrollo de mi programa
tercerPaso(); // 03 - Fin de mi programa
*/

/*
 Programación asíncrona.

 Las tareas no se bloquean entre sí.
 La programación asíncrona es fundamental en JavaScript para
  realizar operaciones no bloqueantes, como peticiones HTTP, 
  operaciones de lectura/escritura de archivos, etc., 
  lo que mejora el rendimiento y la capacidad de respuesta 
  de las aplicaciones.

  setTimeout()
   Establece un temporizador que ejecuta una función de callback
   una vez que expire el temporizador

   sintaxis:
     setTimeout( fncCallback, tiempo_ms, argumentos_fnc );
     setTimeout( ()=>{}  , tiempo_ms );

*/

const cambiarImagen = ( newImage, altInfo ) => {
   const image = document.getElementById("logo");
   image.src = `./assets/img/${newImage}`
   image.alt = altInfo;
}

// cambiarImagen("copito-antonio.jpg", "Copito antonio con lentes");

// Cambiar la imagen pasado 5 segundos desde que carga la aplicación.
const segundoPasoAsincrono = () => {
  // setTimeout( ()=>{} , tiempoMs, argumentosFncCallback);
  setTimeout( cambiarImagen , 5000 , "copito-antonio.jpg", "Copito antonio con lentes" );
}


primerPaso();
segundoPasoAsincrono();
tercerPaso();