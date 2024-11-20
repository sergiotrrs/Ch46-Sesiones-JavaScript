import { palindrome } from "../../../src/components/quiz/palindromo.js";

test("Verificar una palabra si es palindromo", ()=>{
    expect( palindrome("oso") ).toBe(true);
    expect( palindrome("reconocer") ).toBeTruthy();
    expect( palindrome("tengo hambre") ).toBe(false);
    expect( palindrome("") ).toBe(false);
    expect( palindrome("Anita lava la tina") ).toBe(true);
});