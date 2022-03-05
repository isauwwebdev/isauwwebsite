import React from 'react';
import PastEventsCard from './PastEventsCard';

function PastEventsGallery(props) {
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

    const sortEvents = props.data.sort(function compare(a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateA - dateB;
    }).reverse();

    const filteredEvents = sortEvents.map((event) => {
        return <PastEventsCard
            title={event.title.toUpperCase()}
            date={(event.date + ", " + event.year).toUpperCase()}
            text={event.text}
            location={event.location}
            settings={settings}
            img={event.img}
        />
    });
    return (
        <div>
            {filteredEvents}
        </div>
    );
}

export default PastEventsGallery;