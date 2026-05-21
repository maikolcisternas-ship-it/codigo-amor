import Navbar from "../components/Navbar";
import "../App.css";
import { useEffect } from "react";
import foto1 from "../assets/wawahermosa.jpeg";
import foto2 from "../assets/laamomucho.jpeg";
import { useState } from "react";

export default function Evidencias() {

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

      <div className="mouse-glow"></div>

      <section className="hero-card">

        <p className="subtitle">
          Archivo Confidencial
        </p>

        <h1 className="hero-title">
          Evidencias
          <span>Presentadas</span>
        </h1>

        <p className="description">
          El siguiente material ha sido incorporado
          oficialmente al expediente sentimental.
        </p>

        <section className="evidence-grid">

          <div className="evidence-card">
            <div className="stamp">
  APROBADO
</div>

            <div
  className="evidence-image"
  style={{
    backgroundImage: `url(${foto1})`
  }}
  
></div>

            <div className="evidence-content">

              <p className="evidence-tag">
                Evidencia 01
              </p>

              <h2>
                Primera cita
              </h2>

              <p>
                Registro oficial del día donde
                comenzaron los hechos investigados.
              </p>

            </div>

          </div>

          <div className="evidence-card">

            <div className="stamp">
  APROBADO
</div>

            <div
  className="evidence-image evidence-image-chat"
  style={{
    backgroundImage: `url(${foto2})`,
    width: "100%",
    height: "100%"
  }}
/>

            <div className="evidence-content">

              <p className="evidence-tag">
                Evidencia 02
              </p>

              <h2>
                Conversaciones
              </h2>

              <p>
                Mensajes utilizados como prueba
                de cariño mutuo y apego emocional.
              </p>

            </div>

          </div>

        </section>

      </section>

    </main>

  );
}