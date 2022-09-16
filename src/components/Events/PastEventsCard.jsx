import React from 'react';
import Container from 'react-bootstrap/Container'
import Slider from 'react-slick';
import Moment from 'react-moment';
import Fade from 'react-reveal/Fade';

function PastEventsCard(props) {
  const toUpperCaseFilter = (d) => {
    return d.toUpperCase();
  };
  let date = <Moment filter={toUpperCaseFilter} parse="MM/DD/YYYY" format="ddd, MMM DD YYYY">{props.date}</Moment>

  return (
    <Fade bottom>
      <div className="past-events-card">
        <Container>
          <Slider {...props.settings}>
            {props.img.map((image) =>
              <img src={image.src} className="past-events-img" alt=""></img>
            )}
          </Slider>
        </Container>

        <Container>
          <div className="mx-auto" style={{padding: `calc(0.8vw + 8px) 0 0 calc(1.5px + 0.4vw)`}}>
            <p className="past-events-date">{date}</p>
            <p className="events-title highlight-title">{props.title}</p>
            <p className="past-events-text highlight-desc">{props.text}</p>
          </div>
        </Container>
      </div>
    </Fade>
  );
}

export default PastEventsCard;