
const truncarTitulo = (titulo, maxCaracteres) => {
  let tituloRecortado;
  const decorador = "...";

  if ( titulo!== null  &&  titulo.length > maxCaracteres) {
    tituloRecortado = titulo.slice(0, maxCaracteres - decorador.length);
    // Born to Make You Happy
    tituloRecortado += decorador;
  } else {
    tituloRecortado = titulo;
  }

  return tituloRecortado;
};

console.log( truncarTitulo("Ya nos vamos al primer descanso", 10 ) );
// export default truncarTitulo;
export { truncarTitulo };
