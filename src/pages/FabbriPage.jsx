import 'bootstrap/dist/css/bootstrap.min.css';
import FlameFooter from "../../src/assets/img/flame-footer.svg"
import imgFabbriPage1 from "../../src/assets/Fabbri-img/Fabbri-1.jpg"
import imgFabbriPage2 from "../../src/assets/Fabbri-img/Fabbri-2.jpg"
import imgFabbriPage3 from "../../src/assets/Fabbri-img/Fabbri-3.png"
import imgFabbriPage4 from "../../src/assets/Fabbri-img/Fabbri-4.jpg"
import imgFabbriPage5 from "../../src/assets/Fabbri-img/Fabbri-5.png"
import imgFabbriPage6 from "../../src/assets/Fabbri-img/Fabbri-6.jpg"
import imgFabbriPage7 from "../../src/assets/Fabbri-img/Fabbri-7.jpg"




const FabbriPage = () => {
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
        <div className="container-fluid" style={{ backgroundColor: '#fdf7e9', minHeight: '100vh', padding: "150px 0" }}>

            {/* Header / Intro Section */}
            <div className="container mb-5">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h2 className="text-secondary mb-0 Gelica-Regular text-dark" style={{ fontSize: "75px" }}>About</h2>
                        <h1 className="display-3 fw-bold mb-4 Gelica-Black text-light" style={{ background: '#F6AC60', width: "fit-content", padding: "2px 15px", borderRadius: "21px", fontSize: "75px" }}>Fabbri</h1>
                        <p className="lead">
                            Fabbri è un brand specializzato in <span className='fw-bold'>accessori per il trasporto,</span> come portabici, portasci e barre portatutto.
                        </p>
                        <p className='lead'>
                            L’obiettivo del progetto era costruire un’<span className='fw-bold'>identità visiva solida e riconoscibile,</span> capace di unificare tutta la comunicazione del brand in modo coerente.
                        </p>

                        <p className='lead'>Il lavoro si è sviluppato attorno a <span className='fw-bold'>tre pilastri</span> fondamentali, che sono diventati i valori che guidano ogni prodotto Fabbri:</p>

                        <div className="d-flex gap-3 mt-4">
                            <div className="d-flex gap-2">
                                <img className="" src={FlameFooter} alt="Sfondo" style={{ width: "25px", height: "25px" }} />
                                <p className='fw-bold'>Sicurezza</p>
                            </div>

                            <div className="d-flex gap-2">
                                <img className="" src={FlameFooter} alt="Sfondo" style={{ width: "25px", height: "25px" }} />
                                <p className='fw-bold'>Semplicità</p>
                            </div>

                            <div className="d-flex gap-2">
                                <img className="" src={FlameFooter} alt="Sfondo" style={{ width: "25px", height: "25px" }} />
                                <p className='fw-bold'>Emozione</p>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6 mt-4 mt-lg-0 text-center">
                        {/* Placeholder per Totem/Stand Corety */}
                        <div style={{height: '700px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{borderRadius:"21px"}} src={imgFabbriPage1} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Grid - Expo & Logistics */}
            <div className="container mb-5">
                <div className="row g-4">
                    <div className="col-md-4">
                        <div style={{height: '350px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{borderRadius:"21px"}} src={imgFabbriPage2} alt="" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div style={{height: '350px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{borderRadius:"21px"}} src={imgFabbriPage3} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Concept Section - "Semplice come un gioco" */}
            <div className="container mb-5">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <div style={{height: '500px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{borderRadius:"21px"}} src={imgFabbriPage4} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7 ps-md-5 mt-4 mt-md-0">
                        <h2 className="Gelica-Black m-0" style={{ color: '#4a3b4e', fontSize: "54px" }}>Semplice</h2>
                        <h2 className='Gelica-Black m-0' style={{ color: '#4a3b4e', fontSize: "34px" }}>come un gioco</h2>
                        <p style={{fontSize:"19px"}}>
                            Come un bambino che gioca in sicurezza,
                            i prodotti Fabbri permettono di vivere ogni viaggio con leggerezza e tranquillità.
                        </p>
                        <p style={{fontSize:"19px"}}>
                            Un’esperienza semplice, affidabile e senza pensieri, pensata per godersi il tempo all’aria aperta in totale libertà.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Grid - Digital & OOH */}
            <div className="container mb-5">
                <div className="row g-4">
                    <div className="col-md-4">
                        <div style={{height: '450px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{borderRadius:"21px"}} src={imgFabbriPage5} alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div style={{height: '450px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{borderRadius:"21px"}} src={imgFabbriPage6} alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div style={{height: '450px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{borderRadius:"21px"}} src={imgFabbriPage7} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FabbriPage;