// import { Mascota } from "./mascota.js";
// import { MascotaReptil } from "./mascota.js";
import { Mascota, MascotaReptil } from "./mascota.js";

const jugarConMascotas = ()=>{

    // Instanciar una clase
    const tessa = new Mascota("Tessa", 10, "canina" );
    console.log( typeof tessa ); // object
    console.log( tessa.name )
    
    // Instancia a copitoAntonio, asignar la referencia a una variable
    const copitoAntonio = new Mascota("Copito Antonio", 1, "felina" );
    console.log( copitoAntonio.name )
    
    // Cambiar el valor de atributo "name"
    copitoAntonio.name = "Copito Antonio Arroyo Leyva";
    console.log( copitoAntonio.name )

    // Agregar atributo edad
    // inicializar el atributo al instanciar la clase
    // imprimir el valor de la edad con console.log( obj.edad )
    console.log( copitoAntonio.edad); // 1
    console.log( tessa.edad); // 10

    const mascotasCh46 = [copitoAntonio, tessa];
    console.table( mascotasCh46 );

    // Mostrar los atributos encapsulados
    console.log( tessa.especie); // undefined
    // console.log( tessa.#especie); // No se puede acceder a atributos encapsulados
    tessa.especie = "canis lupus familiaris";
    console.log( tessa.especie); // canis lupus
    
    console.log( tessa.saluda("croquetas") );
    console.log( copitoAntonio.saluda("pollito y jamón del caro") );

    // Crear el objeto Steve
    const steve = new MascotaReptil("Steve", 7);
    console.log( steve.saluda("Gusanitos") );
    console.log( steve.cambiarPiel()  );

}

export { jugarConMascotas };