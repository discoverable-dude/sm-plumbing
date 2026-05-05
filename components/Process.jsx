const STEPS = [
  { n: "01", t: "Survey", d: "On-site visit, measurements, honest scope." },
  { n: "02", t: "Design", d: "Layouts, materials, fixed-price quote." },
  { n: "03", t: "Build", d: "Strip-out, first-fix, structural works." },
  { n: "04", t: "Finish", d: "Tiling, second-fix, snag & handover." },
];

export function Process() {
  return (
    <section className="sec process" id="process">
      <div className="sec-inner">
        <div className="process-head">
          <div className="sec-eyebrow"><span className="rule"/> 04 — How it works</div>
          <h2 className="h2">Four weeks.<br/>One accountable trade.</h2>
        </div>
        <ol className="process-list">
          {STEPS.map(s => (
            <li key={s.n} className="process-step">
              <div className="ps-num">{s.n}</div>
              <div className="ps-title">{s.t}</div>
              <div className="ps-desc">{s.d}</div>
              <div className="ps-rule"/>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
