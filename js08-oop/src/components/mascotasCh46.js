import { Mascota } from "./mascota.js";

const jugarConMascotas = ()=>{

    // Instanciar una clase
    const tessa = new Mascota("Tessa", 10 );
    console.log( typeof tessa ); // object
    console.log( tessa.name )
    
    // Instancia a copitoAntonio, asignar la referencia a una variable
    const copitoAntonio = new Mascota("Copito Antonio", 1 );
    console.log( copitoAntonio.name )
    
    // Cambiar el valor de atributo "name"
    copitoAntonio.name = "Copito Antonio Arroyo Leyva";
    console.log( copitoAntonio.name )

    // Agregar atributo edad
    // inicializar el atributo al instanciar la clase
    // imprimir el valor de la edad con console.log( obj.edad )
    console.log( copitoAntonio.edad); // 1
    console.log( tessa.edad); // 10


}

export { jugarConMascotas };