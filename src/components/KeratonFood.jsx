import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function KeratonFood() {
    return (
        <div>
            <Container>
                <h1 className="my-3"><strong>Food</strong></h1>
                <div className="vendor">
                    <Row>
                        <Col className="">
                            <img src="../images/isauwcard.png" style={{ width: "150px", height: "150px", margin: "20px" }}></img>
                        </Col>
                        <Col className="">
                            <h2 className="my-2">Vendor Name</h2>
                        </Col>
                        <Col className="">
                            <img src="../images/isauwcard.png" style={{ width: "150px", height: "150px", margin: "20px" }}></img>
                        </Col>
                    </Row>
                    <Row>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default KeratonFood