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
          <p className="my-3 font-spartan">
            <span className="italic">
              {" "}
              To celebrate Indonesia's diverse culture by fostering a place of
              belonging and engaging in activities that build understanding and
              advocacy.{" "}
            </span>
            We believe in fostering a sense of belonging by encouraging
            participation in cultural initiatives, networking opportunities, and
            advocacy efforts.
          </p>
        </div>
      </div>

      <div className="row px-5">
        <div className="col-md-12 text-center">
          <h1 className="my-3 font-bold">
            <strong>Our Mission</strong>
          </h1>
          <p className="my-3 font-spartan">
            <span className="italic">
              To be a leading student organization that promotes Indonesian
              culture, identity, and diversity in Seattle and beyond.
            </span>
            We strive to create impactful experiences that empower our members,
            enhance cultural understanding, and inspire future generations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
