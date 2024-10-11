import { truncarTitulo } from "../../../components/card/truncarTitulo.js";

// test( "Descripción", ()=>{} );
test("Truncar los el título a 10 caracteres", () => {
  expect(truncarTitulo("Born to Make You Happy", 10)).toBe("Born to...");
});
