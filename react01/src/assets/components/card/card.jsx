/*
properties = {
  title:"Shampoo",
  stock:50
}
  */

export const Card = ( props ) => {

  let counter = 1;

  const incrementHandle = ()=>{
    console.log("Estoy dentro de la función incremento")
    console.log( ++counter );
  }

  return (
    <div>
       <p>{props.title}</p>
       <p>Piezas<span>{counter}</span></p>
       <p>Número máx de piezas: <span>{props.stock}</span> </p>
       <button onClick={ incrementHandle } >+</button>
       <button>-</button>
    </div>
  )
}

// export { Card } 
