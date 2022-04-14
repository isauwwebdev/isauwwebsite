import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';

function KeratonPerformers() {
    return (
        <div>
            <Container className="keraton-performers">
                <h1 className="my-3 keraton-performers-header"><strong>PERFORMERS</strong></h1>
                <Row className="performers-main-row">
                    <Col>
                        <h2 className="performer-name">DHRUV</h2>
                    </Col>
                    <Col>
                        <h2 className="performer-name">AUDREY MIKA</h2>
                    </Col>
                </Row>
                <h1 className="my-3 performer-name">STUDENT PERFORMERS</h1>
                <Row className="performers-student-row">
                    <Col>
                        <h3 className="student-performer-name">PERFORMER1</h3>
                    </Col>
                    <Col>
                        <h3 className="student-performer-name">PERFORMER2</h3>
                    </Col>
                    <Col>
                        <h3 className="student-performer-name">PERFORMER3</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default KeratonPerformers
