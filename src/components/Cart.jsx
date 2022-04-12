import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _uniqueId from 'lodash/uniqueId';

function Cart(props) {
    const {cartItems, onRemove, showCart, onHide, clearCart} = props;
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const [showCheckout, setShowCheckout] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [order, setOrder] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
        date: "",
        total: "",
        cartItems: []
    });

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzy9uIfPnprSh-2gbR8cxm9C5klRjX_VfPCFEr7z9me15PBXQ/exec'
    const createOrder = (e) => {
        const order = {
            id: Math.random().toString(36).slice(2).toUpperCase(),
            name: name,
            email: email,
            phone: phone,
            date: Date().toLocaleString(),
            total: totalPrice.toFixed(2),
            cartItems: cartItems
        }
        e.preventDefault();
        setOrder(order);

        var formData = new FormData(); 
        formData.append('id', order.id);
        formData.append('name', order.name);
        formData.append('email', order.email);
        formData.append('phone', order.phone);
        formData.append('date', order.date);
        formData.append('total', order.total);
        formData.append('cartItems', JSON.stringify(order.cartItems));

        fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message));

        onHide();
        setShowCheckout(false);
        setShowModal(true);
        clearCart();
    }

    return (
        <div>
            <Offcanvas show={showCart} onHide={onHide} placement="end">
                <Row>
                    <Offcanvas.Header style={{ borderBottom: "1px solid rgba(0,0,0,.125)" }}>
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
                                        <button className="btn shop-btn" onClick={() => {
                                            onRemove(item);
                                            if (JSON.parse(sessionStorage.getItem('cookies')).length == 0) {
                                                setShowCheckout(false);
                                            }
                                        }} style={{ width: "50%" }}>Remove</button>
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
                            <button style={{margin: "0", width: "100%", textTransform: "none", fontSize: `calc(14px + 0.1vw)`, fontWeight: "600", height: "50px" }} className="btn btn-dark" onClick={() => setShowCheckout(true)} >Next</button>
                            </Col>
                        </Row>
                    )}
                
                    {showCheckout && (
                        <div>
                            <form onSubmit={createOrder}>
                                <ul>
                                    <li>
                                        <label>Name</label>
                                        <input name="Name" type="text" onChange={(e) => {setName(e.target.value)}} required></input>
                                    </li>
                                    <li>
                                        <label>Email</label>
                                        <input name="Email" type="email" onChange={(e) => {setEmail(e.target.value)}} required></input>
                                    </li>
                                    <li>
                                        <label>Phone</label>
                                        <input name="Phone" type="tel" onChange={(e) => {setPhone(e.target.value)}} required pattern="[0-9]{3}[0-9]{3}[0-9]{4}"></input>
                                    </li>
                                    <li>
                                        <button type="submit">Checkout</button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    )}
                </Offcanvas.Body>
            </Offcanvas>

            <Modal size="lg" centered show={showModal} onHide={() => {setShowModal(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Order has been placed!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Order #{order.id}</h4>
                    <ul>
                        <li>Name: {order.name}</li>
                        <li>Email: {order.email}</li>
                        <li>Phone: {order.phone}</li>
                        <li>Date: {order.date}</li>
                        <li>Total: ${order.total}</li>
                        <li>
                            <div>Cart Items:</div>
                            <div>
                                {order.cartItems.map((x) => (
                                    <div>
                                    {x.qty} {" x "} {x.name}
                                    </div>
                                ))}
                            </div>
                        </li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {setShowModal(false)}}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Cart;

