
const contarCaracteres = ( name ) => name.length;

const saludo = ( name ) =>{
   
    
    return `Hola ${name}, tu nombres tiene ${ contarCaracteres(name )} caracteres`;
}

export {saludo};