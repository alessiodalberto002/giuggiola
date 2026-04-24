import 'bootstrap/dist/css/bootstrap.min.css';

import imgCdPage1 from "../../src/assets/MostResistance-img/mostresistance-1.jpg"
import imgCdPage2 from "../../src/assets/MostResistance-img/mostresistance-2.jpg"
import imgCdPage3 from "../../src/assets/MostResistance-img/most-resistance-3.jpg"
import imgCdPage4 from "../../src/assets/MostResistance-img/most-resistance-4.png"
import imgCdPage5 from "../../src/assets/MostResistance-img/most-resistance-5.jpg"
import imgCdPage6 from "../../src/assets/MostResistance-img/most-resistance-6.png"




const MostResistancePortfolio = () => {
    // Stile per i segnaposto neri delle immagini
    const imagePlaceholder = {
        backgroundColor: '#000',
        width: '100%',
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        minHeight: '200px'
    };

    return (
        <div style={{ backgroundColor: '#f2f0e4'}}>

            <div className="container" style={{ minHeight: '100vh', color: '#4a4a4a', padding:"150px 0"}}>

            {/* Sezione Superiore: Intro e Illustrazione Principale */}
            <div className="container mb-5">
                <div className="row g-4 align-items-start">
                    {/* Illustrazione Mandragola (Grande a sinistra) */}
                    <div className="col-md-5 order-2 order-md-1">
                        <div style={{ height: '760px' }}>
                            <img className='w-100 h-100 object-fit-cover' style={{borderRadius:"21px"}} src={imgCdPage1} alt="" />
                        </div>
                    </div>

                    {/* Testo About e Titolo */}
                    <div className="col-md-7 order-1 order-md-2 ps-md-5">
                        <h2 className="mb-0 Gelica-Light" style={{fontSize:"75px"}}>About</h2>
                        <h1 className="text-white mb-4 Gelica-Black" style={{ backgroundColor: '#c5d891', display: 'inline-block', padding: '0 15px', borderRadius: '10px', fontSize:"75px" }}>
                            Most resistance
                        </h1>

                        <div className="mt-4" style={{ maxWidth: '500px' }}>
                            <p>
                                <strong>Most Resistance</strong> è un progetto grafico realizzato per l'album
                                <em> Hereditary</em>, composto da digipack, booklet e grafica del CD.
                            </p>
                            <p>
                                L'obiettivo era costruire un'identità visiva simbolica e coerente, capace di tradurre
                                il significato dell'album in un immaginario visivo forte e riconoscibile.
                            </p>
                            <p>
                                Il concept si basa sull'idea che ciò che ereditiamo dalla famiglia non sia sempre un dono,
                                ma a volte un <strong>legame tossico</strong> che segna l'identità dell'individuo.
                            </p>
                        </div>

                        {/* Grid interna immagini prodotto */}
                        <div className="row g-3 mt-4">
                            <div className="col-6">
                                <div style={{ height: '265px' }}>
                                    <img className='w-100 h-100 object-fit-cover' style={{borderRadius:"21px"}} src={imgCdPage2} alt="" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div style={{ height: '265px' }}>
                                    <img className='w-100 h-100 object-fit-cover' style={{borderRadius:"21px"}} src={imgCdPage3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sezione Centrale: Tra Mito e Natura */}
            <div className="container mb-5">
                <div className="row g-4 align-items-center">
                    <div className="col-md-5">
                        <h2 className="Gelica-Black" style={{ color: '#5d4037', fontSize:"34px" }}>Tra mito e </h2>
                        <h2 className='Gelica-Black' style={{color: '#5d4037', marginTop:"-15px", fontSize:"54px"}}>natura</h2>
                        <p>
                            La mandragola è una pianta velenosa e misteriosa, richiama le atmosfere cupe dell'album
                            e il tema di un'eredità che può trasformarsi in qualcosa di tossico.
                        </p>
                        <p>
                            La folta chioma verde rappresenta metaforicamente l'albero genealogico che consuma
                            l'individuo sottostante, raffigurato come una radice denutrita la cui posa ricorda
                            quella di un feto.
                        </p>
                    </div>
                    <div className="col-md-7">
                        <div style={{ height: '500px' }}>
                            <img className='w-100 h-100 object-fit-cover' style={{borderRadius:"21px"}} src={imgCdPage4} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sezione Inferiore: Dettagli e Sketch */}
            <div className="container">
                <div className="row g-3">
                    <div className="col-md-3">
                        <div style={{ height: '350px' }}>
                            <img className='w-100 h-100 object-fit-cover' style={{borderRadius:"21px"}} src={imgCdPage5} alt="" />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div style={{ height: '350px' }}>
                            <img className='w-100 h-100 object-fit-cover' style={{borderRadius:"21px"}} src={imgCdPage6} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
        

        </div>
    );
};

export default MostResistancePortfolio;