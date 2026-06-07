import React from "react";

export default function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-heading">
      <div className="contact__card">
        <h2 id="contact-heading" className="contact__title">
          Need Strategic Support?
        </h2>
        <p className="contact__lede">
          <strong>LawYal HR Advisors</strong>, confidential consultations in Gurugram, Delhi NCR,
          and across India.
        </p>
        <p className="contact__detail">
          Call:{" "}
          <a href="tel:+919810675681">+91-9810675681</a>
          {", "}
          <a href="tel:+919899706331">+91-9899706331</a>
        </p>
        <p className="contact__detail">
          <a href="mailto:info@lawyalhr.com">Email: info@lawyalhr.com</a>
        </p>
        <div className="contact__actions">
          <a className="btn btn--primary" href="tel:+919810675681">
            Call Now
          </a>
          <a
            className="btn btn--secondary"
            href="https://wa.me/919810675681"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
