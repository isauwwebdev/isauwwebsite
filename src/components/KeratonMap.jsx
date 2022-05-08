import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'

function KeratonMap() {  

    function StudentPerformer(props) {
        const { student } = props;
        return (
            <div className="keraton-map" style={{width: "80%", textAlign: "center", alignItems: "center", display: "flex", margin: "auto"}}>
                <div className="py-3 px-4 student-performer-img">
                    <img className="framed" src="../images/keraton/map/keraton-map.png"></img>
                </div>
            </div>
        )
    }    

    return (
        <Row className="pb-5 slider-student-performer-row" id="map" style={{ backgroundColor: "#031B28"}}>
            <h2 className="py-2 keraton-student-section-header" style={{marginBottom: "2vw"}}>Map</h2>
            <Col>
                <StudentPerformer/>
            </Col>
        </Row>
    )
}

export default KeratonMap