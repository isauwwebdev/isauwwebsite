import { React, useState, useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import vendors from '../data/keraton-vendors.json';

function KeratonFood() {
    const foodCards = vendors.map((vendor) => {
        return (
            <VendorCard key={vendor.id} vendor={vendor}></VendorCard>
        )
    });
    const grid = [];
    for (let i = 0; i < vendors.length; i += 3) {
        const row = [];
        for (let j = 0; j < 3; j++) {
            row.push(foodCards[i + j]);
        }
        grid.push(row);
    }
    return (
        <div>
            <Container className="keraton-food">
                <h1 className="my-3 keraton-food-header"><strong>VENDORS</strong></h1>
                <div className="keraton-food-grid">
                    {grid.map((row) => {
                        return (
                            <Row className="keraton-food-row">
                                {row.map((vendor) => {
                                    return (
                                        <Col className="keraton-food-col p-1">
                                            {vendor}
                                        </Col>
                                    )
                                })}
                            </Row>
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}

function VendorCard(props) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [height, setHeight] = useState('initial');

    const { vendor } = props;

    const front = useRef();
    const back = useRef();

    const setMaxHeight = () => {
        const backHeight = back.current.getBoundingClientRect().height;
        setHeight(Math.max(backHeight, 100));
    }

    const menuItems = vendor.menu.map((item) => {
        return <Card.Subtitle className="keraton-food-sub-title my-1">{"• " + item.name.toUpperCase() + " •"}</Card.Subtitle>;
    });

    useEffect(setMaxHeight, [menuItems])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])

    return (
        <Card className={`keraton-food-card ${isFlipped ? 'flip' : ''}`} onClick={() => { setIsFlipped(!isFlipped) }} style={{ height: height }}>
            <div className="front" ref={front}>
                <Card.Title className="keraton-food-title">{vendor.name.toUpperCase()}</Card.Title>
            </div>
            <div className="back" ref={back}>
                <div className="back-card-header my-1">
                    <img src={vendor.img} alt="" className="my-2" />
                </div>
                <div class="back-card-body my-1">
                    {menuItems}
                </div>
            </div>
        </Card>
    )
}

export default KeratonFood