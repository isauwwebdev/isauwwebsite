import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';
import PastEventsGallery from './PastEventsGallery';
import UpcomingEventsGallery from './UpcomingEventsGallery';

function Events() {
    return (
        <div>
            {/* Carousel */}
            <Carousel touch={true} style={{ height: "calc(50vh + 10vw)" }}>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/2000"
                        alt=""
                    />
                    <Carousel.Caption style={{ bottom: "18%", letterSpacing: "10pt" }}>
                        <div className="animated fadeInDown">
                            <h1 className="carousel-title">SEATTLE 101</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/2200"
                        alt=""
                    />
                    <Carousel.Caption style={{ bottom: "18%", letterSpacing: "10pt" }}>
                        <div className="animated fadeInDown">
                            <h1 className="carousel-title">KERATON</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/2400"
                        alt=""
                    />
                    <Carousel.Caption style={{ bottom: "18%", letterSpacing: "10pt" }}>
                        <div className="animated fadeInDown">
                            <h1 className="carousel-title">SANTAPAN</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            < Container >
                <UpcomingEventsGallery />

                {/* Apply Now Jumbotron */}
                <div className="jumbotron" style={{ borderRadius: "16px", backgroundImage: `url("../images/isauwcard.png")`, backgroundPosition: "0% 0%", backgroundSize: `calc(240px + 96vw)`, padding: `calc(2vw + 16px)`, marginTop: `calc(1vw + 60px)` }}>
                    <h1 className="display-4" style={{ fontWeight: "bold", color: "white", textShadow: "black 0 0 0.16em" }} >ISAUW Card</h1>
                    <p className="events-card-text" style={{ color: "white", textShadow: "black 0 0 0.16em" }}>Get discounts on your favorite restaurants for only $8!</p>
                    <a className="btn btn-md btn-dark" style={{ fontWeight: "600", fontSize: `calc(0.6vw + 10px)`, textTransform: "none", color: "white", margin: `calc(1.2vw + 12px) 0 0` }} href="#" role="button">Order now</a>
                </div>

                <PastEventsGallery />
            </Container >
        </div >
    )
}

export default Events;