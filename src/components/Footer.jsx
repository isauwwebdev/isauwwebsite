import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookSquare,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  // Dynamic year for our copyright
  const year = new Date().getFullYear();

  return (
    <footer className="page-footer text-center">
      {/* Social Icons */}
      <div className="py-4 mx-auto flex text-center justify-center">
        <a
          href="https://www.instagram.com/isauwhuskies/?hl=en"
          className="social"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaInstagram className="footer-social-icon" />{" "}
        </a>
        <a
          href="https://www.youtube.com/user/isauwHuskies"
          className="social"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaYoutube className="footer-social-icon" />{" "}
        </a>
        <a
          href="https://www.facebook.com/isauw.huskies/"
          className="social"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaFacebookSquare className="footer-social-icon" />{" "}
        </a>
        <a
          href="https://www.tiktok.com/@isauwhuskies"
          className="social"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaTiktok className="footer-social-icon" />{" "}
        </a>
      </div>

      {/* Copyright and Conditions */}
      <div
        className="footer-copyright"
        style={{ padding: `calc(1.2vw + 20px) 0` }}
      >
        {/* Required if website is hosted using UW shared hosting */}
        <div className="privacy-terms" id="conditions">
          <a
            style={{ marginRight: "12px" }}
            href="https://www.washington.edu/online/privacy"
            className="text-decoration-none"
          >
            Privacy
          </a>
          <a
            style={{ marginLeft: "12px" }}
            href="https://www.washington.edu/online/terms"
            className="text-decoration-none"
          >
            Terms
          </a>
        </div>
        <div>
          <p className="copyright">
            © {year} Indonesian Student Association at University of Washington
            | Seattle, WA
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
