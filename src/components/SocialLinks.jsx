import React from 'react';
import { FaInstagram, FaYoutube, FaFacebookSquare, FaTiktok } from 'react-icons/fa';

function SocialLinks() {
    return (
        <div className="nav-social-media">
            <a href="https://www.instagram.com/isauwhuskies/?hl=en" className="social" target="_blank"> <FaInstagram className="navIcon" /> </a>
            <a href="https://www.youtube.com/user/isauwHuskies" className="social" target="_blank"> <FaYoutube className="navIcon" /> </a>
            <a href="https://www.facebook.com/isauw.huskies/" className="social" target="_blank"> <FaFacebookSquare className="navIcon" /> </a>
            <a href="https://www.tiktok.com/@isauwhuskies" className="social" target="_blank"> <FaTiktok className="navIcon" /> </a>
        </div>
    )
}

export default SocialLinks;
