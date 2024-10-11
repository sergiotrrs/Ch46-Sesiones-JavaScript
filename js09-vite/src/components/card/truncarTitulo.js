
const truncarTitulo = (titulo, maxCaracteres) => {
  let tituloRecortado;
  const decorador = "...";

  if (titulo.length > maxCaracteres) {
    tituloRecortado = titulo.slice(0, maxCaracteres - decorador.length);
    // Born to Make You Happy
    tituloRecortado += decorador;
  } else {
    tituloRecortado = titulo;
  }

  return tituloRecortado;
};

// export default truncarTitulo;
export { truncarTitulo };
