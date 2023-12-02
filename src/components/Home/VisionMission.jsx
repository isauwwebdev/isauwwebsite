import React from 'react';
import Fade from 'react-reveal/Fade';

function VisionMission() {
  return (
    <section className="my-5 mx-auto" style={{width: "70%"}}>
      <Fade bottom cascade>
        <div className="row justify-content-md-center">
          <div className="col-md-8 text-center" style={{left: "100px"}}>
            <h1 className="my-3"><strong>Our Vision</strong></h1>
            <p className="my-3">
              To celebrate Indonesia's diverse culture by fostering a place of belonging and engaging in activities that build understanding and advocacy.
            </p>
          </div>
          <div className="col-md-8 text-center">
            <h1 className="my-3"><strong>Our Mission</strong></h1>
            <p className="my-3">
              To become a leading organization of proud Indonesian students that promotes cultural diversity in the Greater Seattle Area and beyond.
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default VisionMission;