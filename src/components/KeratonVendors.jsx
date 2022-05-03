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
        centerMode: true
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
        <div className="keraton-performers py-5" style={{ backgroundColor: "#031B28", color: "white" }}>
            <Container>
                <h1 className="py-5 keraton-section-header">Vendors</h1>
                <Row className="my-5">
                    <Col xs={3}>
                        <Slider style={{marginLeft: "auto", marginRight: "0"}} ref={slider1 => {(customSlider.current = slider1); setNav1(slider1);}} className="vendor-slider" {...vendorCategorySettings} vertical={true} verticalSwiping={true}>
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
                    <Col xs={9}>
                        <Slider className="keraton-vendor" ref={(slider2) => setNav2(slider2)} {...bigSettings}>
                            {vendorList.map((category) => {
                                return (
                                    <Slider {...miniSettings} className="keraton-vendor-mini">
                                        {category.vendors.map((vendor) => {
                                            return (
                                                <Row className="vendor-image-row">
                                                    <Col xs={5}>
                                                        <div style={{paddingRight: "20px", paddingTop: "35px", textAlign: "right"}}> {/* change this padding to be responsive. match padding top with col-8*/}
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
                                                    <Col xs={7} style={{paddingTop: "35px"}}> {/* change this padding to be responsive*/}
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
        </div>
    )
}

export default KeratonVendors;