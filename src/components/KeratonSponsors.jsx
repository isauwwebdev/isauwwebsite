import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function KeratonFAQ() {

    return (
        <div className="keraton-sponsors" style={{ "background-color": "#031B28", paddingTop: "2rem", paddingBottom: "2rem", backgroundImage: "url(https://www.transparenttextures.com/patterns/arabesque.png)"}}>
            <Container >
                <Row className="text-center keraton-sponsors-row">
                    <Col>
                        <img src="../images/keraton/sponsors/1-csf.png" style={{maxWidth: "20%"}}></img>
                    </Col>
                </Row>
                <Row className="text-center keraton-sponsors-row">
                    <Col>
                        <img src="../images/keraton/sponsors/2-accolade.png" style={{maxWidth: "18%", margin: "0px 30px"}}></img>
                        <img src="../images/keraton/sponsors/2-deltagro.png" style={{maxWidth: "18%", margin: "0px 30px"}}></img>
                    </Col>
                </Row>
                <Row className="text-center keraton-sponsors-row">
                    <Col>
                        <img src="../images/keraton/sponsors/3-asuw.png" style={{maxWidth: "18%"}}></img>
                        <img src="../images/keraton/sponsors/3-asmaja.png" style={{maxWidth: "14%"}}></img>
                        <img src="../images/keraton/sponsors/3-tgi.png" style={{maxWidth: "18%"}}></img>
                    </Col>
                </Row>
                <Row className="text-center keraton-sponsors-row">
                    <Col sm={6} className="keraton-sponsors-row-first">
                        <img src="../images/keraton/sponsors/4-hub.png" style={{width: `10%`, margin: "5px 20px"}}></img>
                        <img src="../images/keraton/sponsors/4-wells.png" style={{maxWidth: "10%", margin: "5px 20px"}}></img>
                        <img src="../images/keraton/sponsors/4-kjri.png" style={{width: `10%`, margin: "5px 20px"}}></img>
                    </Col>
                    <Col sm={6} className="keraton-sponsors-row-second">
                        <img src="../images/keraton/sponsors/4-uwaa.png" style={{width: `10%`, margin: "5px 20px"}}></img>
                        <img src="../images/keraton/sponsors/4-indomie.png" style={{maxWidth: "10%", margin: "5px 20px"}}></img>
                        <img src="../images/keraton/sponsors/4-uwsao.png" style={{width: `10%`, margin: "5px 20px"}}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default KeratonFAQ;