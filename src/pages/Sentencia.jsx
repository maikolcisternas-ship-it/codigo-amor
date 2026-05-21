import Navbar from "../components/Navbar";
import "../App.css";
import { useEffect } from "react";

export default function Sentencia() {
    useEffect(() => {

  const glow = document.querySelector(".mouse-glow");

  const moveGlow = (e) => {

    glow.animate(
      {
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
      },
      {
        duration: 400,
        fill: "forwards"
      }
    );
  };

  window.addEventListener("mousemove", moveGlow);

  return () => {
    window.removeEventListener("mousemove", moveGlow);
  };

}, []);
  return (
    <main className="app">

      <Navbar />

      <div className="background"></div>
      <div className="glow"></div>
      <div className="mouse-glow"></div>

      <section className="hero-card">

        <p className="subtitle">
          Fallo Oficial
        </p>

        <h1 className="hero-title">
          Sentencia
          <span>Definitiva</span>
        </h1>

        <p className="description">
          Luego de revisar exhaustivamente todas las pruebas,
          este tribunal declara al acusado culpable de amar
          profunda e irrevocablemente a la demandante.
        </p>

      </section>

    </main>
  );
}