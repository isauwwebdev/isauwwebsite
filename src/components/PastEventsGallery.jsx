import React from 'react';
import Container from 'react-bootstrap/Container'
import PastEventsCard from './PastEventsCard';

function PastEventsGallery(props) {
    const data = props.data;
    console.log(data);
    function PastEventsNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", color: "rgba(0,0,0,0.5)", width: "auto", height: "auto" }}
                onClick={onClick}
                isDisabled={className?.includes("slick-disabled")}
            ><i className="fas fa-angle-right slick-upcoming-events-button"></i></div>
        );
    }
    function PastEventsPrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", color: "rgba(0,0,0,0.5)", width: "auto", height: "auto" }}
                onClick={onClick}
                isDisabled={className?.includes("slick-disabled")}
            ><i className="fas fa-angle-left slick-upcoming-events-button"></i></div>
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        focusOnSelect: true,
        swipeToSlide: true,
        variableWidth: true,
        className: "past-events-carousel",
        arrows: false,
    };
    const displayEvents = data.map((event) => {
        return <PastEventsCard 
            title={event.title.toUpperCase()}
            date={(event.date + ", " + event.year).toUpperCase()}
            text={event.text}
            location={event.location}
            settings={settings}
        />
    });
    return (
        <div>
            <section className="my-5 btm-margin">
                {displayEvents}
            </section>
        </div>
    );
}

export default PastEventsGallery;