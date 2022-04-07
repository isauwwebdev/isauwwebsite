import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';

function KeratonActivities() {
    return(
        <div>
        <Container className="keraton-games">
            <h1 className="my-3"><strong>Games</strong></h1>
                <Row>
                <h2 className="my-3">GAME 1</h2>
                    <Col>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </Col>
                    <Col>
                        <img src="../images/isauwcard.png" style={{ width: "600px", height: "500px" }}></img>
                    </Col>
                </Row>
                <Row>
                <h2 className="my-3">GAME 2</h2>

                    <Col>
                        <img src="../images/isauwcard.png" style={{ width: "600px", height: "500px" }}></img>
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

        <Container className="keraton-competitions">
        <h1 className="my-1"><strong>Competition</strong></h1>
        <Row>
            <Col>
                <h2 className="my-3">Title 1</h2>
                <img src="../images/isauwcard.png" style={{ width: "300px", height: "250px" }}></img>
            </Col>
            <Col>
                <h2 className="my-3">Title 2</h2>
                <img src="../images/isauwcard.png" style={{ width: "300px", height: "250px" }}></img>
            </Col>
            <Col>
                <h2 className="my-3">Title 1</h2>
                <img src="../images/isauwcard.png" style={{ width: "300px", height: "250px" }}></img>
            </Col>
        </Row>
        <Row>
            <Col>
                <p>Some description for competition</p>
            </Col>
        </Row>
        </Container>
        </div>
    )
}
export default KeratonActivities