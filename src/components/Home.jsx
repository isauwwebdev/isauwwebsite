import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';
import Purpose from './Purpose';
import InstaFeed from './InstaFeed';
import React from 'react';

function Home() {
    const API_KEY = process.env.REACT_APP_INS_TOKEN;

    const [position, setPosition] = React.useState(0);

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            var windowTop = window.scrollY;
            var elementTop = 0;
            if (document.getElementById("move")) {
                elementTop = document.getElementById("move").getBoundingClientRect().top;
            }
            setPosition((windowTop - elementTop) / 10.0);
        });
    });

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

            <Purpose />

            <div id="move" className="move-section">
                <div class="bg-move" style={{ left: `calc(-25% + ${position}px)` }}></div>
            </div>
            <div className="move-section">
                <div class="bg-move" style={{ right: `calc(-25% + ${position}px)` }}></div>
            </div>
            <div className="move-section">
                <div class="bg-move" style={{ left: `calc(-25% + ${position}px)` }}></div>
            </div>

            <Container>
                <InstaFeed token={API_KEY} limit={9} />
            </Container>
        </div>
    )
}

export default Home;