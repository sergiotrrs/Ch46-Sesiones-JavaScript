
/*
 Un componente en React se renderiza baja ciertas condiciones:

  - Cambio en las props: Si las props que recibe el componente cambian, este
   se vuelve a renderizar.
  - Cambio de estado( useState): Si el estado del componente cambia, este
   se vuelve a renderizar.
  - Cambio en el componente Parent: Si un parent se renderiza, los child también
   lo harán.

   Sintaxis de useState:
   const [estado, setEstado] = useState(valorInicial);
    - estado: Es el valor actual del estado.
    - setEstado: Es la función que se usa para actualizar el valor del estado.
    - valorInicial: Es el valor inicial que se le asigna al estado.

   Reglas de uso de useState:
    - useState solo se puede usar dentro de componentes funcionales.
    - No se puede usar condicionalmente o en loops.
    - El valor del estado se mantiene entre renderizados del componente
*/

import { useState } from "react";

export const Card = ( {title, stock} ) => {

  const [counter, setCounter] = useState( 0 );
  // const [carts, setCarts] = useState( [] );

  const incrementHandle = ()=>{
    console.log("Valor antes de renderizar" , {counter})
    setCounter(  counter + 1 ); 
    // setCarts( [ {newItem:"new"} ], ...carts  ) // spread operator
  }

  return (
    <div>
       <p>{title}</p>
       <p>Piezas<span>{counter}</span></p>
       <p>Número máx de piezas: <span>{stock}</span> </p>
       <button onClick={ incrementHandle } >+</button>
       <button>-</button>
    </div>
  )
}

// export { Card } 
