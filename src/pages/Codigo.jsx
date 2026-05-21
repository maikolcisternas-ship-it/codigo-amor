import Navbar from "../components/Navbar";
import "../App.css";
import { useEffect, useState } from "react";
import FirmaCanvas from "../components/FirmaCanvas";

export default function Codigo() {

  const [firmaJaviera, setFirmaJaviera] = useState(null);

  useEffect(() => {

    const glow = document.querySelector(".mouse-glow");

    const moveGlow = (e) => {

      if (!glow) return;

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
const [aceptado, setAceptado] = useState(false);
const [sellado, setSellado] = useState(false);
const handleAceptar = () => {
    
  setSellado(true);

  setTimeout(() => {
    setSellado(false);
    setAceptado(true);
  }, 2000);
};

  return (
    <main className="app">

      <Navbar />

      <div className="background"></div>
      <div className="glow"></div>
      <div className="mouse-glow"></div>

      <section className="hero-card">

        <p className="subtitle">
          Código Oficial
        </p>

        <h1 className="hero-title">
          Artículos
          <span>Fundamentales</span>
        </h1>

        <p className="description">
          Compendio legal-emocional que regula la relación bajo consentimiento mutuo.
        </p>
           
        <div className="articles">

          <article className="article-card">
            <p className="article-number">Artículo IV</p>
            <h2>Derecho a mimos</h2>
            <p>La parte demandante podrá exigir abrazos, cariño y atención emocional sin previo aviso.</p>
          </article>

          <article className="article-card">
            <p className="article-number">Artículo V</p>
            <h2>Protección emocional</h2>
            <p>El acusado deberá proteger a la demandante de estrés académico, ansiedad y días malos.</p>
          </article>

          <article className="article-card">
            <p className="article-number">Artículo VI</p>
            <h2>Derecho a respuesta</h2>
            <p>Toda comunicación deberá ser respondida en un plazo razonable, salvo fuerza mayor afectiva.</p>
          </article>

          <article className="article-card">
            <p className="article-number">Artículo VII</p>
            <h2>Prioridad absoluta</h2>
            <p>La relación tendrá prioridad sobre situaciones no urgentes o excusas inválidas.</p>
          </article>

          <article className="article-card">
            <p className="article-number">Artículo VIII</p>
            <h2>Apoyo incondicional</h2>
            <p>En momentos difíciles, la otra parte deberá brindar apoyo emocional inmediato.</p>
          </article>

          <article className="article-card">
            <p className="article-number">Artículo IX</p>
            <h2>Cláusula de cariño obligatorio</h2>
            <p>Se establece el deber de demostrar afecto de forma regular y sincera.</p>
          </article>

        </div>

        <div className="firma-final">

          <p className="firma-text">
            Este código entra en vigor de forma inmediata
            y tiene validez emocional indefinida.
          </p>

          <div className="firma-box">

            <p>Firmado por:</p>

            <div className="firmantes">

              {/* MAIKOL (ya firmado) */}
              <div className="firma-nombre">
                <span>Firmado por</span>
                <h3>Maikol</h3>

                <p className="firma-ya-hecha">
                  ✔ Firma registrada oficialmente
                </p>
              </div>

              <div className="firma-corazon">
                💛
              </div>

              {/* JAVIERA (firma real) */}
              <div className="firma-nombre">
                <span>Firmado por</span>
                <h3>Javiera</h3>

                {!firmaJaviera ? (
                  <FirmaCanvas onSave={setFirmaJaviera} />
                ) : (
                  <img src={firmaJaviera} className="firma-img-mini" />
                )}

              </div>

            </div>

          </div>

          <button
  className="aceptar-btn"
  disabled={!firmaJaviera || aceptado}
  onClick={handleAceptar}
>
  {aceptado ? "✔ Contrato aceptado" : "Aceptar términos de la relación"}
</button>

{firmaJaviera && !aceptado && (
  <p className="firma-ok">
    Firma registrada. Pendiente de aceptación ✔
  </p>
)}
{aceptado && (
  <div className="contrato-final">

    <h2>📜 Contrato Aceptado</h2>

    <p>
      Ambas partes han firmado y aceptado el Código Civil de la Relación.
      Este acuerdo entra en vigor de manera inmediata.
    </p>

    <div className="sello">
      ✔ APROBADO
    </div>

  </div>
)}

        </div>

      </section>
{sellado && (
  <div className="seal-overlay">

    <div className="seal-box">
      <div className="seal-circle">
        ✔ SELLANDO CONTRATO...
      </div>

      <p>Procesando documento...</p>
    </div>

  </div>
)}
    </main>
  );
}