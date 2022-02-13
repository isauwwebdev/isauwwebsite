import React from 'react';
import Container from 'react-bootstrap/Container'
import Slider from 'react-slick';

function PastEventsCard(props) {
    return (
        <div className="past-events-card">
            <Container>
                <Slider {...props.settings}>
                    {props.img.map((image) =>
                        <img src={image.src} className="past-events-img" height="100"></img>
                    )}
                </Slider>
            </Container>

            <Container>
                <div className="mx-auto" style={{ padding: `calc(0.8vw + 8px) 0 0 calc(1.5px + 0.4vw)` }}>
                    <p className="past-events-date">{props.date}</p>
                    <p id="title-name" className="events-title">{props.title}</p>
                    <p id="descr-text" className="past-events-text">{props.text}</p>
                </div>
            </Container>
        </div>
    );
}

export default PastEventsCard;