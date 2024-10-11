
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
