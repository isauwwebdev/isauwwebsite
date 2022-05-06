import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function KeratonAbout() {
    return (
        <div className="pb-5" style={{ "background-color": "#031B28"}}>
            <Container className="keraton-about">
                <h1 className="keraton-section-header">About</h1>
                <p className="keraton-about-text">
                    Feeling homesick? After a 4-year hiatus, Keraton is back in 2022 with sensational musical headliners, cultural shows, stunning cuisine, and exciting activities that will immerse you in Indonesian culture.
                </p>
            </Container>
        </div>
    )
}

export default KeratonAbout
