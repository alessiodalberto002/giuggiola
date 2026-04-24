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
        descCard: "Traduco i tuoi valori in segni grafici per creare un’immagine capace di raccontare chi sei davvero.",
        imgFlame: Fiamma,
        imgWork: Penna
    },
    {
        idCard: 2,
        nameCard: "Strategia Social",
        descCard: "Studio il posizionamento  per la tua attività, trasformando obiettivi complessi in piani editoriali efficaci.",
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

    return (

        <>
            <div style={{ background: "#F8EEE0" }}>
                <div className="container">
                    <div className="d-flex justify-content-center position-absolute start-50 translate-middle z-1">
                        <h1
                            className="py-2 rounded-bg-text Gelica-Black text-light text-center text-service-mobile"
                            style={{
                                fontSize: "clamp(50px, 8vw, 82px)",
                                padding: "0 clamp(20px, 10vw, 150px)",
                                background: "#F6AC60",
                                width: "fit-content",
                                margin: "0 auto"
                            }}
                        >
                            Servizi
                        </h1>
                    </div>

                    <SingleService card={singleCard} />
                </div>
            </div>

        </>

    )

}

export default Service