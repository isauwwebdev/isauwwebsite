import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';

function KeratonActivities() {
    return(
        <div className="keraton-section-header">
            <h1 className="my-1 keraton-section-header"><strong>Games</strong></h1>
            <Row className="target" style={{padding: "0", margin: "0", overflow: "hidden"}}>
                <Col xs={4} style={{padding: "0", margin: "0", overflow: "hidden"}}>
                    <div className='activity-container'>
                        <img src="../images/bakiak.jpeg" className="keraton-activities-image"></img>
                        <div style={{position: "relative"}}>
                            <p className="keraton-activities-text">1</p>
                        </div>
                    </div>
                </Col>
                <Col xs={4} style={{padding: "0", margin: "0", overflow: "hidden"}}>
                    <div className='activity-container'>
                        <img src="../images/sack.jpeg" className="keraton-activities-image"></img>
                        <div style={{position: "relative"}}>
                            <p className="keraton-activities-text">2</p>
                        </div>
                    </div>
                </Col>
                <Col xs={4} style={{padding: "0", margin: "0", overflow: "hidden"}}>
                    <div className='activity-container'>
                        <img src="../images/hopscotch.jpeg" className="keraton-activities-image"></img>
                        <div style={{position: "relative"}}>
                            <p className="keraton-activities-text">3</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default KeratonActivities