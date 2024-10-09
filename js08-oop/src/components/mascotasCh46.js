import { Mascota } from "./mascota.js";

const jugarConMascotas = ()=>{

    // Instanciar una clase
    const tessa = new Mascota("Tessa");
    console.log( typeof tessa ); // object
    console.log( tessa.name )
    
    // Instancia a copitoAntonio, asignar la referencia a una variable
    const copitoAntonio = new Mascota("Copito Antonio");
    console.log( copitoAntonio.name )


}

export { jugarConMascotas };