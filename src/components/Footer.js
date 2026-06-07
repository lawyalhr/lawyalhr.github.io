import React from "react";

function IconGlobe() {
  return (
    <svg className="site-footer__icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg className="site-footer__icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className="site-footer__icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <path
        d="M6.5 4h3l2 5-2 1a12 12 0 006 6l1-2 5 2v3a2 2 0 01-2 2h-1C9.8 19 5 14.2 5 8.5V7a2 2 0 012-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPin() {
  return (
    <svg className="site-footer__icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <path
        d="M12 21s7-5.3 7-11a7 7 0 10-14 0c0 5.7 7 11 7 11z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.25" fill="none" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer site-footer--brand" id="contact" role="contentinfo">
      <p className="site-footer__tagline">
        PRACTICAL ADVICE. LEGAL EXCELLENCE. LASTING IMPACT.
      </p>
      <ul className="site-footer__contacts">
        <li>
          <IconGlobe />
          <a href="https://lawyalhr.com" target="_blank" rel="noreferrer">
            lawyalhr.com
          </a>
        </li>
        <li>
          <IconMail />
          <a href="mailto:info@lawyalhr.com">info@lawyalhr.com</a>
        </li>
        <li>
          <IconPhone />
          <a href="tel:+919810675681">+91 98106 75681</a>
          {", "}
          <a href="tel:+919899706331">+91 98997 06331</a>
        </li>
        <li>
          <IconPin />
          <span> Pan India Presence </span>
        </li>
      </ul>
      <p className="site-footer__copy">
        © {new Date().getFullYear()} Lawyal HR &amp; Legal Advisors. All rights reserved.
      </p>
    </footer>
  );
}
