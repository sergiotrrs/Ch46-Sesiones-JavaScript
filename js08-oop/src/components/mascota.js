/**
 *  
 *  El nombre de las clases(plantillas) debe ser con UpperCamelCase
 *  Se recomienda que el nombre sea un sustantivo.
 * 
 *  Encapsulamiento: La encapsulación ayuda a proteger la integridad 
 *  de los datos y asegura que un objeto mantenga su estado interno 
 *  consistente. Al limitar el acceso directo a los datos internos 
 *  de un objeto, se reduce la posibilidad de que estos datos sean 
 *  modificados de manera incorrecta o que se produzcan efectos 
 *  secundarios no deseados.
 * 
 */

class Mascota {
    
    // El método constructor nos ayuda a instanciar un objeto
    constructor( nombreMascota , edad ){
        this.name = nombreMascota;
        this.edad = edad;
        console.log(this);
        
        console.log(`Soy ${this.name}, Tengo vida, ja, ja , ja, y tengo ${this.edad} años`);
    }

}

export { Mascota };