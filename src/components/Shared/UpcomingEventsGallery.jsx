import React from "react";
import UpcomingEventsCard from "./UpcomingEventsCard";
import Slider from "react-slick";
import events from "../../data/events.json";
import ComingSoonCard from "./ComingSoonCard";

export default function UpcomingEventsGallery() {
  function UpcomingEventsNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "rgba(0,0,0,0.5)",
          width: "auto",
          height: "auto",
        }}
        onClick={onClick}
        isDisabled={className?.includes("slick-disabled")}
      >
        <i className="fas fa-angle-right slick-upcoming-events-button"></i>
      </div>
    );
  }

  function UpcomingEventsPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "rgba(0,0,0,0.5)",
          width: "auto",
          height: "auto",
        }}
        onClick={onClick}
        isDisabled={className?.includes("slick-disabled")}
      >
        <i className="fas fa-angle-left slick-upcoming-events-button"></i>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.08,
        },
      },
    ],
    nextArrow: <UpcomingEventsNextArrow />,
    prevArrow: <UpcomingEventsPrevArrow />,
  };

  const upcomingEvents = events.filter((event) => {
    return !event.completed;
  });

  upcomingEvents.sort(function compare(a, b) {
    var dateA = new Date(a.date);
    var dateB = new Date(b.date);
    return dateA - dateB;
  });

  return (
    <section className="my-5">
      <div className="row">
        <div className="col-12 upcoming-event-gal">
          <h1
            className="my-3 font-bold"
            style={{ paddingLeft: `calc(0.4vw + 1.5px)` }}
          >
            <strong>Upcoming Events</strong>
          </h1>
          {/* Past Events */}
          <Slider {...settings}>
            {upcomingEvents.length === 0 && <ComingSoonCard />}
            {upcomingEvents.map((event, i) => {
              return (
                <UpcomingEventsCard
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  img={event.img[0].src}
                  alt={event.img[0].alt}
                  link={event.link}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
