import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Codigo from "./pages/Codigo";
import Jurisprudencia from "./pages/Jurisprudencia";
import Evidencias from "./pages/Evidencias";
import Sentencia from "./pages/Sentencia";

function App() {

  
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/codigo" element={<Codigo />} />

        <Route path="/jurisprudencia" element={<Jurisprudencia />} />

        <Route path="/evidencias" element={<Evidencias />} />

        <Route path="/sentencia" element={<Sentencia />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;