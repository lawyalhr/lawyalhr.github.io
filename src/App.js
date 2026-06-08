import React from "react";
import Masthead from "./components/Masthead";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FirmAbout from "./components/FirmAbout";
import OurExpertise from "./components/OurExpertise";
import Services from "./components/Services";
import ValueProps from "./components/ValueProps";
import Founders from "./components/Founders";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="site">
      <Masthead />
      <Navbar />
      <main className="main" id="main-content">
        <div className="section-band section-band--hero-pair">
          <Hero />
        </div>
        <div className="section-band section-band--light">
          <FirmAbout />
        </div>
        <div className="section-band section-band--white">
          <OurExpertise />
        </div>
        <div className="section-band section-band--light">
          <Services />
        </div>
        <div className="section-band section-band--white">
          <ValueProps />
        </div>
        <div className="section-band section-band--light">
          <Founders />
        </div>
        <div className="section-band section-band--dark-cta">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
