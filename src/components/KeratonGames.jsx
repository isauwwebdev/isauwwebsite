import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function KeratonGames() {
    return (
        <div className="py-5" style={{ backgroundColor: "#031B28"}}>
            <h1 className="py-3 keraton-section-header">Activities</h1>
            <Row className="keraton-games-row">
                <Col xs={4} style={{padding: "0", margin: "0", overflow: "hidden"}}>
                    <div className='keraton-games-container'>
                        <img src="../images/keraton/games/bakiak.jpeg" className="keraton-games-image"></img>
                        <div style={{position: "relative"}}>
                            <p className="keraton-games-text">Bakiak</p>
                        </div>
                        <span class="keraton-games-overlay-top"></span>
                        <span class="keraton-games-overlay-btm"></span>
                    </div>
                </Col>
                <Col xs={4} style={{padding: "0", margin: "0", overflow: "hidden"}}>
                    <div className='keraton-games-container'>
                        <img src="../images/keraton/games/balap-karung-alt.jpeg" className="keraton-games-image"></img>
                        <div style={{position: "relative"}}>
                            <p className="keraton-games-text">Balap Karung</p>
                        </div>
                        <span class="keraton-games-overlay-top"></span>
                        <span class="keraton-games-overlay-btm"></span>
                    </div>
                </Col>
                <Col xs={4} style={{padding: "0", margin: "0", overflow: "hidden"}}>
                    <div className='keraton-games-container'>
                        <img src="../images/keraton/games/engklek.jpeg" className="keraton-games-image"></img>
                        <div style={{position: "relative"}}>
                            <p className="keraton-games-text">Engklek</p>
                        </div>
                        <span class="keraton-games-overlay-top"></span>
                        <span class="keraton-games-overlay-btm"></span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default KeratonGames