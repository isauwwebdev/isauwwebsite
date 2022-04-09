import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Cart(props) {
    const {cartItems, onRemove, show, onHide} = props;
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

    return (
        <Offcanvas show={show} onHide={onHide} placement="end">
            <Row>
                <Offcanvas.Header>
                    <button type="button" class="btn-close text-reset" aria-label="Close" onClick={onHide}></button>
                    <Col xs={4}>
                        <h3 style={{ float: "left" }}>Your Bag</h3>
                    </Col>
                    <Col xs={4}>
                        <p style={{ float: "right" }}>{cartItems.length} item{cartItems.length == 1 ? "" : "s"}</p>
                    </Col>
                    <hr/>
                </Offcanvas.Header>
            </Row>

            <Offcanvas.Body>
                {cartItems.length == 0 && <h3>Cart is Empty</h3>}
                <Row>
                    {cartItems.map((item) => (
                        <Col xs={6}>
                            <Card>
                                <div style={{ fontWeight: "800" }}>{item.qty}x {item.name}</div>
                                <div className='text-right'>
                                    ${item.price}
                                </div>

                                <Card.Img src={item.img} style={{ padding: "0 10%" }}/>

                                <div>
                                    <button onClick={() => alert("Not yet implemented.")} style={{ width: "50%" }}>Edit</button>
                                    <button onClick={() => onRemove(item)} style={{ width: "50%" }}>Remove</button>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {cartItems.length !== 0 && (
                    <Row>
                        <hr/>
                        <Col xs={6}>
                            <p style={{ float: "left" }}>Subtotal</p>
                        </Col>
                        <Col xs={6}>
                            <p style={{ float: "right" }}>${totalPrice.toFixed(2)}</p>
                        </Col>
                        <hr/>
                        <button onClick={() => alert('Not yet implemented.')} >Checkout</button>
                    </Row>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Cart;