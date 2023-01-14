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
            <Card className="officer-card my-3" onClick={handleClick} style={{ width: "300px", height: "300px", color: "white", margin: "auto", "border-radius": "20%", "object-fit": "cover" }}>
                <Card.Img className="officer-image" src={officerImg} alt="officer portrait" style={{ width: "300px", height: "300px", "object-fit": "cover" }}/>
                <Card.ImgOverlay>
                    <Card.Title className="officer-intro" style={{ "font-size": "calc(0.6vw + 8px)", "font-weight": "600" }}>{officerName}</Card.Title>
                    <Card.Title className="officer-role" style={{ "font-size": "calc(0.3vw + 8px)" }}>{officerRole}</Card.Title>
                    {/* <Card.Subtitle className="officer-major" style={{ "font-size": "calc(0.2vw + 6px)" }}>{officerMajor}</Card.Subtitle> */}
                    <Card.Text className="officer-description">
                        {officerDescr}
                    </Card.Text>
                </Card.ImgOverlay>
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
                <Modal.Body className="px-4">
                    <Row className="officer-modal-information">
                        <Col xs={12} md={12} lg={4}>
                            <img src={officerImg} style={{ width: "200px", height: "200px", "object-fit": "cover" }}></img>
                            <h1 className="my-2" style={{ "font-size": "calc(0.6vw + 16px)", "font-weight": "600" }}>{officerName}</h1>
                            <h2 className="" style={{ "font-size": "calc(0.2vw + 8px)", "letter-spacing": "2px" }}>{(officerRole + " " + officerPosition).toUpperCase()}</h2>
                        </Col>
                        <Col xs={12} md={12} lg={8} >
                            <p style={{ "font-size": "calc(0.2vw + 12px)" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p style={{ "font-size": "calc(0.2vw + 12px)" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam,
                            </p>
                            <p style={{ "font-size": "calc(0.2vw + 12px)" }}>
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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