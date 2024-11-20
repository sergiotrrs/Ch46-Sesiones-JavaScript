
// Calcular la cantidad de letras que hay
const cadena = "parangaricutirimicuaro";


const cantidadDeLetras = ( charToFind , phrase ) => {
    const lowerCasePhrase = phrase.toLowerCase();
    const lowerCaseCharToFind = charToFind.toLowerCase();
    return lowerCasePhrase.split( lowerCaseCharToFind ).length - 1 ;
} 

// exportacion nombrada
 export { cadena };

// exportación por default
export default cantidadDeLetras;


