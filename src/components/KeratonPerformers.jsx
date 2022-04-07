import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';

function KeratonPerformers() {
    return (
        <div>
            <Container className="keraton-performers">
                <h1 className="my-3"><strong>Performers</strong></h1>
                <Row>
                <h2 className="my-3">Dhruv</h2>
                    <Col>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </Col>
                    <Col>
                        <img src="../images/isauwcard.png" style={{ width: "600px", height: "400px" }}></img>
                    </Col>
                </Row>
                <Row>
                <h2 className="my-3">Elvania</h2>
                    <Col>
                        <img src="../images/isauwcard.png" style={{ width: "600px", height: "400px" }}></img>
                    </Col>
                    <Col>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="keraton-student-performers">
                <h1 className="my-3"><strong>Student Performers</strong></h1>
                <Row>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </Row>
                <Row className="student-performers-images">
                    <Col>
                        <img src="../images/isauwcard.png" style={{ width: "300px", height: "300px" }}></img>
                        <h3>Performer1</h3>
                    </Col>
                    <Col>
                        <img src="../images/isauwcard.png" style={{ width: "300px", height: "300px" }}></img>
                        <h3>Performer2</h3>
                    </Col>
                    <Col>
                        <img src="../images/isauwcard.png" style={{ width: "300px", height: "300px" }}></img>
                        <h3>Performer3</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default KeratonPerformers
