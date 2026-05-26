import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from "../Logo"
import Navbar from "./Navbar"
import logoImage from "../../../src/assets/img/logo-giuggiola_prova.png";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogoClick = (e) => {
        // Se siamo già in home, scrolla semplicemente su in modo fluido senza ricaricare
        if (location.pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        // Se siamo su un'altra pagina (/fabbri, etc.), react-router ci manda in "/"
    };

    return (
        <header className="fixed-top">
            <div className="container d-flex justify-content-between align-items-center">
                
                <Link 
                    to="/" 
                    onClick={handleLogoClick}
                    className="d-inline-block transition-transform active:scale-95" 
                    style={{ cursor: "pointer" }}
                >
                    <Logo image={logoImage} />
                </Link>

                <Navbar />
            </div>
        </header>
    )
}

export default Header