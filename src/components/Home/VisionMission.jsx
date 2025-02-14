import React from "react";

function VisionMission(props) {
  return (
    <section
      className={`my-5 mx-auto d-flex ${
        props.isMobile ? "flex-column" : "flex-row"
      }`}
      style={{ width: "76%" }}
    >
      <div className="row px-5">
        <div className="col-md-12 text-center">
          <h1 className="my-3 font-bold">
            <strong>Our Vision</strong>
          </h1>
          <p className="my-3">
            To celebrate Indonesia's diverse culture by fostering a place of
            belonging and engaging in activities that build understanding and
            advocacy.
          </p>
        </div>
      </div>

      <div className="row px-5">
        <div className="col-md-12 text-center">
          <h1 className="my-3 font-bold">
            <strong>Our Mission</strong>
          </h1>
          <p className="my-3">
            To become a leading organization of proud Indonesian students that
            promotes cultural diversity in the Greater Seattle Area and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
