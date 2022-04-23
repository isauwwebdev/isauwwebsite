import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import KeratonCountdown from './KeratonCountdown';

function KeratonVideo() {
    return (
        <div className="navbar-overlay keraton-video">
            <video playsinline="playsinline" autoplay="autoplay" muted loop style={{ height: "100vh", width: "100%", margin: "auto", objectFit: "cover" }}>
                <source src="http://students.washington.edu/isauw/images/keraton-2018-new.mp4" type="video/mp4"></source>
            </video>
            <Carousel.Caption style={{ top: "35%", bottom: "65%" }} className="animated fadeInDown">
                <h1 className="keraton-header" style = {{ zIndex: "100" }}>K E R A T O N</h1>
            </Carousel.Caption>
            <Carousel.Caption style={{ top: "50%", bottom: "50%" }} className="animated fadeInDown">
                <KeratonCountdown keratonDate={new Date(1651964400000)}></KeratonCountdown>
            </Carousel.Caption>
        </div>
    )
}

export default KeratonVideo;
