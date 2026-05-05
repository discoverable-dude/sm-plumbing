import { Process } from "../../components/Process";
import { Testimonial } from "../../components/Testimonial";
import { ContactSection } from "../../components/ContactSection";
import { OpenQuoteButton } from "../../components/OpenQuoteButton";
import { Arrow } from "../../components/Icons";
import Link from "next/link";

export const metadata = {
  title: "Bathroom Installations",
  description: "Expert bathroom installations managed start to finish. Full-scope renovations: design, plumbing, electrics, tiling, plastering and finishing. Projects from £7,500.",
};

function InstallationsHero() {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: "url(/assets/install-hero.png)" }}/>
      <div className="page-hero-grad"/>
      <div className="page-hero-inner">
        <div className="eyebrow">
          <span className="eyebrow-dot"/> Service · Bathroom Installations
        </div>
        <h1>
          Expert Bathroom<br/>
          Installations, <em>Managed<br/>
          Start to Finish.</em>
        </h1>
        <p className="lede">
          Full-scope renovations: design, plumbing, electrics, tiling, plastering and finishing —
          all under one specialist roof. Typical 3–4 week build. Projects from £7,500.
        </p>
        <div className="hero-actions" style={{ marginTop: 20, justifyContent: "center" }}>
          <OpenQuoteButton label="Get a Free Quote"/>
          <Link href="#process" className="btn btn-ghost">See the Process</Link>
        </div>
        <div className="page-hero-meta">
          <span className="dot"/>
          120+ Bathrooms Fitted
          <span className="dot"/>
          10-Year Workmanship Guarantee
        </div>
      </div>
    </section>
  );
}

function ServicesBento() {
  return (
    <section className="sec" id="services">
      <div className="sec-inner">
        <div className="sec-eyebrow"><span className="rule"/> What We Build</div>
        <h2 className="h2">A complete renovation, <br/>delivered by one specialist team.</h2>
        <p className="body" style={{ maxWidth: "60ch" }}>
          We don&apos;t subcontract the trades that matter — every part of your bathroom is built
          by people who answer directly to you.
        </p>
        <div className="services-bento">
          <div className="svc-card svc-card-hero">
            <div className="svc-card-img" style={{ backgroundImage: "url(/assets/showcase-1.png)" }}/>
            <div className="svc-card-img-grad"/>
            <div className="svc-card-content">
              <span className="svc-card-eyebrow">Flagship Service</span>
              <h3>Full Bathroom Fit-outs</h3>
              <p>Complete strip-out, design coordination, and finished room. From concept brief to handover keys — typically 3–4 weeks on site.</p>
            </div>
            <div className="svc-card-content">
              <span className="svc-card-num">01</span>
            </div>
          </div>
          <div className="svc-card svc-card-tall" id="wetrooms">
            <div className="svc-card-content">
              <span className="svc-card-eyebrow">Specialist</span>
              <h3>Wet Rooms<br/>&amp; Walk-ins</h3>
              <p>Fully tanked, gradient-fall floors, frameless screens. Built for daily use, engineered to never leak.</p>
            </div>
            <div className="svc-card-content">
              <span className="svc-card-num">02</span>
            </div>
          </div>
          <div className="svc-card svc-card-wide" id="tiling">
            <div className="svc-card-content">
              <span className="svc-card-eyebrow">Craft</span>
              <h3>Specialist Tiling</h3>
              <p>Large-format porcelain, mitred edges, book-matched stone, and Schlüter trim systems applied with precision.</p>
            </div>
            <div className="svc-card-content">
              <span className="svc-card-num">03</span>
            </div>
          </div>
          <div className="svc-card svc-card-sm">
            <div className="svc-card-content">
              <span className="svc-card-eyebrow">Trade</span>
              <h3>Electrical Work</h3>
              <p>Zoned ambient lighting, UFH, smart mirror integration. Certified.</p>
            </div>
            <div className="svc-card-content">
              <span className="svc-card-num">04</span>
            </div>
          </div>
          <div className="svc-card svc-card-sm">
            <div className="svc-card-content">
              <span className="svc-card-eyebrow">Trade</span>
              <h3>Plastering</h3>
              <p>Ultra-smooth finishes prepped for steam-heavy environments.</p>
            </div>
            <div className="svc-card-content">
              <span className="svc-card-num">05</span>
            </div>
          </div>
          <div className="svc-card svc-card-sm">
            <div className="svc-card-content">
              <span className="svc-card-eyebrow">Trade</span>
              <h3>Plumbing</h3>
              <p>Internal valve engineering and high-flow drainage solutions.</p>
            </div>
            <div className="svc-card-content">
              <span className="svc-card-num">06</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function InstallationsPage() {
  return (
    <main>
      <InstallationsHero/>
      <ServicesBento/>
      <Process/>
      <Testimonial/>
      <ContactSection hideDescriptions/>
    </main>
  );
}
