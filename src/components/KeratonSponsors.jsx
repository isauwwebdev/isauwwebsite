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
                        <img src="../images/keraton/sponsors/1-csf.png" style={{maxWidth: "40%"}}></img>
                    </Col>
                </Row>
                <Row className="text-center keraton-sponsors-row">
                    <Col>
                        <img src="../images/keraton/sponsors/2-accolade.png" style={{maxWidth: "35%", margin: "0px 30px"}}></img>
                        <img src="../images/keraton/sponsors/2-deltagro.png" style={{maxWidth: "35%", margin: "0px 30px"}}></img>
                    </Col>
                </Row>
                <Row className="text-center keraton-sponsors-row">
                    <Col>
                        <img src="../images/keraton/sponsors/3-asuw.png" style={{maxWidth: "30%"}}></img>
                        <img src="../images/keraton/sponsors/3-asmaja.png" style={{maxWidth: "30%"}}></img>
                        <img src="../images/keraton/sponsors/3-tgi.png" style={{maxWidth: "30%"}}></img>
                    </Col>
                </Row>
                <Row className="text-center keraton-sponsors-row">
                    <Col sm={6} style={{margin: "0", padding: "0"}} className="sponsor-left">
                        <img src="../images/keraton/sponsors/4-hub.png" style={{width: `10%`, margin: "5px 20px"}}></img>
                        <img src="../images/keraton/sponsors/4-wells.png" style={{maxWidth: "10%", margin: "5px 20px"}}></img>
                        <img src="../images/keraton/sponsors/4-kjri.png" style={{width: `10%`, margin: "5px 20px"}}></img>
                    </Col>
                    <Col sm={6} style={{margin: "0", padding: "0"}} className="sponsor-right">
                        <img src="../images/keraton/sponsors/4-uwaa.png" style={{width: `8%`, margin: "5px 20px"}}></img>
                        <img src="../images/keraton/sponsors/4-indomie.png" style={{maxWidth: "11%", margin: "5px 20px"}}></img>
                        <img src="../images/keraton/sponsors/4-uwsao.png" style={{width: `11%`, margin: "5px 20px"}}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default KeratonFAQ;