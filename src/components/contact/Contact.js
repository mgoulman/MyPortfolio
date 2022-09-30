import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9c55b2m",
        "template_v6puilo",
        form.current,
        "g9cUgUraQDv3AWABP"
      )
      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className=".contact_option-icon" />
            <h4>Email</h4>
            <h5>mouadgoulman@gmail.com</h5>
            <a
              href="mailto:moadgoulman@gmail.com"
              target={"_blank"}
              rel="noreferrer"
            >
              Send Me An Email
            </a>
          </article>
          <article className="contact_option">
            <FaFacebookMessenger className=".contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Mouad Goulmane</h5>
            <a
              href="https://m.me/moad.goulman"
              target={"_blank"}
              rel="noreferrer"
            >
              Send Me A Message
            </a>
          </article>
          <article className="contact_option">
            <FaWhatsapp className=".contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+212 674 194 490</h5>
            <a
              href="https://api.whatsapp.com/send?phone=21274194490"
              target={"_blank"}
              rel="noreferrer"
            >
              Send Me A Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
