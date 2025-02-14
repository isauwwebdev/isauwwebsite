import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import AOS from "aos";
import "aos/dist/aos.css";

function Purpose() {
  useEffect(() => {
    AOS.init();
  }, []);
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
          <div className="col-sm-12 col-md-6" data-aos="fade-up">
            <h1 className="my-3 font-bold">
              <strong>Our Purpose</strong>
            </h1>
            <p className="my-3 div-margin-btm">
              ISAUW is a non-profit cultural organization with the purpose of
              uniting the Indonesian community within the University of
              Washington as well as promoting our Indonesian culture to the
              Greater Seattle Area community.
            </p>
            <p className="my-3 no-margin-btm">
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
