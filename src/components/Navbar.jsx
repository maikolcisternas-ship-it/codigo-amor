import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <h1>
        Código Civil del Amor
      </h1>

      <div className="nav-links">

        <Link to="/">
          Inicio
        </Link>

        <Link to="/codigo">
          Código
        </Link>

        <Link to="/jurisprudencia">
          Jurisprudencia
        </Link>

        <Link to="/evidencias">
          Evidencias
        </Link>

        <Link to="/sentencia">
          Sentencia
        </Link>

      </div>

    </nav>
  );
}