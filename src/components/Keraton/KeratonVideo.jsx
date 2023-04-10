import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import KeratonCountdown from './KeratonCountdown';

function KeratonVideo() {


  return (
    <div className="navbar-overlay keraton-video" style={{"background-color": "#031B28", height: "100vh"}}>
      <video playsinline="playsinline" autoplay="autoplay" muted loop style={{height: "100vh", width: "100%", margin: "auto", objectFit: "cover", display: "block"}}>
        <source src="https://students.washington.edu/isauw/images/keraton-2018-trimmed.mp4" type="video/mp4"></source>
      </video>
      <Carousel.Caption style={{top: "35%", bottom: "65%", left: "5%", right: "5%"}} className="animated fadeInDown">
        <h1 className="keraton-header" style={{zIndex: "100"}}>KERATON</h1>
      </Carousel.Caption>
      <Carousel.Caption style={{top: `calc(38% + 2.4vw)`, bottom: "50%"}} className="animated fadeInDown">
        <KeratonCountdown keratonDate={new Date('May 6, 2023 16:00:00')}></KeratonCountdown>
      </Carousel.Caption>
    </div>

  )
}



export default KeratonVideo;
