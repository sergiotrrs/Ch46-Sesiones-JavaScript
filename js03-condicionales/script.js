console.log("Sesión JS03 - Condicionales");

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    }
    else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

/**
 *  Función que recibe una temperatura y retorna un mensaje de acuerdo a la temperatura:
 *  temperatura ideal = 24
 *  temperatura templada = 20 a 23
 *  temperatura fria = menor o igula a 19
 *  temperatura calida = 25 a 30
 *  temperatura calurosa = mayor o igual a 31
 */

/*
const evaluarTemperatura = (gradosCentigrados) => {
  if (gradosCentigrados === 24)
    return `Temperatura de ${gradosCentigrados} es ideal`;
  else if (gradosCentigrados >= 20 && gradosCentigrados <= 23)
    return `Temperatura de ${gradosCentigrados} es templada`;
  else return `Temperatura de ${gradosCentigrados} no la puedo evaluar`;
};*/

const evaluarTemperatura = (gradosCentigrados) => {
    let mensaje = "";
    
    if (gradosCentigrados === 24)
      mensaje = `Temperatura de ${gradosCentigrados} es ideal`;
    else if (gradosCentigrados >= 20 && gradosCentigrados <= 23)
      mensaje = `Temperatura de ${gradosCentigrados} es templada`;
    else 
      mensaje = `Temperatura de ${gradosCentigrados} no la puedo evaluar`;

    return mensaje;
  };

console.log( evaluarTemperatura(22)  );
console.log( evaluarTemperatura(24)  );
console.log( evaluarTemperatura(30)  );