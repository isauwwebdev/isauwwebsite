import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function KeratonFAQ() {
    return (
        <div className="keraton-sponsors">
            <Container >
                <Row className="text-center keraton-sponsors-row">
                    <Col>
                        <img src="../images/keraton/sponsors/1-csf.png" style={{maxWidth: "15%"}}></img>
                    </Col>
                </Row>
                <Row className="text-center keraton-sponsors-row">
                    <Col>
                        <img src="../images/keraton/sponsors/2-accolade.png" style={{maxWidth: "25%"}}></img>
                        <img src="../images/keraton/sponsors/2-deltagro.png" style={{maxWidth: "25%"}}></img>
                    </Col>
                </Row>
                <Row className="text-center keraton-sponsors-row">
                    <Col>
                        <img src="../images/keraton/sponsors/3-asuw.png" style={{maxWidth: "25%"}}></img>
                        <img src="../images/keraton/sponsors/3-asmaja.png" style={{maxWidth: "25%"}}></img>
                        <img src="../images/keraton/sponsors/3-tgi.png" style={{maxWidth: "25%"}}></img>
                    </Col>
                </Row>
                <Row className="text-center keraton-sponsors-row">
                    <Col>
                        <img src="../images/keraton/sponsors/4-hub.png" style={{width: `calc(36px + 3vw)`}}></img>
                        <img src="../images/keraton/sponsors/4-kjri.png" style={{width: `calc(37px + 3vw)`}}></img>
                        <img src="../images/keraton/sponsors/4-wells.png" style={{maxWidth: "10%"}}></img>
                        <img src="../images/keraton/sponsors/4-indomie.png" style={{maxWidth: "10%"}}></img>
                        <img src="../images/keraton/sponsors/4-uwaa.png" style={{width: `calc(30px + 3vw)`}}></img>
                        <img src="../images/keraton/sponsors/4-uwsao.png" style={{width: `calc(36px + 3vw)`}}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default KeratonFAQ;