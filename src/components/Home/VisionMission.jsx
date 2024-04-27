import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/Container'

const visBorder = {
  left: "100px",
  border: "solid",
  borderRadius: "20px",
  innerWidth: "20px",
  marginLeft: "20px",
  marginRight: "20px"
}

const misBorder = {
  left: "100px",
  border: "solid",
  borderRadius: "20px",
  innerWidth: "20px",
  marginLeft: "20px",
  marginRight: "20px",
  boxShadow: "10px 5px 5px grey"
}

function VisionMission() {
  return (
    <section className="my-5 mx-auto" style={{width: "90%"}}>
      <Fade bottom cascade>
        <Container style={{position: "relative"}}>
          <div className="row justify-content-md-center width">
            <div className="col-sm text-center mr-4" style={visBorder}>
              <h1 className="my-3"><strong>Our Vision</strong></h1>
              <p className="my-3">
                To celebrate Indonesia's diverse culture by fostering a place of belonging and engaging in activities that build understanding and advocacy.
              </p>
            </div>
            <div className="col-sm text-center mr-4" style={misBorder}>
              <h1 className="my-3"><strong>Our Mission</strong></h1>
              <p className="my-3">
                To become a leading organization of proud Indonesian students that promotes cultural diversity in the Greater Seattle Area and beyond.
              </p>
            </div>
          </div>
        </Container>
      </Fade>
    </section>
  );
}

export default VisionMission;