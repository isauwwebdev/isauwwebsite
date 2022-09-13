import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import products from '../data/products.json';
import { IoFolderOutline } from 'react-icons/io5'
import $ from 'jquery';

function Shop(props) {    
    const [cartItems, setCartItems] = useState(sessionStorage.getItem('cookies') ? JSON.parse(sessionStorage.getItem('cookies')) : []);
    const [showCart, setShowCart] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);

    const handleClose = () => setShowCart(false);
    const handleOpen = () => setShowCart(true);

    const onAdd = (product) => {
        setShowCheckout(false);
        const exist = cartItems.find((x) => ((x.id === product.id) && (x.selected === product.selected)));
        if (exist) {
            setCartItems(() => {
                return cartItems.map((x) => ((x.id === product.id) && (x.selected === product.selected)) ? { ...exist, qty: exist.qty + 1 } : x)
            })
            // make cart persistent, we cannot just sessionStorage.setItem(cartItems) because setState is an asynchronous function. 
            sessionStorage.setItem('cookies', JSON.stringify(cartItems.map((x) => ((x.id === product.id) && (x.selected === product.selected)) ? { ...exist, qty: exist.qty + 1 } : x)))
        } else {
            setCartItems(() => {
                return [...cartItems, { ...product, qty: 1 }]
            })
            sessionStorage.setItem('cookies', JSON.stringify([...cartItems, { ...product, qty: 1 }]))
        }
        handleOpen();
    };

    const onRemove = (product) => {
        const exist = cartItems.find((x) => ((x.id === product.id) && (x.selected === product.selected)));
        if (exist.qty === 1) {
            setCartItems(() => {
                return cartItems.filter((x) => ((x.id !== product.id) || (x.selected !== product.selected)))
            })
            sessionStorage.setItem('cookies', JSON.stringify(cartItems.filter((x) => (x.id !== product.id) || (x.selected !== product.selected))))
        } else {
            setCartItems(() => {
                return cartItems.map((x) => ((x.id === product.id) && (x.selected === product.selected)) ? { ...exist, qty: exist.qty - 1 } : x)
            })
            sessionStorage.setItem('cookies', JSON.stringify(cartItems.map((x) => ((x.id === product.id) && (x.selected === product.selected)) ? { ...exist, qty: exist.qty - 1 } : x)))
        }
    };

    const clearCart = () => {
        setCartItems([]);
        sessionStorage.setItem('cookies', JSON.stringify([]));
    };

    $('.cart-count').attr('data-after', cartItems.length);

    return (
        <div>
            <Carousel touch={true} style={{ height: "calc(50vh + 10vw)" }}>
                <Carousel.Item interval={4000}>
                    <div className="navbar-overlay">
                        <img
                            className="d-block w-100 h-100"
                            src="../images/shops/hoodies_carousel.png"
                            alt=""
                        />
                    </div>
                    <Carousel.Caption style={{ bottom: "18%", letterSpacing: "10pt" }}>
                        <div className="animated fadeInDown">
                            <h1 className="carousel-title">HOODIES</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <div className="navbar-overlay">
                        <img
                            className="d-block w-100 h-100"
                            src="../images/shops/tote_carousel.png"
                            alt=""
                        />
                    </div>
                    <Carousel.Caption style={{ bottom: "18%", letterSpacing: "10pt" }}>
                        <div className="animated fadeInDown">
                            <h1 className="carousel-title">TOTE BAGS</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <div className="navbar-overlay">
                        <img
                            className="d-block w-100 h-100"
                            src="../images/shops/mask_carousel.png"
                            alt=""
                        />
                    </div>
                    <Carousel.Caption style={{ bottom: "18%", letterSpacing: "10pt" }}>
                        <div className="animated fadeInDown">
                            <h1 className="carousel-title">FACE MASKS</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container>
                <section className="my-5 btm-margin" style={{ overflow: "hidden" }}>
                    <Row>
                        <Col xs={7}>
                            <h1 className="my-3"><strong>Shop All</strong></h1>
                        </Col>
                        <Col xs={5} style={{ margin: "auto" }}>
                            <span class='wallet'>
                                <button type="button" className="btn" onClick={handleOpen} style={{ boxShadow: "none", float: "right" }}>
                                    <i className='cart-count'>
                                        <IoFolderOutline/>
                                    </i>
                                </button>                                 
                            </span>
                        </Col>
                    </Row>
                    <Cart onRemove={onRemove} cartItems={cartItems} showCart={showCart} onHide={handleClose} clearCart={clearCart} showCheckout={showCheckout} setShowCheckout={setShowCheckout}></Cart>

                    <Row>
                        {products.map((product, i) => {
                            return (
                                <Col xs={6} md={4} lg={3} style={{ marginBottom: "32px" }}>
                                    <Product onAdd={onAdd} key={product.id} product={product}></Product>
                                </Col>
                            );
                        })}
                    </Row>
                </section>
            </Container>
        </div>
    );
}

export default Shop;