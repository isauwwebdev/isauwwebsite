import React, { useState, useRef } from 'react';
import Slider from "react-slick";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { FaInstagram } from 'react-icons/fa';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import performers from '../data/keraton-performers';
import students from '../data/keraton-student-performers';

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

    const settingsStudents = {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        infinite: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <div className="keraton-performers py-5" style={{ "background-color": "#031B28" }}>
            <h1 className="py-3 keraton-section-header" style={{marginBottom: "3vw"}}>Performers</h1>
            <Container className="performers-container" style={{ "color": "white" }}>
                <Row className="my-3 slider-performer-row">
                    <Col className="col-6 my-auto mx-auto slider-performer-text">
                        <Slider ref={(slider1) => setNav1(slider1)} className="keraton-performer-slider" {...settingsText}>
                            {performers.map((performer) => {
                                return (
                                    <PerformerItem className="" key={performer.id} performer={performer}></PerformerItem>
                                )
                            })}
                        </Slider>
                    </Col>
                    <Col className="mb-5 col-6 performer-img-col">
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
                {/* <h2 className="py-3 keraton-student-section-header" style={{marginBottom: "2vw"}}>Students</h2>
                <Row className="slider-student-performer-row">
                    <Col>
                        <Slider className="mb-5 keraton-student-performer" {...settingsStudents}>
                            {students.map((student) => {
                                return (
                                    <StudentPerformer key={student.id} student={student}></StudentPerformer>
                                )
                            })}
                        </Slider>
                    </Col>
                </Row> */}
            </Container>
        </div>
    )
}

function PerformerItem(props) {
    const { performer } = props;
    return (
        <div className="">

                <h2 className="performer-name">{performer.name}</h2>
                <h3 className="performer-details"> {performer.type}&emsp;|&emsp;{performer.time}&emsp;|&emsp;<a className="performer-social" href={performer.insta}><FaInstagram className="" /></a> </h3>

        </div>
    )
}

function PerformerImage(props) {
    const { performer } = props;
    return (
        <div className="performer-img-container">
            <div>
                <img src={performer.img}></img>
            </div>
        </div>
    )
}

function StudentPerformer(props) {
    const { student } = props;
    return (
        <div className="">
            <div className="py-2 px-4 student-performer-img">
                <img className="framed" src={student.img}></img>
            </div>
            <h2 className="mt-4 px-4 student-performer-name">{student.name}</h2>
            <h3 className="px-4 student-performer-details">{student.type}&emsp;|&emsp;{student.time}</h3>
        </div>
    )
}

export default KeratonPerformers;