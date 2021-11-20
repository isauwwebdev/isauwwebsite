import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';
import VisionMission from './VisionMission';
import InstaFeeds from './InstaFeeds';

function Home() {
    const API_KEY = process.env.REACT_APP_INS_TOKEN;
    return (
        <div>
            {/* Carousel */}
            <Carousel style={{ height: "calc(50vh + 10vw)" }}>
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

            <Container>
                <VisionMission />
            </Container>

            <Container>
                <InstaFeeds token={API_KEY} limit={9}/>
            </Container>
        </div>
    )
}

export default Home;