// Renders a town location page — reads TOWN_DATA[townKey] from window
function TownPage({ townKey }) {
  const t = window.TOWN_DATA[townKey];
  return (
    <PageShell current={null} screenLabel={`Town · ${t.name}`}>
      {({ openQuote }) => (
        <>
          <section className="town-hero">
            <div className="town-hero-bg" style={{ backgroundImage: "url(assets/town-hero.png)" }}/>
            <div className="town-hero-grad"/>
            <div className="town-hero-inner">
              <div>
                <div className="eyebrow"><span className="eyebrow-dot"/> Local Service · {t.postcodes}</div>
                <h1>
                  <span className="accent">Bathroom Fitter</span>
                  {t.name}
                </h1>
                <p className="lede" style={{ margin: 0, maxWidth: 480 }}>{t.blurb}</p>
                <div className="town-hero-pills">
                  <span className="town-hero-pill">10-Year Guarantee</span>
                  <span className="town-hero-pill">Fully Managed</span>
                  <span className="town-hero-pill">From £7,500</span>
                </div>
                <div className="hero-actions" style={{ marginTop: 36 }}>
                  <button onClick={openQuote} className="btn btn-primary">Get a Free Quote <Icon.arrow size={16}/></button>
                  <a href="our-work" className="btn btn-ghost">View Portfolio</a>
                </div>
              </div>
              <div className="town-hero-card">
                <h3>{t.name} at a glance</h3>
                <div className="town-hero-card-list">
                  <div className="town-hero-card-row"><span className="lab">Postcodes</span><span className="val">{t.postcodes}</span></div>
                  <div className="town-hero-card-row"><span className="lab">Drive time</span><span className="val">{t.drive}</span></div>
                  <div className="town-hero-card-row"><span className="lab">Common areas</span><span className="val" style={{ textAlign: "right", fontSize: 13 }}>{t.estate}</span></div>
                  <div className="town-hero-card-row"><span className="lab">Free survey</span><span className="val" style={{ color: "var(--brand)" }}>Always included</span></div>
                </div>
              </div>
            </div>
          </section>

          <section className="featured-proj">
            <div className="featured-proj-inner">
              <div className="featured-proj-img" style={{ backgroundImage: "url(assets/town-secondary.png)" }}>
                <span className="featured-proj-tag">Recent · {t.name}</span>
                <div className="featured-proj-img-grad"/>
              </div>
              <div>
                <div className="sec-eyebrow"><span className="rule"/> Expert Bathroom Installations in {t.name}</div>
                <h2 className="narrative-h">
                  A full-scope renovation,<br/>
                  <em>fitted in {t.name}.</em>
                </h2>
                <div className="narrative-rule"/>
                {t.paragraphs.map((p, i) => <p key={i} style={{ fontSize: 17, lineHeight: 1.7, color: "var(--t-2)", margin: "0 0 18px", maxWidth: "56ch" }}>{p}</p>)}
                <div className="hero-actions" style={{ marginTop: 28 }}>
                  <button onClick={openQuote} className="btn btn-primary">Quote My {t.name} Project <Icon.arrow size={16}/></button>
                </div>
              </div>
            </div>
          </section>

          <section className="why-choose">
            <div className="why-choose-inner">
              <div className="why-choose-head">
                <div className="sec-eyebrow" style={{ justifyContent: "center" }}><span className="rule"/> Why Choose Us</div>
                <h2 className="h2 h2-md" style={{ margin: 0 }}>The right fitter for <em style={{ fontFamily: "var(--serif-font)", fontStyle: "italic", fontWeight: 400, color: "var(--brand)" }}>{t.name}</em>.</h2>
              </div>
              <div className="why-choose-list">
                <div className="why-card">
                  <div className="why-card-num">01</div>
                  <h3>Local Knowledge</h3>
                  <p>We've worked across {t.name} for years. We know the housing stock, the planning quirks, and which suppliers stock what.</p>
                </div>
                <div className="why-card">
                  <div className="why-card-num">02</div>
                  <h3>Specialist Expertise</h3>
                  <p>We don't fix dripping taps. We're dedicated bathroom installers — that's all we do, and we do it deliberately well.</p>
                </div>
                <div className="why-card">
                  <div className="why-card-num">03</div>
                  <h3>Fully Managed</h3>
                  <p>Single point of contact, single team, single fixed price. No subcontractor surprises mid-build.</p>
                </div>
              </div>
              <div className="trust-row">
                <div className="trust-badge"><div className="trust-badge-h">10-Year Guarantee</div><p className="trust-badge-p">Workmanship guaranteed</p></div>
                <div className="trust-badge"><div className="trust-badge-h">Fully Insured</div><p className="trust-badge-p">£2m public liability</p></div>
                <div className="trust-badge"><div className="trust-badge-h">Fixed Price</div><p className="trust-badge-p">Quoted at survey, honoured</p></div>
                <div className="trust-badge"><div className="trust-badge-h">Free Survey</div><p className="trust-badge-p">No-obligation, on-site</p></div>
              </div>
            </div>
          </section>

          <ContactSection openQuote={openQuote}/>
        </>
      )}
    </PageShell>
  );
}

window.TownPage = TownPage;
