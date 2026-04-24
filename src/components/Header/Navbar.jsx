import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // IMPORTA LINK
import Logo from "../Logo";
import logoImage from "../../../src/assets/img/logo-giuggiola_prova.png";
import FlameFooter from "../../assets/img/flame-footer.svg"

const navLinks = [
    { id: 1, linkName: "Home", path: "/#home" },
    { id: 2, linkName: "Lavori", path: "/#lavori" }, // Punta all'id "lavori"
    { id: 3, linkName: "Contatti", path: "/#contatti" }, // Punta all'id "contatti"
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        if (window.innerWidth < 992) {
            document.body.style.overflow = newState ? "hidden" : "auto";
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                document.body.style.overflow = "auto";
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg p-0">
            {/* 1. HAMBURGER */}
            <button
                className={`navbar-toggler border-0 shadow-none d-lg-none ${isOpen ? 'active' : ''}`}
                type="button"
                onClick={toggleMenu}
                style={{ zIndex: 9999 }}
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* 2. MENU DESKTOP */}
            <div className="d-none d-lg-block">
                <ul className="d-flex gap-5 list-unstyled m-0">
                    {navLinks.map((link) => (
                        <li key={link.id} className="fs-5 fw-medium Gelica-Black">
                            {/* Usiamo <a> per i link interni per garantire lo scroll corretto */}
                            <a href={link.path} className="text-decoration-none text-dark">
                                {link.linkName}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* 3. MENU MOBILE FULL-SCREEN */}
            <div className={` menu-full-screen ${isOpen ? "open" : ""}`} style={{ background: "#9F275E" }}>
                <div className="d-flex flex-column mt-5">
                    <ul className="list-unstyled text-center">
                        {navLinks.map((link) => (
                            <li className="mb-4 Gelica-Black" key={link.id}>
                                {/* SOSTITUITO <a> CON <Link> */}
                                <a
                                    className="display-4 fw-bold text-decoration-none"
                                    style={{ color: "#F6AC60" }}
                                    href={link.path}
                                    onClick={toggleMenu}
                                >
                                    {link.linkName}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="text-center">
                        <div className="m-0">
                            <Logo image={logoImage}/>
                        </div>
                        <h1 className="Gelica-Black text-light m-0 fw-bold mb-3" style={{fontSize:"35px"}}>
                            Diamo vita alla tua visione <span style={{ color: "#F6AC60" }}>insieme.</span>
                        </h1>
                    </div>

                    <div className="col-12 col-md-auto d-flex align-items-center justify-content-center gap-2">
                        <img src={FlameFooter} alt="Sfondo" style={{ width: "25px", height: "25px" }} />
                        <a
                            href="mailto:giuggiola.studiocreativo@gmail.com"
                            className="text-light text-decoration-none"
                            style={{ fontSize: "20px" }}
                        >
                            giuggiola.studiocreativo@gmail.com
                        </a>
                    </div>

                    <div className="col-12 col-md-auto d-flex align-items-center justify-content-center gap-2 mt-2">
                        <img src={FlameFooter} alt="Sfondo" style={{ width: "25px", height: "25px" }} />
                        <a
                            href="https://wa.me/393337591610"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light text-decoration-none"
                            style={{ fontSize: "20px" }}
                        >
                            +39 3337591610
                        </a>
                    </div>

                    <div className="d-flex justify-content-center align-items-center gap-5 mt-4" style={{ fontSize: "30px" }}>
                        <a
                            href="https://www.instagram.com/giuggiola_creativa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            className="text-light text-decoration-none"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/people/Giuggiola-studio-creativo/61576450587776/" className="text-light text-decoration-none" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f text-white"></i></a>
                        <a href="#" className="text-light text-decoration-none"><i className="fa-brands fa-linkedin-in text-white"></i></a>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;