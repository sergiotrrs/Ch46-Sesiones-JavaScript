import { truncarTitulo } from "../../../components/card/truncarTitulo.js";

// test( "Descripción", ()=>{} );

/**
 * - Expect te da acceso a un número de marcadores que te permiten validar diferentes cosas.
 * - Los matchers en Jest son funciones que permiten comparar valores esperados con valores reales en los tests
 * - toBe(): compara con igualdad estricta (===) 
 */
test("Truncar los el título a 10 caracteres", () => {
  expect( truncarTitulo("Born to Make You Happy", 10)).toBe("Born to...");

  expect( truncarTitulo("Estamos en la semana 7", 10 )).toBe("Estamos...");
});

test("No truncar los titulo menores a 20 caracteres", ()=>{
    expect( truncarTitulo("Descripcion", 20) ).toBe("Descripcion");
});

test("Titulo vacios y nulls", ()=>{
    expect( truncarTitulo("", 20) ).toBe("");
    expect( truncarTitulo( null , 20) ).toBe(null);
} );

test("Verificar la longitud final del titulo", ()=> {
    expect( truncarTitulo("I'm not a Girl", 5 ).length <= 5 ).toBe( true );
    expect( truncarTitulo("Till the World Ends", 5 ).length <= 5 ).toBeTruthy();

});

test("Otros tipos de marchers", ()=>{
    // toContain(): verifica si un array o string contiene un valor.
    expect([1, 2, 3]).toContain(2);
    // toEqual(): compara estructuras de datos (objetos, arrays).
    expect({ name: 'Juan' }).toEqual({ name: 'Juan' });
    // toThrow(): verifica si una función lanza un error.
    expect(() => { throw new Error('Error') }).toThrow('Error');
    // toBeCloseTo(): comapra números con decimales y verifica si están cerca uno del otro
    expect( .1 +.2 ).toBeCloseTo(0.3); 
});