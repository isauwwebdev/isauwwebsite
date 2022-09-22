import React from 'react';
import {FaInstagram, FaYoutube, FaFacebookSquare, FaTiktok} from 'react-icons/fa';

function SocialLinks() {
  return (
    <div className="nav-social-media">
      <a href="https://www.instagram.com/isauwhuskies/?hl=en" className="social" style={{fontSize: `calc(1vw + 16px)`}} target="_blank" rel="noreferrer"> <FaInstagram className="nav-social-icon" /> </a>
      <a href="https://www.youtube.com/user/isauwHuskies" className="social" style={{fontSize: `calc(1vw + 16px)`}} target="_blank" rel="noreferrer"> <FaYoutube className="nav-social-icon" /> </a>
      <a href="https://www.facebook.com/isauw.huskies/" className="social" style={{fontSize: `calc(1vw + 16px)`}} target="_blank" rel="noreferrer"> <FaFacebookSquare className="nav-social-icon" /> </a>
      <a href="https://www.tiktok.com/@isauwhuskies" className="social" style={{fontSize: `calc(1vw + 16px)`}} target="_blank" rel="noreferrer"> <FaTiktok className="nav-social-icon" /> </a>
    </div>
  )
}

export default SocialLinks;
