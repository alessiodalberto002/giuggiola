import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ImgFabbri from "../../assets/img/img-work/fabbri.jpg"
import FlameBrand from "../../assets/img/Flame-brand.svg"
import ImgResistance from "../../assets/img/img-work/cd.jpg"
import FlameIllustration from "../../assets/img/Flame-illustrazione.svg"
import ImgFido from "../../assets/img/img-work/fido.jpg"
import FlameSocial from "../../assets/img/Flame-social.svg"
import ImgAdv from "../../assets/img/img-work/adv.jpg"
import ImgLumia from "../../assets/img/img-work/lumia.jpg"
import ImgIllustrazioni from "../../assets/img/img-work/illustrazioni.jpg"

const Work = () => {

    // Variante per far apparire i titoli
    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    // Variante contenitore per attivare l'effetto cascata (stagger) sui progetti
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 }
        },
        exit: {
            opacity: 0,
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    // Variante per le singole card di progetto (salgono leggermente)
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
        exit: { opacity: 0, y: 30, transition: { duration: 0.3 } }
    };

    return (
        <>
            <section id="lavori" className="position-relative">

                <div className="w-100 height-bg-beige" style={{ background: "#F8EEE0", position: "absolute", height: "140vh", zIndex: -1 }}></div>

                {/* Versione Desktop */}
                <div className="work-background-section hidden-mobile-work">
                    <div className="container d-flex flex-column justify-content-center align-items-center h-100">

                        <motion.div
                            style={{ marginTop: "80px", paddingBottom: "70px" }}
                            variants={titleVariants}
                            initial="hidden"
                            whileInView="visible"
                            exit="exit"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <h1 className="text-light">
                                <span className="Gelica-Light" style={{ fontSize: "82px" }}>I miei</span>{" "}
                                <span className="Gelica-Black" style={{ fontSize: "82px", background: "#B5C36A", borderRadius: "21px", padding: "3px 10px" }}>Lavori</span>
                            </h1>
                        </motion.div>

                        {/* Griglia Desktop animata a cascata */}
                        <motion.div
                            className="work-grid w-100"
                            style={{ height: "900px" }}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            exit="exit"
                            viewport={{ once: false, amount: 0.1 }}
                        >

                            {/* Card 1 */}
                            <motion.div variants={cardVariants} className="work1 w-100">
                                <Link to="/fabbri" className="card-container overflow-hidden d-block h-100" style={{ borderRadius: "21px" }}>
                                    <motion.img whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }} className="w-100 h-100 object-fit-cover" src={ImgFabbri} alt="FabbriImg" />
                                    <div className="card-overlay">
                                        <div className="overlay-text">
                                            <h1 className="Gelica-Black m-0 p-0">Fabbri</h1>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={FlameBrand} alt="Sfondo" style={{ width: "15px", height: "15px" }} />
                                                <p className="m-0 p-0">Brand Identity</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div variants={cardVariants} className="work2 w-100">
                                <Link to="/mostresistance" className="card-container overflow-hidden d-block h-100" style={{ borderRadius: "21px" }}>
                                    <motion.img whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }} className="w-100 h-100 object-fit-cover" src={ImgResistance} alt="Most Resistance" />
                                    <div className="card-overlay">
                                        <div className="overlay-text">
                                            <h1 className="Gelica-Black m-0 p-0">Most Resistance</h1>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={FlameIllustration} alt="Sfondo" style={{ width: "15px", height: "15px" }} />
                                                <p className="m-0 p-0">Illustrazione</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div variants={cardVariants} className="work3 w-100">
                                <Link to="/fido" className="card-container overflow-hidden d-block h-100" style={{ borderRadius: "21px" }}>
                                    <motion.img whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }} className="w-100 h-100 object-fit-cover" src={ImgFido} alt="Fido" />
                                    <div className="card-overlay">
                                        <div className="overlay-text">
                                            <h1 className="Gelica-Black m-0 p-0">Fido</h1>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={FlameSocial} alt="Sfondo" style={{ width: "15px", height: "15px" }} />
                                                <p className="m-0 p-0">Strategia Social</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>

                            {/* Card 5 */}
                            <motion.div variants={cardVariants} className="work7 w-100">
                                <Link to="/rc" className="card-container overflow-hidden d-block h-100" style={{ borderRadius: "21px" }}>
                                    <motion.img whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }} className="w-100 h-100 object-fit-cover" src={ImgAdv} alt="ADV" />
                                    <div className="card-overlay">
                                        <div className="overlay-text">
                                            <h1 className="Gelica-Black m-0 p-0">Radici culturali</h1>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={FlameBrand} alt="Sfondo" style={{ width: "15px", height: "15px" }} />
                                                <p className="m-0 p-0">Brand Identity</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>

                            {/* Card 6 */}
                            <motion.div variants={cardVariants} className="work6 w-100">
                                <Link to="/lumia" className="card-container overflow-hidden d-block h-100" style={{ borderRadius: "21px" }}>
                                    <motion.img whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }} className="w-100 h-100 object-fit-cover" src={ImgLumia} alt="Lumia" />
                                    <div className="card-overlay">
                                        <div className="overlay-text">
                                            <h1 className="Gelica-Black m-0 p-0">Lumia</h1>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={FlameSocial} alt="Sfondo" style={{ width: "15px", height: "15px" }} />
                                                <p className="m-0 p-0">Strategia social</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>

                            {/* Card 7 */}
                            <motion.div variants={cardVariants} className="work5 w-100">
                                <Link to="/ri" className="card-container overflow-hidden d-block h-100" style={{ borderRadius: "21px" }}>
                                    <motion.img whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }} className="w-100 h-100 object-fit-cover" src={ImgIllustrazioni} alt="Illustrazioni" />
                                    <div className="card-overlay">
                                        <div className="overlay-text">
                                            <h1 className="Gelica-Black m-0 p-0">Raccolta illustrata</h1>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={FlameIllustration} alt="Sfondo" style={{ width: "15px", height: "15px" }} />
                                                <p className="m-0 p-0">Illustrazione</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>

                {/* Versione Mobile */}
                <div className="work-background-section hidden-desktop-work">
                    <div className="container">

                        <motion.div
                            className="text-center"
                            style={{ paddingBottom: "70px" }}
                            variants={titleVariants}
                            initial="hidden"
                            whileInView="visible"
                            exit="exit"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <h1 className="text-light">
                                <span className="Gelica-Light text-about-desktop text-about-mobile">I miei</span>{" "}
                                <span className="Gelica-Black text-about-desktop text-about-mobile" style={{ background: "#B5C36A", borderRadius: "21px", padding: "3px 10px" }}>Lavori</span>
                            </h1>
                        </motion.div>

                        {/* Lista Mobile animata a cascata */}
                        <motion.div
                            className="row row-cols-1 g-3"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            exit="exit"
                            viewport={{ once: false, amount: 0.05 }}
                        >

                            <motion.div variants={cardVariants} className="col" style={{ height: "600px" }}>
                                <div className="text-white w-100 h-100">
                                    <Link to="/fabbri" className="d-block h-100 overflow-hidden" style={{ borderRadius: "10px" }}>
                                        <img className="w-100 h-100 object-fit-cover" src={ImgFabbri} alt="Fabbri" />
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div variants={cardVariants} className="col" style={{ height: "500px" }}>
                                <div className="text-white h-100">
                                    <Link to="/mostresistance" className="d-block h-100 overflow-hidden" style={{ borderRadius: "10px" }}>
                                        <img className="w-100 h-100 object-fit-cover" src={ImgResistance} alt="Most Resistance" />
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div variants={cardVariants} className="col" style={{ height: "500px" }}>
                                <div className="text-white h-100">
                                    <Link to="/fido" className="d-block h-100 overflow-hidden" style={{ borderRadius: "10px" }}>
                                        <img className="w-100 h-100 object-fit-cover" src={ImgFido} alt="Fido" />
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div variants={cardVariants} className="col" style={{ height: "400px" }}>
                                <div className="text-white h-100">
                                    <Link to="/rc" className="d-block h-100 overflow-hidden" style={{ borderRadius: "10px" }}>
                                        <img className="w-100 h-100 object-fit-cover" src={ImgAdv} alt="Radici Culturali" />
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div variants={cardVariants} className="col" style={{ height: "400px" }}>
                                <div className="text-white h-100">
                                    <Link to="/lumia" className="d-block h-100 overflow-hidden" style={{ borderRadius: "10px" }}>
                                        <img className="w-100 h-100 object-fit-cover" src={ImgLumia} alt="Lumia" />
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div variants={cardVariants} className="col" style={{ height: "400px" }}>
                                <div className="text-white h-100">
                                    <Link to="/ri" className="d-block h-100 overflow-hidden" style={{ borderRadius: "10px" }}>
                                        <img className="w-100 h-100 object-fit-cover" src={ImgIllustrazioni} alt="Illustrazioni" />
                                    </Link>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Work;