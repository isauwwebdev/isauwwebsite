import React, { useState, useRef } from 'react';
import Slider from "react-slick";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { FaInstagram } from 'react-icons/fa';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import performers from '../data/keraton-performers';

function KeratonPerformers() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const customSlider = useRef();

    const settingsText = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        pauseOnFocus: true,
        asNavFor: nav2,
        pauseOnHover: true,
        centerMode: true,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
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

    const settingsImg = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        pauseOnHover: true,
        asNavFor: nav1
    };

    return (
        <div className="keraton-performers py-5" style={{ "background-color": "#031B28" }}>
            <h1 className="py-5 keraton-performers-header">PERFORMERS</h1>
            <Container className="performers-container" style={{ "color": "white" }}>
                <Row className="my-5 slider-performer-row">
                    <Col className="col-6 slider-performer-text">
                        <Slider ref={slider1 => {(customSlider.current = slider1); setNav1(slider1);}} className="keraton-performer-slider" {...settingsText}>
                            {performers.map((performer) => {
                                return (
                                    <a onClick={() => customSlider.current.slickGoTo(1)}>
                                        <PerformerItem key={performer.id} performer={performer}></PerformerItem>
                                    </a>
                                )
                            })}
                        </Slider>
                    </Col>
                    <Col className="mb-5 col-6">
                        <div className="slider-performer-img">
                            <Slider ref={(slider2) => setNav2(slider2)} className="keraton-performer-slider2" {...settingsImg}>
                                {performers.map((performer) => {
                                    return (
                                        <PerformerImage key={performer.id} performer={performer}></PerformerImage>
                                    )
                                })}
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

function PerformerItem(props) {
    const { performer } = props;
    return (
        <div>
            <Row>
                <h2 className="performer-name mb-2">{performer.name}</h2>
            </Row>
            <Row>
                <h3 className="performer-details"> {performer.type}&emsp;|&emsp;{performer.time}&emsp;|&emsp;<a className="performer-social" href={performer.insta}><FaInstagram className="" /></a> </h3>
            </Row>
        </div>
    )
}

function PerformerImage(props) {
    const { performer } = props;
    return (
        <div className="performer-img-container">
            <img src={performer.img}></img>
        </div>
    )
}

export default KeratonPerformers;