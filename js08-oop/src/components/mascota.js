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
    
    // Atributo encapsulado
    #especie;

    // El método constructor nos ayuda a instanciar un objeto
    constructor( nombreMascota , edad, especie ){
        this.name = nombreMascota;
        this.edad = edad;
        this.#especie = especie;
        console.log(this);
        
        console.log(`Soy ${this.name}, Tengo vida, ja, ja , ja, y tengo ${this.edad} años, soy de la especie ${this.#especie}`);
    }

    // Leer y escribir a los atributos encapsulados
    // métodos setters y getters
    get especie(){
        return this.#especie;
    }

    set especie( newEspecie ){
        this.#especie = newEspecie;
    }

}

export { Mascota };