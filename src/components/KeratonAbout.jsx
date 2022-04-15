import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function KeratonAbout() {
    return (
        <div>
            <Container className="keraton-about">
                <h1 className="mt-5 keraton-about-header"><strong>ABOUT</strong></h1>
                <p className="keraton-about-text">
                    Keraton is an annual Indonesian cultural festival hosted by ISAUW (Indonesian
                    Student Association at University of Washington) with a purpose to introduce the
                    rich culture of Indonesia to the greater Seattle Community. This event is a free
                    one day pass to Indonesia filled with food, games, music and performances.
                </p>
            </Container>
        </div>
    )
}

export default KeratonAbout
