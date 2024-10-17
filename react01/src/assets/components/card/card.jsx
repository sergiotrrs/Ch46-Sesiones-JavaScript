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

import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export const Card = ({ title, stock }) => {
  const [counter, setCounter] = useState(0);
  // const [carts, setCarts] = useState( [] );

  const handleIncrement = () => {
    // console.log("Valor antes de renderizar" , {counter})
    if (counter < stock) setCounter(counter + 1);
    // setCarts( [ {newItem:"new"} ], ...carts  ) // spread operator
  };

  // Función que decremente el contador
  const handleDecrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <Box
      textAlign="center"
      sx={{
        color: "whitesmoke",
        bgcolor: "#333",
        borderRadius: 2,
        p: 2,
        "&:hover": {
          bgcolor: "primary.dark",
        },
      }}
    >
      <Typography variant="h5" component={"p"}>
        {title}
      </Typography>
      <Typography variant="h5" component={"p"}>
        Piezas
        <Typography variant="h2" component={"p"}>
          {counter}
        </Typography>
      </Typography>
      <Typography variant="h6" component={"p"}>
        Número máx de piezas:
        <Typography variant="h6" component={"p"}>
          {stock}
        </Typography>
      </Typography>
      <Button
        disabled={counter <= 0}
        variant="contained"
        sx={{
          mx: 1,
          color: "black",
          bgcolor: "whitesmoke",
          borderRadius: 2,
          "&:hover": { bgcolor: "orange" },
        }}
        onClick={handleDecrement}
      >
        -
      </Button>
      <Button
        disabled={counter >= stock}
        variant="contained"
        sx={{
          mx: 1,
          color: "black",
          bgcolor: "whitesmoke",
          borderRadius: 2,
          "&:hover": { bgcolor: "orange" },
        }}
        onClick={handleIncrement}
      >
        +
      </Button>
    </Box>
  );
};

// export { Card }
