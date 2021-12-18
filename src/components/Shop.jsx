import Product from './Product';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

import products from '../data/products.json';

function Shop() {
    return (
        <div>
            <Carousel touch={true} style={{ height: "calc(50vh + 10vw)" }}>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/2000"
                        alt=""
                    />
                    <Carousel.Caption style={{ bottom: "18%", letterSpacing: "10pt" }}>
                        <div className="animated fadeInDown">
                            <h1 className="carousel-title">HOODIES</h1>
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
                            <h1 className="carousel-title">TOTE BAGS</h1>
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
                            <h1 className="carousel-title">FACE MASKS</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container>
                <h1 className="my-3"><strong>Shop All</strong></h1>
                <Row>
                    {products.map((product, i) => {
                        return (
                            <Col xs={6} md={4} lg={3}>
                                <Product product={product}></Product>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Shop;