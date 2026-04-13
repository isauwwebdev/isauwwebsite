import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// ...existing code...

function KeratonAbout() {
  return (
    <div style={{}}>
      <Container className="keraton-about" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <h1 className="py-4 keraton-section-header" style={{ marginLeft: "12px" }}>About</h1>
        <Row className="keraton-about-row">
          <Col className="my-auto" xs={12} sm={12} md={12} lg={12} style={{ padding: "0" }}>

            <p className="keraton-about-text mx-4 my-auto" style={{ fontSize: `calc(12px + 0.4vw)` }}>
              Keraton is an Indonesian Festival and ISAUW’s most iconic event of the year. Currently, Keraton is the largest Indonesian Festival on the West Coast and the second largest in the United States. This event is held annually at the University of Washington since 2011.
            </p>
          </Col>
          {/* <Col xs={12} sm={12} md={6} lg={6} style={{ display: "flex", alignItems: "center", padding: "0" }}>
            <div className="keraton-countdown-container mx-auto my-auto">
              <KeratonCountdown keratonDate={new Date("2023-05-06")}></KeratonCountdown>
            </div>
          </Col> */}
        </Row>
      </Container>
    </div>
  )
}

export default KeratonAbout
