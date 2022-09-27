import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://github.com/mgoulman" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/mouad-goulmane/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.facebook.com/moad.goulman/"
        target="_blank"
        rel="noreferrer"
      >
        <GrFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
