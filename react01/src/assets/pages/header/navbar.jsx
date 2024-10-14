import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar" >
        {/* Logo */}
        <div className="logo">
          <img src="/img/ninja-128px.png" alt="Logo Ninja" />
        </div>
        {/* Opciones del menú */}
        <ul className="nav-links">
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