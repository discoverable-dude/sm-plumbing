import { Arrow } from "./Icons";

export function ValueProps() {
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
            <p>Based locally in Basildon, we thrive on reputation. You receive a transparent, fixed-price quote with no hidden extras. We treat your property with the respect a high-end investment deserves.</p>
          </div>
          <div className="vp-card vp-card-accent">
            <div className="vp-pricetop">
              Projects typically range from <strong>£7,500 – £25,000+</strong> for full management.
            </div>
            <div className="vp-priceline"/>
            <div className="vp-priceft">
              <span>Fixed price · No hidden extras</span>
              <Arrow size={14}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
