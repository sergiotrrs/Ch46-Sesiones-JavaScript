import "./App.css";
import { Footer } from "./assets/pages/footer/footer";
import { Navbar } from "./assets/pages/header/navbar";

function App() {

  /*
   Crear un componente para el Header
   Crear un componente para mis Cards
     - Dentro de Cards crear 6 tarjetas
   Crear un componente pra el Footer
  */
  const myJSX = (
    <>
     <Navbar />

     <Footer />

    </>
  );

  return myJSX;
}

export default App;
