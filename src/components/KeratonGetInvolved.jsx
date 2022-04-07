import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';

function KeratonGetInvolved() {
    return(
        <div>
            <Container className="keraton-get-involved">
                <Row>
                    <h1 className="my-1"><strong>Get Involved</strong></h1>
                    <Col>
                        <div className="jumbotron mx-1">
                            <h1 className="jumbotron-title display-4"><a href="https://docs.google.com/forms/u/0/" role="button">Volunteer</a></h1>
                        </div>
                    </Col>
                    <Col>
                        <div className="jumbotron mx-4">
                            <h1 className="jumbotron-title display-4"><a href="https://docs.google.com/forms/u/0/" role="button">Go Fund Me</a></h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default KeratonGetInvolved