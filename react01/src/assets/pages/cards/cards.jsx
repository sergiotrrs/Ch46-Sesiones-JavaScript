import { Button, Container } from "@mui/material";
import { Card } from "../../components/card/card";
import Grid from "@mui/material/Grid2";

export const Cards = () => {
  return (
    <>
      <Container maxWidth="md" sx={ {my:3} }>
        <Grid container>
          <Grid size={ {xs:6 , md:4} }>
            <Card title="Shampoo" stock={50} />
          </Grid>
          <Grid size={ {xs:6 , md:4} }>
            <Card title="Desodorante" stock={10} />
          </Grid>
          <Grid size={ {xs:6 , md:4} }>
            <Card title="Jabón corporal" stock={5} />
          </Grid>
          <Grid size={ {xs:6 , md:4} }>
            <Card title="Perfume" stock={4} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

// export { Cards }
