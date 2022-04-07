import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function KeratonVideo() {
    return (
        <div className="navbar-overlay">
            <video playsinline="playsinline" autoplay="autoplay" muted loop style={{ height: "100vh", width: "100%", margin: "auto", objectFit: "cover" }}>
                <source src="http://students.washington.edu/isauw/images/cabin.mp4" type="video/mp4"></source>
            </video>
            <Carousel.Caption style={{ top: "40%", bottom: "60%" }} className="animated fadeInDown">
                    <h1 className="carousel-title" style = {{ zIndex: "100" }}>K E R A T O N</h1>
            </Carousel.Caption>
        </div>
    )
}

export default KeratonVideo;
