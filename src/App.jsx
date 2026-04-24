import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import FabbriPage from "./pages/FabbriPage";
import MostResistancePortfolio from "./pages/MostResistancePortfolio";
import FidoPage from "./pages/FidoPage";
import RadiciCulturaliPage from "./pages/RadiciCulturaliPage";
import RaccoltaIllustrata from "./pages/RaccoltaIllustrata";
import LumiaPage from "./pages/LumiaPage";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* La tua Home attuale */}
        <Route path="/" element={<Main />} />

        {/* La nuova pagina Fabbri */}
        <Route path="/fabbri" element={<FabbriPage />} />
        <Route path="/mostresistance" element={<MostResistancePortfolio />} />
        <Route path="/fido" element={<FidoPage />} />
        <Route path="/rc" element={<RadiciCulturaliPage />} />
        <Route path="/lumia" element={<LumiaPage />} />
        <Route path="/ri" element={<RaccoltaIllustrata />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;