import React, {useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import {renderToString} from 'react-dom/server';
import {createFormData, generateOrderHTML} from './shopTools';
import Checkout from './Checkout';

function Cart(props) {
  const {cartItems, onRemove, showCart, onHide, clearCart, showCheckout, setShowCheckout} = props;
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [venmo, setVenmo] = useState("");
  const [pickup, setPickup] = useState("");
  const [validated, setValidated] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
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

  const createOrder = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    if (form.checkValidity() === false) {
      setValidated(true);
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

    var formData = createFormData(order);

    // update Google Sheets
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzy9uIfPnprSh-2gbR8cxm9C5klRjX_VfPCFEr7z9me15PBXQ/exec'
    fetch(scriptURL, {method: 'POST', body: formData})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message));

    axios({
      method: "POST",
      url: "/order",
      data: {
        id: order.id,
        email: order.email,
        html: renderToString(generateOrderHTML(order))
      }
    });

    onHide();
    setShowCheckout(false);
    setShowReceipt(true);
    clearCart();
  }

  return (
    <div>
      <Offcanvas show={showCart} onHide={onHide} placement="end">
        <Row>
          <Offcanvas.Header style={{borderBottom: "1px solid rgba(0,0,0,.125)"}}>
            <button type="button" class="btn-close text-reset" aria-label="Close" onClick={onHide}></button>
            <Col xs={6}>
              <h3 style={{float: "left", margin: "0", fontWeight: "600", fontSize: `calc(16px + 0.1vw)`}}>Your Bag</h3>
            </Col>
            <Col xs={4}>
              <p style={{float: "right", margin: "0", fontSize: `calc(16px + 0.1vw)`}}>{cartItems.length} item{cartItems.length !== 1 && "s"}</p>
            </Col>
            <hr />
          </Offcanvas.Header>
        </Row>

        <Offcanvas.Body>
          {cartItems.length === 0 &&
            <div className='text-center' style={{marginTop: "64px"}}>
              <img alt="isauwbird" className="mx-auto" src="../images/isauwbird-white.png" style={{width: "20%", filter: `contrast(0.8)`}} />
              <h3 style={{textAlign: "center", fontSize: `calc(14px + 0.1vw)`, marginTop: "24px"}}>Your shopping bag is empty</h3>
            </div>
          }
          <div className="flex-row row">
            {cartItems.map((item) => (
              <Col xs={6} style={{marginBottom: "16px"}}>
                <Card style={{fontSize: `calc(13px + 0.1vw)`, height: "100%"}}>
                  <div style={{padding: `calc(6px + 0.2vw) calc(8px + 0.2vw) 0`}}>
                    <div style={{fontWeight: "800"}}>{item.qty}x {item.name}</div>
                    <div className='text-right'>${item.price}</div>
                  </div>

                  <Card.Img src={item.img} style={{padding: "0 10%"}} />
                  <div className='text-left' style={{padding: `0 calc(8px + 0.2vw) calc(6px + 0.2vw)`}}>{item.selected}</div>

                  <div className="shop-btn-div">
                    <button className="btn shop-btn" onClick={() => alert("Not yet implemented.")} style={{width: "50%", borderRight: "1px solid rgba(0,0,0,.125)"}}>Edit</button>
                    <button className="btn shop-btn" onClick={() => {
                      onRemove(item);
                      if (JSON.parse(sessionStorage.getItem('cookies')).length === 0) {
                        setShowCheckout(false);
                      }
                    }} style={{width: "50%"}}>Remove</button>
                  </div>
                </Card>
              </Col>
            ))}
          </div>

          {cartItems.length !== 0 && (
            <Row style={{boxShadow: "rgb(0 0 0 / 15%) 0px 0px 12px 0px", paddingTop: "16px"}}>
              <Col xs={6}>
                <p style={{float: "left", fontSize: `calc(19px + 0.1vw)`, fontWeight: "700"}}>Subtotal</p>
              </Col>
              <Col xs={6}>
                <p style={{float: "right", fontSize: `calc(19px + 0.1vw)`, fontWeight: "700"}}>${totalPrice.toFixed(2)}</p>
              </Col>

              {!showCheckout && (
                <Col xs={12}>
                  <button style={{margin: "0", width: "100%", textTransform: "none", fontSize: `calc(14px + 0.1vw)`, fontWeight: "600", height: "50px"}} className="btn btn-dark" onClick={() => setShowCheckout(true)} href="#form" >Next</button>
                </Col>
              )}
            </Row>
          )}

          {showCheckout &&
            <Checkout
              validated={validated}
              createOrder={createOrder}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setEmail={setEmail}
              setVenmo={setVenmo}
              setPickup={setPickup}
              setPhone={setPhone}
              phone={phone}
            />
          }
        </Offcanvas.Body>
      </Offcanvas>

      <Modal size="lg" centered show={showReceipt} onHide={() => setShowReceipt(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{textTransform: "uppercase", fontFamily: "brandon_grotesque, sans-serif", fontSize: `calc(21px + 1.2vw)`, fontWeight: "700"}}>Thanks for your order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {generateOrderHTML(order)}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Cart;