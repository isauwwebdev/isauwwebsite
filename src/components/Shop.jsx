import React, { useState } from 'react';
import Product from './Product';
import Order from './Order';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

import products from '../data/products.json';

function Shop(props) {
    const uniqueProducts = [...new Set(products.reduce((all, prod) => {
        return all.concat([prod.name]);
      }, []))].sort();
    return (
        <div>
            <Carousel touch={true} style={{ height: "calc(50vh + 10vw)" }}>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 h-100"
                        src="../images/shops/hoodies_carousel.png"
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
                        className="d-block w-100 h-100"
                        src="../images/shops/tote_carousel.png"
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
                        className="d-block w-100 h-100"
                        src="../images/shops/mask_carousel.png"
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
                <section className="my-5 btm-margin" style={{ overflow: "hidden" }}>
                    <h1 className="my-3"><strong>Shop All</strong></h1>
                    <Row>
                        {products.map((product, i) => {
                            return (
                                <Col xs={6} md={4} lg={3} style={{ marginBottom: "32px" }}>
                                    <Product product={product}></Product>
                                </Col>
                            );
                        })}
                    </Row>
                    {/* <Order prodOptions={uniqueProducts}></Order> */}
                </section>
            </Container>
        </div>
    );
}

export default Shop;