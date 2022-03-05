import Carousel from 'react-bootstrap/Carousel';
import Purpose from './Purpose';
import InstaFeed from './InstaFeed';
import React from 'react';
import UpcomingEventsGallery from './UpcomingEventsGallery';
import Container from 'react-bootstrap/Container';

function Home() {
    const API_KEY = process.env.REACT_APP_INS_TOKEN;

    return (
        <div>
            {/* Carousel */}
            <div>
                <div className="navbar-overlay">
                    <img
                        src="https://picsum.photos/2200"
                        alt=""
                        style={{ height: "100vh", width: "100%", margin: "auto", objectFit: "cover" }}
                    />
                </div>
                <Carousel.Caption style={{ top: "40%", bottom: "60%" }} className="animated fadeInDown">
                    <h1 className="carousel-title" style = {{ zIndex: "100" }}>Indonesian Student Association at the University of Washington</h1>
                </Carousel.Caption>
            </div>

            <Purpose />
            <Container>
                <UpcomingEventsGallery />
            </Container>
            <Container className="align-items-center text-center" style={{marginTop: "4rem", overflow: "auto"}}>
                <h1 className="my-3"><strong>Join the ISAUW Family</strong></h1>
                <p className="text-center">Support the community</p>
                <a type="button" className="btn btn-outline-danger" href="https://instagram.com/isauwhuskies/" style={{textTransform: "none", borderRadius: "50px 50px 50px 50px", padding: "10px 20px 10px 20px"}}><i class="fa-brands fa-instagram"></i> Find us on Instagram</a>
                <a type="button" className="btn btn-outline-danger" href="./Shop" style={{textTransform: "none", borderRadius: "50px 50px 50px 50px", padding: "10px 20px 10px 20px"}}><i class="fa-solid fa-bag-shopping"></i> Explore the Collection</a>
            </Container>
            <InstaFeed token={API_KEY} limit={9} />
        </div>
    )
}

export default Home;