import Navbar from "../components/Navbar";
import { useEffect } from "react";
import "../App.css";
import { motion } from "framer-motion";


export default function App() {

  const articles = [
    {
      number: "Artículo I",
      title: "Autoridad Suprema",
      text: "Se reconoce a la novia como máxima autoridad en materias de ternura, películas y decisiones importantes."
    },

    {
      number: "Artículo II",
      title: "Obligaciones",
      text: "El acusado deberá proporcionar cariño, apoyo emocional y besitos de forma indefinida."
    },

    {
      number: "Artículo III",
      title: "Resolución de conflictos",
      text: "Toda disputa deberá resolverse mediante abrazos, comida rica o mimos intensivos."
    }
  ];
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

      {/* Fondo */}
      <div className="background"></div>
      <div className="mouse-glow"></div>
      <div className="glow"></div>

      {/* Partículas */}
      <div className="particles">

        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </div>

      <motion.section
        className="hero-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Tribunal Supremo del Amor
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Código Civil
          <span>de Nuestra Relación</span>
        </motion.h1>

        <motion.p
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Documento jurídico-emocional oficialmente aprobado
          para regular abrazos, besitos, cariño obligatorio
          y amor perpetuo entre las partes involucradas.
        </motion.p>

        <section className="articles">
            

          {articles.map((article, index) => (

            <motion.article
              key={index}
              className="article-card"

              initial={{ opacity: 0, y: 40 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{
                delay: 1 + index * 0.2,
                duration: 0.7
              }}
            >

              <p className="article-number">
                {article.number}
              </p>

              <h2>
                {article.title}
              </h2>

              <p>
                {article.text}
              </p>

            </motion.article>

          ))}

        </section>

        <motion.div
          className="button-container"

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ delay: 1.6 }}
        >

          

        </motion.div>

      </motion.section>

    </main>
  );
}