import { Link } from "react-router-dom";

import ImgFabbri from "../../src/assets/img/img-work/Fabbri.jpg"
import FlameBrand from "../../src/assets/img/flame-brand.svg"
import ImgResistance from "../../src/assets/img/img-work/cd.jpg"
import FlameIllustration from "../../src/assets/img/flame-illustrazione.svg"
import ImgFido from "../../src/assets/img/img-work/Fido.jpg"
import FlameSocial from "../../src/assets/img/flame-social.svg"
import ImgAdv from "../../src/assets/img/img-work/adv.jpg"
import ImgLumia from "../../src/assets/img/img-work/lumia.jpg"
import ImgIllustrazioni from "../../src/assets/img/img-work/illustrazioni.jpg"




const Work = () => {

    return (

        <>


            <section id="lavori">

                <div className="w-100 height-bg-beige" style={{ background: "#F8EEE0", position: "absolute", height: "140vh" }}></div>

                <div className="work-background-section hidden-mobile-work">
                    <div className="container d-flex flex-column justify-content-center align-items-center h-100">
                        <div style={{ marginTop: "80px", paddingBottom: "70px" }}>
                            <h1 className="text-light"><span className="Gelica-Light" style={{ fontSize: "82px" }}>I miei</span> <span className="Gelica-Black" style={{ fontSize: "82px", background: "#B5C36A", borderRadius: "21px", padding: "3px 10px" }}>Lavori</span></h1>
                        </div>
                        <div className="work-grid w-100" style={{ height: "900px" }}>

                            {/* Card 1 */}
                            <div className="work1 w-100">
                                <Link to="/fabbri" className="card-container">
                                    <img className="w-100 h-100 object-fit-cover" style={{ borderRadius: "21px" }} src={ImgFabbri} alt="Fabbri" />
                                    <div className="card-overlay">
                                        <div className="overlay-text">
                                            <h1 className="Gelica-Black m-0 p-0">Fabbri</h1>
                                            <div className="d-flex  align-items-center gap-2">
                                                <img src={FlameBrand} alt="Sfondo" style={{ width: "15px", height: "15px" }} />
                                                <p className="m-0 p-0">Brand Identity</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* Card 2 */}
                            <div className="work2 w-100">
                                <Link to="/mostresistance" className="card-container">
                                    <img className="w-100 h-100 object-fit-cover" style={{ borderRadius: "21px" }} src={ImgResistance} alt="Most Resistance" />
                                    <div className="card-overlay">
                                        <div className="overlay-text">
                                            <h1 className="Gelica-Black m-0 p-0">Most Resistance</h1>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={FlameIllustration} alt="Sfondo" style={{ width: "15px", height: "15px" }} />
                                                <p className="m-0 p-0">Illustrazione</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* Card 3 */}
                            <div className="work3 w-100">
                                <Link to="/fido" className="card-container">
                                    <img className="w-100 h-100 object-fit-cover" style={{ borderRadius: "21px" }} src={ImgFido} alt="Fido" />
                                    <div className="card-overlay">
                                        <div className="overlay-text">
                                            <h1 className="Gelica-Black m-0 p-0">Fido</h1>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={FlameSocial} alt="Sfondo" style={{ width: "15px", height: "15px" }} />
                                                <p className="m-0 p-0">Strategia Social</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* Card 5 */}
                            <div className="work7 w-100">
                                <Link to="/rc" className="card-container">
                                    <img className="w-100 h-100 object-fit-cover" style={{ borderRadius: "21px" }} src={ImgAdv} alt="ADV" />
                                    <div className="card-overlay">
                                        <div className="overlay-text">
                                            <h1 className="Gelica-Black m-0 p-0">Radici culturali</h1>
                                            <div className="d-flex  align-items-center gap-2">
                                                <img src={FlameBrand} alt="Sfondo" style={{ width: "15px", height: "15px" }} />
                                                <p className="m-0 p-0">Brand Identity</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* Card 6 */}
                            <div className="work6 w-100">
                                <Link to="/lumia" className="card-container">
                                    <img className="w-100 h-100 object-fit-cover" style={{ borderRadius: "21px" }} src={ImgLumia} alt="Lumia" />
                                    <div className="card-overlay">
                                        <div className="overlay-text">
                                            <h1 className="Gelica-Black m-0 p-0">Lumia</h1>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={FlameSocial} alt="Sfondo" style={{ width: "15px", height: "15px" }} />
                                                <p className="m-0 p-0">Strategia social</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* Card 7 */}
                            <div className="work5 w-100">
                                <Link to="/ri" className="card-container">
                                    <img className="w-100 h-100 object-fit-cover" style={{ borderRadius: "21px" }} src={ImgIllustrazioni} alt="Illustrazioni" />
                                    <div className="card-overlay">
                                        <div className="overlay-text">
                                            <h1 className="Gelica-Black m-0 p-0">Raccolta illustrata</h1>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={FlameIllustration} alt="Sfondo" style={{ width: "15px", height: "15px" }} />
                                                <p className="m-0 p-0">Illustrazione</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="work-background-section hidden-desktop-work">
                    <div className="container">
                        <div className="text-center" style={{ paddingBottom: "70px" }}>
                            <h1 className="text-light"><span className="Gelica-Light" style={{ fontSize: "82px" }}>I miei</span> <span className="Gelica-Black" style={{ fontSize: "82px", background: "#B5C36A", borderRadius: "21px", padding: "3px 10px" }}>Lavori</span></h1>
                        </div>
                        <div className="row row-cols-1 g-3">

                            <div className="col" style={{ height: "700px" }}>
                                <div className="text-white h-100">
                                    <Link to="/fabbri">
                                        <img className="w-100 h-100 object-fit-cover" style={{ borderRadius: "10px" }} src="../src/assets/img/img-work/fabbri.jpg" alt="Fabbri" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col" style={{ height: "500px" }}>
                                <div className="text-white h-100">
                                    <Link to="/mostresistance">
                                        <img className="w-100 h-100 object-fit-cover" style={{ borderRadius: "10px" }} src="../src/assets/img/img-work/cd.jpg" alt="Fabbri" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col" style={{ height: "500px" }}>
                                <div className="text-white h-100">
                                    <Link to="/">
                                        <img className="w-100 h-100 object-fit-cover" style={{ borderRadius: "10px" }} src="../src/assets/img/img-work/fido.jpg" alt="Fabbri" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col" style={{ height: "400px" }}>
                                <div className="text-white h-100">
                                    <Link to="/">
                                        <img className="w-100 h-100 object-fit-cover" style={{ borderRadius: "10px" }} src="../src/assets/img/img-work/adv.jpg" alt="Fabbri" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col" style={{ height: "400px" }}>
                                <div className="text-white h-100">
                                    <Link to="/">
                                        <img className="w-100 h-100 object-fit-cover" style={{ borderRadius: "10px" }} src="../src/assets/img/img-work/lumia.jpg" alt="Fabbri" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col" style={{ height: "400px" }}>
                                <div className="text-white h-100">
                                    <Link to="/">
                                        <img className="w-100 h-100 object-fit-cover" style={{ borderRadius: "10px" }} src="../src/assets/img/img-work/illustrazioni.jpg" alt="Fabbri" />
                                    </Link>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

            </section>



        </>



    )

}

export default Work