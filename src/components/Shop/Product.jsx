import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Product(props) {
  // json file to get product's name, price, size, img, etc.
  const {product, onAdd} = props;
  const [size, setSize] = useState("");
  const handleSize = (e) => {
    setSize(e.target.value);
  }

  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.sizes) {
      onAdd(product);
    } else {
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.stopPropagation();
      } else {
        /* deep copy product */
        let copy = JSON.parse(JSON.stringify(product));
        copy.selected = size;
        onAdd(copy);
      }
    }
    setValidated(true);
  }

  return (
    <div style={{height: "100%"}}>
      <Card className="product-card" style={{height: "100%"}}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body className="product-body" style={{display: "flex", flexDirection: "column", height: "100%"}}>
          <Card.Title className="product-title">{product.name}</Card.Title>
          <Card.Title className="product-price">${product.price}</Card.Title>
          <Card.Subtitle className="product-desc">{product.desc}</Card.Subtitle>
          <Form noValidate validated={validated} onSubmit={handleSubmit} style={{margin: "auto 0 0"}}>
            {product.sizes && (
              <Form.Group>
                <Form.Select name="size" required size="sm" onChange={handleSize} style={{fontSize: `calc(10px + 0.3vw)`, borderRadius: "24px", margin: "8px 0 6px", paddingLeft: `calc(9px + 0.3vw)`}}>
                  <option selected disabled value="">Select size...</option>
                  {product.sizes && product.sizes.map((size) => (
                    <option value={size}>{size}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select a size
                </Form.Control.Feedback>
              </Form.Group>
            )}

            <div style={{marginTop: "auto"}}>
              <Button type="submit" className="product-btn mx-auto" variant="outline-dark">
                <p className="product-button-center">Add to Cart</p>
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;