import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Order(props) {
    const { prodOptions } = props;
    const [prodSelect, setProdSelect] = useState('');
    const [pickUpSelect, setPickUpSelect] = useState('');
    const [info, setInfo] = useState({
        name: "",
        venmo: "",
        product: "",
        size: "",
        phoneNumber: "",
        pickUpPoint: ""
    });
    const { name, venmo, product, size, phoneNumber, pickUpPoint } = info;
    const handleChange = (event) => {
        if (event.target.name === "product") {
            setProdSelect(event.target.value);
        }
        if (event.target.name === "pickUpPoint") {
            setPickUpSelect(event.target.value);
        }
        setInfo({ ...info, [event.target.name]: event.target.value });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(
                'https://v1.nocodeapi.com/dgunadharma20/google_sheets/IKeAjvtcHSpkpdnO?tabId=Orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([[new Date().toLocaleString(), name, phoneNumber, venmo, product, size, pickUpPoint]])
            }
            );
            await response.json();
            setInfo({ ...info, name: '', venmo: '', product: '', size: '', phoneNumber: '', pickUpPoint: '' })

        } catch (error) {
            console.log(error);
        }
    };
    const prodChoices = prodOptions.map((prodName) => {
        return <option key={prodName} value={prodName}>{prodName}</option>
    });
    const pickUpLoc = ["UW Campus", "Shoreline", "Northgate"]
    const pickUpChoices = pickUpLoc.map((locName) => {
        return <option key={locName} value={locName}>{locName}</option>
    });
    return (
        <form className="order-form">
            <h3>Order Form</h3>
                <Row className="mb-3">
                    <Col xs={6} md={4} lg={3} style={{ height: "100%", marginBottom: "10px" }}>
                        <div className="form-group" style={{ height: "100%" }}>
                            <label htmmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{ height: "100%", marginBottom: "10px" }}>
                        <div className="form-group" style={{ height: "100%" }}>
                            <label htmmlFor="venmo">Venmo Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="venmo"
                                value={venmo}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{ height: "100%", marginBottom: "10px" }}>
                        <div className="form-group" style={{ height: "100%" }}>
                            <label htmmlFor="phoneNumber">Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={handleChange}
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                autoComplete="off"
                            />
                            <small>Format: 123 456 7890</small>
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{ height: "100%", marginBottom: "10px" }}>
                        <div className="form-group" style={{ height: "100%" }}>
                            <label htmmlFor="product">Product Selection</label>
                            <select id="prodSelect" name="product" value={product} className="form-select" value={prodSelect} onChange={handleChange}>
                                {prodChoices}
                            </select>
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{ height: "100%", marginBottom: "10px" }}>
                        <div className="form-group" style={{ height: "100%" }}>
                            <label htmmlFor="pickUp">Pick Up Point</label>
                            <select id="pickUpSelect" name="pickUpPoint" value={pickUpPoint} className="form-select" value={pickUpSelect} onChange={handleChange}>
                                {pickUpChoices}
                            </select>
                        </div>
                    </Col>
                    {/* <Col xs={6} md={4} lg={3} style={{ height: "100%", marginBottom: "10px" }}>
                        <div className="form-group" style={{ height: "100%" }}>
                            <label htmmlFor="size">Size (Only For Hoodies)</label>
                            <input
                                type="text"
                                className="form-control"
                                name="size"
                                value={size}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="What size are you? (e.g. S, M, L, XL)"
                            />
                        </div>
                    </Col> */}
                </Row>
                <Row className="justify-content-center mb-3">
                    <Col className="" xs={6} md={4} lg={3} style={{ height: "100%" }}>
                        <div className="form-group d-flex justify-content-center" style={{ height: "100%" }}>
                            <button id="submitButton" style= {{ width: "60%" }} type="submit" className="btn btn-warning" onClick={handleSubmit}>Submit</button>
                        </div>
                    </Col>
                </Row>
        </form>
    )
}

export default Order;