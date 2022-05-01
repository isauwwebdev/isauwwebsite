import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';

function KeratonActivities() {
    return(
        <div style={{ backgroundColor: "#031B28"}}>
            <h1 className="py-5 keraton-section-header">Games</h1>
            <Row className="target" style={{padding: "0", margin: "0", overflow: "hidden"}}>
                <Col xs={4} style={{padding: "0", margin: "0", overflow: "hidden"}}>
                    <div className='activity-container'>
                        <img src="../images/bakiak.jpeg" className="keraton-activities-image"></img>
                        <div style={{position: "relative"}}>
                            <p className="keraton-activities-text">Bakiak</p>
                        </div>
                    </div>
                </Col>
                <Col xs={4} style={{padding: "0", margin: "0", overflow: "hidden"}}>
                    <div className='activity-container'>
                        <img src="../images/sack.jpeg" className="keraton-activities-image"></img>
                        <div style={{position: "relative"}}>
                            <p className="keraton-activities-text">Sack Race</p>
                        </div>
                    </div>
                </Col>
                <Col xs={4} style={{padding: "0", margin: "0", overflow: "hidden"}}>
                    <div className='activity-container'>
                        <img src="../images/hopscotch.jpeg" className="keraton-activities-image"></img>
                        <div style={{position: "relative"}}>
                            <p className="keraton-activities-text">Engklek</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default KeratonActivities