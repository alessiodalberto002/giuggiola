const SingleService = ({ card }) => {
    return (
        <section className="h-100 padding-single-service padding-single-service-mobile">
            <div className="container h-100">
                {/* - row-cols-1: 1 card per riga su mobile
                   - row-cols-lg-3: 3 card per riga su PC (cambia in 4 o altro se ne hai di più)
                   - g-5: gestisce lo spazio (gutter) tra le colonne in modo responsive
                */}
                <div className="row row-cols-1 row-cols-lg-4 g-5 h-100 justify-content-center align-items-center">
                    {card.map((singleCard) => (
                        <div key={singleCard.idCard} className="col d-flex justify-content-center margin-card-service">

                            {/* Wrapper con larghezza controllata per non farle allargare troppo su tablet */}
                            <div className="position-relative w-100" style={{ maxWidth: '18rem' }}>

                                {/* 1. IL RETTANGOLO NERO (Sotto) */}
                                <div className="position-absolute w-100 h-100 bg-dark"
                                    style={{
                                        top: "12px",
                                        left: "12px",
                                        borderRadius: "20px",
                                        zIndex: 0
                                    }}>
                                </div>

                                {/* 2. LA CARD BIANCA (Sopra) */}
                                <div className="position-relative border border-dark px-4 py-5 text-center shadow-sm"
                                    style={{
                                        background: "#FFFFFF",
                                        borderRadius: "20px",
                                        zIndex: 1,
                                        height: "100%",
                                        minHeight: "320px"
                                    }}>

                                    {/* Contenitore icone sovrapposte */}
                                    <div className="position-relative" style={{bottom:"40px"}}>
                                        <img className="position-absolute start-50 translate-middle"
                                            src={singleCard.imgFlame}
                                            style={{ width: "120px", top: "0px" }}
                                            alt="" />
                                        <img className="position-absolute start-50 translate-middle"
                                            src={singleCard.imgWork}
                                            style={{ top: "10px", width: "45px" }}
                                            alt="" />
                                    </div>

                                    <div style={{marginTop:"60px"}}>
                                        <h3 className="fw-bold h5 Gelica-Black">{singleCard.nameCard}</h3>
                                        <p className="fs-6 mb-0">{singleCard.descCard}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SingleService;