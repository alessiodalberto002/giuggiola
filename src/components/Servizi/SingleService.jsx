import { motion } from "framer-motion"

const SingleService = ({ card }) => {
    // Varianti per l'animazione di entrata e uscita a cascata di ogni singola colonna
    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 80, damping: 14 }
        },
        exit: {
            y: 30,
            opacity: 0,
            transition: { duration: 0.3 }
        }
    }

    // Varianti per l'animazione delle icone interne (micro-scatto all'entrata)
    const iconVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 120, damping: 10, delay: 0.2 }
        }
    }

    return (
        <section className="h-100 padding-single-service padding-single-service-mobile">
            <div className="container h-100">
                <div className="row row-cols-1 row-cols-lg-4 g-3 h-100 justify-content-center align-items-center">
                    {card.map((singleCard) => (
                        // Trasformato in motion.div per agganciarsi allo staggerChildren del padre
                        <motion.div
                            key={singleCard.idCard}
                            variants={cardVariants}
                            className="col d-flex justify-content-center margin-card-service"
                        >
                            {/* Wrapper con larghezza controllata */}
                            <div className="position-relative w-100" style={{ maxWidth: '18rem' }}>

                                {/* 1. IL RETTANGOLO NERO (Sotto) - Rimane fermo */}
                                <div className="position-absolute w-100 h-100 bg-dark"
                                    style={{
                                        top: "12px",
                                        left: "12px",
                                        borderRadius: "20px",
                                        zIndex: 0
                                    }}>
                                </div>

                                {/* 2. LA CARD BIANCA (Sopra) - Animata al passaggio del mouse (UX) */}
                                <motion.div
                                    className="position-relative border border-dark px-4 py-5 text-center shadow-sm"
                                    whileHover={{ y: -8, x: -4 }} // Effetto pop-out: si sposta svelando l'ombra nera sotto
                                    whileTap={{ scale: 0.98 }}   // Feedback al clic
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    style={{
                                        background: "#FFFFFF",
                                        borderRadius: "20px",
                                        zIndex: 1,
                                        height: "100%",
                                        minHeight: "320px",
                                        cursor: "pointer"
                                    }}>

                                    {/* Contenitore icone sovrapposte con micro-animazione all'apparizione */}
                                    <motion.div
                                        className="position-relative"
                                        style={{ bottom: "40px" }}
                                        variants={iconVariants}
                                    >
                                        <img className="position-absolute start-50 translate-middle"
                                            src={singleCard.imgFlame}
                                            style={{ width: "120px", top: "0px" }}
                                            alt="" />
                                        <img className="position-absolute start-50 translate-middle"
                                            src={singleCard.imgWork}
                                            style={{ top: "10px", width: "45px" }}
                                            alt="" />
                                    </motion.div>

                                    <div style={{ marginTop: "60px" }}>
                                        <h3 className="fw-bold h5 Gelica-Black">{singleCard.nameCard}</h3>
                                        <p className="fs-6 mb-0 text-muted">{singleCard.descCard}</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SingleService;