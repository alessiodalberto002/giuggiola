// import SingleMethod from "./SingoleMethod"

// import imgMethod from "../../../src/assets/img/img-methods.jpg"

// const singleMethodCard = [
//     {
//         idSingleMethod: 1,
//         nameSingleMethod: "Ascolto",
//         descSingleMethod: "Studio il posizionamento  per la tua attività, trasformando obiettivi complessi in piani editoriali efficaci.",
//         bgSingleMethod: "#9F275E"
//     },
//     {
//         idSingleMethod: 2,
//         nameSingleMethod: "Analisi & Strategia",
//         descSingleMethod: "Studio il posizionamento  per la tua attività, trasformando obiettivi complessi in piani editoriali efficaci.",
//         bgSingleMethod: "#F6AC60"
//     },
//     {
//         idSingleMethod: 3,
//         nameSingleMethod: "Progettazione Creativa",
//         descSingleMethod: "Studio il posizionamento  per la tua attività, trasformando obiettivi complessi in piani editoriali efficaci.",
//         bgSingleMethod: "#9F275E"
//     },
//     {
//         idSingleMethod: 4,
//         nameSingleMethod: "Sviluppo dell'identità",
//         descSingleMethod: "Studio il posizionamento  per la tua attività, trasformando obiettivi complessi in piani editoriali efficaci.",
//         bgSingleMethod: "#F6AC60"
//     },
// ]

// const Methods = () => {

//     return (

//         <>


//             <div className="padding-methods-mobile" style={{ background: "#F8EEE0", padding: "100px 0" }}>
//                 <div className="container d-flex justify-content-center align-items-center">
//                     <div className="d-flex column-methods-mobile justify-content-center align-items-center position-relative w-100 gap-5">

//                         {/* Contenitore Immagine: rimosso width fisso, aggiunto max-width e altezza adattiva */}
//                         <div className="position-relative z-1" style={{ width: "100%", maxWidth: "530px", height: "700px", aspectRatio: "580/730" }}>
//                             <img className="w-100 h-100 object-fit-cover border-radius-card" src={imgMethod} alt="" />
//                         </div>

//                         {/* Ombra scura: resta d-none su mobile come nel tuo codice, garantendo zero overflow */}
//                         <div className="position-absolute bg-dark border-radius-card z-0 d-none d-lg-block" style={{ width: "500px", height: "700px", left: "45px", top: "40px" }}></div>

//                         <SingleMethod propsSingleMethod={singleMethodCard} />
//                     </div>
//                 </div>
//             </div>

//         </>

//     )

// }

// export default Methods


import { motion } from "framer-motion";
import SingleMethod from "./SingoleMethod";
import imgMethod from "../../../src/assets/img/img-methods.jpg";

const singleMethodCard = [
    {
        idSingleMethod: 1,
        nameSingleMethod: "Ascolto",
        descSingleMethod: "Studio il posizionamento per la tua attività, trasformando obiettivi complessi in piani editoriali efficaci.",
        bgSingleMethod: "#9F275E"
    },
    {
        idSingleMethod: 2,
        nameSingleMethod: "Analisi & Strategia",
        descSingleMethod: "Studio il posizionamento per la tua attività, trasformando obiettivi complessi in piani editoriali efficaci.",
        bgSingleMethod: "#F6AC60"
    },
    {
        idSingleMethod: 3,
        nameSingleMethod: "Progettazione Creativa",
        descSingleMethod: "Studio il posizionamento per la tua attività, trasformando obiettivi complessi in piani editoriali efficaci.",
        bgSingleMethod: "#9F275E"
    },
    {
        idSingleMethod: 4,
        nameSingleMethod: "Sviluppo dell'identità",
        descSingleMethod: "Studio il posizionamento per la tua attività, trasformando obiettivi complessi in piani editoriali efficaci.",
        bgSingleMethod: "#F6AC60"
    },
]

const Methods = () => {
    // Animazione di scivolamento da sinistra per il blocco immagine
    const imageContainerVariants = {
        hidden: { opacity: 0, x: -60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 60, damping: 15 }
        }
    };

    // Animazione per il blocco di destra (le card dei metodi) che fa da parent e innesca la cascata
    const contentVariants = {
        hidden: { opacity: 0, x: 40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 15,
                // Questo fa sì che le card dentro SingleMethod si animino una dopo l'altra se usano i varianti
                staggerChildren: 0.15
            }
        }
    };

    return (
        <div className="py-16 sm:py-20 md:py-24 overflow-hidden" style={{ background: "#F8EEE0" }}>
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16 w-full">

                    {/* Immagine con ombra animata all'entrata */}
                    <motion.div
                        className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md flex-shrink-0"
                        variants={imageContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        {/* Ombra scura - solo desktop */}
                        <div
                            className="hidden lg:block absolute bg-dark rounded-2xl z-0"
                            style={{ width: "100%", height: "100%", top: "20px", left: "20px" }}
                        />
                        {/* Foto */}
                        <div className="relative z-10 w-full aspect-[3/4]">
                            <img
                                className="w-full h-full object-cover rounded-2xl"
                                src={imgMethod}
                                alt="Metodo di lavoro"
                            />
                        </div>
                    </motion.div>

                    {/* Wrapper animato per le Card metodi */}
                    <motion.div
                        className="w-full"
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <SingleMethod propsSingleMethod={singleMethodCard} />
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Methods