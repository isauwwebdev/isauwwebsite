import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function OfficerCard(props) {
  const {
    officerName,
    officerRole,
    officerMajor,
    officerPosition,
    officerDescr,
    officerImg,
  } = props;
  const [showModal, setShowModal] = useState(false);

  const handleClick = (event) => {
    setShowModal(true);
  };

  return (
    <div className="officer-card-container">
      <Card
        className="officer-card my-3"
        onClick={handleClick}
        style={{
          // width: "230px",
          // height: "350px",
          width: "300px",
          height: "450px",
          color: "white",
          margin: "auto",
          "border-radius": "0.3rem",
          "object-fit": "cover",
          border: "none",
        }}
      >
        <Card.Img
          className="officer-image"
          src={officerImg}
          alt="officer portrait"
          style={{
            // width: "230px",
            // height: "300px",
            width: "300px",
            height: "400px",
            "border-radius": "0.3rem",
            "object-fit": "cover",
          }}
        />
        <Card.Body>
          <Card.Title
            className="officer-intro"
            style={{
              "font-size": "1.2rem",
              "font-weight": "600",
              color: "black",
              "text-align": "center",
            }}
          >
            {officerName}
          </Card.Title>
          <Card.Title
            className="officer-role"
            style={{
              "font-size": ".8rem",
              color: "black",
              "text-align": "center",
            }}
          >
            {officerRole}
          </Card.Title>
          {/* <Card.Subtitle className="officer-major" style={{ "font-size": "calc(0.2vw + 6px)" }}>{officerMajor}</Card.Subtitle> */}
        </Card.Body>
      </Card>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="contained-modal-title-vcenter"
        style={{ "border-radius": "0.5rem" }}
        centered
      >
        <Modal.Header
          closeButton
          id="contained-modal-title-vcenter"
          style={{ "border-bottom": "none" }}
        ></Modal.Header>
        <Modal.Body className="px-3 py-4">
          <Row className="justify-content-xs-center">
            {/* very hacky way to do a flex row. Fix should be to change row-col to normal div */}
            <Col xs={12} md={12} lg={12} className="officer-modal-profile">
              <div
                className=""
                style={{
                  "text-align": "center",
                  "justify-content": "center",
                  display: "flex",
                }}
              >
                <img
                  src={officerImg}
                  style={{
                    height: "400px",
                    width: "350px",
                    "object-fit": "cover",
                  }}
                ></img>
              </div>
            </Col>
            <Col xs={12} md={12} lg={12} className="mx-1">
              <div className="officer-name-title">
                <h1
                  className="mt-3 mb-0 text-center"
                  style={{
                    "font-size": "calc(1.2vw + 16px)",
                    "font-weight": "600",
                    "letter-spacing": "1px",
                  }}
                >
                  {officerName}
                </h1>
                <h2
                  className="mb-3 mt-1 text-center"
                  style={{
                    "font-size": "calc(0.4vw + 10px)",
                    "letter-spacing": "2px",
                  }}
                >
                  {officerRole === "Director"
                    ? (officerRole + " of " + officerPosition).toUpperCase()
                    : (officerRole + " " + officerPosition).toUpperCase()}
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="officer-modal-media"></Row>
        </Modal.Body>
        <Modal.Footer style={{ "border-top": "none" }}></Modal.Footer>
      </Modal>
    </div>
  );
}

export default OfficerCard;
