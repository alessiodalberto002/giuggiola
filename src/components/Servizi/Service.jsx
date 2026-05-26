// import SingleService from "./SingleService"
// import Fiamma from "../../../src/assets/img/img-service/fiamma.svg"
// import Penna from "../../../src/assets/img/img-service/penna.svg"
// import Telefono from "../../../src/assets/img/img-service/telefono.svg"
// import Palette from "../../../src/assets/img/img-service/palette-colori.svg"
// import Star from "../../../src/assets/img/img-service/star-calendar.svg"

// const singleCard = [
//     {
//         idCard: 1,
//         nameCard: "Brand Identity",
//         descCard: "Traduco i tuoi valori in segni grafici per creare un’immagine capace di raccontare chi sei davvero.",
//         imgFlame: Fiamma,
//         imgWork: Penna
//     },
//     {
//         idCard: 2,
//         nameCard: "Strategia Social",
//         descCard: "Studio il posizionamento  per la tua attività, trasformando obiettivi complessi in piani editoriali efficaci.",
//         imgFlame: Fiamma,
//         imgWork: Telefono
//     },
//     {
//         idCard: 3,
//         nameCard: "Illustrazione",
//         descCard: "Creo immagini studiate ad hoc per ogni occasione, capaci di dare forma visiva a concetti complessi.",
//         imgFlame: Fiamma,
//         imgWork: Palette
//     },
//     {
//         idCard: 4,
//         nameCard: "Coordinati Eventi",
//         descCard: "Progetto e realizzo a mano ogni dettaglio del tuo evento, dalle partecipazioni ai coordinati grafici.",
//         imgFlame: Fiamma,
//         imgWork: Star
//     }
// ]

// const Service = () => {

//     return (

//         <>
//             <div style={{ background: "#F8EEE0" }}>
//                 <div className="container">
//                     <div className="d-flex justify-content-center position-absolute start-50 translate-middle z-1">
//                         <h1
//                             className="py-2 rounded-bg-text Gelica-Black text-light text-center text-service-mobile"
//                             style={{
//                                 fontSize: "clamp(50px, 8vw, 82px)",
//                                 padding: "0 clamp(20px, 10vw, 150px)",
//                                 background: "#F6AC60",
//                                 width: "fit-content",
//                                 margin: "0 auto"
//                             }}
//                         >
//                             Servizi
//                         </h1>
//                     </div>

//                     <SingleService card={singleCard} />
//                 </div>
//             </div>

//         </>

//     )

// }

// export default Service


import { motion } from "framer-motion"
import SingleService from "./SingleService"
import Fiamma from "../../../src/assets/img/img-service/fiamma.svg"
import Penna from "../../../src/assets/img/img-service/penna.svg"
import Telefono from "../../../src/assets/img/img-service/telefono.svg"
import Palette from "../../../src/assets/img/img-service/palette-colori.svg"
import Star from "../../../src/assets/img/img-service/star-calendar.svg"

const singleCard = [
    {
        idCard: 1,
        nameCard: "Brand Identity",
        descCard: "Traduco i tuoi valori in segni grafici per creare un'immagine capace di raccontare chi sei davvero.",
        imgFlame: Fiamma,
        imgWork: Penna
    },
    {
        idCard: 2,
        nameCard: "Strategia Social",
        descCard: "Studio il posizionamento per la tua attività, trasformando obiettivi complessi in piani editoriali efficaci.",
        imgFlame: Fiamma,
        imgWork: Telefono
    },
    {
        idCard: 3,
        nameCard: "Illustrazione",
        descCard: "Creo immagini studiate ad hoc per ogni occasione, capaci di dare forma visiva a concetti complessi.",
        imgFlame: Fiamma,
        imgWork: Palette
    },
    {
        idCard: 4,
        nameCard: "Coordinati Eventi",
        descCard: "Progetto e realizzo a mano ogni dettaglio del tuo evento, dalle partecipazioni ai coordinati grafici.",
        imgFlame: Fiamma,
        imgWork: Star
    }
]

const Service = () => {
    // Animazione per il titolo "Servizi" (Cade dall'alto verso il centro)
    const titleVariants = {
        hidden: { y: "-150%", x: "-50%", opacity: 0 },
        visible: {
            y: "-50%",
            x: "-50%",
            opacity: 1,
            transition: { type: "spring", stiffness: 80, damping: 12, delay: 0.1 }
        },
        exit: {
            y: "-150%",
            x: "-50%",
            opacity: 0,
            transition: { duration: 0.3 }
        }
    }

    // Varianti per il contenitore delle card (attiva la cascata)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Tempo tra la comparsa di una card e la successiva
            }
        },
        exit: {
            opacity: 0,
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    }

    return (
        <div className="relative py-20" style={{ background: "#F8EEE0" }}>
            <div className="container mx-auto px-4 relative">

                {/* Titolo centrato e animato con Framer Motion */}
                <div className="relative w-full flex justify-center">
                    <motion.h1
                        variants={titleVariants}
                        initial="hidden"
                        whileInView="visible"
                        exit="exit"
                        viewport={{ once: false, amount: 0.1 }}
                        className="absolute md:-bottom-6 bottom-2 left-1/2 Gelica-Black text-white text-center z-10 rounded-2xl"
                        style={{
                            fontSize: "clamp(42px, 8vw, 60px)",
                            padding: "clamp(6px, 1vw, 12px) clamp(24px, 10vw, 160px)",
                            background: "#F6AC60",
                            whiteSpace: "nowrap"
                        }}
                    >
                        Servizi
                    </motion.h1>
                </div>

                {/* Wrapper animato per gestire l'effetto cascata delle card */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: false, amount: 0.1 }}
                    className="pt-12 sm:pt-20" // Spazio extra per non far sormontare il tittolo gigante alle prime card
                >
                    <SingleService card={singleCard} />
                </motion.div>

            </div>
        </div>
    )
}

export default Service
