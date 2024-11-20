/**
 Palíndromo: palabra que se lee igual de izquierda a derecha
  y viceversa.

  Ejemplo: oso, Anita lava la tina
*/
const palindrome = ( phrase ) =>{
    if(phrase === "") return false;

    const lowerCasePhrase = phrase.toLowerCase();
    const phraseWithoutSpace = lowerCasePhrase.replaceAll(" ", "");

    const reversePhrase = phraseWithoutSpace.split("").reverse().join("");

    return phraseWithoutSpace === reversePhrase;
}

export { palindrome };