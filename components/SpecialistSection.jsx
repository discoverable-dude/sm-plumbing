import { Check, Arrow } from "./Icons";
import Link from "next/link";

const SERVICES = [
  "Full Bathroom Design & Build",
  "Precision Tiling & Stonework",
  "Professional Electrics & Lighting",
  "Expert Plastering & Finishing",
];

export function SpecialistSection() {
  return (
    <section className="sec specialist" id="bathroom-installations">
      <div className="sec-inner specialist-grid">
        <div className="specialist-text">
          <div className="sec-eyebrow">
            <span className="rule"/> 02 — What we do
          </div>
          <h2 className="h2">
            A Specialist,<br/>Not a Generalist.
          </h2>
          <p className="body">
            We don't just "fix leaks." We manage the entire lifecycle of
            high-end bathroom transformations. From structural alterations
            to the final sealant bead, we provide a single point of
            accountability.
          </p>
          <ul className="check-list">
            {SERVICES.map((s, i) => (
              <li key={s}>
                <span className="check"><Check size={14}/></span>
                <span className="check-label">{s}</span>
                <span className="check-num">{String(i + 1).padStart(2, "0")}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="specialist-bento">
          <Link className="bento bento-tall" href="/our-work" style={{ backgroundImage: "url(/assets/showcase-3.png)" }}>
            <div className="bento-tag">FEATURED</div>
            <div className="bento-meta">
              <div className="bento-title">Marble &amp; brass<br/>en-suite, Brentwood</div>
              <div className="bento-arrow"><Arrow size={14}/></div>
            </div>
          </Link>
          <Link className="bento bento-short" href="/our-work" style={{ backgroundImage: "url(/assets/showcase-1.png)" }}>
            <div className="bento-meta">
              <div className="bento-title">Walk-in wet room</div>
            </div>
          </Link>
          <Link className="bento bento-tallish" href="/our-work" style={{ backgroundImage: "url(/assets/showcase-2.png)" }}>
            <div className="bento-meta">
              <div className="bento-title">Precision-set<br/>large-format tile</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
