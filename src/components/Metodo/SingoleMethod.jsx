const SingleMethod = ({ propsSingleMethod }) => {

    return (

        <>
            <div>
                <h1 className="text-center-mobile Gelica-Black" style={{fontSize:"80px"}}>Metodo</h1>
                <ul className="m-0 p-0">
                    {propsSingleMethod.map((props) => (
                        <li key={props.idSingleMethod} className={`d-flex mb-4 border-radius-card p-3 ${props.idSingleMethod % 2 !== 0 ? "text-light" : ""}`} style={{ background: props.bgSingleMethod }}>
                            <h1 className="fw-light" style={{ fontSize: "80px" }}>{props.idSingleMethod}</h1>
                            <div className="ms-4">
                                <h2 className="Gelica-Black m-0 p-0" style={{fontSize:"40px"}}>{props.nameSingleMethod}</h2>
                                <p className="fw-light m-0 p-0" style={{fontSize:"19px"}}>{props.descSingleMethod}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>


        </>

    )

}

export default SingleMethod