import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function KeratonMap() {
    return (
        <div className="py-1" style={{}}>
            <Container className="keraton-map mx-auto" style={{ paddingTop: "3rem", paddingBottom: "2rem" }}>
                <h1 className="py-2 mb-3 keraton-section-header">Map</h1>
                <img src="../../images/keraton/2023/map.png"></img>
            </Container>
        </div>
    )
}

export default KeratonMap;
