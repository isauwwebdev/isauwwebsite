import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function KeratonAbout() {
    return (
        <div className="pt-5 pb-3" style={{ "background-color": "#031B28"}}>
            <Container className="keraton-about">
                <Row>
                    <Col xs={6} sm={6} style={{margin: "auto", padding: "0"}}>
                        <h1 className="py-4 keraton-section-header" style={{textAlign: "left", marginLeft: "12px"}}>About</h1>

                        <p className="keraton-about-text" style={{fontSize: `calc(10px + 0.8vw)`}}>
                            Feeling homesick? After a 4-year hiatus, Keraton is back in 2022 with sensational musical headliners, cultural shows, stunning cuisine, and exciting activities that will immerse you in Indonesian culture.
                        </p>
                    </Col>
                    <Col xs={6} sm={5} style={{display: "flex", alignItems: "center"}}>
                        <div className='testing'>
                            <img className="keraton-about-media" src="https://antoinelours.com/wp-content/uploads/2021/12/AntoineLours.jpg" alt="Coquilles St Jacques"></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default KeratonAbout
