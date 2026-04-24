import bgHero from "../../../src/assets/img/bg-hero.jpg"

const Hero = () => {
    return (
        <section id="home" className="vh-100 position-relative z-1 d-flex align-items-center overflow-hidden">

            {/* BACKGROUND IMAGE - Ora copre tutto il contenitore */}
            <div className="w-100 position-absolute bottom-img-hero z-n1">
                <img
                    className="w-100 h-100 img-hero-resp"
                    src={bgHero}
                    alt="Background Hero"
                />
            </div>

            <div className="container position-relative" style={{ bottom: "100px" }}>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 text-center">

                        {/* TITOLI: Usiamo display-x per scalarli automaticamente */}
                        <h1 className="display-4 mb-0 Gelica-Light">Identità visive che</h1>
                        <h1 className="display-3 fw-bold mb-4 Gelica-Black">
                            Ti somigliano <span className="py-1 px-3 rounded-pill d-inline-block mt-2 mt-md-0 Gelica-Black text-light" style={{ background: "#F6AC60", transform: "rotate(5deg)" }}>davvero</span>
                        </h1>

                        {/* PARAGRAFO: Larghezza variabile in base allo schermo */}
                        <div className="d-flex justify-content-center mb-4">
                            <p className="lead w-100 w-md-75 fw-bold">
                                Ascolto la tua storia e la trasformo in un’identità visiva autentica,
                                pensata su misura per raccontare davvero chi sei.
                            </p>
                        </div>

                        <div className="d-flex justify-content-center align-items-center">
                            <div className="width-desktop-btn-hero width-mobile-btn-hero d-flex justify-content-center align-items-center Gelica-Black" style={{ background: "#9F275E", borderRadius: "21px" }}>
                                <a href="mailto:giuggiola.studiocreativo@gmail.com" className="text-decoration-none">
                                    <button type="button" class="btn text-light fs-4">
                                        Parliamone
                                    </button>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero