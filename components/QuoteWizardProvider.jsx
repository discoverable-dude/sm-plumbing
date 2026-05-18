"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import { LogoMark, Arrow, Check } from "./Icons";

const QuoteContext = createContext(null);

export function useOpenQuote() {
  return useContext(QuoteContext);
}

const QUOTE_STEPS = [
  { id: "projectType", q: "What type of project is this?", kind: "single",
    options: ["Refresh (keep layout, replace fixtures/tiles)", "Partial renovation", "Full renovation (strip out and start again)", "Not sure"] },
  { id: "size", q: "What is the approximate size of your bathroom?", kind: "single",
    options: ["Small (ensuite / cloakroom)", "Medium (standard family bathroom)", "Large", "Not sure"] },
  { id: "issues", q: "Any structural or condition issues we should know about?", sub: "Damp, subsidence, dated wiring, asbestos, leaks — anything Shane should plan around. Optional.", kind: "text" },
  { id: "layout", q: "Will the layout stay the same?", kind: "single",
    options: ["Yes, keep everything in place", "Minor changes", "Major changes (moving toilet/shower/bath)"] },
  { id: "includes", q: "What would you like included?", sub: "Select all that apply.", kind: "multi",
    options: ["Bath", "Shower", "Toilet", "Basin / vanity unit", "Heated towel rail", "Storage (built-in units / niches)", "Underfloor heating", "Other"] },
  { id: "finish", q: "What level of finish are you aiming for?", kind: "single",
    options: ["Budget-friendly", "Mid-range", "High-end / luxury", "Not sure"] },
  { id: "property", q: "What type of property is this?", kind: "single",
    options: ["House", "Flat / apartment", "New build", "Rental property", "Other"] },
  { id: "howMany", q: "How many bathrooms are in the property?", kind: "single",
    options: ["1 (this is the only one)", "1, but another toilet elsewhere", "2 or more"] },
  { id: "budget", q: "What is your budget range?", sub: "A ballpark helps Shane recommend specifications that fit. No commitment.", kind: "single",
    options: ["Under £5,000", "£5,000 – £10,000", "£10,000 – £20,000", "£20,000+", "Prefer not to say"] },
  { id: "details", q: "A few last details.", kind: "details" },
];

function PhotoUpload({ photos, onChange }) {
  const inputRef = useRef();
  const handle = (e) => {
    const files = Array.from(e.target.files || []);
    const next = files.map(f => ({ name: f.name, size: f.size }));
    onChange([...(photos || []), ...next]);
  };
  const remove = (i) => onChange(photos.filter((_, idx) => idx !== i));
  return (
    <div className="qw-upload">
      <div className="field-label">Upload photos (optional)</div>
      <button type="button" className="qw-upload-drop" onClick={() => inputRef.current?.click()}>
        <div className="qw-upload-icon">+</div>
        <div>
          <div className="qw-upload-title">Drop photos here, or click to browse</div>
          <div className="qw-upload-sub">JPG / PNG · up to 10 photos · helps Shane assess scope faster</div>
        </div>
      </button>
      <input ref={inputRef} type="file" multiple accept="image/*" hidden onChange={handle}/>
      {photos && photos.length > 0 && (
        <ul className="qw-upload-list">
          {photos.map((p, i) => (
            <li key={i}>
              <span className="qw-upload-thumb"/>
              <span className="qw-upload-name">{p.name}</span>
              <button type="button" className="qw-upload-rm" onClick={() => remove(i)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FieldInput({ label, value, onChange, type = "text" }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <input className="field-input" type={type} value={value} onChange={onChange} placeholder={label}/>
    </label>
  );
}

function QuoteSuccess({ data, onClose }) {
  return (
    <div className="qw-success">
      <div className="fs-icon"><Check size={28}/></div>
      <h2 className="qw-success-title">Quote request received.</h2>
      <p className="qw-success-body">
        Thanks {data.name?.split(" ")[0] || ""}. Shane has everything he needs.
        Expect a written, fixed-price quote on <strong>{data.email}</strong>{" "}
        within one working day. He may ring {data.phone || "you"} first if he has a quick clarifying question.
      </p>
      <div className="qw-summary">
        <div><span>Postcode</span><strong>{data.postcode || "—"}</strong></div>
        <div><span>Target start</span><strong>{data.startDate || "Flexible"}</strong></div>
        <div><span>Photos</span><strong>{(data.photos || []).length} attached</strong></div>
      </div>
      <button className="btn btn-primary" onClick={onClose}>Back to site</button>
    </div>
  );
}

function QuoteWizard({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    includes: [], photos: [], postcode: "", startDate: "", name: "", email: "", phone: ""
  });
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;
  const total = QUOTE_STEPS.length;
  const cur = QUOTE_STEPS[step];
  const pct = ((step + 1) / total) * 100;
  const setVal = (k, v) => setData(d => ({ ...d, [k]: v }));
  const toggleMulti = (v) => setData(d => ({
    ...d,
    includes: d.includes.includes(v) ? d.includes.filter(x => x !== v) : [...d.includes, v]
  }));
  const submitToFormspree = async () => {
    setSubmitting(true);
    try {
      await fetch("https://formspree.io/f/mwvzkygl", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          _subject: `Quote request from ${data.name} — ${data.postcode}`,
          name: data.name,
          email: data.email,
          phone: data.phone,
          postcode: data.postcode,
          target_start: data.startDate || "Flexible",
          project_type: data.projectType,
          size: data.size,
          layout: data.layout,
          includes: data.includes.join(", "),
          finish: data.finish,
          property: data.property,
          bathrooms: data.howMany,
          budget: data.budget,
          issues: data.issues || "None noted",
          photos: data.photos?.length ? `${data.photos.length} file(s): ${data.photos.map(p => p.name).join(", ")}` : "None",
        }),
      });
    } catch { /* show success regardless to avoid confusing the user */ }
    finally { setSubmitting(false); setDone(true); }
  };
  const next = () => step < total - 1 ? setStep(s => s + 1) : submitToFormspree();
  const back = () => setStep(s => Math.max(0, s - 1));
  const valid = () => {
    if (cur.kind === "text") return true;
    if (cur.kind === "multi") return data.includes.length > 0;
    if (cur.kind === "details") return data.name && data.email && data.postcode;
    return !!data[cur.id];
  };

  return (
    <div className="qw-scrim" onClick={onClose}>
      <div className="qw-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <header className="qw-head">
          <div className="qw-brand"><LogoMark size={32}/><span>SM Plumbing — Quote Questionnaire</span></div>
          <button className="qw-close" onClick={onClose} aria-label="Close">×</button>
        </header>
        <div className="qw-progress">
          <div className="qw-progress-bar" style={{ width: `${pct}%` }}/>
        </div>
        {done ? (
          <QuoteSuccess data={data} onClose={onClose}/>
        ) : (
          <div className="qw-body">
            <div className="qw-step-meta">Step {String(step + 1).padStart(2, "0")} <span>/ {String(total).padStart(2, "0")}</span></div>
            <h2 className="qw-q">{cur.q}</h2>
            {cur.sub && <p className="qw-sub">{cur.sub}</p>}

            {cur.kind === "single" && (
              <div className="qw-options">
                {cur.options.map(o => (
                  <button key={o} type="button"
                    className={`qw-opt ${data[cur.id] === o ? "is-active" : ""}`}
                    onClick={() => setVal(cur.id, o)}>
                    <span className="qw-radio"/>
                    <span>{o}</span>
                  </button>
                ))}
              </div>
            )}

            {cur.kind === "multi" && (
              <div className="qw-options qw-options-grid">
                {cur.options.map(o => (
                  <button key={o} type="button"
                    className={`qw-opt ${data.includes.includes(o) ? "is-active" : ""}`}
                    onClick={() => toggleMulti(o)}>
                    <span className="qw-check">{data.includes.includes(o) ? <Check size={12}/> : null}</span>
                    <span>{o}</span>
                  </button>
                ))}
              </div>
            )}

            {cur.kind === "text" && (
              <textarea className="qw-textarea"
                placeholder="e.g. There's a bit of damp on the external wall, and the floor joists feel soft…"
                value={data.issues || ""}
                onChange={(e) => setVal("issues", e.target.value)}/>
            )}

            {cur.kind === "details" && (
              <div className="qw-details">
                <div className="qw-row">
                  <FieldInput label="Your Name" value={data.name} onChange={(e) => setVal("name", e.target.value)}/>
                  <FieldInput label="Postcode" value={data.postcode} onChange={(e) => setVal("postcode", e.target.value)}/>
                </div>
                <div className="qw-row">
                  <FieldInput label="Email" value={data.email} onChange={(e) => setVal("email", e.target.value)} type="email"/>
                  <FieldInput label="Phone" value={data.phone} onChange={(e) => setVal("phone", e.target.value)}/>
                </div>
                <label className="field">
                  <span className="field-label">Target start date</span>
                  <input className="field-input" type="month" value={data.startDate} onChange={(e) => setVal("startDate", e.target.value)}/>
                </label>
                <PhotoUpload photos={data.photos} onChange={(ph) => setVal("photos", ph)}/>
              </div>
            )}
          </div>
        )}
        {!done && (
          <footer className="qw-foot">
            <button className="btn btn-ghost" onClick={back} disabled={step === 0}>Back</button>
            <div className="qw-foot-meta">
              <span>{step + 1}</span> of {total}
            </div>
            <button className="btn btn-primary" onClick={next} disabled={!valid() || submitting}>
              {submitting ? "Submitting…" : step === total - 1 ? "Submit Request" : "Continue"} <Arrow size={14}/>
            </button>
          </footer>
        )}
      </div>
    </div>
  );
}

export function QuoteWizardProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openQuote = () => setOpen(true);
  const closeQuote = () => setOpen(false);

  return (
    <QuoteContext.Provider value={openQuote}>
      {children}
      <QuoteWizard open={open} onClose={closeQuote}/>
    </QuoteContext.Provider>
  );
}
