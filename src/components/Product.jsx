import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Product(props) {
    // json file to get product's name, price, size, img, etc.
    const { product, onAdd } = props;
    const [size, setSize] = useState("");
    const handleSize = (e) => {
        setSize(e.target.value);
    }

    return (
        <div style={{ height: "100%" }}>
            <Card className="product-card" style={{ height: "100%" }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body className="product-body" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                    <Card.Title className="product-title">{product.name}</Card.Title>
                    <Card.Title className="product-price">${product.price}</Card.Title>
                    <Card.Subtitle className="product-desc">{product.desc}</Card.Subtitle>
                    <Form.Select required size="sm" onChange={handleSize} className={product.sizes ? "show" : "hide"} style={{fontSize: `calc(10px + 0.3vw)`, borderRadius: "24px", margin: "8px 0 6px", paddingLeft: `calc(9px + 0.3vw)`}}>
                        <option selected disabled value="">Select size...</option>
                        {product.sizes && product.sizes.map((size) => (
                            <option value={size}>{size}</option>
                        ))}
                    </Form.Select>
                    <div style={{ marginTop: "auto" }}>
                        <Button className="product-btn mx-auto" onClick={() => {
                                /* deep copy product */
                                let copy = JSON.parse(JSON.stringify(product));
                                copy.selected = size;
                                onAdd(copy);
                            }} variant="outline-dark" >
                            <p className="product-button-center">Add to Cart</p>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Product;