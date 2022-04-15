import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

function KeratonPerformers() {
    return (
        <div>
            <Container className="keraton-performers my-5">
                <h1 className="my-3 keraton-performers-header"><strong>PERFORMERS</strong></h1>
                <Row className="performers-main-row my-5">
                    <Col>
                        <h2 className="performer-name mb-5">DHRUV</h2>
                        <img src="https://picsum.photos/800/500" alt=""></img>
                    </Col>
                </Row>
                <Row className="performers-student-row my-5">
                    <Col>
                        <h3 className="student-performer-name my-5">PERFORMER1</h3>
                        <img src="https://picsum.photos/200/300" alt=""></img>

                    </Col>
                    <Col>
                        <h3 className="student-performer-name my-5">PERFORMER2</h3>
                        <img src="https://picsum.photos/200/300" alt=""></img>
                    </Col>
                    <Col>
                        <h3 className="student-performer-name my-5">PERFORMER3</h3>
                        <img src="https://picsum.photos/200/300" alt=""></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default KeratonPerformers
