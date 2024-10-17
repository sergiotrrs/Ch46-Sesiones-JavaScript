import { Button, Container } from "@mui/material";
import { Card } from "../../components/card/card";
import Grid from "@mui/material/Grid2";

export const Cards = () => {
  return (
    <>
      <Container maxWidth="md">
        <Grid container>
          <Grid size={6}>
            <Card title="Shampoo" stock={50} />
          </Grid>
          <Grid size={6}>
            <Card title="Desodorante" stock={10} />
          </Grid>
          <Grid size={6}>
            <Card title="Jabón corporal" stock={5} />
          </Grid>
          <Grid size={6}>
            <Card title="Perfume" stock={4} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

// export { Cards }
