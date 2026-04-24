import SingleMethod from "./SingoleMethod"

import imgMethod from "../../../src/assets/img/img-methods.jpg"

const singleMethodCard = [
    {
        idSingleMethod: 1,
        nameSingleMethod: "Ascolto",
        descSingleMethod: "Studio il posizionamento  per la tua attività, trasformando obiettivi complessi in piani editoriali efficaci.",
        bgSingleMethod: "#9F275E"
    },
    {
        idSingleMethod: 2,
        nameSingleMethod: "Analisi & Strategia",
        descSingleMethod: "Studio il posizionamento  per la tua attività, trasformando obiettivi complessi in piani editoriali efficaci.",
        bgSingleMethod: "#F6AC60"
    },
    {
        idSingleMethod: 3,
        nameSingleMethod: "Progettazione Creativa",
        descSingleMethod: "Studio il posizionamento  per la tua attività, trasformando obiettivi complessi in piani editoriali efficaci.",
        bgSingleMethod: "#9F275E"
    },
    {
        idSingleMethod: 4,
        nameSingleMethod: "Sviluppo dell'identità",
        descSingleMethod: "Studio il posizionamento  per la tua attività, trasformando obiettivi complessi in piani editoriali efficaci.",
        bgSingleMethod: "#F6AC60"
    },
]

const Methods = () => {

    return (

        <>


            <div className="padding-methods-mobile" style={{ background: "#F8EEE0", padding: "100px 0" }}>
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="d-flex column-methods-mobile justify-content-center align-items-center position-relative w-100 gap-5">

                        {/* Contenitore Immagine: rimosso width fisso, aggiunto max-width e altezza adattiva */}
                        <div className="position-relative z-1" style={{ width: "100%", maxWidth: "530px", height: "700px", aspectRatio: "580/730" }}>
                            <img className="w-100 h-100 object-fit-cover border-radius-card" src={imgMethod} alt="" />
                        </div>

                        {/* Ombra scura: resta d-none su mobile come nel tuo codice, garantendo zero overflow */}
                        <div className="position-absolute bg-dark border-radius-card z-0 d-none d-lg-block" style={{ width: "500px", height: "700px", left: "45px", top: "40px" }}></div>

                        <SingleMethod propsSingleMethod={singleMethodCard} />
                    </div>
                </div>
            </div>

        </>

    )

}

export default Methods