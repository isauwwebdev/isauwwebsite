import React, {useState, useRef} from 'react';
import Slider from "react-slick";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import {MdOutlineTakeoutDining} from 'react-icons/md'
import {MdOutlineLocalCafe} from 'react-icons/md'
import {MdStorefront} from 'react-icons/md'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { mdiFoodTakeoutBoxOutline } from '@mdi/js'; 

import vendorList from '../../data/keraton-vendors';
import { MdSettingsInputAntenna } from 'react-icons/md';

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
  };

  const bigSettings = {
    asNavFor: nav1,
    dots: false,
    arrows: true,
    speed: 600,
    swipe: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
    pauseOnHover: true,
  };

  const miniSettings = {
    speed: 600,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: false,
    pauseOnHover: false,
    dots: true,
  };

  return (
    <div className="keraton-performers py-5" style={{ color: "white"}}>
      <Container>
        <h1 className="py-3 keraton-section-header">Vendors</h1>
        <Row className="my-5 keraton-vendors-row">
          <Col xs={12} style={{textAlign: "center"}}>
            <Slider style={{marginLeft: "auto", marginRight: "0"}} ref={slider1 => {(customSlider.current = slider1); setNav1(slider1);}} className="keraton-vendors-category" {...vendorCategorySettings} vertical={true} verticalSwiping={true}>
              {vendorList.map((category) => {
                return (
                  <button
                    className="keraton-vendors-button"
                    onClick={() => customSlider.current.slickGoTo(category.index)}
                  >
                    {category.name === 'Food' && <MdOutlineTakeoutDining style={{fontSize: `calc(16px + 3vw)`}} />}
                    {category.name === 'Drinks' && <MdOutlineLocalCafe style={{fontSize: `calc(16px + 3vw)`}} />}
                    {category.name === 'Merch' && <MdStorefront style={{fontSize: `calc(16px + 3vw)`}} />}
                  </button>
                )
              })}
            </Slider>
          </Col>
          <Col xs={12} style={{padding: "0"}}>
            <Slider className="keraton-vendor" ref={(slider2) => setNav2(slider2)} {...bigSettings}>
              {vendorList.map((category) => {
                return (
                  <Slider {...miniSettings} className="keraton-vendors-mini">
                    {category.vendors.map((vendor) => {
                      return (
                        <Row className="keraton-vendors-img-row" style={{margin: "0"}}>
                          <Col xs={6} sm={5} style={{paddingRight: "0", paddingLeft: `calc(2px + 0.6vw)`}}>
                            <div style={{paddingRight: `calc(1.6vw)`, paddingTop: `calc(24px + 1.2vw)`, paddingBottom: `calc(8px + 1.2vw)`, textAlign: "right", height: "100%", display: "flex", flexDirection: "column"}}>
                              <h1 style={{fontFamily: "Blackberry One, sans-serif", fontWeight: "500", fontSize: `calc(12px + 1.4vw)`, marginBottom: "2px", marginLeft: "6px", color: "#6c9e74" }}>{vendor.name}</h1>
                              {vendor.menu.map((menuItem) => {
                                return (
                                  <div style={{fontFamily: "Blackberry Seven, sans-serif", fontWeight: "400", fontSize: `calc(11px + 0.6vw)`, color: "black"}}>
                                    {menuItem.name}
                                  </div>
                                )
                              })}
                              <div style={{marginTop: "auto"}}>
                                <h1 style={{fontFamily: "Blackberry One, sans-serif", fontWeight: "500", fontSize: `calc(12px + 1.2vw)`, marginBottom: "2px", marginLeft: "6px", color: "#6c9e74"}}>{vendor.name2}</h1>
                                {vendor.menu2.map((menuItem) => {
                                  return (
                                    <div style={{fontFamily: "Blackberry Seven, sans-serif", fontWeight: "400", fontSize: `calc(12px + 0.6vw)`, color: "black"}}>
                                      {menuItem.name}
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          </Col>
                          <Col xs={6} sm={7} style={{paddingTop: "35px"}}> {/* change this padding to be responsive*/}
                            <div className="keraton-vendors-img-container">
                              <div style={{position: "relative", width: "fit-content"}}>
                                <img src={vendor.img} className="keraton-vendors-img" alt=""></img>
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