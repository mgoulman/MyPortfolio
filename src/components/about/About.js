import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Client</h5>
              <small>5+ as Freelance</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            My name is Mouad GOULMANE i'm a full stack web Developer based on
            Morocco. i describe my self as a passionate developer who loves
            coding, open source and the web platform. Aside my job, i like to
            create and contribute to open source projects. That helps me to
            learn a ton of new stuff, grow as a developer and support other open
            source projects. Also i enjoy lerning how things work.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
