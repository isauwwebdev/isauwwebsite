<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import Slider from "react-slick";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import vendorList from '../data/keraton-vendors';

function KeratonVendors() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const customSlider = useRef();

    const vendorCategorySettings = {
        asNavFor: nav2,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        infinite: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    };

    const bigSettings = {
        asNavFor: nav1,
        dots: false,
        speed: 500,
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        infinite: false,
        pauseOnHover: true,
    };

    const miniSettings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        infinite: false,
        pauseOnHover: true,
    };

    return (
        <div className="keraton-performers py-5" style={{ "background-color": "#201617" }}>
            <h1 className="py-5 keraton-performers-header" style={{ "color": "white" }}><strong>VENDORS</strong></h1>
            <Container style={{ "color": "white" }}>
                <Row className="my-5">
                    <Col className="col-3">
                        <Slider ref={slider1 => {(customSlider.current = slider1); setNav1(slider1);}} className="slider vendor-slider" {...vendorCategorySettings} vertical={true} verticalSwiping={true}>
                            {vendorList.map((category) => {
                                return (
                                    <a style={{height: "fit-content", display: "inline-block"}} onClick={() => customSlider.current.slickGoTo(category.index)}>
                                        {category.name}
                                        {/* <img style={{width: "50px", height: "auto"}}></img> */}
                                    </a>
                                )
                            })}
                        </Slider>
                    </Col>
                    <Col className="col-9">
                        <Slider className="vendor-image-slider" ref={(slider2) => setNav2(slider2)} {...bigSettings}>
                            {vendorList.map((category) => {
                                return (
                                    <Slider {...miniSettings}>
                                        {category.vendors.map((vendor) => {
                                            return (
                                                <Row className="vendor-image-row">
                                                    <Col xs={4}>
                                                        <div style={{paddingRight: "40px", paddingTop: "35px"}}> {/* change this padding to be responsive. match padding top with col-8*/}
                                                            <h1 style={{fontFamily: "Open Sans, sans-serif", fontWeight: "700" }}>{vendor.name}</h1>
                                                            {vendor.menu.map((menuItem) => {
                                                                return (
                                                                    <div>
                                                                        {menuItem.name}                                    
                                                                    </div>
                                                                )})
                                                            }
                                                        </div>
                                                    </Col>
                                                    <Col xs={8} style={{paddingTop: "35px"}}> {/* change this padding to be responsive*/}
                                                        <div className="vendor-img-container">
                                                            <div style={{position: "relative"}}>
                                                                <img src={vendor.img} style={{width: "100%", height: "100%", display: "block"}}></img>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            )
                                        })}
                                    </Slider>
                                )
                            })}
                        </Slider>
                    </Col>
                </Row>
            </Container>
=======
import React, { useState, useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import vendors from '../data/keraton-vendors.json';

function KeratonVendors() {
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
                <Col xs={2}>
                    <div className="vendors-name">
                        {vendors.map((vendor) => {
                            return <VendorName vendor={vendor}></VendorName>
                        })}
                    </div>
                </Col>
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

function VendorName(props) {
    const { vendor } = props;
    return (
        <div className="vendors-name">
            <a>{vendor.name.toUpperCase()}</a>
>>>>>>> 052ebad06c160fcd097617bbc193832e6ad839d6
        </div>
    )
}

<<<<<<< HEAD
export default KeratonVendors;
=======
export default KeratonVendors
>>>>>>> 052ebad06c160fcd097617bbc193832e6ad839d6
