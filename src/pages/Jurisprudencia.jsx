import Navbar from "../components/Navbar";
import "../App.css";
import { useEffect, useState } from "react";

export default function Jurisprudencia() {

  const [sentencia, setSentencia] = useState(null);
  const [culpa, setCulpa] = useState(null);
  const [casoInput, setCasoInput] = useState("");
  const [articuloRecomendado, setArticuloRecomendado] = useState(null);

  useEffect(() => {
    const glow = document.querySelector(".mouse-glow");
    if (!glow) return;

    const moveGlow = (e) => {
      glow.animate(
        { left: `${e.clientX}px`, top: `${e.clientY}px` },
        { duration: 400, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  const articulos = [
    { id: 1, titulo: "Derecho a mimos", peso: 3, def: "Afecto constante", tags: ["mimo", "cariño", "abrazo"] },
    { id: 2, titulo: "Protección emocional", peso: 4, def: "Apoyo emocional", tags: ["triste", "apoyo"] },
    { id: 14, titulo: "No abandono emocional", peso: 5, def: "No ghosting ni abandono", tags: ["ignorar", "ghosting", "abandono", "descuido"] },
    { id: 20, titulo: "No ghosting", peso: 5, def: "No desaparecer", tags: ["desaparecer", "ghosting", "no responde", "visto"] },
    { id: 39, titulo: "Amor respetuoso", peso: 5, def: "Respeto mutuo", tags: ["amor", "respeto"] },

    { id: 41, titulo: "Compromiso matrimonial", peso: 5, def: "Matrimonio y futuro juntos", tags: ["casarse", "matrimonio", "no quiere casarse", "no quiere casarse conmigo"] },
    { id: 42, titulo: "Proyección familiar", peso: 5, def: "Hijos y familia", tags: ["hijos", "familia", "no quiere tener hijos", "no quiere tener hijos conmigo"] },
    { id: 45, titulo: "Economía afectiva", peso: 5, def: "Dinero en relación", tags: ["dinero", "tarjeta", "gastar", "no me deja gastar", "no me deja gastar su tarjeta"] },

    { id: 47, titulo: "Mascotas afectivas", peso: 4, def: "Gatos y perros", tags: ["gato", "gata", "gatito", "gatita", "gatitos", "gatitas", "no quiere darme un gatito", "no quiere darme una gatita", "no quiere darme un gatita", "no quiere darme gatitos", "no quiere darme un gato", "no quiere que tenga un gato", "no quiere que tenga una gata", "no quiere que tenga una gatita"] },

    { id: 48, titulo: "Disponibilidad emocional", peso: 5, def: "Tiempo y presencia en la relación", tags: ["tiempo", "ocupada", "ocupado", "disponible", "no tiene tiempo", "siempre está ocupada"] },

    { id: 49, titulo: "Prioridad de pareja", peso: 5, def: "La pareja debe tener prioridad sobre terceros", tags: ["amigas", "amigos", "prioridad", "prefiere a sus amigas", "prefiere a sus amigos", "sale con sus amigas"] },

    { id: 50, titulo: "Equilibrio de actividades", peso: 4, def: "Balance entre pareja y vida personal", tags: ["jugar", "pelota", "deporte", "salir", "jugar a la pelota"] },

    { id: 51, titulo: "Compromiso recíproco", peso: 5, def: "Ambos deben esforzarse por la relación", tags: ["abandono", "descuidar", "descuidado"] },

    // Nuevos artículos específicos para detectar rechazos importantes
    { id: 60, titulo: "Rechazo a compromiso", peso: 5, def: "Negativa a casarse o comprometerse", tags: ["no quiere casarse", "no quiere casarse conmigo", "no quiere comprometerse"] },
    { id: 61, titulo: "Rechazo a proyección familiar", peso: 5, def: "Negativa a tener hijos o proyectar familia", tags: ["no quiere tener hijos", "no quiere tener hijos conmigo", "no quiere hijos"] },
    { id: 62, titulo: "Rechazo a mascotas afectivas", peso: 4, def: "Negativa a compartir mascotas afectivas", tags: ["no quiere darme un gatito", "no quiere darme una gatita", "no quiere que tenga un gato", "no quiere que tenga una gata", "no quiere gatito", "no quiere gatita"] },
    { id: 63, titulo: "Prioridad social sobre pareja", peso: 5, def: "Priorizar amistades por sobre la pareja", tags: ["prefiere a sus amigas", "prefiere a sus amigos", "prioridad amigas", "prioridad amigos"] },
    

    // Artículo para expectativas materiales (mansion, regalos grandes, compras)
    { id: 64, titulo: "Expectativas materiales", peso: 4, def: "Demandas materiales o expectativas de bienes", tags: ["mansion", "mansión", "comprarme", "comprarle", "comprarme una mansion", "comprarle una mansion", "comprarme una mansión", "comprarle una mansión", "no quiere comprarme", "no quiere comprarle", "no me quiere comprar", "no me quiere comprar una"] }
  ];

  const normalizarTexto = (texto) => {
    return texto
      .toLowerCase()
      .replaceAll("no me deja", "no me deja")
      .replaceAll("no quiere", "no quiere")
      .replaceAll("jugar a la pelota", "jugar a la pelota")
      .replaceAll("prefiere a sus amigas antes que a mi", "prefiere a sus amigas antes que a mi")
      .replaceAll("prefiere a sus amigos antes que a mi", "prefiere a sus amigos antes que a mi")
      .replaceAll("prefiere a sus amigas", "prefiere a sus amigas")
      .replaceAll("prefiere a sus amigos", "prefiere a sus amigos")
      .replaceAll("sale con sus amigas", "sale con sus amigas")
      .replaceAll("me deja de lado", "abandono descuido")
      .replaceAll("no tiene tiempo", "no tiene tiempo")
      .replaceAll("siempre está ocupada", "siempre está ocupada")
      .replaceAll("mimor", "cariño")
      .replaceAll("tigresita", "cariño")
      .replaceAll("pepe", "molesto")
      .replaceAll("pepita", "pepita")
      .replaceAll("pepito", "pepito")
      .replaceAll("gatitos", "gatitos")
      .replaceAll("gatitas", "gatitas")
      .replaceAll("gatito", "gatito")
      .replaceAll("gatita", "gatita")
      .replaceAll("gato", "gato")
      .replaceAll("gata", "gata")
      .replaceAll("no quiere casarse conmigo", "no quiere casarse conmigo")
      .replaceAll("no quiere casarse", "no quiere casarse")
      .replaceAll("no quiere tener hijos", "no quiere tener hijos")
      .replaceAll("no quiere tener hijos conmigo", "no quiere tener hijos conmigo")
      .replaceAll("no quiere darme un gatito", "no quiere darme un gatito")
      .replaceAll("no quiere darme una gatita", "no quiere darme una gatita")
      .replaceAll("no quiere darme un gato", "no quiere darme un gato")
      .replaceAll("no quiere que tenga un gato", "no quiere que tenga un gato")
      .replaceAll("no quiere que tenga una gata", "no quiere que tenga una gata")
      .replaceAll("mi novia no quiere comprarme una mansion", "mi novia no quiere comprarme una mansion")
      .replaceAll("mi novio no quiere comprarme una mansion", "mi novio no quiere comprarme una mansion")
      .replaceAll("comprarme", "comprarme")
      .replaceAll("comprarle", "comprarle")
      .replaceAll("mansión", "mansion")
      .replaceAll("no me quiere comprar", "no me quiere comprar");
  };

  const dictarSentencia = () => {

    const texto = normalizarTexto(casoInput);

    let mejorArticulo = null;
    let mejorScore = -1;

    articulos.forEach((art) => {
      let score = 0;

      art.tags.forEach(tag => {
        if (texto.includes(tag)) score += art.peso;
      });

      if (score > mejorScore) {
        mejorScore = score;
        mejorArticulo = art;
      }
    });

    const distribucion = calcularCulpaCompartida(texto);
    setCulpa(distribucion);

    setArticuloRecomendado(mejorArticulo);

    if (texto.includes("abandono") || texto.includes("descuido")) {
      setSentencia("💔 DESCUIDO EMOCIONAL DETECTADO");
      return;
    }

    if (texto.includes("amigas") || texto.includes("prefiere a sus amigas") || texto.includes("prefiere a sus amigos") || texto.includes("prefiere a sus amigas antes que a mi") || texto.includes("prefiere a sus amigos antes que a mi")) {
      setSentencia("👯 CONFLICTO DE PRIORIDAD SOCIAL DETECTADO");
      return;
    }

    if (texto.includes("deporte") && texto.includes("control")) {
      setSentencia("⚽ CONFLICTO DE LIBERTAD PERSONAL DETECTADO");
      return;
    }

    if (texto.includes("ocupada") || texto.includes("ausencia") || texto.includes("no tiene tiempo")) {
      setSentencia("⏳ BAJA DISPONIBILIDAD EMOCIONAL DETECTADA");
      return;
    }

    if (texto.includes("no quiere tener hijos") || texto.includes("rechazo hijos") || texto.includes("no quiere hijos")) {
      setSentencia("👶 CONFLICTO DE PROYECCIÓN FAMILIAR");
      return;
    }

    if (texto.includes("no quiere casarse") || texto.includes("no quiere casarse conmigo") || texto.includes("no quiere comprometerse")) {
      setSentencia("⚖️ CONFLICTO RELACIONAL DETECTADO");
      return;
    }

    if (texto.includes("mansion") || texto.includes("comprarme") || texto.includes("comprarle") || texto.includes("no me quiere comprar")) {
      setSentencia("🏠 CONFLICTO POR EXPECTATIVAS MATERIALES");
      return;
    }

    if (texto.includes("gatito") || texto.includes("gatita") || texto.includes("gatitos") || texto.includes("gatitas") || texto.includes("gato") || texto.includes("gata")) {
      setSentencia("🐱 CONFLICTO POR MASCOTAS AFECTIVAS");
      return;
    }

    if (mejorScore >= 10) setSentencia("💛 RELACIÓN ESTABLE Y COMPROMETIDA");
    else if (mejorScore >= 5) setSentencia("⚖️ EN OBSERVACIÓN");
    else setSentencia("⚠️ CONFLICTO EMOCIONAL");
  };

  const calcularCulpaCompartida = (texto) => {

    // Base equal responsibility
    let user = 50;
    let partner = 50;

    const normalizar = (t) =>
      t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const clean = normalizar(texto);

    // Detect partner gender mentions precisely
    const mentionsMiNovio = /mi novio|novio/i.test(clean);
    const mentionsMiNovia = /mi novia|novia/i.test(clean);

    // Detect mentions of partner generically
    const mentionsPartner = /(mi novia|mi novio|mi pareja|ella|él|el)/i.test(clean);
    const mentionsUser = /(yo |me |a mi|conmigo|mi )/i.test(clean);

    // Helper booleans for explicit subject detection (more robust)
    const explicitMiNovioSubject = /mi novio\s+(no|prefiere|me|no me|no quiere|no quiere dar|no me deja|no me quiere|no quiere tener|no quiere casarse)/i.test(clean);
    const explicitMiNoviaSubject = /mi novia\s+(no|prefiere|me|no me|no quiere|no quiere dar|no me deja|no me quiere|no quiere tener|no quiere casarse)/i.test(clean);

    // Patterns that indicate partner is being accused (partner as subject doing something to user)
    const partnerAccusationPatterns = [
      /mi novia .*no quiere/i,
      /mi novio .*no quiere/i,
      /mi novia .*me/i,
      /mi novio .*me/i,
      /mi novia .*prefiere/i,
      /mi novio .*prefiere/i,
      /mi novia .*no me/i,
      /mi novio .*no me/i,
      /mi novia .*me abandona/i,
      /mi novio .*me abandona/i,
      /mi novia .*me ignora/i,
      /mi novio .*me ignora/i,
      /mi novia .*no quiere casarse conmigo/i,
      /mi novio .*no quiere casarse conmigo/i,
      /mi novia .*no quiere tener hijos conmigo/i,
      /mi novio .*no quiere tener hijos conmigo/i,
      /mi novia .*no quiere darme/i,
      /mi novio .*no quiere darme/i,
      /mi novia .*no me deja gastar/i,
      /mi novio .*no me deja gastar/i,
      /mi novia .*no me quiere comprar/i,
      /mi novio .*no me quiere comprar/i
    ];

    // Patterns that indicate user is the one refusing / admitting guilt / doing the problematic action
    const userAccusationPatterns = [
      /no quiero .*mi novia/i,
      /no quiero .*mi novio/i,
      /no quiero casarme/i,
      /no quiero tener hijos/i,
      /no quiero darle/i,
      /no quiero comprarle/i,
      /yo prefiero .*mis amigas/i,
      /yo prefiero .*mis amigos/i,
      /soy culpable/i,
      /tengo la culpa/i,
      /soy pepito/i,
      /soy pepita/i,
      /me fui a jugar/i,
      /me fui/i,
      /la deje/i,
      /no respondi/i
    ];

    // Generic keyword lists (keep previous behavior)
    const culpaUsuario = [
      "ignore", "abandone", "no hable", "frio", "ghosting",
      "me fui", "la deje", "no respondi", "la ignore",
      "me fui a jugar", "jugar a la pelota", "deporte",
      "yo prefiero", "prefiero a mis amigas", "prefiero a mis amigos",
      "no quiero casarme", "no quiero tener hijos", "no quiero darle", "no quiero comprarle", "no quiero comprarme"
    ];

    const culpaPareja = [
      "me ignora", "me dejo en visto", "no responde",
      "no me habla", "me trata mal", "me controla",
      "no me deja", "prefiere a sus amigas",
      "prefiere a sus amigos", "no quiere", "rechaza",
      "pepe", "pesado", "no quiere casarse", "no quiere casarse conmigo",
      "no quiere tener hijos", "no quiere tener hijos conmigo",
      "no quiere darme un gatito", "no quiere que tenga un gato",
      "sale con sus amigas", "sale con sus amigos", "no me quiere comprar"
    ];

    const mutuo = [
      "pelea", "discusion", "problema", "enojo", "malentendido", "discusión"
    ];

    // Apply generic keyword adjustments first
    culpaUsuario.forEach(w => {
      if (clean.includes(w)) {
        user += 18;
        partner -= 7;
      }
    });

    culpaPareja.forEach(w => {
      if (clean.includes(w)) {
        partner += 18;
        user -= 7;
      }
    });

    mutuo.forEach(w => {
      if (clean.includes(w)) {
        user += 8;
        partner += 8;
      }
    });

    // PETS: comprehensive patterns (many variations)
    const petPatternsPartnerRefusesToUser = [
      /mi novia .*no quiere darme .*gat/i,
      /mi novio .*no quiere darme .*gat/i,
      /mi novia .*no me quiere dar .*gat/i,
      /mi novio .*no me quiere dar .*gat/i,
      /mi novia .*no quiere que tenga .*gat/i,
      /mi novio .*no quiere que tenga .*gat/i,
      /mi novia .*no quiere comprarme .*gat/i,
      /mi novio .*no quiere comprarme .*gat/i,
      /mi novia .*no me quiere comprar .*gat/i,
      /mi novio .*no me quiere comprar .*gat/i
    ];

    const petPatternsUserRefusesToPartner = [
      /no quiero darle .*gat/i,
      /no quiero darle .*gatito/i,
      /no quiero darle .*gatita/i,
      /no quiero comprarle .*gat/i
    ];

    // Check partner-accused and user-accused flags
    let partnerAccused = false;
    let userAccused = false;

    for (const re of partnerAccusationPatterns) {
      if (re.test(clean)) {
        partnerAccused = true;
        break;
      }
    }

    for (const re of userAccusationPatterns) {
      if (re.test(clean)) {
        userAccused = true;
        break;
      }
    }

    // Strong explicit cases that must blame the speaker when "mi novio" is the subject
    // The user requested that when the subject is "mi novio" the speaker (user) should receive more blame.
    // We'll apply a stronger inversion for the most important conflict types.
    const strongPartnerRefusalPatterns = [
      /mi novio .*no quiere tener hijos conmigo/i,
      /mi novio .*no quiere casarse conmigo/i,
      /mi novio .*no quiere darme .*gat/i,
      /mi novio .*no me deja gastar/i,
      /mi novio .*no me quiere comprar/i,
      /mi novio .*no quiere comprarme/i
    ];

    for (const re of strongPartnerRefusalPatterns) {
      if (re.test(clean)) {
        // Strong inversion: blame the speaker (user) heavily
        user += 45;
        partner -= 25;
      }
    }

    // If partnerAccused and not userAccused, decide blame with gender-aware inversion
    if (partnerAccused && !userAccused) {
      // If explicit "mi novio" subject and not already handled by strong patterns, invert blame to user
      if (explicitMiNovioSubject) {
        user += 35;
        partner -= 20;
      } else {
        // default: partner accused -> partner gets more blame
        partner += 35;
        user -= 20;
      }
    } else if (userAccused && !partnerAccused) {
      // If user is accused -> user gets more blame
      user += 35;
      partner -= 20;
    } else if (partnerAccused && userAccused) {
      // Mixed statements: both share extra responsibility
      user += 15;
      partner += 15;
    } else {
      // No clear single accused detected: apply heuristics with gender-aware inversion

      // 1) Priority / friends
      if ((clean.includes("prefiere a sus amigas") || clean.includes("prefiere a sus amigos") || clean.includes("prefiere a sus amigas antes que a mi") || clean.includes("prefiere a sus amigos antes que a mi") || clean.includes("sale con sus amigas") || clean.includes("sale con sus amigos"))) {
        if (explicitMiNovioSubject) {
          // If it's "mi novio prefiere..." invert and blame user
          user += 30;
          partner -= 15;
        } else {
          // default: partner accused
          partner += 30;
          user -= 15;
        }
      } else if (clean.includes("yo prefiero") || clean.includes("prefiero a mis amigas") || clean.includes("prefiero a mis amigos")) {
        user += 30;
        partner -= 15;
      }

      // 2) Expectations materiales / mansion / compras
      if ((clean.includes("no quiere comprarme") || clean.includes("no me quiere comprar") || clean.includes("no quiere comprarme una") || clean.includes("no quiere comprarme una mansion") || clean.includes("no quiere comprarme una mansión") || clean.includes("no me quiere comprar una"))) {
        if (explicitMiNovioSubject) {
          // "mi novio no quiere comprarme..." -> invert and blame user
          user += 35;
          partner -= 20;
        } else {
          // default: partner accused
          partner += 30;
          user -= 15;
        }
      } else if (clean.includes("no quiero comprarle") || clean.includes("no quiero comprarle una") || clean.includes("no quiero comprarle una mansion")) {
        // user refuses to buy for partner -> partner gets more blame
        partner += 35;
        user -= 20;
      }

      // 3) "no me deja gastar" / tarjeta
      if (clean.includes("no me deja gastar") || clean.includes("no me deja gastar su tarjeta") || clean.includes("no me deja gastar la tarjeta")) {
        if (explicitMiNovioSubject) {
          // "mi novio no me deja gastar" -> invert and blame user
          user += 30;
          partner -= 15;
        } else {
          // default: partner blocking user spending -> partner more culpable
          partner += 30;
          user -= 15;
        }
      }

      // 4) Rechazo a casarse
      if (clean.includes("no quiere casarse conmigo") || clean.includes("no quiere casarse")) {
        if (explicitMiNovioSubject) {
          // "mi novio no quiere casarse conmigo" -> invert and blame user
          user += 35;
          partner -= 20;
        } else if (explicitMiNoviaSubject) {
          // "mi novia no quiere casarse conmigo" -> partner blamed
          partner += 35;
          user -= 20;
        } else if (clean.includes("no quiero casarme") || clean.includes("no quiero casarme con")) {
          // user refuses -> user blamed
          user += 35;
          partner -= 20;
        }
      }

      // 5) Rechazo a tener hijos
      if (clean.includes("no quiere tener hijos conmigo") || clean.includes("no quiere tener hijos") || clean.includes("no quiere hijos")) {
        if (explicitMiNovioSubject) {
          // "mi novio no quiere tener hijos conmigo" -> invert and blame user (strong)
          user += 45;
          partner -= 25;
        } else if (explicitMiNoviaSubject) {
          partner += 35;
          user -= 20;
        } else if (clean.includes("no quiero tener hijos") || clean.includes("no quiero tener hijos con")) {
          user += 35;
          partner -= 20;
        }
      }

      // 6) Rechazo a mascotas / gatito - comprehensive handling
      // If partner is explicitly named and refuses to give/buy a pet for the speaker
      const partnerRefusesPet = petPatternsPartnerRefusesToUser.some(re => re.test(clean));
      const userRefusesPet = petPatternsUserRefusesToPartner.some(re => re.test(clean));

      if (partnerRefusesPet) {
        if (explicitMiNovioSubject) {
          // "mi novio no quiere darme un gatito" -> invert and blame user
          user += 35;
          partner -= 20;
        } else {
          partner += 35;
          user -= 20;
        }
      } else if (userRefusesPet) {
        // user refuses to give/buy pet -> partner blamed
        partner += 30;
        user -= 15;
      } else {
        // If generic pet phrases appear without explicit subject, apply reasonable defaults
        if (clean.includes("no quiere darme") && (clean.includes("gat") || clean.includes("gatito") || clean.includes("gatita") || clean.includes("gato") || clean.includes("gata"))) {
          // If speaker says "no quiere darme" assume partner refused -> partner blamed
          partner += 30;
          user -= 15;
        }
      }
    }

    // Nicknames / insults handling: respect inversion rule for "mi novio"
    if (/(mi novio es pepito|mi novio es pepe)/i.test(clean)) {
      // If speaker says "mi novio es pepito" and user asked inversion, increase user blame
      user += 25;
      partner -= 10;
    } else if (/(mi novia es pepita|mi novia es pepe)/i.test(clean)) {
      partner += 25;
      user -= 10;
    }

    if (/(soy pepito|soy pepita|soy culpable|tengo la culpa|soy el culpable|soy la culpable)/i.test(clean)) {
      user += 25;
      partner -= 10;
    }

    // Abandono por salir/jugar
    if (clean.includes("me abandona por jugar") || clean.includes("me deja por jugar") || clean.includes("sale con sus amigas") || clean.includes("sale con sus amigos")) {
      if (explicitMiNovioSubject) {
        user += 25;
        partner -= 10;
      } else {
        partner += 30;
        user += 5;
      }
    }

    // Acusaciones directas "me acusa" -> partner more culpable unless "mi novio" inversion applies
    if (clean.includes("me acusa") || clean.includes("ella me acusa") || clean.includes("me culpa")) {
      if (explicitMiNovioSubject) {
        user += 20;
        partner -= 10;
      } else {
        partner += 20;
        user -= 10;
      }
    }

    // If text explicitly states "ella tiene la culpa" or "mi novia tiene la culpa" -> partner more culpable
    if (clean.includes("ella tiene la culpa") || clean.includes("ella es culpable") || clean.includes("mi novia tiene la culpa")) {
      partner += 25;
      user -= 10;
    }
    // If text explicitly states "mi novio tiene la culpa" and user asked inversion, blame user
    if (clean.includes("mi novio tiene la culpa") || clean.includes("el tiene la culpa") || clean.includes("mi novio es culpable")) {
      user += 25;
      partner -= 10;
    }

    // Ensure values are within reasonable bounds before normalization
    user = Math.max(-1000, Math.min(1000, user));
    partner = Math.max(-1000, Math.min(1000, partner));

    // Normalize to 0-100 and make them sum to 100 while preserving relative differences
    user = Math.round(Math.max(0, Math.min(100, user)));
    partner = Math.round(Math.max(0, Math.min(100, partner)));

    if (user === 0 && partner === 0) {
      user = 50;
      partner = 50;
    }

    // Final adjustment so they sum exactly 100
    let total = user + partner;
    if (total !== 100) {
      if (total === 0) {
        user = 50;
        partner = 50;
      } else {
        const factor = 100 / total;
        user = Math.round(user * factor);
        partner = 100 - user;
      }
    }

    return { user, partner };
  };

  return (
    <main className="app">
      <Navbar />

      <div className="background"></div>
      <div className="glow"></div>
      <div className="mouse-glow"></div>

      <section className="hero-card">

        <p className="subtitle">Jurisprudencia Oficial</p>

        <h1 className="hero-title">
          Casos <span>Históricos</span>
        </h1>

        <div className="articles">
          <article className="article-card">
            <p className="article-number">Caso 01</p>
            <h2>La última papa frita</h2>
            <p>Compartir comida como amor.</p>
          </article>

          <article className="article-card">
            <p className="article-number">Caso 02</p>
            <h2>Respuesta tardía</h2>
            <p>Ausencia emocional.</p>
          </article>
        </div>

        <div className="input-caso">
          <textarea
            placeholder="Describe el caso..."
            value={casoInput}
            onChange={(e) => setCasoInput(e.target.value)}
          />
        </div>

        <div className="button-container">
          <button onClick={dictarSentencia}>
            Dictar sentencia
          </button>
        </div>

        {sentencia && (
          <div className="sentencia-box">
            <h2>{sentencia}</h2>
          </div>
        )}

        {culpa && (
          <div className="culpa-box">
            <h3>⚖️ Distribución de responsabilidad</h3>

            <div className="culpa-bar">
              <div className="culpa-user" style={{ width: `${culpa.user}%` }}>
                Maikol {culpa.user}%
              </div>

              <div className="culpa-partner" style={{ width: `${culpa.partner}%` }}>
                Javiera {culpa.partner}%
              </div>
            </div>
          </div>
        )}

        {articuloRecomendado && (
          <div className="articulo-recomendado">
            <h3>📜 {articuloRecomendado.id}. {articuloRecomendado.titulo}</h3>
            <p>{articuloRecomendado.def}</p>
          </div>
        )}

      </section>
    </main>
  );
}
