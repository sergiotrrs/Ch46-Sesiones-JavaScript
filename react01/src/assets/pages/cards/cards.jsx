import { Card } from "../../components/card/card";

export const Cards = () => {
  return (
  <>
   <Card title="Shampoo" stock={50} />
   <Card title="Desodorante" stock={10} />
   <Card title="Jabón corporal" stock={5} />
   <Card title="Perfume" stock={4} />
  </>
  );
};

// export { Cards }
