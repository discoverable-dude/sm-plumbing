// Components for SM Plumbing & Property Services home page
const { useState, useEffect, useRef } = React;

// ───────────── Icons (inline SVG) ─────────────
const Icon = {
  arrow: (p) => (
    <svg width={p.size||16} height={p.size||16} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M 12.175 9 L 0 9 L 0 7 L 12.175 7 L 6.575 1.4 L 8 0 L 16 8 L 8 16 L 6.575 14.6 L 12.175 9 Z" />
    </svg>
  ),
  check: (p) => (
    <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  phone: (p) => (
    <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  pin: (p) => (
    <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  chev: (p) => (
    <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  ),
  shield: (p) => (
    <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  bolt: (p) => (
    <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  insta: (p) => (
    <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  fb: (p) => (
    <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88V14.9H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.9h-2.34v6.98A10 10 0 0 0 22 12z"/>
    </svg>
  ),
  star: (p) => (
    <svg width={p.size||14} height={p.size||14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  logoMark: (p) => (
    <svg width={p.size||48} height={p.size||48} viewBox="0 0 100 100" aria-hidden="true" fill="none">
      {/* dark background circle */}
      <circle cx="50" cy="50" r="50" fill="#0e0e0e"/>
      {/* red outer ring */}
      <circle cx="50" cy="50" r="46" stroke="#C0392B" strokeWidth="3.5"/>
      {/* house outline — roof */}
      <polyline points="22,46 50,22 78,46" stroke="#9CA3AF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
      {/* house walls */}
      <polyline points="30,46 30,74 70,74 70,46" stroke="#9CA3AF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
      {/* pipe — vertical drop inside house */}
      <line x1="42" y1="46" x2="42" y2="62" stroke="#C0392B" strokeWidth="2.6" strokeLinecap="round"/>
      {/* pipe — horizontal run */}
      <line x1="42" y1="62" x2="58" y2="62" stroke="#C0392B" strokeWidth="2.6" strokeLinecap="round"/>
      {/* pipe — short vertical to tap */}
      <line x1="58" y1="62" x2="58" y2="68" stroke="#C0392B" strokeWidth="2.6" strokeLinecap="round"/>
      {/* tap body */}
      <rect x="54" y="67" width="8" height="4" rx="1" stroke="#C0392B" strokeWidth="2" fill="none"/>
      {/* tap spout */}
      <line x1="62" y1="69" x2="66" y2="69" stroke="#C0392B" strokeWidth="2.2" strokeLinecap="round"/>
      {/* water drop */}
      <circle cx="67" cy="73" r="1.8" fill="#C0392B"/>
    </svg>
  ),
};

// ───────────── Top Nav ─────────────
const NAV_LINKS = [
  { label: "About", href: "about", key: "about" },
  { label: "Bathroom Installations", href: "bathroom-installations", key: "installations" },
  { label: "Our Work", href: "our-work", key: "work" },
  { label: "Contact", href: "contact", key: "contact" },
];

function TopNav({ scrolled, openQuote, current, base = "" }) {
  return (
    <header className="nav" data-scrolled={scrolled ? "true" : "false"}>
      <div className="nav-inner">
        <a className="brand" href={base + "index.html"}>
          <Icon.logoMark size={40} />
          <div className="brand-text">
            <span className="brand-name">SM Plumbing</span>
            <span className="brand-tag">& Property Services</span>
          </div>
        </a>
        <nav className="nav-links">
          {NAV_LINKS.map(l => (
            <a key={l.key} href={base + l.href} data-active={current === l.key ? "true" : undefined}>{l.label}</a>
          ))}
        </nav>
        <div className="nav-cta">
          <a href="tel:" className="phone-link"><Icon.phone size={14}/> 07XXX XXXXXX</a>
          <button onClick={openQuote} className="btn btn-primary btn-sm">Get a Quote</button>
        </div>
      </div>
    </header>
  );
}

// ───────────── Hero ─────────────
function Hero({ variant, openQuote }) {
  if (variant === "split") return <HeroSplit openQuote={openQuote}/>;
  if (variant === "minimal") return <HeroMinimal openQuote={openQuote}/>;
  return <HeroOverlay openQuote={openQuote}/>;
}

function HeroOverlay({ openQuote }) {
  return (
    <section className="hero hero-overlay">
      <div className="hero-bg" style={{ backgroundImage: "url(assets/hero.png)" }}/>
      <div className="hero-grad"/>
      <div className="hero-noise"/>
      <div className="hero-content">
        <div className="eyebrow">
          <span className="eyebrow-dot"/> Essex · Specialist Bathroom Fitter · Est. 2014
        </div>
        <h1 className="display">
          Bathroom<br/>
          Installations<br/>
          <em>Done Properly.</em>
        </h1>
        <p className="lede">
          Specialist bathroom fitter covering Basildon, Brentwood,<br/>
          Billericay, Romford and Chelmsford.
        </p>
        <div className="hero-actions">
          <button onClick={openQuote} className="btn btn-primary">
            Get a Free Quote <Icon.arrow size={16}/>
          </button>
          <a href="#work" className="btn btn-ghost">View Portfolio</a>
        </div>

      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line"/>
      </div>
    </section>
  );
}

function HeroSplit({ openQuote }) {
  return (
    <section className="hero hero-split">
      <div className="hero-split-left">
        <div className="eyebrow">
          <span className="eyebrow-dot"/> Essex · Specialist Bathroom Fitter
        </div>
        <h1 className="display display-split">
          Bathroom<br/>
          Installations<br/>
          <em>Done Properly.</em>
        </h1>
        <p className="lede">
          A specialist bathroom fitter covering Basildon, Brentwood,
          Billericay, Romford and Chelmsford. Full project management,
          one accountable trade, no hidden extras.
        </p>
        <div className="hero-actions">
          <button onClick={openQuote} className="btn btn-primary">
            Get a Free Quote <Icon.arrow size={16}/>
          </button>
          <a href="#work" className="btn btn-ghost">View Portfolio</a>
        </div>

      </div>
      <div className="hero-split-right">
        <div className="hero-split-img" style={{ backgroundImage: "url(assets/hero.png)" }}/>
        <div className="hero-split-card">
          <div className="hero-split-card-top">
            <span className="card-num">01 / 04</span>
            <span className="card-loc">Basildon · Walk-in wet room</span>
          </div>
          <div className="hero-split-card-bot">
            <span className="card-cap">Recently completed</span>
            <span className="card-arrow"><Icon.arrow size={14}/></span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMinimal({ openQuote }) {
  return (
    <section className="hero hero-minimal">
      <div className="hero-min-rule"/>
      <div className="hero-min-meta">
        <span>SM /</span><span>Specialist Bathroom Fitter</span><span>Essex, UK</span><span>Est. 2014</span>
      </div>
      <h1 className="hero-min-display">
        Bathroom installations,<br/>
        <em>done properly.</em>
      </h1>
      <div className="hero-min-img" style={{ backgroundImage: "url(assets/hero.png)" }}>
        <div className="hero-min-cap">
          A 4-week, single-trade methodology — from first stud to the final<br/>
          sealant bead. Covering Basildon, Brentwood, Billericay,<br/>
          Romford and Chelmsford.
        </div>
      </div>
      <div className="hero-min-foot">
        <button onClick={openQuote} className="btn btn-primary">Get a Free Quote <Icon.arrow size={16}/></button>
        <a href="#work" className="btn btn-ghost">View Portfolio</a>
      </div>
    </section>
  );
}

// ───────────── Section: Specialist (bento) ─────────────
function SpecialistSection() {
  const services = [
    "Full Bathroom Design & Build",
    "Precision Tiling & Stonework",
    "Professional Electrics & Lighting",
    "Expert Plastering & Finishing",
  ];
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
            {services.map((s, i) => (
              <li key={s}>
                <span className="check"><Icon.check size={14}/></span>
                <span className="check-label">{s}</span>
                <span className="check-num">{String(i+1).padStart(2,"0")}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="specialist-bento">
          <a className="bento bento-tall" href="#work" style={{ backgroundImage: "url(assets/showcase-3.png)" }}>
            <div className="bento-tag">FEATURED</div>
            <div className="bento-meta">
              <div className="bento-title">Marble &amp; brass<br/>en-suite, Brentwood</div>
              <div className="bento-arrow"><Icon.arrow size={14}/></div>
            </div>
          </a>
          <a className="bento bento-short" href="#work" style={{ backgroundImage: "url(assets/showcase-1.png)" }}>
            <div className="bento-meta">
              <div className="bento-title">Walk-in wet room</div>
            </div>
          </a>
          <a className="bento bento-tallish" href="#work" style={{ backgroundImage: "url(assets/showcase-2.png)" }}>
            <div className="bento-meta">
              <div className="bento-title">Precision-set<br/>large-format tile</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

// ───────────── Section: Value props ─────────────
function ValueProps() {
  return (
    <section className="sec valueprops">
      <div className="sec-inner valueprops-grid">
        <div className="vp-left">
          <div className="big-num">01.</div>
          <h3 className="h3">Quality Over<br/>Speed. Always.</h3>
          <div className="accent-bar"/>
        </div>
        <div className="vp-right">
          <div className="vp-card">
            <div className="vp-eyebrow">02. <span>3-4 WEEK METHODOLOGY</span></div>
            <p>A quality bathroom cannot be rushed. Our typical full installation takes 3 to 4 weeks of meticulous labour. We manage every detail so you don't have to chase multiple trades.</p>
          </div>
          <div className="vp-card">
            <div className="vp-eyebrow">03. <span>LOCAL &amp; HONEST</span></div>
            <p>Based locally, we thrive on reputation. You receive a transparent, fixed-price quote with no hidden extras. We treat your property with the respect a high-end investment deserves.</p>
          </div>
          <div className="vp-card vp-card-accent">
            <div className="vp-pricetop">
              Projects typically range from <strong>£9,500 – £25,000+</strong> for full management.
            </div>
            <div className="vp-priceline"/>
            <div className="vp-priceft">
              <span>Fixed price · No hidden extras</span>
              <Icon.arrow size={14}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────── Section: Process timeline ─────────────
function Process() {
  const steps = [
    { n: "01", t: "Survey", d: "On-site visit, measurements, honest scope." },
    { n: "02", t: "Design", d: "Layouts, materials, fixed-price quote." },
    { n: "03", t: "Build", d: "Strip-out, first-fix, structural works." },
    { n: "04", t: "Finish", d: "Tiling, second-fix, snag &amp; handover." },
  ];
  return (
    <section className="sec process">
      <div className="sec-inner">
        <div className="process-head">
          <div className="sec-eyebrow"><span className="rule"/> 04 — How it works</div>
          <h2 className="h2">Four weeks.<br/>One accountable trade.</h2>
        </div>
        <ol className="process-list">
          {steps.map(s => (
            <li key={s.n} className="process-step">
              <div className="ps-num">{s.n}</div>
              <div className="ps-title">{s.t}</div>
              <div className="ps-desc" dangerouslySetInnerHTML={{__html: s.d}}/>
              <div className="ps-rule"/>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ───────────── Section: Testimonial ─────────────
function Testimonial() {
  return (
    <section className="sec testimonial">
      <div className="sec-inner testimonial-inner">
        <div className="quote-mark">“</div>
        <blockquote>
          Shane took our cramped 1980s family bathroom and turned it into the
          calmest room in the house. The estimate was the final bill, the
          finish is exceptional, and he left the place cleaner than he found
          it. I cannot recommend SM Plumbing highly enough.
        </blockquote>
        <div className="quote-meta">
          <div className="qm-stars">
            <Icon.star/><Icon.star/><Icon.star/><Icon.star/><Icon.star/>
          </div>
          <div className="qm-name">A. Whitcombe — Billericay</div>
          <div className="qm-proj">Full ensuite refit · Apr 2026</div>
        </div>
      </div>
    </section>
  );
}

// ───────────── Section: Service Areas ─────────────
function ServiceAreas({ base = "" }) {
  const areas = [
    { name: "Basildon",    drive: "Home base",     code: "SS13 – SS16", href: "bathroom-fitter-basildon" },
    { name: "Billericay",  drive: "10 min drive",  code: "CM11 – CM12", href: "bathroom-fitter-billericay" },
    { name: "Brentwood",   drive: "15 min drive",  code: "CM13 – CM15", href: "bathroom-fitter-brentwood" },
    { name: "Romford",     drive: "20 min drive",  code: "RM1 – RM7",   href: "bathroom-fitter-romford" },
    { name: "Chelmsford",  drive: "25 min drive",  code: "CM1 – CM3",   href: "bathroom-fitter-chelmsford" },
  ];
  return (
    <section className="sec areas">
      <div className="sec-inner">
        <div className="areas-head">
          <div className="sec-eyebrow"><span className="rule"/> 05 — Service area</div>
          <h2 className="h2">Covering every<br/>corner of South Essex.</h2>
        </div>
        <div className="areas-grid">
          {areas.map((a, i) => (
            <a key={a.name} href={base + a.href} className="area-card">
              <div className="area-pin"><Icon.pin size={16}/></div>
              <div className="area-num">0{i+1}</div>
              <div className="area-name">{a.name}</div>
              <div className="area-meta">
                <span>{a.drive}</span>
                <span>{a.code}</span>
              </div>
              <div className="area-arrow"><Icon.arrow size={14}/></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────── Section: Contact / CTA (split routes) ─────────────
function ContactSection({ openQuote }) {
  return (
    <section className="sec contact" id="contact">
      <div className="sec-inner">
        <div className="contact-head">
          <div className="sec-eyebrow"><span className="rule"/> 06 — Two ways to start</div>
          <h2 className="h2">Pick the route that<br/>suits where you're at.</h2>
        </div>
        <div className="cta-split">
          <div className="cta-card cta-quick">
            <div className="cta-tag">Just a question</div>
            <h3 className="cta-title">Contact us</h3>
            <p className="cta-desc">A quick message — perfect if you're early in your thinking, want availability, or have a one-off plumbing job.</p>
            <QuickContactForm/>
            <div className="cta-or">
              <span/>or call direct<span/>
            </div>
            <div className="cta-direct">
              <a href="tel:" className="cta-direct-phone"><Icon.phone size={16}/> 07XXX XXXXXX</a>
              <a href="mailto:hello@smplumbing.example" className="cta-direct-mail">hello@smplumbing.example</a>
              <div className="cta-direct-hours">Mon–Sat · 7am – 6pm</div>
            </div>
          </div>

          <div className="cta-card cta-quote" style={{ backgroundImage: "url(assets/contact.png)" }}>
            <div className="cta-quote-overlay"/>
            <div className="cta-quote-inner">
              <div className="cta-tag cta-tag-light">Ready to scope it</div>
              <h3 className="cta-title cta-title-light">Get a Quote</h3>
              <p className="cta-desc cta-desc-light">A guided 9-step questionnaire that captures everything Shane needs to write a fixed-price quote — usually back within one working day.</p>
              <ul className="cta-quote-feats">
                <li><span className="cqf-num">9</span><span>structured questions</span></li>
                <li><span className="cqf-num">~3</span><span>minutes to complete</span></li>
                <li><span className="cqf-num">£0</span><span>cost &amp; obligation-free</span></li>
              </ul>
              <button className="btn btn-primary btn-block btn-lg" onClick={openQuote}>
                Start Quote Questionnaire <Icon.arrow size={16}/>
              </button>
              <div className="cta-quote-foot">
                <Icon.shield size={14}/> Saves as you go · No spam · No call centre
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickContactForm() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", note:"" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm(f => ({...f, [k]: e.target.value}));
  const submit = (e) => { e.preventDefault(); setSent(true); };
  if (sent) {
    return (
      <div className="form-success form-success-sm">
        <div className="fs-icon"><Icon.check size={20}/></div>
        <div>
          <div className="fs-title">Message received.</div>
          <div className="fs-body">Shane will reply within one working day.</div>
        </div>
      </div>
    );
  }
  return (
    <form className="form" onSubmit={submit}>
      <Input label="Your Name" value={form.name} onChange={set("name")}/>
      <div className="row">
        <Input label="Email" value={form.email} onChange={set("email")} type="email"/>
        <Input label="Phone (optional)" value={form.phone} onChange={set("phone")}/>
      </div>
      <Textarea label="How can we help?" value={form.note} onChange={set("note")}/>
      <button className="btn btn-ghost btn-block" type="submit">Send Message <Icon.arrow size={14}/></button>
    </form>
  );
}

// ───────────── Quote Wizard (modal) ─────────────
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

function QuoteWizard({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    includes: [], photos: [], postcode: "", startDate: "", name: "", email: "", phone: ""
  });
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose]);

  if (!open) return null;
  const total = QUOTE_STEPS.length;
  const cur = QUOTE_STEPS[step];
  const pct = ((step + 1) / total) * 100;
  const setVal = (k, v) => setData(d => ({ ...d, [k]: v }));
  const toggleMulti = (v) => setData(d => ({
    ...d,
    includes: d.includes.includes(v) ? d.includes.filter(x=>x!==v) : [...d.includes, v]
  }));
  const next = () => step < total - 1 ? setStep(s => s+1) : setDone(true);
  const back = () => setStep(s => Math.max(0, s-1));
  const valid = () => {
    if (cur.kind === "text") return true;
    if (cur.kind === "multi") return data.includes.length > 0;
    if (cur.kind === "details") return data.name && data.email && data.postcode;
    return !!data[cur.id];
  };

  return (
    <div className="qw-scrim" onClick={onClose}>
      <div className="qw-modal" role="dialog" aria-modal="true" onClick={(e)=>e.stopPropagation()}>
        <header className="qw-head">
          <div className="qw-brand"><Icon.logoMark size={32}/><span>SM Plumbing — Quote Questionnaire</span></div>
          <button className="qw-close" onClick={onClose} aria-label="Close">×</button>
        </header>
        <div className="qw-progress">
          <div className="qw-progress-bar" style={{ width: `${pct}%` }}/>
        </div>
        {done ? (
          <QuoteSuccess data={data} onClose={onClose}/>
        ) : (
          <div className="qw-body">
            <div className="qw-step-meta">Step {String(step+1).padStart(2,"0")} <span>/ {String(total).padStart(2,"0")}</span></div>
            <h2 className="qw-q">{cur.q}</h2>
            {cur.sub && <p className="qw-sub">{cur.sub}</p>}

            {cur.kind === "single" && (
              <div className="qw-options">
                {cur.options.map(o => (
                  <button key={o} type="button"
                    className={`qw-opt ${data[cur.id]===o ? "is-active":""}`}
                    onClick={()=>setVal(cur.id, o)}>
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
                    className={`qw-opt ${data.includes.includes(o) ? "is-active":""}`}
                    onClick={()=>toggleMulti(o)}>
                    <span className="qw-check">{data.includes.includes(o) ? <Icon.check size={12}/> : null}</span>
                    <span>{o}</span>
                  </button>
                ))}
              </div>
            )}

            {cur.kind === "text" && (
              <textarea className="qw-textarea"
                placeholder="e.g. There's a bit of damp on the external wall, and the floor joists feel soft…"
                value={data.issues || ""}
                onChange={(e)=>setVal("issues", e.target.value)}/>
            )}

            {cur.kind === "details" && (
              <div className="qw-details">
                <div className="qw-row">
                  <Input label="Your Name" value={data.name} onChange={(e)=>setVal("name", e.target.value)}/>
                  <Input label="Postcode" value={data.postcode} onChange={(e)=>setVal("postcode", e.target.value)}/>
                </div>
                <div className="qw-row">
                  <Input label="Email" value={data.email} onChange={(e)=>setVal("email", e.target.value)} type="email"/>
                  <Input label="Phone" value={data.phone} onChange={(e)=>setVal("phone", e.target.value)}/>
                </div>
                <label className="field">
                  <span className="field-label">Target start date</span>
                  <input className="field-input" type="month" value={data.startDate} onChange={(e)=>setVal("startDate", e.target.value)}/>
                </label>
                <PhotoUpload photos={data.photos} onChange={(ph)=>setVal("photos", ph)}/>
              </div>
            )}
          </div>
        )}
        {!done && (
          <footer className="qw-foot">
            <button className="btn btn-ghost" onClick={back} disabled={step===0}>Back</button>
            <div className="qw-foot-meta">
              <span>{step+1}</span> of {total}
            </div>
            <button className="btn btn-primary" onClick={next} disabled={!valid()}>
              {step === total-1 ? "Submit Request" : "Continue"} <Icon.arrow size={14}/>
            </button>
          </footer>
        )}
      </div>
    </div>
  );
}

function PhotoUpload({ photos, onChange }) {
  const inputRef = useRef();
  const handle = (e) => {
    const files = Array.from(e.target.files || []);
    const next = files.map(f => ({ name: f.name, size: f.size }));
    onChange([...(photos||[]), ...next]);
  };
  const remove = (i) => onChange(photos.filter((_, idx) => idx !== i));
  return (
    <div className="qw-upload">
      <div className="field-label">Upload photos (optional)</div>
      <button type="button" className="qw-upload-drop" onClick={()=>inputRef.current?.click()}>
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
              <button type="button" className="qw-upload-rm" onClick={()=>remove(i)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function QuoteSuccess({ data, onClose }) {
  return (
    <div className="qw-success">
      <div className="fs-icon"><Icon.check size={28}/></div>
      <h2 className="qw-success-title">Quote request received.</h2>
      <p className="qw-success-body">
        Thanks {data.name?.split(" ")[0] || ""}. Shane has everything he needs.
        Expect a written, fixed-price quote on <strong>{data.email}</strong>{" "}
        within one working day. He may ring {data.phone || "you"} first if he has a quick clarifying question.
      </p>
      <div className="qw-summary">
        <div><span>Postcode</span><strong>{data.postcode || "—"}</strong></div>
        <div><span>Target start</span><strong>{data.startDate || "Flexible"}</strong></div>
        <div><span>Photos</span><strong>{(data.photos||[]).length} attached</strong></div>
      </div>
      <button className="btn btn-primary" onClick={onClose}>Back to site</button>
    </div>
  );
}

function Input({ label, value, onChange, type="text" }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <input className="field-input" type={type} value={value} onChange={onChange} placeholder={label}/>
    </label>
  );
}
function Textarea({ label, value, onChange }) {
  return (
    <label className="field">
      <span className="field-label">{label.replace(/…$/,"")}</span>
      <textarea className="field-input field-area" value={value} onChange={onChange} placeholder={label} rows={4}/>
    </label>
  );
}
function Select({ label, value, onChange, options }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <div className="select-wrap">
        <select className="field-input field-select" value={value} onChange={onChange}>
          <option value="">Select project type</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <span className="select-chev"><Icon.chev size={14}/></span>
      </div>
    </label>
  );
}

// ───────────── Footer ─────────────
const TOWN_PAGES = [
  { name: "Basildon",   href: "bathroom-fitter-basildon"   },
  { name: "Brentwood",  href: "bathroom-fitter-brentwood"  },
  { name: "Billericay", href: "bathroom-fitter-billericay" },
  { name: "Romford",    href: "bathroom-fitter-romford"    },
  { name: "Chelmsford", href: "bathroom-fitter-chelmsford" },
];

function Footer({ base = "" }) {
  return (
    <footer className="footer">
      <div className="sec-inner footer-inner">
        <div className="foot-col foot-brand">
          <a className="brand brand-foot" href={base + "index.html"}>
            <Icon.logoMark size={56}/>
            <div className="brand-text">
              <span className="brand-name">SM Plumbing</span>
              <span className="brand-tag">&amp; Property Services</span>
            </div>
          </a>
          <p className="foot-blurb">
            Specialist bathroom fitters delivering high-end architectural
            renovations across Essex.
          </p>
        </div>
        <div className="foot-col">
          <div className="foot-h">SERVICE AREAS</div>
          <ul className="foot-list">
            {TOWN_PAGES.map(a => <li key={a.name}><a href={base + a.href}>{a.name}</a></li>)}
          </ul>
        </div>
        <div className="foot-col">
          <div className="foot-h">SERVICES</div>
          <ul className="foot-list">
            <li><a href={base + "bathroom-installations"}>Full Bathroom Installations</a></li>
            <li><a href={base + "bathroom-installations#wetrooms"}>Wet Rooms</a></li>
            <li><a href={base + "bathroom-installations#tiling"}>Tiling &amp; Stonework</a></li>
            <li><a href={base + "our-work"}>Project Portfolio</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <div className="foot-h">DIRECT CONTACT</div>
          <a className="foot-phone" href="tel:"><Icon.phone size={16}/> 07XXX XXXXXX</a>
          <div className="foot-hours">Mon–Sat · 7am – 6pm</div>
          <div className="foot-socials">
            <a href="#" className="soc"><Icon.insta size={16}/></a>
            <a href="#" className="soc"><Icon.fb size={16}/></a>
          </div>
        </div>
      </div>
      <div className="foot-bot sec-inner">
        <div>© 2026 SM Plumbing &amp; Property Services. Specialist Bathroom Installations.</div>
        <div className="foot-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Icon, TopNav, Hero, SpecialistSection, ValueProps, Process,
  Testimonial, ServiceAreas, ContactSection, QuoteWizard, Footer,
  NAV_LINKS, TOWN_PAGES, Input, Textarea, Select,
});
