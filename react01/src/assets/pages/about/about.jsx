import { Container, Typography } from "@mui/material"


/*
 Renderización de valores especiales:
  Si intentas renderizar los siguientes valores,
  no aparecerán en la interfaz. Son ignorados por React.

   - true
   - false
   - null
   - undefined

  Uso de list y keys
  Cuando renderizas listas de elementos en React, cada elemento
  debe tener un identificador único mediante la propiedad key.
  Esto ayuda a React a optimizar el proceso de actualización del DOM.

*/
const dinamitaBuenaOnda = [ 
  {name:"Sergio", numEmployee: 589},
  {name:"Tan", numEmployee: 789},
  {name:"Nan", numEmployee: 97},
  {name:"Blanca", numEmployee: 23},
];

export const About = () => {
  return (
    <Container>
        <Typography variant="h2">About</Typography>
        {true}{false}{null}{undefined}
        <ul>
          { dinamitaBuenaOnda.map( (person)=> <li key={person.numEmployee} >{person.name}</li> ) }
        </ul>


    </Container>
  )
}
