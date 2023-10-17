import { Link } from "react-router-dom";
export const NotFoundPage = () => {
  return (
    <>
      <main className="not-found">
        <h1 className="not-found__error">Error 404</h1>
        <p className="not-found__message">
          No hemos encontrado la pagina que estas buscando!
        </p>
        <p className="not-found__note">
          Aqui tienes algunos enlaces que tal vex puedan ayudarte:
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
