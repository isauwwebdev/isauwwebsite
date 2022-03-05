import React from 'react';
import Container from 'react-bootstrap/Container'
import Fade from 'react-reveal/Fade';

function Purpose() {
    return (
        <div style={{ position: "relative" }}>
            <img src="../images/indonesia-map.png" className="map" />
            <Container className="my-5 purpose">
                <div className="row">
                    <Fade bottom>
                        <div className="col-sm-12 col-md-6">
                            <h1 className="my-3"><strong>Our Purpose</strong></h1>
                            <p className="my-3 div-margin-btm">ISAUW is a non-profit cultural organization
                                with the purpose of uniting the Indonesian community within the University of Washington as well as promoting our Indonesian culture to
                                the Greater Seattle Area community.</p>
                            <p className="my-3 no-margin-btm">Since 2001, we have established a platform for Indonesian students at the University of Washington to
                                create a unifying community based on common interest in Indonesian culture.</p>
                        </div>
                    </Fade>
                </div>
            </Container>
        </div>
    );
}

export default Purpose;