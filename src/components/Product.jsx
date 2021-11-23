import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Product(props) {
    // json file to get product's name, price, size, img, etc.
    const product = props.product;
    return (
        <div>
            <a href="https://docs.google.com/forms/u/0/" className="productCard p-1 view overlay z-depth-1-half zoom">
                <Card style={{ width: '24rem' }}>
                    <Card.Header variant="top">
                        <Card.Img className="productImg mt-2 mb-2" variant="top" src="https://picsum.photos/2000" />
                    </Card.Header>
                    <Card.Body className="productText">
                        <Card.Title className="text-dark">{product.name}</Card.Title>
                        <Card.Subtitle className="text-dark">{"$" + product.price}</Card.Subtitle>
                        <Button className="mt-2" variant="outline-primary">Buy Now</Button>
                    </Card.Body>
                </Card>
                <div className="mask rgba-white-light waves-effect waves-light"></div>
            </a>
        </div>
    );
}

export default Product;