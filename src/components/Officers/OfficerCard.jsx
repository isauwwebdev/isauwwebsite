import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function OfficerCard(props) {
    const { officerName, officerRole, officerMajor, officerPosition, officerDescr, officerImg } = props;
    const [showModal, setShowModal] = useState(false);

    const handleClick = (event) => {
        setShowModal(true);
    }



    return (
        <div>
            <Card className="officer-card my-3" onClick={handleClick} style={{ width: "230px", height: "350px", color: "white", margin: "auto", "border-radius": "0.3rem", "object-fit": "cover", "border": "none" }}>
                <Card.Img className="officer-image" src={officerImg} alt="officer portrait" style={{ width: "230px", height: "300px", "border-radius": "0.3rem", "object-fit": "cover" }} />
                <Card.Body>
                    <Card.Title className="officer-intro" style={{ "font-size": "calc(0.6vw + 8px)", "font-weight": "600", "color": "black", "text-align": "center" }}>{officerName}</Card.Title>
                    <Card.Title className="officer-role" style={{ "font-size": "calc(0.4vw + 8px)", "color": "black", "text-align": "center" }}>{officerRole}</Card.Title>
                    {/* <Card.Subtitle className="officer-major" style={{ "font-size": "calc(0.2vw + 6px)" }}>{officerMajor}</Card.Subtitle> */}
                </Card.Body>
            </Card>
            <Modal
                dialogClassName="modal-60w"
                size="lg"
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton id="contained-modal-title-vcenter" style={{ "border-bottom": "none" }}>
                    <Modal.Title>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="">
                    <Row className="officer-modal-information">
                        <Col xs={12} md={12} lg={4}>
                            <img src={officerImg} style={{ width: "200px", height: "200px", "object-fit": "cover" }}></img>
                            <h1 className="my-2" style={{ "font-size": "calc(0.6vw + 16px)", "font-weight": "600" }}>{officerName}</h1>
                            <h2 className="" style={{ "font-size": "calc(0.2vw + 8px)", "letter-spacing": "2px" }}>
                                {
                                    (officerRole === "Director") ? 
                                    (officerRole + " of " + officerPosition).toUpperCase() : 
                                    (officerRole + " " + officerPosition).toUpperCase()
                                }
                            </h2>
                        </Col>
                        <Col xs={12} md={12} lg={8} >
                            <p style={{ "font-size": "calc(0.2vw + 12px)" }}>
                                {officerDescr}
                            </p>
                        </Col>
                    </Row>
                    <Row className="officer-modal-media">

                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default OfficerCard;