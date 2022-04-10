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
                    <Col xs={6}>
                        <h3 style={{ float: "left", margin: "0", fontWeight: "600", fontSize: `calc(16px + 0.1vw)` }}>Your Bag</h3>
                    </Col>
                    <Col xs={4}>
                        <p style={{ float: "right", margin: "0", fontSize: `calc(16px + 0.1vw)` }}>{cartItems.length} item{cartItems.length == 1 ? "" : "s"}</p>
                    </Col>
                    <hr/>
                </Offcanvas.Header>
            </Row>

            <Offcanvas.Body>
                {cartItems.length == 0 && 
                    <div className='text-center' style={{ marginTop: "64px" }}>
                        <img alt="isauwbird" className="mx-auto" src="../images/isauwbird-white.png" style={{ width: "20%", filter: `contrast(0.8)` }} />
                        <h3 style={{ textAlign: "center", fontSize: `calc(14px + 0.1vw)`, marginTop: "24px" }}>Your shopping bag is empty</h3>
                    </div>
                }
                <div className="flex-row row">
                    {cartItems.map((item) => (
                        <Col xs={6} style={{marginBottom: "16px"}}>
                            <Card style={{ fontSize: `calc(13px + 0.1vw)`, height: "100%" }}>
                                <div style={{ padding: `calc(6px + 0.2vw) calc(8px + 0.2vw) 0` }}>
                                    <div style={{ fontWeight: "800" }}>{item.qty}x {item.name}</div>
                                    <div className='text-right'>${item.price}</div>
                                </div>

                                <Card.Img src={item.img} style={{ padding: "0 10%" }}/>

                                <div className="shop-btn-div">
                                    <button className="btn shop-btn" onClick={() => alert("Not yet implemented.")} style={{ width: "50%", borderRight: "1px solid rgba(0,0,0,.125)" }}>Edit</button>
                                    <button className="btn shop-btn" onClick={() => onRemove(item)} style={{ width: "50%" }}>Remove</button>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </div>

                {cartItems.length !== 0 && (
                    <Row style={{ boxShadow: "rgb(0 0 0 / 15%) 0px 0px 12px 0px", paddingTop: "16px" }}>
                        <Col xs={6}>
                            <p style={{ float: "left", fontSize: `calc(19px + 0.1vw)`, fontWeight: "700" }}>Subtotal</p>
                        </Col>
                        <Col xs={6}>
                            <p style={{ float: "right", fontSize: `calc(19px + 0.1vw)`, fontWeight: "700" }}>${totalPrice.toFixed(2)}</p>
                        </Col>
                        <Col xs={12}>
                        <button style={{margin: "0", width: "100%", textTransform: "none", fontSize: `calc(14px + 0.1vw)`, fontWeight: "600", height: "50px" }} className="btn btn-dark" onClick={() => alert('Not yet implemented.')} >Next</button>
                        </Col>
                    </Row>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Cart;