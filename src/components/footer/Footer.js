import React from "react";
import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer_logo">
        Mouad
      </a>
      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/mouad-goulmane/">
          <BsLinkedin />
        </a>
        <a href="https://www.facebook.com/moad.goulman/">
          <FaFacebookSquare />
        </a>
        <a href="https://twitter.com/GoulmaneMouad">
          <BsTwitter />
        </a>
        <a href="https://www.instagram.com/mouad_goulmane/">
          <BsInstagram />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Mouad Goulmane Portfolio.</small>
      </div>
    </footer>
  );
};

export default Footer;
