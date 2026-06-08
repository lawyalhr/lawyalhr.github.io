import React from "react";
import { HERO_MEETING_IMAGE_SRC } from "../heroImage";

/** Visible hero messaging is only from this markup, never from the PNG. */
export default function Hero() {
  return (
    <section className="hero-pair" aria-labelledby="hero-heading">
      <div className="hero-pair__shell">
        <div
          className="hero-pair__media-bg"
          role="img"
          aria-label="Professionals collaborating in a modern workplace"
          style={{ backgroundImage: `url(${HERO_MEETING_IMAGE_SRC})` }}
        />
        <div className="hero-pair__copy">
          <div className="hero-pair__copy-inner">
            <h1 id="hero-heading" className="hero-pair__title">
              <span className="hero-pair__title-line hero-pair__title-line--white">
                Strategic HR &amp; Legal Solutions.
              </span>{" "}
              <span className="hero-pair__title-line hero-pair__title-line--gold">
                Trusted Advisors.
              </span>
            </h1>
            <p className="hero-pair__lede">
              Specialised HR &amp; IR advisory under Central and State Labour Laws, including the
              New Labour Codes. Preventive, structured, and risk-mitigation focused, with 30+ years
              of corporate leadership experience.
            </p>
          </div>
          <div className="hero-pair__actions">
            <a className="btn btn--gold btn--hero-primary" href="#services">
              OUR SERVICES
            </a>
          </div>
        </div>
        <div className="hero-pair__about">
          <div className="hero-pair__about-inner">
            <h2 className="hero-pair__about-title">ABOUT US</h2>
            <p className="hero-pair__about-text">
              Founded by senior HR &amp; IR professionals with 30+ years of leadership in large
              manufacturing and multinational environments. Based in Gurugram, we work closely with
              Promoters, MDs, CHROs and Plant Heads, combining corporate HR expertise with deep
              statutory knowledge to build compliant, audit-ready, industrially stable workplaces.
            </p>
          </div>
          <a className="btn btn--gold btn--hero-primary hero-pair__about-cta" href="#contact">
            CONSULT WITH US
          </a>
        </div>
      </div>
    </section>
  );
}
