import imgLumiaPage1 from "../../src/assets/Lumia-img/lumia-1.jpg"
import imgLumiaPage2 from "../../src/assets/Lumia-img/lumia-2.jpg"
import imgLumiaPage3 from "../../src/assets/Lumia-img/lumia-3.jpg"
import imgLumiaPage4 from "../../src/assets/Lumia-img/lumia-4.jpg"


const LumiaPage = () => {
    return (
        <section style={{ backgroundColor: '#fdf7e9', }}>

            <div className="container overflow-hidden padding-Lumia-mobile" style={{ padding: "150px 20px" }}>
                {/* row-cols-1 su mobile, row-cols-lg-2 su desktop per dividere lo schermo a metà */}
                <div className="row g-0 align-items-stretch">

                    {/* COLONNA SINISTRA: Immagine principale (50% larghezza) */}
                    <div className="col-12 col-lg-6">
                        <div className="width-lumia-mobile width-lumia-desktop" style={{height: "100%", minHeight: "500px" }}>
                            <img
                                className="w-100 h-100 object-fit-cover"
                                style={{
                                    borderRadius: "21px", // Arrotonda solo i lati interni se preferisci, o tutti
                                }}
                                src={imgLumiaPage1}
                                alt="Lumia Main"
                            />
                        </div>
                    </div>

                    {/* COLONNA DESTRA: Testo + Seconda immagine (50% larghezza) */}
                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-between" style={{ backgroundColor: '#fdf7e9' }}>

                        {/* Blocco Testo */}
                        <div className="mb-5 mt-lg-4 p-5">
                            <h1 className="m-0 p-0 Gelica-Light" style={{fontSize:"75px"}}>About</h1>
                            <h1 className="Gelica-Black text-light" style={{background: '#9F275E', width: "fit-content", padding: "2px 30px", borderRadius: "21px" ,fontSize:"75px", marginTop:"-10px"}}>Lumia</h1>

                            <div className="pe-lg-5">
                                <p className="lead">Lúmia è un brand di skincare naturale e sostenibile, che mette al centro la cura della persona in modo consapevole.</p>
                                <p className="lead">L’obiettivo della comunicazione era costruire un’identità calda e rassicurante, capace di parlare a un pubblico attento al benessere, alla qualità degli ingredienti e alla provenienza etica dei prodotti.</p>
                                <p className="lead">Il linguaggio si sviluppa con un tono autentico ed educativo ma accessibile, attraverso uno storytelling ispirato ai rituali quotidiani di cura.</p>
                            </div>
                        </div>

                        {/* Seconda Immagine: Allineata in basso e larga quanto tutta la sua colonna (metà pagina) */}
                        <div className="w-100" style={{ height: "400px" }}>
                            <img
                                className="w-100 h-100 object-fit-cover"
                                style={{ borderRadius: "21px" }}
                                src={imgLumiaPage2}
                                alt="Lumia Detail"
                            />
                        </div>

                    </div>
                </div>

                <div className="row g-0 align-items-stretch mt-5">

                    {/* COLONNA SINISTRA: Testo + Seconda immagine (50% larghezza) */}
                    {/* Su mobile (col-12) sta sotto, su desktop (col-lg-6) sta a sinistra */}
                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-between align-items-start" style={{ backgroundColor: '#fdf7e9' }}>

                        {/* Blocco Testo */}
                        <div className="mb-5 mt-lg-4 margin-top-lumia-mobile">
                            <h1 className="Gelica-Black m-0 p-0" style={{color:"#9F275E"}}>rituali</h1>
                            <h1 className="Gelica-Black p-0" style={{marginTop:"-10px", color:"#9F275E"}}>quotidiani</h1>

                            <div className="pe-lg-5 mt-3">
                                <p className="lead">Il concept nasce dall’idea della cura come momento di equilibrio tra persona e ambiente. La comunicazione si ispira alla <span className="fw-bold">naturalità degli ingredienti</span> e alla <span className="fw-bold">semplicità dei gesti quotidiani,</span> trasformando la skincare in un rituale consapevole, fatto di <span className="fw-bold">attenzione, rispetto e benessere.</span></p>
                                <p className="lead">L’immaginario visivo richiama forme organiche, colori naturali e texture dei prodotti, per trasmettere <span className="fw-bold">autenticità, serenità e fiducia.</span></p>
                            </div>
                        </div>

                        {/* Seconda Immagine: Occupa tutta la larghezza della colonna (che è il 50% della pagina) */}
                        <div className="w-100 padding-right-mobile-lumia padding-right-desktop-lumia" style={{ height: "400px" }}>
                            <img
                                className="w-100 h-100 object-fit-cover"
                                style={{ borderRadius: "21px" }}
                                src={imgLumiaPage4}
                                alt="Lumia Detail"
                            />
                        </div>
                    </div>

                    {/* COLONNA DESTRA: Immagine principale (50% larghezza) */}
                    {/* order-first sposta l'immagine in alto solo su mobile, order-lg-last la rimette a destra su desktop */}
                    <div className="col-12 col-lg-6 order-first order-lg-last">
                        <div style={{ width: "100%", height: "100%", minHeight: "500px" }}>
                            <img
                                className="w-100 h-100 object-fit-cover"
                                style={{
                                    borderRadius: "21px",
                                    display: "block"
                                }}
                                src={imgLumiaPage3}
                                alt="Lumia Main"
                            />
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default LumiaPage;