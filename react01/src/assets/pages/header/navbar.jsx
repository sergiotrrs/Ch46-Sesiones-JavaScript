import './navbar.css'

const estiloArial = {
  fontFamily:"Arial", 
  color:"yellow"
}

const estiloCourier = {
  fontFamily:"Courier New, monospace", 
  color:"cyan"
}


const Navbar = () => {

  const isArial = false;
  let estiloAAplicar;

  if( isArial ){
    estiloAAplicar = estiloArial;
  } else {
    estiloAAplicar = estiloCourier;
  }

  return (
    <>
      <nav className="navbar" >
        {/* Logo */}
        <div className="logo">
          <img src="/img/ninja-128px.png" alt="Logo Ninja" />
        </div>
        {/* Opciones del menú */}
        <ul className="nav-links" style={ estiloAAplicar  } >
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Navbar };