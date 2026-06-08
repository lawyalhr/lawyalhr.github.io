import React from "react";

function FounderCard({ name, role, photo, children }) {
  return (
    <article className="relative flex h-full w-full min-h-0 flex-col self-stretch overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-200/60 transition duration-300 hover:border-sky-300/80 hover:shadow-md sm:rounded-2xl sm:p-8">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-transparent via-sky-500/75 to-transparent"
        aria-hidden="true"
      />
      <div className="relative flex min-h-0 flex-1 flex-col">
        <div className="founder-card__photo-wrap">
          <img
            src={photo}
            alt={`${name}, ${role}`}
            className="founder-card__photo"
          />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{name}</h3>
        <p className="mt-1.5 text-sm font-semibold leading-snug text-sky-700 sm:text-base">
          {role}
        </p>
        <ul className="mt-5 min-h-0 flex-1 list-outside list-disc space-y-2.5 border-t border-slate-200 pl-5 pt-5 text-left text-sm leading-relaxed text-slate-600 marker:text-sky-600/90">
          {children}
        </ul>
      </div>
    </article>
  );
}

export default function Founders() {
  return (
    <section
      className="section founders mx-auto mt-6 w-full max-w-6xl px-0"
      id="founders"
      aria-labelledby="founders-heading"
    >
      <h2 id="founders-heading" className="section__title section__title--center">
        Our Team
      </h2>
      <div className="grid w-full auto-rows-[1fr] grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-8">
        <FounderCard
          name="Prem Kohli"
          role="Global HR Leader & Strategic Advisor"
          photo="images/founder-prem-kohli.jpeg"
        >
          <li>30+ years in HR leadership, culture building & industrial relations</li>
          <li>Corporate CHRO – EssilorLuxottica (Luxottica & Ray-Ban India)</li>
          <li>HR across 50+ locations, reporting to global HR leadership</li>
          <li>Prior leadership with Delphi, PepsiCo, Godrej Consumer Products</li>
          <li>
            Expertise: HR strategy, IR, talent, compensation & benefits, compliance; transformation,
            greenfield projects & shopfloor excellence (5S, quality circles)
          </li>
          <li>Recognitions including Asia HR Awards & global employee engagement excellence</li>
        </FounderCard>
        <FounderCard
          name="Anand Deepak"
          role="Senior HR & IR Advisor"
          photo="images/founder-deepak-anand.png"
        >
          <li>30+ years of leadership in HR, industrial relations & compliance</li>
          <li>
            Ex-Advisor HR & IR – Daikin India; led HR at Allied Nippon, Subros, Pricol, SKH Metals,
            Tecumseh
          </li>
          <li>Union management, IR strategy, statutory compliance & workforce governance</li>
          <li>Proven in cost optimisation, HR transformation & engagement (Kaizen, quality circles)</li>
          <li>Focus on litigation prevention, audit readiness & industrial harmony</li>
          <li>Trusted advisor in manufacturing; strong liaisoning with government authorities</li>
        </FounderCard>
      </div>
    </section>
  );
}
