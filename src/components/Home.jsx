import Carousel from 'react-bootstrap/Carousel';
import Purpose from './Purpose';
import InstaFeed from './InstaFeed';
import React from 'react';
import UpcomingEventsGallery from './UpcomingEventsGallery';
import Container from 'react-bootstrap/Container';
import { AiOutlineInstagram } from 'react-icons/ai';
import { IoBagHandleOutline } from 'react-icons/io5'
import Fade from 'react-reveal/Fade';

function Home() {
    const API_KEY = process.env.REACT_APP_INS_TOKEN;

    return (
        <div>
            {/* Carousel */}
            <div>
                <div className="navbar-overlay">
                    <video playsinline="playsinline" autoplay="autoplay" muted loop style={{ height: "100vh", width: "100%", margin: "auto", objectFit: "cover" }}>
                        <source src="http://students.washington.edu/isauw/images/cabin.mp4" type="video/mp4"></source>    
                    </video>
                </div>

                <Carousel.Caption style={{ top: "40%", bottom: "60%" }} className="animated fadeInDown">
                    <h1 className="carousel-title" style = {{ zIndex: "100" }}>Indonesian Student Association at the University of Washington</h1>
                </Carousel.Caption>
            </div>

            <Purpose />

            <Fade bottom>
                <Container>
                    <UpcomingEventsGallery />
                </Container>
            </Fade>

            <Fade bottom>
                <Container className="align-items-center text-center" style={{marginTop: "4rem", overflow: "auto"}}>
                    <h1 className="my-3 cta"><strong>DON'T MISS OUT</strong></h1>
                    <p className="text-center" style={{	fontFamily: 'brandon_grotesqueregular', fontSize: 'calc(15px + 0.6vw)', marginBottom: "0.1rem"}}>join the ISAUW family today</p>
                    <a type="button" className="btn btn-home" href="https://instagram.com/isauwhuskies/">
                        <AiOutlineInstagram class="btn-home-icon" /><span> FOLLOW</span>
                    </a>
                    <a type="button" className="btn btn-home" href="./Shop">
                        <IoBagHandleOutline class="btn-home-icon" /><span> EXPLORE</span>
                    </a>
                </Container>
            </Fade>
            <InstaFeed token={API_KEY} limit={9} />
        </div>
    )
}

export default Home;
