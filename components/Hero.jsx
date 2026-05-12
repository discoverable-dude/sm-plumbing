import { Arrow } from "./Icons";
import { OpenQuoteButton } from "./OpenQuoteButton";
import Link from "next/link";

export function Hero({ variant = "overlay" }) {
  if (variant === "split") return <HeroSplit/>;
  if (variant === "minimal") return <HeroMinimal/>;
  return <HeroOverlay/>;
}

function HeroOverlay() {
  return (
    <section className="hero hero-overlay">
      <div className="hero-bg" style={{ backgroundImage: "url(/assets/hero.png)" }}/>
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
          Billericay, Hornchurch and Chelmsford.
        </p>
        <div className="hero-actions">
          <OpenQuoteButton label="Get a Free Quote"/>
          <Link href="/our-work" className="btn btn-ghost">View Portfolio</Link>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line"/>
      </div>
    </section>
  );
}

function HeroSplit() {
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
          Billericay, Hornchurch and Chelmsford. Full project management,
          one accountable trade, no hidden extras.
        </p>
        <div className="hero-actions">
          <OpenQuoteButton label="Get a Free Quote"/>
          <Link href="/our-work" className="btn btn-ghost">View Portfolio</Link>
        </div>
      </div>
      <div className="hero-split-right">
        <div className="hero-split-img" style={{ backgroundImage: "url(/assets/hero.png)" }}/>
        <div className="hero-split-card">
          <div className="hero-split-card-top">
            <span className="card-num">01 / 04</span>
            <span className="card-loc">Basildon · Walk-in wet room</span>
          </div>
          <div className="hero-split-card-bot">
            <span className="card-cap">Recently completed</span>
            <span className="card-arrow"><Arrow size={14}/></span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMinimal() {
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
      <div className="hero-min-img" style={{ backgroundImage: "url(/assets/hero.png)" }}>
        <div className="hero-min-cap">
          A 4-week, single-trade methodology — from first stud to the final
          sealant bead. Covering Basildon, Brentwood, Billericay,
          Hornchurch and Chelmsford.
        </div>
      </div>
      <div className="hero-min-foot">
        <OpenQuoteButton label="Get a Free Quote"/>
        <Link href="/our-work" className="btn btn-ghost">View Portfolio</Link>
      </div>
    </section>
  );
}
