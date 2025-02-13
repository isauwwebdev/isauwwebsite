import React from "react";
import Container from "react-bootstrap/Container";

function Purpose() {
  return (
    <div
      style={{ position: "relative", marginTop: "50px", marginBottom: "130px" }}
    >
      <img
        src="../images/indonesia-map.png"
        className="map"
        alt="Map of Indonesia"
      />
      <Container className="my-5 purpose">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h1 className="my-3 font-bold">
              <strong>Our Purpose</strong>
            </h1>
            <p className="my-3 div-margin-btm font-spartan">
              At ISAUW, we are committed to bringing together Indonesian
              students and sharing the beauty of our culture with the wider
              community. Through meaningful engagement, we aim to create a
              <b> strong, supportive, and inclusive </b> environment for all.
            </p>
            <p className="my-3 no-margin-btm font-spartan">
              Since 2001, we have established a platform for Indonesian students
              at the University of Washington to create a unifying community
              based on common interest in Indonesian culture.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Purpose;
