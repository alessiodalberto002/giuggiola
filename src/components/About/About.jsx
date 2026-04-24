import imgAboutDx from "../../../src/assets/img/img-about-dx.png"
import imgAboutSx from "../../../src/assets/img/img-about-sx.png"
import lineAbout from "../../../src/assets/img/line-about.svg"



const About = () => {
    return (
        <section className="hero-background-section overflow-hidden padding-about">
            <div className="container text-white padding-about">

                {/* PRIMA SEZIONE: Testo SX, Immagine DX */}
                <div className="row align-items-center mb-5 gy-4">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        <div className="content-wrapper">
                            <h1 className="display-4 fw-bold"><span className="Gelica-Light text-light" style={{fontSize:"82px"}}>About</span> <span className="d-inline-block Gelica-Black text-light position-relative" style={{background:"#B5C36A", fontSize:"82px", padding:"3px 15px", borderRadius:"25px", transform: "rotate(-10deg)"}}>me</span></h1>
                            <div className="position-absolute position-line-about position-line-about-mobile">
                                <img className="w-100 h-100" src={lineAbout} alt="" />
                            </div>
                            <h2 className="h3 mb-4">Dietro Giuggiola ci sono io, Giorgia.</h2>
                            <p className="lead">
                                Il mio mondo può sembrare caotico a prima vista, ma vi assicuro che c’è un metodo preciso dietro questa follia creativa.
                                Credo che ogni attività abbia una storia unica. Il mio lavoro è individuarne il valore speciale per renderlo visibile a tutti.
                                Unisco ascolto, empatia e creatività a una precisa strategia, costruendo ponti reali tra il tuo brand e il suo pubblico.
                            </p>
                            <h2 className="h4 mt-4 text-accent">Diamo forma alla tua storia, insieme.</h2>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex justify-content-center">
                        <div className="img-container-about">
                            <img className="img-fluid rounded-4 object-fit-cover" src={imgAboutDx} alt="Giorgia" />
                        </div>
                    </div>
                </div>

                {/* SECONDA SEZIONE: Immagine SX, Testo DX */}
                <div className="row align-items-center gy-4 mt-5">
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <div className="img-container-about w-75 h-75">
                            <img className="img-fluid rounded-4 object-fit-cover" src={imgAboutSx} alt="Giuggiola" />
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="content-wrapper">
                            <h1 className="display-4 fw-bold"><span className="Gelica-Light text-light" style={{fontSize:"82px"}}>Perchè</span></h1> 
                            <h1 style={{ marginTop:"-20px", marginBottom:"25px"}}><span className="d-inline-block Gelica-Black text-light display-4" style={{background:"#B5C36A", fontSize:"82px", padding:"3px 15px", borderRadius:"25px", transform: "rotate(-5deg)"}}>giuggiola</span> <span className="Gelica-Light text-light" style={{fontSize:"90px"}}>?</span></h1>
                            <h2 className="h3 mb-4">È una parola che suona leggera, piena e felice.</h2>
                            <p className="lead">
                                Mi ricorda l’infanzia, le giornate in campagna, l’aria fresca, la spensieratezza di quando tutto era semplice.
                                Una versione di me che non voglio perdere, e che porto dentro ogni progetto.
                            </p>
                            <h2 className="h4 mt-4 text-accent">È proprio da lì che nasce il mio modo di creare.</h2>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;