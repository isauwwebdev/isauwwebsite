import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Product(props) {
    // json file to get product's name, price, size, img, etc.
    const product = props.product;
    return (
        <div style={{ height: "100%" }}>
            <Card className="product-card" style={{ height: "100%" }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body className="product-body" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                    <Card.Title className="product-title">{product.name}</Card.Title>
                    <Card.Subtitle className="product-desc">{product.desc}</Card.Subtitle>
                    <div style={{ marginTop: "auto" }}>
                        <Button className="product-btn mx-auto" href="https://docs.google.com/forms/u/0/" variant="outline-dark" >
                            <p className="product-price-left">Order Now</p>
                            <p className="product-price-right">${product.price}</p>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Product;