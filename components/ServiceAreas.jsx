import Link from "next/link";
import { Pin, Arrow } from "./Icons";

const AREAS = [
  { name: "Basildon",   drive: "Home base",    code: "SS13 – SS16", href: "/bathroom-fitter-basildon" },
  { name: "Billericay", drive: "20 min drive", code: "CM11 – CM12", href: "/bathroom-fitter-billericay" },
  { name: "Brentwood",  drive: "30 min drive", code: "CM13 – CM15", href: "/bathroom-fitter-brentwood" },
  { name: "Hornchurch", drive: "40 min drive", code: "RM11 – RM13", href: "/bathroom-fitter-hornchurch" },
  { name: "Chelmsford", drive: "35 min drive", code: "CM1 – CM3",   href: "/bathroom-fitter-chelmsford" },
];

export function ServiceAreas() {
  return (
    <section className="sec areas">
      <div className="sec-inner">
        <div className="areas-head">
          <div className="sec-eyebrow"><span className="rule"/> 05 — Service area</div>
          <h2 className="h2">Covering every<br/>corner of South Essex.</h2>
        </div>
        <div className="areas-grid">
          {AREAS.map((a, i) => (
            <Link key={a.name} href={a.href} className="area-card">
              <div className="area-pin"><Pin size={16}/></div>
              <div className="area-num">0{i + 1}</div>
              <div className="area-name">{a.name}</div>
              <div className="area-meta">
                <span>{a.drive}</span>
                <span>{a.code}</span>
              </div>
              <div className="area-arrow"><Arrow size={14}/></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
