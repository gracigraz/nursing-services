import { Link } from "react-router-dom";
import logo3 from "../../assets/icons/logo3.png";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo3}
        alt="Logo Servicios Enfermeria Jorge y Vero"
      />

      <nav className="header__nav">
        <Link to={"/"}>Inicio</Link>
        <Link to={"/sobre-nosotros"}>Sobre Nosotros</Link>
        <Link to={"/servicios"}>Servicios</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/contacto"}>Contacto</Link>
      </nav>
    </header>
  );
};
