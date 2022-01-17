import Carousel from 'react-bootstrap/Carousel';
import Purpose from './Purpose';
import InstaFeed from './InstaFeed';
import React from 'react';
import HomeUpcomingEvents from './HomeUpcomingEvents';

function Home() {
    const API_KEY = process.env.REACT_APP_INS_TOKEN;

    return (
        <div>
            {/* Carousel */}
            <div>
                <img
                    src="https://picsum.photos/2200"
                    alt=""
                    style={{ height: "100vh", width: "100%", margin: "auto", objectFit: "cover" }}
                />
                <Carousel.Caption style={{ top: "40%", bottom: "60%" }} className="animated fadeInDown">
                    <h1 className="carousel-title">Indonesian Student Association at the University of Washington</h1>
                </Carousel.Caption>
            </div>

            <Purpose />
            <HomeUpcomingEvents />
            <InstaFeed token={API_KEY} limit={9} />
        </div>
    )
}

export default Home;