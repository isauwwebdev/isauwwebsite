import React from 'react';
import Container from 'react-bootstrap/Container'
import Slider from 'react-slick';

function PastEventsCard(props) {
    return (
        <div className="past-events-card">
            <div>
                <Slider {...props.settings}>
                    <img src="https://picsum.photos/400/600" className="past-events-img"></img>
                    <img src="https://picsum.photos/400/500" className="past-events-img"></img>
                    <img src="https://picsum.photos/600/500" className="past-events-img"></img>
                    <img src="https://picsum.photos/300/400" className="past-events-img"></img>
                    <img src="https://picsum.photos/400/400" className="past-events-img"></img>
                </Slider>
            </div>

            <Container>
                <div className="mx-auto past-events-content">
                    <p className="past-events-date">{props.date}</p>
                    <p className="events-title">{props.title}</p>
                    <p className="past-events-text">{props.text}</p>
                </div>
            </Container>
        </div >
    );
}

export default PastEventsCard;