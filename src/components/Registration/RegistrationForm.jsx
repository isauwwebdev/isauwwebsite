import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import EventGalleryOverlay from './EventGalleryOverlay';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function RegistrationForm() {
    const [showThankYou, setShowThankYou] = useState(false);
    const currentDate = new Date();
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        venmo: "",
        univeristy: "",
    });

    const { firstName, lastName, email, phone, venmo, university } = data;

    const eventToday = (dateToday) => {
        const month = dateToday.getMonth() + 1;
        let eventName = "";
        if (month === 8) {
            eventName = "Seattle 101"
        } else if (month === 9) {
            eventName = "SeaThrough"
        } else if (month === 10 || month == 11) {
            eventName = "Friendsgiving"
        } else if (month === 12) {
            eventName = "Winter Ball"
        }
        return eventName;
    }

    const eventDescr = (date) => {
        const month = date.getMonth() + 1;
        let descr = "";
        if (month === 8) {
            descr = "Seattle 101 is our annual informative session designed to help prepare you to adjust to college life as easily as possible! This event aims to help you learn more about Seattle culture and the necessary tasks you have to do after arriving. Additionally, you will have the opportunity to learn about the experiences of our presenters, find and meet new friends during our networking session, and ask your burning questions during our QnA session, such as:  “Which bank should I register for?” “What’s the weather like?” “Where do people go to have fun?” etc."
        } else if (month === 9) {
            descr = "Our annual dinner party that welcomes you to the IndoHuskies Community. An event that you do not want to miss out on as we’ll be providing delicious Indonesian food, an opportunity to create new friends, and win one-of-kind prizes by playing our games!"
        } else if (month === 10 || month == 11) {
            descr = "An interactive social gathering where we will be serving “Thanksgiving” - themed dinner, karaoke and drinks served in a bar for those 21+. This event aims to serve as an opportunity to de-stress, relax and have some quality time with your friends in the days leading up to the Thanksgiving break."
        } else if (month === 12) {
            descr = "Get your suits and dresses ready and get lost in your dance in ISAUW’s Winter Ball. Be ready for a night of love, laughter, and beautiful pictures as you get serenaded by live music. A three-course meal is provided as we sway you into a magical night."
        }
        return descr;
    }

    // Seattle 101 ~ Aug 1 - Aug 15
    // SeaThrough ~ Sept 12 - Oct 1
    // SeaRace ~ Sept 18 - Oct 16
    // Friendsgiving ~ Oct 28 - Nov 16
    // Winter Ball ~ Nov 28 - Dec 12

    function formatPhoneNumber(value) {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, "");
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
            3,
            6
        )}-${phoneNumber.slice(6, 10)}`;
    }

    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        if (e.target.name === "phone") {
            value = formatPhoneNumber(value);
        }
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        if (form.checkValidity() === false) {
            return;
        }
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('venmo', venmo);
        formData.append('university', university);
        formData.append('sheetName', eventToday(new Date()).replaceAll(" ", ""));

        fetch('https://script.google.com/macros/s/AKfycbw2iG2mpphZZGH5Lw9T8VNVQ3k-EmH4dTZZgb14q9zvFqA8RVCWptH36C6B3NRyLxrj/exec', { method: 'POST', body: formData })
            .then(response => {
                console.log('Success', response);
                setShowThankYou(true);
            })
            .catch(error => console.error('Error', error.message));

    }

    const [validated, setValidated] = useState(false);
    return (
        <div className="event-registration">
            <EventGalleryOverlay eventName={eventToday(currentDate)} />
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={8} lg={6} className="my-5">
                        <h1><strong>{eventToday(currentDate)}</strong></h1>
                        <p style={{ fontSize: "14px" }}>{eventDescr(currentDate)}</p>
                        <Form noValidate validated={validated} style={{ width: "100%"}}>
                            <Row style={{ marginTop: "16px" }}>
                                <Col style={{ paddingRight: "6px" }}>
                                    <Form.Group>
                                        <FloatingLabel label="First Name" >
                                            <Form.Control name="firstName" type="text" onChange={handleChange} placeholder="First Name" required></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Please enter your first name
                                            </Form.Control.Feedback>
                                        </FloatingLabel>
                                    </Form.Group>
                                </Col>
                                <Col style={{ paddingLeft: "6px" }}>
                                    <Form.Group>
                                        <FloatingLabel label="Last Name" >
                                            <Form.Control name="lastName" type="text" onChange={handleChange} placeholder="First Name" required></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Please enter your last name
                                            </Form.Control.Feedback>
                                        </FloatingLabel>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group style={{ margin: "16px 0" }}>
                                <FloatingLabel label="Phone" >
                                    <Form.Control name="phone" type="tel" onChange={handleChange} placeholder="Phone" value={phone} pattern="[\(]\d{3}[\)] \d{3}[\-]\d{4}" title="Please enter a valid phone number." required></Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid US phone number
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group style={{ margin: "16px 0" }}>
                                <FloatingLabel label="Email" >
                                    <Form.Control name="email" type="email" onChange={handleChange} placeholder="Email" required></Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid email address
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group style={{ margin: "16px 0" }}>
                                <FloatingLabel label="Venmo" >
                                    <Form.Control name="venmo" type="text" onChange={handleChange} placeholder="Email" required></Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid venmo username
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group style={{ margin: "16px 0" }} required>
                                <FloatingLabel label="University Selection" required>
                                    <Form.Select name="university" required onChange={handleChange}>
                                        <option disabled selected value="">Select University</option>
                                        <option value="University of Washington - Seattle">University of Washington - Seattle</option>
                                        <option value="University of Washington - Bothell">University of Washington - Bothell</option>
                                        <option value="University of Washington - Tacoma">University of Washington - Tacoma</option>
                                        <option value="Shoreline Community College">Shoreline Community College</option>
                                        <option value="Seattle Central College">Seattle Central College</option>
                                        <option value="Edmonds College">Edmonds College</option>
                                        <option value="North Seattle College">North Seattle College</option>
                                        <option value="Tacoma Community College">Tacoma Community College</option>
                                        <option value="Bellevue College">Bellevue College</option>
                                        <option value="Green River College">Green River College</option>
                                        <option value="Everett Community College">Everett Community College</option>
                                        <option value="Other">Other</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Please select a university
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>

                            <button type="submit" onClick={handleSubmit} className="btn btn-dark" style={{ margin: "24px 0 0", width: "100%", textTransform: "none", fontSize: `calc(14px + 0.1vw)`, fontWeight: "600", height: "50px" }}>Reserve</button>
                        </Form>
                    </Col>
                </Row>

                <Modal
                    show={showThankYou}
                    onHide={() => setShowThankYou(false)}
                    backdrop="static"
                    keyboard={false}
                    centered
                    size="lg"
                    >
                    <meta http-equiv="refresh" content="10;url=/" />
                    <Modal.Header>
                        <Modal.Title>We appreciate your time.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Thank you for registering for {eventToday(currentDate) + " " + currentDate.getFullYear()}...
                        <br />
                        You will be automatically redirected to the home page in 10 seconds.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" href="/" style={{ textTransform: "none" }}>Back to Home</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    )
}

export default RegistrationForm;