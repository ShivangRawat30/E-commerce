import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; ShivangRawat</p>
      </div>

      <div className="rightFooter">
        <AiOutlineInstagram
          className="logos"
          id="instagram"
          href="http://instagram.com/shivangrawat__"
        />
        <AiFillLinkedin
          className="logos"
          id="linkedin"
          href="https://www.linkedin.com/in/shivangrawat30/"
        />
        <AiOutlineTwitter
          className="logos"
          id="twitter"
          href="https://twitter.com/shivangrawaat"
        />
      </div>
    </footer>
  );
};

export default Footer;
