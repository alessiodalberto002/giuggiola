// import imgAboutDx from "../../../src/assets/img/img-about-dx.png"
// import imgAboutSx from "../../../src/assets/img/img-about-sx.png"
// import lineAbout from "../../../src/assets/img/line-about.svg"



// const About = () => {
//     return (
//         <section className="hero-background-section overflow-hidden padding-about">
//             <div className="container text-white padding-about">

//                 {/* PRIMA SEZIONE: Testo SX, Immagine DX */}
//                 <div className="row align-items-center mb-5 gy-4">
//                     <div className="col-12 col-lg-6 order-2 order-lg-1">
//                         <div className="content-wrapper">
//                             <h1 className="fw-bold"><span className="Gelica-Light text-light text-about-desktop text-about-mobile">About</span> <span className="d-inline-block Gelica-Black text-light position-relative text-about-desktop text-about-mobile" style={{background:"#B5C36A", padding:"3px 15px", borderRadius:"25px", transform: "rotate(-10deg)"}}>me</span></h1>
//                             <div className="position-absolute position-line-about position-line-about-mobile">
//                                 <img className="w-100 h-100" src={lineAbout} alt="" />
//                             </div>
//                             <h2 className="h3 mb-4">Dietro Giuggiola ci sono io, Giorgia.</h2>
//                             <p className="lead">
//                                 Il mio mondo può sembrare caotico a prima vista, ma vi assicuro che c’è un metodo preciso dietro questa follia creativa.
//                                 Credo che ogni attività abbia una storia unica. Il mio lavoro è individuarne il valore speciale per renderlo visibile a tutti.
//                                 Unisco ascolto, empatia e creatività a una precisa strategia, costruendo ponti reali tra il tuo brand e il suo pubblico.
//                             </p>
//                             <h2 className="h4 mt-4 text-accent">Diamo forma alla tua storia, insieme.</h2>
//                         </div>
//                     </div>

//                     <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex justify-content-center">
//                         <div className="img-container-about">
//                             <img className="img-fluid rounded-4 object-fit-cover" src={imgAboutDx} alt="Giorgia" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* SECONDA SEZIONE: Immagine SX, Testo DX */}
//                 <div className="row align-items-center gy-4 mt-5">
//                     <div className="col-12 col-lg-6 d-flex justify-content-center">
//                         <div className="img-container-about w-75 h-75">
//                             <img className="img-fluid rounded-4 object-fit-cover" src={imgAboutSx} alt="Giuggiola" />
//                         </div>
//                     </div>

//                     <div className="col-12 col-lg-6">
//                         <div className="content-wrapper">
//                             <h1 className="fw-bold"><span className="Gelica-Light text-light text-about-desktop text-about-mobile">Perchè</span></h1> 
//                             <h1 style={{ marginTop:"-20px", marginBottom:"25px"}}><span className="d-inline-block Gelica-Black text-light text-about-desktop text-about-mobile" style={{background:"#B5C36A", padding:"3px 15px", borderRadius:"25px", transform: "rotate(-5deg)"}}>giuggiola</span> <span className="Gelica-Light text-light text-about-desktop text-about-mobile">?</span></h1>
//                             <h2 className="h3 mb-4">È una parola che suona leggera, piena e felice.</h2>
//                             <p className="lead">
//                                 Mi ricorda l’infanzia, le giornate in campagna, l’aria fresca, la spensieratezza di quando tutto era semplice.
//                                 Una versione di me che non voglio perdere, e che porto dentro ogni progetto.
//                             </p>
//                             <h2 className="h4 mt-4 text-accent">È proprio da lì che nasce il mio modo di creare.</h2>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default About;


import { motion } from "framer-motion"
import imgAboutDx from "../../../src/assets/img/img-about-dx.png"
import imgAboutSx from "../../../src/assets/img/img-about-sx.png"

const About = () => {
    // Varianti per il testo (fade in + scorrimento laterale leggero)
    const textVariantsLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
        exit: { opacity: 0, x: -30, transition: { duration: 0.3 } }
    }

    const textVariantsRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
        exit: { opacity: 0, x: 30, transition: { duration: 0.3 } }
    }

    // Varianti per le immagini (effetto zoom out soft + comparsa dal basso)
    const imageVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 60, damping: 14, delay: 0.1 } },
        exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.4 } }
    }

    return (
        <section className="hero-background-section overflow-hidden py-20 sm:py-28 md:py-36">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 text-white">

                {/* PRIMA SEZIONE: Testo SX, Immagine DX */}
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 mb-24 md:mb-36">

                    {/* Testo */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={textVariantsLeft}
                        initial="hidden"
                        whileInView="visible"
                        exit="exit"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <h2 className="font-bold flex gap-3 items-center leading-none mb-6">
                            <span className="Gelica-Light text-white text-[clamp(3.5rem,7vw,5.5rem)]">About </span>
                            <span
                                className="inline-block Gelica-Black text-white text-[clamp(3.5rem,7vw,5.5rem)] align-middle"
                                style={{
                                    background: "#B5C36A",
                                    padding: "4px 20px",
                                    borderRadius: "30px",
                                    transform: "rotate(-6deg)", // Rotazione ammorbidita per migliorare la leggibilità
                                    transformOrigin: "center"
                                }}
                            >
                                me
                            </span>
                        </h2>

                        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white tracking-tight">
                            Dietro Giuggiola ci sono io, Giorgia.
                        </h3>
                        <p className="text-base sm:text-lg leading-relaxed text-white/85 max-w-xl">
                            Il mio mondo può sembrare caotico a prima vista, ma vi assicuro che c'è un metodo
                            preciso dietro questa follia creativa. Credo che ogni attività abbia una storia unica.
                            Il mio lavoro è individuarne il valore speciale per renderlo visibile a tutti.
                            Unisco ascolto, empatia e creatività a una precisa strategia, costruendo ponti reali
                            tra il tuo brand e il suo pubblico.
                        </p>
                        <p className="text-lg sm:text-xl mt-6 text-accent font-bold tracking-wide">
                            Diamo forma alla tua storia, insieme.
                        </p>
                    </motion.div>

                    {/* Immagine */}
                    <motion.div
                        className="w-full lg:w-1/2 flex justify-center"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        exit="exit"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className="w-full max-w-xl transition-transform duration-500">
                            <img
                                className="w-full h-full object-cover rounded-3xl"
                                src={imgAboutDx}
                                alt="Giorgia - Fondatrice dello studio creativo Giuggiola"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* SECONDA SEZIONE: Immagine SX, Testo DX */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Immagine */}
                    <motion.div
                        className="w-full lg:w-1/2 flex justify-center"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        exit="exit"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className="w-full max-w-md aspect-square transition-transform duration-500">
                            <img
                                className="w-full h-full object-cover rounded-3xl"
                                src={imgAboutSx}
                                alt="Elementi visivi e ispirazioni del brand Giuggiola"
                            />
                        </div>
                    </motion.div>

                    {/* Testo */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={textVariantsRight}
                        initial="hidden"
                        whileInView="visible"
                        exit="exit"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <h2 className="font-bold mb-6">
                            <h1 className="fw-bold"><span className="Gelica-Light text-light text-about-desktop text-about-mobile">Perchè</span></h1> 
                            <h1 style={{ marginTop:"-20px", marginBottom:"25px"}}><span className="d-inline-block Gelica-Black text-light text-about-desktop text-about-mobile" style={{background:"#B5C36A", padding:"3px 15px", borderRadius:"25px", transform: "rotate(-5deg)"}}>giuggiola</span> <span className="Gelica-Light text-light text-about-desktop text-about-mobile">?</span></h1>
                        </h2>

                        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white tracking-tight">
                            È una parola che suona leggera, piena e felice.
                        </h3>
                        <p className="text-base sm:text-lg leading-relaxed text-white/85 max-w-xl">
                            Mi ricorda l'infanzia, le giornate in campagna, l'aria fresca, la spensieratezza
                            di quando tutto era semplice. Una versione di me che non voglio perdere, e che porto
                            dentro ogni progetto.
                        </p>
                        <p className="text-lg sm:text-xl mt-6 text-accent font-bold tracking-wide">
                            È proprio da lì che nasce il mio modo di creare.
                        </p>
                    </motion.div>
                </div>

                {/* Sottile tocco finale UX: Margine di chiusura */}
                <div className="pt-8" />
            </div>
        </section>
    );
};

export default About;
