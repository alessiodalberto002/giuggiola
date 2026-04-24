import 'bootstrap/dist/css/bootstrap.min.css';

import imgRiPage1 from "../../src/assets/RaccoltaIllustrata-img/ri-1.png"
import imgRiPage2 from "../../src/assets/RaccoltaIllustrata-img/ri-2.png"
import imgRiPage3 from "../../src/assets/RaccoltaIllustrata-img/ri-3.png"
import imgRiPage4 from "../../src/assets/RaccoltaIllustrata-img/ri-4.jpg"
import imgRiPage5 from "../../src/assets/RaccoltaIllustrata-img/ri-5.png"
import imgRiPage6 from "../../src/assets/RaccoltaIllustrata-img/ri-6.png"
import imgRiPage7 from "../../src/assets/RaccoltaIllustrata-img/ri-7.png"

const RaccoltaIllustrata = () => {
    // Stile personalizzato per i placeholder neri
    const imagePlaceholder = {
        backgroundColor: 'black',
        width: '100%',
        minHeight: '250px',
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    };

    return (
        <div className="container-fluid" style={{ backgroundColor: '#fdf7e9', minHeight: '100vh', padding: "150px 20px" }}>

            {/* Header / Intro Section */}
            <div className="container mb-5">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h2 className="text-secondary mb-0 Gelica-Regular text-dark" style={{ fontSize: "75px" }}>About</h2>
                        <h1 className="display-3 fw-bold mb-4 Gelica-Black text-light" style={{ background: '#B5C36A', width: "fit-content", padding: "2px 15px", borderRadius: "21px", fontSize: "65px" }}>Raccolta Illustrata</h1>
                        <p className="lead">
                            Il disegno è sempre stato parte del mio percorso, una forma di espressione che nel tempo è cresciuta insieme a me.
                        </p>
                        <p className='lead'>
                           La curiosità e la voglia di sperimentare mi hanno portato a esplorare <span className="fw-bold">tecniche e linguaggi diversi,</span> fino a unire <span className="fw-bold">l’illustrazione</span> al <span className="fw-bold">graphic design,</span> trasformando una passione in un vero e proprio metodo di lavoro.
                        </p>

                        <p className='lead'>
                           Oggi ogni progetto nasce dall’incontro tra <span className="fw-bold">creatività</span> e <span className="fw-bold">progettazione,</span> con l’obiettivo di costruire immagini capaci di comunicare in modo chiaro, autentico e riconoscibile.
                        </p>

                    </div>

                    <div className="col-lg-6 mt-4 mt-lg-0 text-center">
                        {/* Placeholder per Totem/Stand Corety */}
                        <div style={{ height: '700px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgRiPage1} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Grid - Expo & Logistics */}
            <div className="container mb-5">
                <div className="row g-4">
                    <div className="col-md-4">
                        <div style={{ height: '350px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgRiPage3} alt="" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div style={{ height: '350px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgRiPage2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Concept Section - "Semplice come un gioco" */}
            <div className="container mb-5">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <div style={{ height: '500px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgRiPage4} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7 ps-md-5 mt-4 mt-md-0">
                        <h2 className="Gelica-Black m-0 p-0" style={{ color: '#9F275E', fontSize: "54px" }}>Segno</h2>
                        <h2 className='Gelica-Black m-0 p-0' style={{ color: '#9F275E', fontSize: "34px" }}>e identità</h2>
                        <p className='mt-4 w-75' style={{ fontSize: "19px" }}>
                           Il mio lavoro parte sempre dal <span className="fw-bold">segno,</span> inteso come forma essenziale di espressione. Illustrazione e design si uniscono per dare vita a immagini in cui ogni linea, colore e composizione è pensata per <span className="fw-bold">raccontare un’idea in modo semplice ma significativo.</span>
                        </p>
                        <p className='w-75' style={{ fontSize: "19px" }}>
                            Ogni progetto diventa così un <span className="fw-bold">equilibrio tra tecnica e sensibilità,</span> dove la ricerca visiva è guidata dal desiderio di trasmettere l’essenza del messaggio.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Grid - Digital & OOH */}
            <div className="container mb-5">
                <div className="row g-4">
                    <div className="col-md-4">
                        <div style={{ height: '450px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgRiPage5} alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div style={{ height: '450px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgRiPage6} alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div style={{ height: '450px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgRiPage7} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RaccoltaIllustrata;