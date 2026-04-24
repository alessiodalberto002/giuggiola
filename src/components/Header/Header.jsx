import { Link } from 'react-router-dom';

import Logo from "../Logo"
import Navbar from "./Navbar"
import logoImage from "../../../src/assets/img/logo-giuggiola_prova.png";

const Header = () => {
    return (
        <header className="fixed-top">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Il Logo rimane sempre visibile a sinistra */}
                <Logo image={logoImage} />
                
                {/* La Navbar gestisce il suo comportamento responsive */}
                <Navbar />
            </div>
        </header>
    )
}

export default Header