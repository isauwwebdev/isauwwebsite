import React from 'react';
import UpcomingEventsCard from './UpcomingEventsCard';
import Slider from 'react-slick';

function UpcomingEventsGallery() {

    function UpcomingEventsNextArrow(props) {
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
    function UpcomingEventsPrevArrow(props) {
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
        dots: true,
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
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.08,
                }
            }
        ],
        nextArrow: <UpcomingEventsNextArrow />,
        prevArrow: <UpcomingEventsPrevArrow />
    };

    return (
        <section className="my-5 div-margin-btm">
            <div className="row">
                <div className="col-12">
                    <h1 className="my-3" style={{ paddingLeft: `calc(0.4vw + 1.5px)` }}><strong>Upcoming Events</strong></h1>
                    {/* Past Events */}
                    <Slider {...settings}>
                        <UpcomingEventsCard title="FRIENDSGIVING" month="NOV" date="19" time="6:30PM" loc="Bridges @ 11th" img="https://picsum.photos/2000" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel turpis ac est eleifend imperdiet." />
                        <UpcomingEventsCard title="WINTER BALL" month="JAN" date="14" time="TBA" loc="Intellectual House, UW" img="https://picsum.photos/1800" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel turpis ac est eleifend imperdiet." />
                        <UpcomingEventsCard title="WINTER CUP" month="MAR" date="TBA" time="TBA" loc="IMA, UW" img="https://picsum.photos/1600" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel turpis ac est eleifend imperdiet." />
                        <UpcomingEventsCard title="KERATON" month="MAY" date="TBA" time="TBA" loc="Rainier Vista, UW" img="https://picsum.photos/1400" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel turpis ac est eleifend imperdiet." />
                    </Slider>
                </div>
            </div>
        </section >
    );
}

export default UpcomingEventsGallery;