import React, {useEffect} from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form';
import {formatPhoneNumber} from './shopTools';

function Checkout(props) {
  const {setValidated, validated, createOrder, setFirstName, setLastName, setEmail, setVenmo, setPickup, setPhone, phone} = props;

  // clear form on render
  useEffect(() => {
    setPhone("");
    setValidated(false);
  }, [setPhone, setValidated]);

  const handlePhoneInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhone(formattedPhoneNumber);
  };

  return (
    <Form noValidate validated={validated} onSubmit={createOrder} id="form">
      <div className="row" style={{marginTop: "16px"}}>
        <div className="col-6" style={{paddingRight: "6px"}}>
          <Form.Group>
            <FloatingLabel label="First Name" >
              <Form.Control name="firstName" type="text" onChange={(e) => {setFirstName(e.target.value)}} placeholder="First Name" required></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please enter your first name
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </div>
        <div className="col-6" style={{paddingLeft: "6px"}}>
          <Form.Group>
            <FloatingLabel label="Last Name" >
              <Form.Control name="lastName" type="text" onChange={(e) => {setLastName(e.target.value)}} placeholder="Last Name" required></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please enter your last name
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </div>
      </div>

      <Form.Group style={{margin: "16px 0"}}>
        <FloatingLabel label="Phone" >
          <Form.Control
            name="tel"
            type="tel"
            onChange={(e) => handlePhoneInput(e)}
            placeholder="Phone"
            value={phone}
            pattern="[\(]\d{3}[\)] \d{3}[\-]\d{4}"
            title="Please enter a valid phone number."
            required>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please enter a valid US phone number
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>

      <Form.Group style={{margin: "16px 0"}}>
        <FloatingLabel label="Email" >
          <Form.Control name="email" type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" required></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>

      <Form.Group style={{margin: "16px 0"}}>
        <FloatingLabel label="Venmo" >
          <Form.Control name="username" type="text" onChange={(e) => {setVenmo(e.target.value)}} placeholder="Email" required></Form.Control>
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

      <button type="submit" className="btn btn-dark" style={{margin: "24px 0 0", width: "100%", textTransform: "none", fontSize: `calc(14px + 0.1vw)`, fontWeight: "600", height: "50px"}}>
        Checkout
      </button>
    </Form>
  );
}

export default Checkout;