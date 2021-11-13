import React from 'react';
import Container from 'react-bootstrap/Container'

function AboutUs() {
    return (
        <div>
            <img
                className="d-block w-100"
                src="https://picsum.photos/2000"
                alt=""
                style={{ height: "calc(50vh + 10vw)" }}
            />

            <Container>
                <section className="my-5 about-us">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="my-3"><strong>About Us</strong></h1>
                            <p className="my-3 div-margin-btm">ISAUW (Indonesian Student Association at the University of Washington) is a non-profit cultural organization
                                with the purpose of uniting the Indonesian community within the university as well as promoting our Indonesian culture to
                                the greater Seattle Area community.</p>
                            <p className="my-3">Since 2001, we have established a platform for Indonesian students at the University of Washington to
                                create a unifying community based on common interest in Indonesian culture.</p>
                        </div>
                    </div>
                </section>
            </Container >
        </div>
    );
}

export default AboutUs;