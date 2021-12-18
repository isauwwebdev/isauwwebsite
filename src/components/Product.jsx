import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Product(props) {
    // json file to get product's name, price, size, img, etc.
    const product = props.product;
    return (
        <div>
            <Card className="product-card">
                <Card.Img variant="top" src="https://picsum.photos/2000" />
                <Card.Body className="product-body">
                    <Card.Title className="product-title">{product.name}</Card.Title>
                    <Card.Subtitle className="product-desc">{product.desc}</Card.Subtitle>
                    <Button className="product-btn mx-auto" href="https://docs.google.com/forms/u/0/" variant="outline-dark"><p className="product-price-left">Order Now</p><p className="product-price-right">${product.price}</p></Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Product;