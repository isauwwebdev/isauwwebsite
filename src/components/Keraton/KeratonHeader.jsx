import React from 'react';
import Container from 'react-bootstrap/Container';

function KeratonHeader() {
    return (
        <div className="keraton-header-component pt-5">
            <Container className="align-items-center justify-content-center">
                <div className="testing pt-5">
                    <video playsinline="playsinline" autoplay="autoplay" muted loop className="keraton-about-media mx-auto" src="../images/keraton/about/pak-raden-trimmed.mp4"></video>
                </div>
                <div className="">
                    <img src="../images/keraton/keraton-header.png"></img>
                </div>

            </Container>
        </div>
    )
}

export default KeratonHeader