

/*
  La desestructuración en JavaScript es una característica 
  que permite extraer valores de arreglos u objetos y asignarlos 
  a variables de manera más directa y legible. Es muy útil para 
  trabajar con datos complejos como objetos anidados o arrays largos.

*/

let a = 10;
let b = 5;

// Cambiar el valor de a->b y el valor de b->a
let temporal = a; // 10
a = b; // a: 5, b: 5
b = temporal; // b: 10, a: 5

// Aplicando la desestructuración
let valueA = 10; 
let valueB = 5;
[ valueA, valueB] = [ valueB, valueA ];

// Teniendo el sig. Array ["Steve", "Tessa", "Copito", "Tibio"]
// Asignar el valor a Steve a la variable ivanna
// Asignar el valor de Tessa a la variable serch

const [ ivanna, serch, , eli ] = ["Steve", "Tessa", "Copito", "Tibio"];
console.log( ivanna, serch, eli );
console.log( {ivanna, serch, eli} );

// Aplicando al desestructuración a objetos
const datosSteve = {
    name: "Steve",
    age: 7,
    color: [ "amarillo", "naranja" ],
    owner: "Ivanna",
    type: {
        commonName: "Gecko Leopardo",
        habitat: "Desierto"
    }
}

// Imprimir el nombre y edad de Steve
/*
console.log( datosSteve.name, datosSteve.age );
console.log( `
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${ datosSteve.name }</h5>
    <p class="card-text">${ datosSteve.age }</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    ` );
*/
const {age, name: nombre, type: {commonName : nombreComun } } = datosSteve;
console.log( `
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${ nombre }</h5>
    <p class="card-text">${nombreComun} ${ age }</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    ` );


const useStatePersonalizado = ( valorInical ) =>{

    // Otras instrucciones
    let valorActual = valorInical;

    const setValue = ( newValue ) =>{
        // Renderizar componente
    }

    return [ valorActual, setValue ];s

}

const [ state, setState ] =  useStatePersonalizado( 5 );
console.log( state ); // 5
setState(10);