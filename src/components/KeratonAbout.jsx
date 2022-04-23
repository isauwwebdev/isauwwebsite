import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function KeratonAbout() {
    return (
        <div className="pb-5">
            <Container className="keraton-about">
                <h1 className="mt-5 keraton-about-header"><strong>ABOUT</strong></h1>
                <p className="keraton-about-text">
                Keraton is ISAUW’s largest and most iconic event that is held annually every Spring since 2002 at the University of Washington.
                This year will be a huge comeback of the event after the two-year pause due to COVID-19. However, we are hoping to come back stronger than ever
                as we commit to leave an undeniable impression to a crowd of over 3,000 international audiences. We aim to provide in-depth and hands-on experience
                of Indonesian culture through traditional performances and activities. Keraton has grown much since its start in 2002, from a small crowd of
                70 attendees to a staggering audience of over 3,000 visitors in its latest display, consisting of people from various backgrounds.
                This event is currently the largest of its kind in the PNW, and the second largest in the United States.
                </p>
            </Container>
        </div>
    )
}

export default KeratonAbout
