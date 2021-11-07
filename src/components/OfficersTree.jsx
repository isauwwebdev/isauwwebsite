import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import officers from '../data/officers.json'

function OfficersTree() {

    return (
        <div>
            {officers.map((row, i) => {
                return (
                    <div>
                        {/* will modify this so that it has 2-4
                            members per row according to team size*/}
                        <Row xs={3} className="justify-content-center" style={{ display: "flex" }}>
                            {row.content.map((officer, j) => {
                                return (
                                    <Col style={{ display: "flex", background: "linear-gradient(#fddd39 0 0) bottom/100% 60% no-repeat" }}>
                                        <div style={{ alignSelf: "flex-end" }}>
                                            <img src={officer.img} style={{ width: "45%" }}></img>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Row xs={3} className="justify-content-center" style={{ display: "flex", marginBottom: "50px" }}>
                            {row.content.map((officer, j) => {
                                return (
                                    <Col style={{ alignSelf: "flex-start" }}>
                                        <p style={{ fontWeight: "700", fontSize: `calc(10px + 0.25vw)`, marginBottom: "0", marginTop: "10px" }}>{officer.name}</p>
                                        <h3 style={{ fontWeight: "300", fontSize: `calc(10px + 0.25vw)`, marginBottom: "0" }}>{officer.position}</h3>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                )
            })}
        </div>
    );
}

export default OfficersTree;