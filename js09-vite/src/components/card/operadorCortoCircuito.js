
// Se consideran falsos: "", 0, null, undefined, NaN
//       T         &&  RETURN
//       F  RETURN &&    ---
//       T  RETURN ||    ---
//       F         ||  RETURN

console.log(  18 && 22   ); // 22
console.log(  "Oh" && "Baby One More Time" ); // Baby One More Time"
console.log( "Resultado: ",  ""  && "Toxic"  ); // ""
console.log( "Resultado: ",  "false"  && "Gimme More"  ); // Gimme More
console.log( "Resultado: ",  false  && "Gimme More" && NaN  ); // false

console.log(  "Oh"|| "Baby One More Time" ); // "Oh"
console.log( "Resultado: ",  false  || "Gimme More" || NaN  ); // "Gimme More"

const active = false;
/*
if( active ){
    console.log("El usuario está activo");
}
    */
active && console.log("Activo usando corto circuito");
