import React, { useState } from "react";

const links = [
  { href: "#top",      label: "HOME" },
  { href: "#about",    label: "ABOUT US" },
  { href: "#expertise", label: "EXPERTISE" },
  { href: "#services", label: "SERVICES" },
  { href: "#why",      label: "WHY US" },
  { href: "#founders", label: "OUR TEAM" },
  { href: "#faq",      label: "FAQ" },
  { href: "#contact",  label: "CONTACT US" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav" aria-label="Main">
      <div className="site-nav__inner">
        <div className={`site-nav__links${open ? " site-nav__links--open" : ""}`}>
          {links.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
        <button
          className="site-nav__hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={open ? "open" : ""} />
          <span className={open ? "open" : ""} />
          <span className={open ? "open" : ""} />
        </button>
      </div>
    </nav>
  );
}
