import { truncarTitulo } from "../../../components/card/truncarTitulo.js";

// test( "Descripción", ()=>{} );

test("Truncar los el título a 10 caracteres", () => {
  expect( truncarTitulo("Born to Make You Happy", 10)).toBe("Born to...");
  expect( truncarTitulo("Estamos en la semana 7", 10 )).toBe("Estamos...");
});

test("No truncar los titulo menores a 20 caracteres", ()=>{
    expect( truncarTitulo("Descripcion", 20) ).toBe("Descripcion");
});
