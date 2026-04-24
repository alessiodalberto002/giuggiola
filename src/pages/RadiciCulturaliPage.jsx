import 'bootstrap/dist/css/bootstrap.min.css';

import FlameBrand from "../../src/assets/img/Flame-brand.svg"

import imgRcPage1 from "../../src/assets/RadiciCulturali-img/rc-1.jpg"
import imgRcPage2 from "../../src/assets/RadiciCulturali-img/rc-2.jpg"
import imgRcPage3 from "../../src/assets/RadiciCulturali-img/rc-3.jpg"
import imgRcPage4 from "../../src/assets/RadiciCulturali-img/rc-4.jpg"
import imgRcPage5 from "../../src/assets/RadiciCulturali-img/rc-5.jpg"
import imgRcPage6 from "../../src/assets/RadiciCulturali-img/rc-6.jpg"
import imgRcPage7 from "../../src/assets/RadiciCulturali-img/rc-7.jpg"

const RadiciCulturaliPage = () => {
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
                        <h1 className="display-3 fw-bold mb-4 Gelica-Black text-light" style={{ background: '#F6AC60', width: "fit-content", padding: "2px 15px", borderRadius: "21px", fontSize: "75px" }}>Radici Culturali</h1>
                        <p className="lead">
                            “Radici culturali” è il marchio turistico creato per il comune di <span className="fw-bold">Gagliano Aterno.</span>
                        </p>
                        <p className='lead'>
                            L’obiettivo era creare un’identità visiva capace di esprimere <span className="fw-bold">apertura, cambiamento</span> e <span className="fw-bold">incontro tra culture,</span> valorizzando un’idea di <span className="fw-bold">turismo dinamico</span> e non stanziale.
                        </p>

                        <p className='lead'>
                           La comunicazione si struttura su quattro colori, ognuno legato a un ambito del territorio:
                        </p>

                        <p className='lead'>Le parole chiave sono:</p>
                        <div className="d-flex flex-column mt-2">
                            <div className="d-flex gap-2">
                                <img className="" src={FlameBrand} alt="Sfondo" style={{ width: "25px", height: "25px" }} />
                                <p className='fw-bold'>Rosso per l’enogastronomia</p>
                            </div>

                            <div className="d-flex gap-2">
                                <img className="" src={FlameBrand} alt="Sfondo" style={{ width: "25px", height: "25px" }} />
                                <p className='fw-bold'>Verde per la natura</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6 mt-4 mt-lg-0 text-center">
                        {/* Placeholder per Totem/Stand Corety */}
                        <div style={{ height: '700px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgRcPage1} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Grid - Expo & Logistics */}
            <div className="container mb-5">
                <div className="row g-4">
                    <div className="col-md-4">
                        <div style={{ height: '350px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgRcPage3} alt="" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div style={{ height: '350px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgRcPage2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Concept Section - "Semplice come un gioco" */}
            <div className="container mb-5">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <div style={{ height: '500px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgRcPage4} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7 ps-md-5 mt-4 mt-md-0">
                        <h2 className="Gelica-Black m-0 p-0" style={{ color: '#9F275E', fontSize: "54px" }}>Cultura</h2>
                        <h2 className='Gelica-Black m-0 p-0' style={{ color: '#9F275E', fontSize: "34px" }}>in movimento</h2>
                        <p className='mt-4 w-75' style={{ fontSize: "19px" }}>
                            La rondine diventa il simbolo della comunicazione, immagine di <span className="fw-bold">migrazione, libertà</span> e <span className="fw-bold">trasformazione.</span>
                        </p>
                        <p className='w-75' style={{ fontSize: "19px" }}>
                            Come il suo volo migratorio, anche Gagliano Aterno si propone come <span className="fw-bold">luogo di passaggio, incontro</span> e <span className="fw-bold">trasformazione,</span> aperto a chi è in cerca di nuove esperienze.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Grid - Digital & OOH */}
            <div className="container mb-5">
                <div className="row g-4">
                    <div className="col-md-4">
                        <div style={{ height: '450px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgRcPage5} alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div style={{ height: '450px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgRcPage6} alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div style={{ height: '450px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgRcPage7} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RadiciCulturaliPage;