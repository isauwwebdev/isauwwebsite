import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function RegistrationForm() {
    let SCRIPT_URL = 'https://v1.nocodeapi.com/isauwwebdev/google_sheets/epOqimRelWrSASOw?tabId=';
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        venmo: "",
        univeristy: ""
    });

    const { firstName, lastName, email, phone, venmo, university } = data;

    const eventToday = (dateToday) => {
        const month = dateToday.getMonth() + 1;
        // const day = dateToday.getDate();
        let eventName = "";
        if (month === 8) {
            eventName = "Seattle 101"
        } else if (month === 9) {
            eventName = "SeaThrough"
        } else if (month === 10) {
            eventName = "Friendsgiving"
        } else if (month === 11) {
            eventName = "Winter Ball"
        }
        SCRIPT_URL += eventName
        return eventName;
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
        console.log(data)
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        if (form.checkValidity() === false) {
            return;
        }
        console.log(data)
        fetch(SCRIPT_URL, {
            method: "POST",
            body: JSON.stringify([
                [new Date().toLocaleString(), firstName, lastName, email, phone, venmo, university],
            ])
        })
            .then(res => console.log('Success!', res))
            .catch(err => console.error('Error!', err.message));
        
    }

    const [validated, setValidated] = useState(false);
    return (
        <div className="event-registration">
            <div className="event-registration-container" style={{ height: "100vh", margin: "auto" }}>
                <h1 className="event-registration-heading">{eventToday(new Date())}</h1>
                <div className="event-registration-icon mt-3 mb-2">
                    <img src="../../images/isauwbird-red.png" alt="isauw red bird logo" width="52" height="40"></img>
                </div>
                <Form noValidate validated={validated} id="form">
                    <div className="row" style={{ marginTop: "16px" }}>
                        <div className="col-6" style={{ paddingRight: "6px" }}>
                            <Form.Group>
                                <FloatingLabel label="First Name" >
                                    <Form.Control name="firstName" type="text" onChange={handleChange} placeholder="First Name" required></Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your first name
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                        </div>
                        <div className="col-6" style={{ paddingLeft: "6px" }}>
                            <Form.Group>
                                <FloatingLabel label="Last Name" >
                                    <Form.Control name="lastName" type="text" onChange={handleChange} placeholder="First Name" required></Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your last name
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                        </div>
                    </div>

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
                                <option selected disabled value="">Select Your University</option>
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
            </div>
        </div>
    )
}

export default RegistrationForm