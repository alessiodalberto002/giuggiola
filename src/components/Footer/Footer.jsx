import Logo from "../Logo";
import logoImage from "../../../src/assets/img/logo-giuggiola_prova.png";
import FlameFooter from "../../../src/assets/img/flame-footer.svg"

const Footer = () => {
    return (
        <>
            {/* FOOTER */}
            <footer id="contatti" className="w-100 mt-auto" style={{ background: "#9F275E" }}>
                <div className="container pt-5 pb-4">
                    {/* Logo e Titolo basati su source 1 e 2 */}
                    <div className="text-center mb-5">
                        <div className="mb-3">
                            <Logo image={logoImage} />
                        </div>
                        <h1 className="Gelica-Black text-light m-0 display-5 fw-bold">
                            Diamo vita alla tua visione <span style={{ color: "#F6AC60" }}>insieme.</span>
                        </h1>
                    </div>

                    {/* Contatti basati su source 3 e 4 */}
                    <div className="row justify-content-center g-4 mb-5">
                        {/* SEZIONE EMAIL */}
                        <div className="col-12 col-md-auto d-flex align-items-center justify-content-center gap-2">
                            <img src={FlameFooter} alt="Sfondo" style={{ width: "35px", height: "35px" }} />
                            <a
                                href="mailto:giuggiola.studiocreativo@gmail.com"
                                className="text-light text-decoration-none fs-5"
                            >
                                giuggiola.studiocreativo@gmail.com
                            </a>
                        </div>

                        {/* SEZIONE WHATSAPP */}
                        <div className="col-12 col-md-auto d-flex align-items-center justify-content-center gap-2">
                            <img src={FlameFooter} alt="Sfondo" style={{ width: "35px", height: "35px" }} />
                            <a
                                href="https://wa.me/393337591610"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-light text-decoration-none fs-5"
                            >
                                +39 3337591610
                            </a>
                        </div>
                    </div>

                    {/* Social Icons basati su source 5 e 6 */}
                    <div className="d-flex justify-content-center align-items-center gap-5 pb-4" style={{ fontSize: "30px" }}>
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

                {/* Barra Copyright Gialla */}
                <div className="w-100 d-flex align-items-center justify-content-center" style={{ minHeight: "70px", background: "#F6AC60" }}>
                    <div className="container text-center">
                        <p className="m-0 fw-medium px-3 text-dark">
                            Copyright © 2026 Giorgia Speziale | Privacy Policy
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;