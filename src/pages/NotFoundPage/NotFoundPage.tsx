import { Link } from "react-router-dom";
import "./NotFoundPage.scss";
export const NotFoundPage = () => {
  return (
    <>
      <main className="not-found">
        <h1 className="not-found__error">Error 404</h1>
        <p className="not-found__message">
          No hemos encontrado la página que estás buscando.
        </p>
        <p className="not-found__note">
          ¡Aquí tienes algunos enlaces que tal vez te puedan ayudar!
        </p>
        <nav className="not-found__nav">
          <Link to={"/"}>Inicio</Link>
          <Link to={"/sobre-nosotros"}>Sobre Nosotros</Link>
          <Link to={"/servicios"}>Servicios</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/contacto"}>Contacto</Link>
        </nav>
      </main>
    </>
  );
};
