import React from "react";
import "./footer.css";
// import {
//   AiFillFacebook,
//   AiFillTwitterSquare,
//   AiFillInstagram,
// } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2025 Your Edteck Platform. All rights reserved. <br /> 
          <a href="8310"></a>
        </p>
        <div className="social-links">
          <a href="">
            {/* <AiFillFacebook /> */}
            FaceBook
          </a>
          <a href="">
            Twitrer
            {/* <AiFillTwitterSquare /> */}
          </a>
          <a href="">
            Instagram
            {/* <AiFillInstagram /> */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
