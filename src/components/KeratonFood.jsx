import React, { useState, useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import vendors from '../data/keraton-vendors.json';

function KeratonFood() {
    const [numOfItems, setNumOfItems] = useState(3);
    React.useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth < 900) {
                setNumOfItems(1);
            } else {
                setNumOfItems(3);
            }
        })
    })
    return (
        <div>
            <Container className="keraton-food">
                <h1 className="my-3 keraton-food-header"><strong>VENDORS</strong></h1>
                <OwlCarousel className='owl-theme' margin={10} items={numOfItems} mouseDrag={true} pullDrag={true}>
                    {vendors.map((vendor) => {
                        return <VendorCard vendor={vendor}></VendorCard>
                    })}
                </OwlCarousel>
            </Container>
        </div>
    )
}

function VendorCard(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    const { vendor } = props;

    const front = useRef();
    const back = useRef();

    const menuItems = vendor.menu.map((item) => {
        return <Card.Subtitle className="keraton-food-sub-title my-1">{"• " + item.name.toUpperCase() + " •"}</Card.Subtitle>;
    });

    return (
        <div className="item">
            <Card className={`keraton-food-card ${isFlipped ? 'flip' : ''}`} onClick={() => { setIsFlipped(!isFlipped) }} style={{ height: "420px" }}>
                <div className="front" ref={front}>
                    <Card.Title className="keraton-food-title">{vendor.name.toUpperCase()}</Card.Title>
                </div>
                <div className="back" ref={back}>
                    <div className="back-card-header my-1">
                        <img src={vendor.img} alt="" className="my-2" />
                    </div>
                    <div class="back-card-body my-3">
                        {menuItems}
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default KeratonFood