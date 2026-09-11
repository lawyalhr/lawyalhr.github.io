import React from "react";

const values = [
  {
    title: "Integrity & Ethics",
    text: "We hold ourselves to the highest ethical standards, doing what is right, not just permissible. Clients trust us with their most sensitive matters."
  },
  {
    title: "Excellence & Quality",
    text: "We strive to provide HR and legal advice of the highest quality, drawing on deep expertise to deliver solutions that exceed expectations."
  },
  {
    title: "Client-Centric Approach",
    text: "Your objectives shape our work. We listen, understand your challenges, and tailor clear, practical solutions that add real value."
  },
  {
    title: "Collaboration & Teamwork",
    text: "We work as one team, with you and within our firm, leveraging diverse skills and perspectives to approach problems creatively."
  },
  {
    title: "Innovation & Adaptability",
    text: "India's legal and HR landscape is constantly evolving. We stay ahead of developments so our advice is always forward-thinking and current."
  },
  {
    title: "Social Responsibility",
    text: "Committed to making a positive impact through pro bono work, community service, and initiatives that promote access to justice."
  }
];

export default function FirmAbout() {
  return (
    <section className="section firm-about" id="about" aria-labelledby="about-heading">
      <div className="firm-about__intro">
        <h2 id="about-heading" className="section__title">
          About Lawyal HR &amp; Legal Advisors
        </h2>
        <p>
          Lawyal HR &amp; Legal Advisors is a premier firm based in <strong>Gurugram (Haryana)</strong>,
          dedicated to providing comprehensive HR, IR, and legal solutions. Our team comprises seasoned
          HR leaders and legal professionals who bring a wealth of experience, a deep understanding of
          the law, and a commitment to exceptional service, spanning corporate law, M&amp;A, intellectual
          property, labour and employment, real estate, litigation, arbitration, and more.
        </p>
        <p>
          We work collaboratively, staying at the forefront of India's dynamic legal developments to
          deliver advice that is comprehensive, forward-thinking, and tailored to each client's specific
          needs. Ethical practice and complete confidentiality are the cornerstones of our firm. We
          protect and advance your interests with professionalism at every turn.
        </p>
      </div>
      <h3 className="firm-about__values-title" id="values-heading">
        Our Values
      </h3>
      <ul className="values-grid" aria-labelledby="values-heading">
        {values.map((v) => (
          <li key={v.title} className="value-item">
            <h4 className="value-item__title">{v.title}</h4>
            <p className="value-item__text">{v.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
