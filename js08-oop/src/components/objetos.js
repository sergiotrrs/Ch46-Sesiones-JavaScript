const datosSteve = {
  nombre: "Steve",
  tipo: "reptil",
  edad: 7,
  colores: ["amarillo", "naranja"],
  cambioPiel: function () {
    return `Me llamo Steve tengo 6 años y me toca cambiar de ropita`;
  },
  alimento: {
    verduras: ["Zanahorias", "Lechuga"],
    insectos: ["Gusanitos", "Hormigas"],
  },
};

// Usar el objetos datosSteve
const mostrarEnConsolaASteve = () => {
  console.log("Nombre de la mascota:", datosSteve["nombre"]);
  console.log("Tipo de la mascota:", datosSteve["tipo"]);
  console.log("Nombre de la mascota:", datosSteve.nombre);
  console.log("Tipo de la mascota:", datosSteve.tipo);

  const miAtributo = "edad";
  console.log(`Valor del atributo ${miAtributo} :`, datosSteve.miAtributo); // undefined
  console.log(`Valor del atributo ${miAtributo} :`, datosSteve[miAtributo]); // 7

  // Mostrar los alimentos de tipo verduras que come steve
  console.log("Alimentos de tipo verdura: ", datosSteve.alimento.verduras);
  console.log("tipo verdura: ", datosSteve["alimento"]["verduras"]);

  // Invocar la función cambioPiel de Steve
  console.log("Invocando la función: ", datosSteve.cambioPiel() );
  console.log("Invocando la función: ", datosSteve["cambioPiel"]() );
};

export { mostrarEnConsolaASteve };
