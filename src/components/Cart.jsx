import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _uniqueId from 'lodash/uniqueId';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'

function Cart(props) {
    const {cartItems, onRemove, showCart, onHide, clearCart} = props;
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const [showCheckout, setShowCheckout] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [venmo, setVenmo] = useState("");
    const [pickup, setPickup] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [order, setOrder] = useState({
        id: "",
        name: "",
        email: "",
        venmo: "",
        phone: "",
        date: "",
        totalPrice: "",
        cartItems: [],
        pickup: ""
    });

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzy9uIfPnprSh-2gbR8cxm9C5klRjX_VfPCFEr7z9me15PBXQ/exec'
    const createOrder = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity() === false) {
            return;
        }
  
        const d = new Date();
        const order = {
            id: Math.random().toString(36).slice(2).toUpperCase(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            venmo: venmo,
            date: d.toLocaleString(),
            totalPrice: totalPrice.toFixed(2),
            cartItems: cartItems,
            pickup: pickup
        }
        e.preventDefault();
        setOrder(order);

        var formData = new FormData(); 
        formData.append('id', order.id);
        formData.append('firstName', order.firstName);
        formData.append('lastName', order.lastName);
        formData.append('email', order.email);
        formData.append('phone', order.phone);
        formData.append('venmo', order.venmo);
        formData.append('date', order.date);
        formData.append('totalPrice', order.totalPrice);
        var result = ""; 
        order.cartItems.map((item) => {
            if (result != "") {
                result += "\n"
            }
            result += item.qty + "x " + item.name + " (" + item.selected + ")"; 
        });
        formData.append('cartItems', result);
        formData.append('pickup', order.pickup);

        fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message));

        onHide();
        setShowCheckout(false);
        setShowModal(true);
        clearCart();
    }

    function formatPhoneNumber(value) {
        // if input value is falsy eg if the user deletes the input, then just return
        if (!value) return value;
      
        // clean the input for any non-digit values.
        const phoneNumber = value.replace(/[^\d]/g, "");
      
        // phoneNumberLength is used to know when to apply our formatting for the phone number
        const phoneNumberLength = phoneNumber.length;
      
        // we need to return the value with no formatting if its less then four digits
        // this is to avoid weird behavior that occurs if you  format the area code to early
        if (phoneNumberLength < 4) return phoneNumber;
      
        // if phoneNumberLength is greater than 4 and less the 7 we start to return
        // the formatted number
        if (phoneNumberLength < 7) {
          return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
      
        // finally, if the phoneNumberLength is greater then seven, we add the last
        // bit of formatting and return it.
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
          3,
          6
        )}-${phoneNumber.slice(6, 10)}`;
    }

    const handlePhoneInput = (e) => {
        // this is where we'll call the phoneNumberFormatter function
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        // we'll set the input value using our setInputValue
        setPhone(formattedPhoneNumber);
    };

    const [validated, setValidated] = useState(false);  
        
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
                                    <div className='text-left' style={{ padding: `0 calc(8px + 0.2vw) calc(6px + 0.2vw)` }}>{item.selected}</div>

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

                            {!showCheckout && (
                                <Col xs={12}>
                                <button style={{margin: "0", width: "100%", textTransform: "none", fontSize: `calc(14px + 0.1vw)`, fontWeight: "600", height: "50px" }} className="btn btn-dark" onClick={() => setShowCheckout(true)} href="#form" >Next</button>
                                </Col>
                            )}
                        </Row>
                    )}
                
                    {showCheckout && (
                            <Form noValidate validated={validated} onSubmit={createOrder} id="form">
                                <div className="row" style={{marginTop: "16px"}}>
                                    <div className="col-6" style={{paddingRight: "6px"}}>
                                        <Form.Group>
                                            <FloatingLabel label="First Name" >
                                                <Form.Control name="Name" type="text" onChange={(e) => {setFirstName(e.target.value)}} placeholder="First Name" required></Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter your first name
                                                </Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Form.Group>
                                    </div>
                                    <div className="col-6" style={{paddingLeft: "6px"}}>
                                        <Form.Group>
                                            <FloatingLabel label="Last Name" >
                                                <Form.Control name="Name" type="text" onChange={(e) => {setLastName(e.target.value)}} placeholder="First Name" required></Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter your last name
                                                </Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Form.Group>
                                    </div>
                                </div>

                                <Form.Group style={{margin: "16px 0"}}>
                                    <FloatingLabel label="Phone" >
                                        <Form.Control name="Phone" type="tel" onChange={(e) => handlePhoneInput(e)} placeholder="Phone" value={phone} pattern="[\(]\d{3}[\)] \d{3}[\-]\d{4}" title="Please enter a valid phone number." required></Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid US phone number
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group style={{margin: "16px 0"}}>
                                    <FloatingLabel label="Email" >
                                        <Form.Control name="Email" type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" required></Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid email address
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group style={{margin: "16px 0"}}>
                                    <FloatingLabel label="Venmo" >
                                        <Form.Control name="Venmo" type="text" onChange={(e) => {setVenmo(e.target.value)}} placeholder="Email" required></Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid venmo username
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group style={{margin: "16px 0"}} required>
                                    <FloatingLabel label="Pickup Location" required>
                                        <Form.Select required onChange={(e) => {setPickup(e.target.value)}}>
                                            <option selected disabled value="" >Select a pickup location</option>
                                            <option value="UW">UW</option>
                                            <option value="Northgate">Northgate</option>
                                            <option value="Shoreline">Shoreline</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                                Please select a pickup location
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                </Form.Group>


                                <button type="submit" className="btn btn-dark" style={{margin: "24px 0 0", width: "100%", textTransform: "none", fontSize: `calc(14px + 0.1vw)`, fontWeight: "600", height: "50px" }}>Checkout</button>
                            </Form>
                    )}
                </Offcanvas.Body>
            </Offcanvas>

            <Modal size="lg" centered show={showModal} onHide={() => {setShowModal(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title style={{textTransform: "uppercase", fontFamily: "brandon_grotesqueblack, sans-serif", fontSize: "2.6rem"}}>Thanks for your order {order.firstName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row"><h4 style={{fontWeight: "600"}}>Order # {order.id}</h4></div>
                    <div className="row" style={{marginTop: "20px"}}><h3 style={{fontWeight: "700", marginBottom: "0"}}>Your Purchase</h3></div>
                    {order.cartItems.map((x) => (
                        <div className="row">
                            <div className="col-9">{x.name} {x.selected && ("(" + x.selected + ")")} x {x.qty}</div>
                            <div className="col-3" style={{textAlign: "right"}}>${(x.price * x.qty).toFixed(2)}</div>
                        </div>
                    ))}

                    <hr style={{margin: "24px 0 6px"}}/>
                    <div className="row" style={{fontWeight: "600"}}>
                        <div className="col-6">Total</div>
                        <div className="col-6" style={{textAlign: "right"}}>${order.totalPrice}</div>
                    </div>
                    <hr style={{margin: "6px 0 48px"}}/>

                    <div style={{fontSize: "12px"}}>
                        <div className="row"><div className="col">Name: {order.firstName} {order.lastName}</div></div>
                        <div className="row"><div className="col">Email: {order.email}</div></div>
                        <div className="row"><div className="col">Venmo: {order.venmo}</div></div>
                        <div className="row"><div className="col">Phone: {order.phone}</div></div>
                        <div className="row"><div className="col">Date: {(order.date).split(", ").slice(0, 1)}</div></div>
                        <div className="row"><div className="col">Time: {(order.date).split(", ").slice(1)}</div></div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={() => {setShowModal(false)}}>Close</Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    );
}

export default Cart;

