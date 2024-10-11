/**
 *  TDD
 *  TDD (Test-Driven Development) es una metodología de desarrollo 
 *  de software donde las pruebas unitarias se escriben antes del 
 *  código de producción.
 * 
 *  Ventajas de TDD: 
 *  - Te obliga a pensar en los requerimientos antes de codificar.
 *  - Mejora la calidad del código al asegurar que está cubierto por pruebas.
 *  - Facilita la detección de errores rápidamente.
 * 
 */

test("Verificar una palabra si es palindromo", ()=>{
    expect( palindrome("oso") ).toBe(true);
    expect( palindrome("reconocer") ).toBeTruthy();
    expect( palindrome("tengo hambre") ).toBe(false);
    expect( palindrome("") ).toBe(false);
    expect( palindrome("Anita lava la tina") ).toBe(true);
});

