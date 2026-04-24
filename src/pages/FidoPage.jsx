import 'bootstrap/dist/css/bootstrap.min.css';
import FlameSocial from "../../src/assets/img/flame-social.svg"
import imgFidoPage1 from "../../src/assets/Fido-img/Fido-1.jpg"
import imgFidoPage2 from "../../src/assets/Fido-img/Fido-2.jpg"
import imgFidoPage3 from "../../src/assets/Fido-img/Fido-3.jpg"
import imgFidoPage4 from "../../src/assets/Fido-img/Fido-4.jpg"
import imgFidoPage5 from "../../src/assets/Fido-img/Fido-5.jpg"
import imgFidoPage6 from "../../src/assets/Fido-img/Fido-6.jpg"
import imgFidoPage7 from "../../src/assets/Fido-img/Fido-7.jpg"


const FidoPage = () => {
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
                        <h1 className="display-3 fw-bold mb-4 Gelica-Black text-light" style={{ background: '#9F275E', width: "fit-content", padding: "2px 15px", borderRadius: "21px", fontSize: "75px" }}>Fido</h1>
                        <p className="lead">
                            Fido è un brand dedicato alla sicurezza e al benessere degli animali da compagnia con un <span className='fw-bold'>collare gps.</span> 
                        </p>
                        <p className='lead'>
                            Prendersi cura di un animale significa molto più che accudirlo. Vuol dire <span className='fw-bold'>comprenderne i bisogni, rispettare la sua libertà</span> e avere la <span className='fw-bold'>serenità di sapere che sta bene,</span> ovunque si trovi.
                        </p>

                        <p className='lead'>
                           Con Fido, la tecnologia diventa un gesto d’amore quotidiano: uno strumento che permette di restare connessi al proprio compagno, <div className="fw-bold">offrendo protezione senza rinunciare alla libertà.</div>
                        </p>

                        <p className='lead'>Le parole chiave sono:</p>
                        <div className="d-flex gap-3 mt-4">
                            <div className="d-flex gap-2">
                                <img className="" src={FlameSocial} alt="Sfondo" style={{ width: "25px", height: "25px" }} />
                                <p className='fw-bold' style={{color:"#9F275E"}}>Sicurezza</p>
                            </div>

                            <div className="d-flex gap-2">
                                <img className="" src={FlameSocial} alt="Sfondo" style={{ width: "25px", height: "25px" }} />
                                <p className='fw-bold' style={{color:"#9F275E"}}>Semplicità</p>
                            </div>

                            <div className="d-flex gap-2">
                                <img className="" src={FlameSocial} alt="Sfondo" style={{ width: "25px", height: "25px", }} />
                                <p className='fw-bold' style={{color:"#9F275E"}}>Emozione</p>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6 mt-4 mt-lg-0 text-center">
                        {/* Placeholder per Totem/Stand Corety */}
                        <div style={{ height: '700px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgFidoPage1} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Grid - Expo & Logistics */}
            <div className="container mb-5">
                <div className="row g-4">
                    <div className="col-md-4">
                        <div style={{ height: '350px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgFidoPage3} alt="" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div style={{ height: '350px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgFidoPage2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Concept Section - "Semplice come un gioco" */}
            <div className="container mb-5">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <div style={{ height: '500px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgFidoPage4} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7 ps-md-5 mt-4 mt-md-0">
                        <h2 className="Gelica-Black m-0 p-0" style={{ color: '#9F275E', fontSize: "54px" }}>Libertà</h2>
                        <h2 className='Gelica-Black m-0 p-0' style={{ color: '#9F275E', fontSize: "34px" }}>in sicurezza</h2>
                        <p className='mt-4 w-75' style={{ fontSize: "19px" }}>
                            La comunicazione social è stata costruita attorno a un <span className="fw-bold">tono empatico e rassicurante,</span> capace di trasmettere <span className="fw-bold">protezione </span> senza rinunciare al senso di <span className="fw-bold">libertà</span> che caratterizza il rapporto con il proprio animale.
                        </p>
                        <p className='w-75' style={{ fontSize: "19px" }}>
                            La strategia unisce un <span className="fw-bold">approccio emotivo,</span> basato sulla fiducia e sulla cura, a <span className="fw-bold">contenuti educativi</span> pensati per informare e guidare in modo chiaro e autorevole.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Grid - Digital & OOH */}
            <div className="container mb-5">
                <div className="row g-4">
                    <div className="col-md-4">
                        <div style={{ height: '450px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgFidoPage5} alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div style={{ height: '450px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgFidoPage6} alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div style={{ height: '450px' }}>
                            <img className='h-100 w-100 object-fit-cover' style={{ borderRadius: "21px" }} src={imgFidoPage7} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FidoPage;