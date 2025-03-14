import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import UpcomingEventsGallery from "../Shared/UpcomingEventsGallery";
import PastEventsSearch from "./PastEventsSearch";
import React from "react";

export default function Events() {
  return (
    <div>
      {/* Carousel */}
      <Carousel
        touch={true}
        indicators={false}
        controls={false}
        style={{ height: "calc(50vh + 10vw)" }}
      >
        <Carousel.Item interval={4000}>
          <div className="navbar-overlay">
            <img
              className="d-block w-100 h-100"
              src="../images/events/carousel/1.jpeg"
              alt=""
            />
          </div>
          <Carousel.Caption style={{ bottom: "18%", letterSpacing: "10pt" }}>
            <div className="animated fadeInDown">
              <h1 className="carousel-title">KERATON</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className="navbar-overlay">
            <img
              className="d-block w-100 h-100"
              src="../images/events/carousel/2.jpeg"
              alt=""
            />
          </div>
          <Carousel.Caption style={{ bottom: "18%", letterSpacing: "10pt" }}>
            <div className="animated fadeInDown">
              <h1 className="carousel-title">SEATTLE 101</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className="navbar-overlay">
            <img
              className="d-block w-100 h-100"
              src="../images/events/carousel/3.jpeg"
              alt=""
            />
          </div>
          <Carousel.Caption style={{ bottom: "18%", letterSpacing: "10pt" }}>
            <div className="animated fadeInDown">
              <h1 className="carousel-title">SEATHROUGH</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <UpcomingEventsGallery />
        {/* Jumbotron for ISAUW Card*/}
        {/* <div className="jumbotron">
          <div>
            <h1 className="jumbotron-title display-4">ISAUW Card</h1>
            <p className="jumbotron-desc">
              Discounts on your favorite restaurants for only $10!
            </p>
            <a
              className="jumbotron-btn btn btn-dark"
              href="/shop"
              role="button"
            >
              Order now
            </a>
          </div>
        </div> */}
      </Container>

      <PastEventsSearch />
    </div>
  );
}
