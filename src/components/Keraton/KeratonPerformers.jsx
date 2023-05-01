import React, { useState } from 'react';
import Slider from "react-slick";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import { FaInstagram } from 'react-icons/fa';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import performers from '../../data/keraton-performers';
import studentPerformers from '../../data/keraton-student-performers.json';

function KeratonPerformers() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settingsText = {
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    pauseOnFocus: true,
    asNavFor: nav2,
    pauseOnHover: true,
    centerMode: false,
    vertical: false,
    verticalSwiping: false,
    focusOnSelect: true,
    arrows: true,
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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    pauseOnHover: true,
    asNavFor: nav1
  };

  return (
    <div className="keraton-performers py-5" style={{}}>
      <h1 className="py-3 keraton-section-header" style={{ marginBottom: "3vw" }}>Performers</h1>
      <Container className="performers-container" style={{ "color": "white" }}>
        <Row className="all-keraton-performers">
          <Col sm={12} md={12} lg={6}>
            <Row className="my-3 slider-performer-row flex-column-reverse">
              <Col className="my-auto slider-performer-text">
                <Slider ref={(slider1) => setNav1(slider1)} className="keraton-performer-slider" {...settingsText}>
                  {performers.map((performer) => {
                    return (
                      <PerformerItem className="" key={performer.id} performer={performer}></PerformerItem>
                    )
                  })}
                </Slider>
              </Col>
              <Col className="mb-5 performer-img-col">
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
          </Col>
          <Col sm={12} md={12} lg={6}>
            <Row style={{ "flex-direction":"column", "align-items":"center" }}>
              {studentPerformers.map((student, i) => {
                return (
                  <StudentPerformerItem index={i} student={student}></StudentPerformerItem>
                )
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

function StudentPerformerItem(props) {
  const { student, index } = props;
  return (
    <Col sm={12} md={12} lg={10} className="mx-2 my-2">
      <h2 className="student-performer-name">{student.name}</h2>
      <h3 className="student-performer-details">{student.type + "\t|\t" + student.time}</h3>
    </Col>
  )
}

function PerformerItem(props) {
  const { performer } = props;
  return (
    <div className="">

      <h2 className="performer-name">{performer.name}</h2>
      <h3 className="performer-details">{performer.type + "\t|\t" + performer.time}</h3>

    </div>
  )
}

function PerformerImage(props) {
  const { performer } = props;
  return (
    <div className="performer-img-container">
      <div>
        <img src={performer.img} alt=""></img>
      </div>
    </div>
  )
}

export default KeratonPerformers;