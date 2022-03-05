import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import officers from '../data/officers.json'
import Fade from 'react-reveal/Fade';

function Officers() {

var hi = "display: 'flex', background: 'linear-gradient(#f0f 0 0) bottom/80% 70% no-repeat'";

    return (
        <div >
            {officers.map((group, i) => {
                return (
                    <div className="division">
                        {group.content.map((rows, j) => {
                            return (
                                <Fade bottom>
                                    <div>
                                        <Row xs={3} className="justify-content-center" style={{ display: "flex" }}>
                                            {rows.row.map((officer, k) => {
                                                return (
                                                    <Col className = {officer.position} >
                                                        <div style={{ alignSelf: "flex-end" }}>
                                                            <img className="mx-auto" src={officer.img} style={{ width: `calc(100% - 12vw + 20px)` }}></img>
                                                        </div>
                                                    </Col>
                                                )
                                            })}
                                        </Row>
                                        <Row xs={3} className="justify-content-center" style={{ display: "flex", marginBottom: `calc(16px + 0.4vw)` }}>
                                            {rows.row.map((officer, k) => {
                                                return (
                                                    <Col style={{ alignSelf: "flex-start", marginTop: `calc(4px + 0.2vw)` }}>
                                                        <h3 className="officer-position">{officer.position}</h3>
                                                        <p className="officer-name">{officer.name}</p>
                                                    </Col>
                                                )
                                            })}
                                        </Row>
                                    </div>
                                </Fade>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default Officers
