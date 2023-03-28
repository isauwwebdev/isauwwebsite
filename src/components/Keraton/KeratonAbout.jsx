import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function KeratonAbout() {
  return (
    <div style={{backgroundColor: "#031B28"}}>
      <Container className="keraton-about" style={{paddingTop: "7rem", paddingBottom: "7rem"}}>
        <Row>
          <Col xs={6} sm={6} style={{margin: "auto", padding: "0"}}>
            <h1 className="py-4 keraton-section-header" style={{textAlign: "left", marginLeft: "12px"}}>About</h1>

            <p className="keraton-about-text" style={{fontSize: `calc(12px + 0.6vw)`, paddingRight: "16px"}}>
            Keraton is an Indonesian Festival and ISAUW’s most iconic event of the year. Currently, Keraton is the largest Indonesian Festival on the West Coast and the second largest in the United States. This event is held annually at the University of Washington since 2011.
              </p>
          </Col>
          <Col xs={6} sm={5} style={{display: "flex", alignItems: "center", padding: "0"}}>
            <div className='testing'>
              <video playsinline="playsinline" autoplay="autoplay" muted loop className="keraton-about-media" src="../images/keraton/about/pak-raden-trimmed.mp4"></video>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default KeratonAbout
