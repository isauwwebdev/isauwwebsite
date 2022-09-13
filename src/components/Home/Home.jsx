import React from 'react';
import Purpose from './Purpose';
import InstaFeed from './InstaFeed';
import UpcomingEventsGallery from '../Shared/UpcomingEventsGallery';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
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
                    <video playsinline="playsinline" autoplay="autoplay" muted loop style={{ height: "100vh", width: "100%", margin: "auto", objectFit: "cover", display: "block" }}>
                        <source src="https://students.washington.edu/isauw/images/cabin.mp4" type="video/mp4"></source>    
                    </video>
                </div>

                <Carousel.Caption style={{ top: "40%", bottom: "60%" }} className="animated fadeInDown">
                    <h1 className="carousel-title" style = {{ zIndex: "100", fontFamily: "brandon_grotesque, sans-serif", fontWeight: "400" }}>Indonesian Student Association at the University of Washington</h1>
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
                    <h1 className="my-3 cta"><strong style={{fontFamily: 'brandon_grotesque'}}>DON'T MISS OUT</strong></h1>
                    <p className="text-center" style={{	fontFamily: 'brandon_grotesque', fontWeight: "400", fontSize: 'calc(15px + 0.6vw)', marginBottom: "0.1rem"}}>join the ISAUW family today</p>
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
