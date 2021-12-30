import React from 'react';
import Container from 'react-bootstrap/Container'
import PastEventsCard from './PastEventsCard';

function PastEventsGallery() {
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

    return (
        <div>
            <section className="my-5 btm-margin">
                <Container>
                    <h1 style={{ paddingLeft: `calc(0.4vw + 1.5px)`, marginBottom: `calc(.5rem + 0.6vw)` }}><strong >Past Events</strong></h1>
                </Container>

                <PastEventsCard title="SEATHROUGH" date="SAT, OCT 2 2021" text="It’s been 1.5 years since we last met. So, we want to re-Welcome you and every member of the IndoHusky community (from freshman to alumni) in our second part of the welcoming tradition, SeaThrough 🌊💘 A dinner ‘party’ filled with food, fun activities, and one of a kind prizes! Don’t miss out and come meet your community 😝" settings={settings} />
                <PastEventsCard title="SEATTLE 101" date="SAT, AUG 14 2021" text="Seattle 101 is a sharing and informative event designed to help prepare you for your first few months in college. Where you’re guaranteed to have a fun time, learn more about Seattle and the necessary tasks to do after arriving through our Indo sessions, connect with the personal experiences of our presenters, ask your burning questions during our QnA session and network/mingle with potential communities and friends! We’ll tackle all the questions you may have like: “Which bank should I register for?” “What’s the weather like?” “Where do people go to have fun” etc." settings={settings} />
            </section>
        </div>
    );
}

export default PastEventsGallery;