import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function KeratonAbout() {
    return (
        <div>
            <Container className="keraton-about">
                <h1 className="my-3"><strong>About Keraton</strong></h1>
                <Row className="">
                    <p className="keraton-about-description">
                        Keraton is ISAUW’s largest and most iconic event that is held annually every spring since 2002 at
                        the University of Washington. This year will be the comeback of the event after the two year pause
                        due to Covid-19. However, we’re hoping to come back stronger than ever as we commit to leave an undeniable
                        impressions to a crowd of over 3,000 international audiences, through in-depth and hands-on experience of
                        Indonesian culture provided through Indonesian traditional performances and activities.
                    </p>
                </Row>
                <Row className="about-col my-2">
                    <Col className="mr-5">
                        <div className="jumbotron mx-4">
                            <div>
                                <h1 className="jumbotron-title display-4">Want to Learn More?</h1>
                                <p className="jumbotron-desc">It's Free!</p>
                                <a className="jumbotron-btn btn btn-dark" href="https://docs.google.com/forms/u/0/" role="button">Join Mailing List</a>
                            </div>
                        </div>
                    </Col>
                    <Col className="my-2">
                        <p className="mt-4">
                            Keraton has grown much since its start in 2002, from a small crowd of 70 attendees, it has developed to a
                            staggering audience of over 3,000 visitors in its latest display, consisting of people from many various
                            backgrounds. This event is currently the largest of its kind in the PNW, and the second largest in the United States.
                        </p>
                    </Col>
                </Row>
                <h2 className="mt-5"><strong>What to expect...</strong></h2>
                <Row className="about-col my-3">
                    <Col>
                        <p>
                            A picture says a thousand words, a movie says a thousand emotions, and an experience creates
                            a thousand memories. This year’s theme is Indonesia’s vintage movies; capturing iconic performances
                            in Dilan, AADC, Check Toko Sebelah, and more.
                            <br></br>
                            What goes best with movies? Food. We’ll be showcasing a series of Indonesian delicacies from martabak,
                            sate, and so much more.
                            <br></br>
                            If not for the food, this year’s headliner will be a musical performance by Dhruv and X.
                        </p>
                    </Col>
                    <Col className="mx-5">
                        <img src="../images/isauwcard.png" style={{ width: "600px", height: "300px" }}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default KeratonAbout
