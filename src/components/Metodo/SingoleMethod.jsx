// const SingleMethod = ({ propsSingleMethod }) => {

//     return (

//         <>
//             <div>
//                 <h1 className="text-center-mobile Gelica-Black text-about-desktop text-about-mobile mb-2">Metodo</h1>
//                 <ul className="m-0 p-0">
//                     {propsSingleMethod.map((props) => (
//                         <li key={props.idSingleMethod} className={`d-flex mb-4 border-radius-card p-3 ${props.idSingleMethod % 2 !== 0 ? "text-light" : ""}`} style={{ background: props.bgSingleMethod }}>
//                             <h1 className="fw-light" style={{ fontSize: "80px" }}>{props.idSingleMethod}</h1>
//                             <div className="ms-4">
//                                 <h2 className="Gelica-Black m-0 p-0" style={{fontSize:"40px"}}>{props.nameSingleMethod}</h2>
//                                 <p className="fw-light m-0 p-0" style={{fontSize:"19px"}}>{props.descSingleMethod}</p>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>


//         </>

//     )

// }

// export default SingleMethod

import { motion } from "framer-motion";

const SingleMethod = ({ propsSingleMethod }) => {
    // Variante per il titolo "Metodo"
    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    // Variante per i singoli elementi <li> della lista (compaiono salendo e sfumando)
    const liVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 90, damping: 14 }
        }
    };

    return (
        <div className="w-full">
            {/* Titolo animato */}
            <motion.h1
                variants={titleVariants}
                className="text-left md:text-center lg:text-left Gelica-Black text-[clamp(2.5rem,5vw,4rem)] mb-4"
            >
                Metodo
            </motion.h1>

            <ul className="list-none m-0 p-0 flex flex-col gap-4">
                {propsSingleMethod.map((item) => (
                    // Convertito in motion.li per agganciarsi allo staggerChildren del padre
                    <motion.li
                        key={item.idSingleMethod}
                        variants={liVariants}
                        whileHover={{ scale: 1.015, x: 4 }} // Piccolissimo feedback visivo al passaggio del mouse
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`flex items-start rounded-2xl p-4 sm:p-5 ${item.idSingleMethod % 2 !== 0 ? "text-white" : "text-dark"
                            }`}
                        style={{
                            background: item.bgSingleMethod,
                            cursor: "default"
                        }}
                    >
                        <span
                            className="font-light leading-none flex-shrink-0 select-none"
                            style={{ fontSize: "clamp(50px, 7vw, 80px)" }}
                        >
                            {item.idSingleMethod}
                        </span>

                        <div className="ml-4 mt-1">
                            <h2
                                className="Gelica-Black m-0 p-0 leading-tight"
                                style={{ fontSize: "clamp(22px, 3.5vw, 40px)" }}
                            >
                                {item.nameSingleMethod}
                            </h2>
                            <p
                                className="font-light m-0 p-0 mt-1 leading-relaxed opacity-90"
                                style={{ fontSize: "clamp(14px, 1.5vw, 19px)" }}
                            >
                                {item.descSingleMethod}
                            </p>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};

export default SingleMethod;
