import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';

function KeratonActivities() {
    return(
        <div className="keraton-section-header">
            <h1 className="my-1 keraton-section-header"><strong>Games</strong></h1>
            <Row>
                <Col xs={4} style={{padding: "0", margin: "0"}}>
                    <div className='activity-container'>
                        <div class="keraton-activities-overlay2">
                        <img src="../images/bakiak.jpeg" alt="games_image" className="keraton-activities-image"></img>
                            <p className="keraton-activities-text2">1</p>
                        </div>
                        <div class="keraton-activities-overlay">
                            <h2 className="keraton-activities-text">1</h2>
                        </div>
                    </div>
                </Col>
                <Col xs={4} style={{padding: "0", margin: "0"}}>
                    <div className='activity-container'>
                        <div class="keraton-activities-overlay2">
                            <img src="../images/sack.jpeg" alt="games_image" className="keraton-activities-image"></img>
                            <p className="keraton-activities-text2">2</p>
                        </div>
                        <div class="keraton-activities-overlay">
                            <h2 className="keraton-activities-text">2</h2>
                        </div>
                    </div>
                </Col>
                <Col xs={4} style={{padding: "0", margin: "0"}}>
                    <div className='activity-container'>
                        <div class="keraton-activities-overlay2">
                        <img src="../images/hopscotch.jpeg" alt="games_image" className="keraton-activities-image"></img>
                            <p className="keraton-activities-text2">3</p>
                        </div>
                        <div class="keraton-activities-overlay">
                            <h2 className="keraton-activities-text">3</h2>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default KeratonActivities