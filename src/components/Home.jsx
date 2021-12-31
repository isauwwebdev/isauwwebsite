import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';
import WhoWeAre from './WhoWeAre';
import InstaFeed from './InstaFeed';

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
                <Carousel.Caption style={{ bottom: "35%" }}>
                    <div className="animated fadeInDown">
                        <h1 className="carousel-title">Indonesian Student Association at the University of Washington</h1>
                    </div>
                </Carousel.Caption>
            </div>

            <Container>
                <WhoWeAre />
            </Container>

            <Container>
                <InstaFeed token={API_KEY} limit={9} />
            </Container>
        </div>
    )
}

export default Home;