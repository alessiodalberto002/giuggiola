// import bgHero from "../../../src/assets/img/bg-hero.jpg"
// import bgHeroMobile from "../../../src/assets/img/bg-hero copia.jpg"

// const Hero = () => {
//     return (
//         <section id="home" className="vh-100 position-relative z-1 d-flex align-items-center overflow-hidden">

//             {/* BACKGROUND IMAGE - Ora copre tutto il contenitore */}
//             <div className="w-100 position-absolute bottom-img-hero z-n1">
//                 <picture>
//                     {/* Immagine per Mobile (es. sotto i 768px) */}
//                     <source media="(max-width: 767px)" srcSet={bgHeroMobile} />

//                     {/* Immagine per Desktop (default) */}
//                     <img
//                         className="w-100 h-100 img-hero-resp"
//                         src={bgHero}
//                         alt="Background Hero"
//                     />
//                 </picture>
//             </div>

//             <div className="container position-relative" style={{ bottom: "100px" }}>
//                 <div className="row justify-content-center">
//                     <div className="col-12 col-md-10 col-lg-8 text-center">

//                         {/* TITOLI: Usiamo display-x per scalarli automaticamente */}
//                         <h1 className="display-4 mb-0 Gelica-Light">Identità visive che</h1>
//                         <h1 className="display-3 fw-bold mb-4 Gelica-Black">
//                             Ti somigliano <span className="py-1 px-3 rounded-pill d-inline-block mt-2 mt-md-0 Gelica-Black text-light" style={{ background: "#F6AC60", transform: "rotate(5deg)" }}>davvero</span>
//                         </h1>

//                         {/* PARAGRAFO: Larghezza variabile in base allo schermo */}
//                         <div className="d-flex justify-content-center mb-4">
//                             <p className="lead w-100 w-md-75 fw-bold">
//                                 Ascolto la tua storia e la trasformo in un’identità visiva autentica,
//                                 pensata su misura per raccontare davvero chi sei.
//                             </p>
//                         </div>

//                         <div className="d-flex justify-content-center align-items-center">
//                             <div className="width-desktop-btn-hero width-mobile-btn-hero d-flex justify-content-center align-items-center Gelica-Black" style={{ background: "#9F275E", borderRadius: "21px" }}>
//                                 <a href="mailto:giuggiola.studiocreativo@gmail.com" className="text-decoration-none">
//                                     <button type="button" class="btn text-light fs-4">
//                                         Parliamone
//                                     </button>
//                                 </a>
//                             </div>
//                         </div>


//                     </div>
//                 </div>
//             </div>

//         </section>
//     )
// }

// export default Hero


import { motion } from "framer-motion"
import bgHero from "../../../src/assets/img/bg-hero.jpg"
import bgHeroMobile from "../../../src/assets/img/bg-hero copia.jpg"

const Hero = () => {
    // Varianti per l'animazione di entrata e uscita degli elementi testuali
    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.6 }
        },
        exit: {
            y: -40,
            opacity: 0,
            transition: { duration: 0.4 }
        }
    }

    // Varianti specifiche per l'immagine di sfondo che sale da sotto
    const bgVariants = {
        hidden: { y: "10%", opacity: 0, scale: 1.05 },
        visible: {
            y: "0%",
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 60, damping: 18, duration: 0.8 }
        },
        exit: {
            y: "-5%",
            opacity: 0,
            transition: { duration: 0.5 }
        }
    }

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden z-10"
        >
            {/* Background animato in entrata e uscita */}
            <motion.div
                className="absolute inset-0 -z-10 w-full h-full"
                variants={bgVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.1 }}
            >
                <picture>
                    <source media="(max-width: 767px)" srcSet={bgHeroMobile} />
                    <img
                        className="w-full h-full object-cover object-center"
                        src={bgHero}
                        alt="Background Hero"
                    />
                </picture>
            </motion.div>

            {/* Contenuto della Hero */}
            <div className="container mx-auto px-4 relative pb-52">
                <div className="flex justify-center">
                    <div className="w-full max-w-5xl text-center">

                        <motion.h1
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            exit="exit"
                            viewport={{ once: false, amount: 0.3 }}
                            className="text-4xl sm:text-4xl md:text-5xl mb-0 font-light Gelica-Light leading-tight"
                        >
                            Identità visive che
                        </motion.h1>

                        <motion.h1
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            exit="exit"
                            viewport={{ once: false, amount: 0.3 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 Gelica-Black leading-snug"
                        >
                            Ti somigliano{" "}
                            <span
                                className="py-1 px-3 rounded-full inline-block mt-2 md:mt-0 Gelica-Black text-white"
                                style={{ background: "#F6AC60", transform: "rotate(5deg)" }}
                            >
                                davvero
                            </span>
                        </motion.h1>

                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            exit="exit"
                            viewport={{ once: false, amount: 0.3 }}
                            className="flex justify-center mb-8"
                        >
                            <p className="text-lg sm:text-xl font-bold w-full sm:w-4/5 md:w-3/4 leading-relaxed">
                                Ascolto la tua storia e la trasformo in un'identità visiva autentica,
                                pensata su misura per raccontare davvero chi sei.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            exit="exit"
                            viewport={{ once: false, amount: 0.3 }}
                            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-4"
                        >
                            {/* CTA Principale: Parliamone (Colore pieno) */}
                            <a
                                href="mailto:giuggiola.studiocreativo@gmail.com"
                                className="w-fit sm:w-auto inline-block text-center text-white text-xl sm:text-2xl font-bold Gelica-Black px-10 py-3 transition-all duration-300 ease-out hover:scale-105 active:scale-95 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#9F275E]/50 text-decoration-none"
                                style={{
                                    background: "#9F275E",
                                    borderRadius: "24px"
                                }}
                            >
                                Parliamone
                            </a>

                            {/* CTA Secondaria: Guarda i miei lavori (Stile Outline/Trasparente) */}
                            <a
                                href="#lavori"
                                className="w-fit sm:w-auto inline-block text-center text-xl sm:text-2xl font-bold Gelica-Black px-10 py-3 transition-all duration-300 ease-out hover:scale-105 active:scale-95 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-[#9F275E]/30 text-decoration-none"
                                style={{
                                    color: "#9F275E",
                                    border: "2px solid #9F275E",
                                    borderRadius: "24px"
                                }}
                            >
                                Guarda i miei lavori
                            </a>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
