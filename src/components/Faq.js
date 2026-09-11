import React from "react";

const questions = [
  {
    question: "What HR and labour law services does Lawyal provide?",
    answer:
      "We advise employers on HR policies, industrial relations, statutory compliance, domestic enquiries, POSH, union negotiations, labour disputes, training and compliance audits."
  },
  {
    question: "Where do you provide HR and labour law consulting?",
    answer:
      "We are based in Gurugram, serve organisations throughout Delhi NCR and support client mandates across India."
  },
  {
    question: "Can you support a domestic enquiry or an industrial relations crisis?",
    answer:
      "Yes. We undertake domestic enquiry assignments and support disciplinary matters, union disputes, collective bargaining and urgent industrial relations situations."
  },
  {
    question: "Do you offer ongoing advisory as well as project work?",
    answer:
      "Yes. Clients can engage us on a monthly retainer or for a defined project such as a compliance audit, policy review, training programme or enquiry."
  }
];

export default function Faq() {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="section__title section__title--center">
        Frequently Asked Questions
      </h2>
      <div className="faq__list">
        {questions.map(({ question, answer }) => (
          <details className="faq__item" key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
