import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function KeratonFood() {
    return (
        <div>
            <Container>
                <div className="vendor">
                    <Row>
                    <Row>
                        <Col className="">
                            <h2 className="my-2" style={{display: 'flex',  justifyContent:'center'}}>Vendor Name</h2>
                        </Col>
                    </Row>
                        <Col className="">
                            <img src="../images/isauwcard.png" style={{ width: "150px", height: "150px", margin: "20px", display: "flex",  justifyContent:"center" }}></img>
                        </Col>
                        <Col className="">
                            <img src="../images/isauwcard.png" style={{ width: "50%", height: "150px", margin: "5% 10% 5% 5%",  justifyContent:"center" }}></img>
                        </Col>
                        <Col className="">
                            <img src="../images/isauwcard.png" style={{ width: "150px", height: "150px", margin: "20px", display: "flex",  justifyContent:"center" }}></img>
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