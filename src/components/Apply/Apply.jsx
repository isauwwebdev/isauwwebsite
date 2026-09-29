import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PositionDescriptions from "./PositionDescriptions";

const APPLICATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScG1KbwrEjrKhUIEFp-WMbuocao75P0vzPYyA5b1wOJpzRy5g/viewform?usp=dialog";

function Apply() {
  return (
    <div style={{ fontSize: "14px" }}>
      {/* banner keeps the transparent navbar's white links readable */}
      <div style={{ position: "relative" }}>
        <img
          className="d-block w-100"
          src="../images/recruitment/recruitment2025.jpg"
          alt=""
          style={{ height: "calc(60vh + 10vw)" }}
        />
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} className="my-5">
            <div style={{ marginBottom: "20px" }}>
              <h1 style={{ marginBottom: "15px" }}>
                <strong>ISAUW Officer Application</strong>
              </h1>
              <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                We are thrilled to welcome new members to ISAUW this year!
                Please fill in the form below to apply. Selected applicants will
                be contacted for an interview.
              </p>
              <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                Reach out on Instagram @isauwhuskies or email us at isauw@uw.edu
                for any questions.
              </p>
              <p style={{ fontSize: "14px", marginBottom: "0" }}>
                <strong style={{ fontSize: "14px" }}>Requirement:</strong>{" "}
                Currently enrolled as a UW student.
              </p>
            </div>

            <div style={{ textAlign: "center", margin: "2rem 0" }}>
              <a
                href={APPLICATION_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="apply-now-button"
              >
                Apply Now!
              </a>
            </div>

            <PositionDescriptions />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Apply;
