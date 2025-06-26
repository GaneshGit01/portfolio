import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me for any inquiries</p>
      <a href="mailto:ganesh.kumar@gmail.com" className="contact-btn">
        Send an Email
      </a>
    </section>
  );
}

export default Contact;
