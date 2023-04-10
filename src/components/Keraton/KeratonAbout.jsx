import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import KeratonCountdown from './KeratonCountdown';

function KeratonAbout() {
  return (
    <div style={{ }}>
      <Container className="keraton-about" style={{paddingTop: "7rem", paddingBottom: "7rem"}}>
        <Row>
          <Col xs={6} sm={6} style={{margin: "auto", padding: "0"}}>
            <h1 className="py-4 keraton-section-header" style={{textAlign: "left", marginLeft: "12px"}}>About</h1>

            <p className="keraton-about-text" style={{fontSize: `calc(12px + 0.6vw)`, paddingRight: "16px"}}>
            Keraton is an Indonesian Festival and ISAUW’s most iconic event of the year. Currently, Keraton is the largest Indonesian Festival on the West Coast and the second largest in the United States. This event is held annually at the University of Washington since 2011.
              </p>
          </Col>
          <Col xs={6} sm={5} style={{display: "flex", alignItems: "center", padding: "0"}}>
            <div className="keraton-countdown-container">
              <KeratonCountdown keratonDate={new Date("2023-05-06")}></KeratonCountdown>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default KeratonAbout
