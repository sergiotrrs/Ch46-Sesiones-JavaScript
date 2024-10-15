/*
properties = {
  title:"Shampoo",
  stock:50
}
  */

export const Card = ( props ) => {

  const counter = 1;

  return (
    <div>
       <p>{props.title}</p>
       <p>Piezas<span>{counter}</span></p>
       <p>Número máx de piezas: <span>{props.stock}</span> </p>
       <button>+</button>
       <button>-</button>
    </div>
  )
}

// export { Card } 
