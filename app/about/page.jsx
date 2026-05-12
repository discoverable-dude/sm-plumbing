import { ContactSection } from "../../components/ContactSection";
import { OpenQuoteButton } from "../../components/OpenQuoteButton";

export const metadata = {
  title: "About",
  description: "Run by Shane Mills — a single point of accountability from your first enquiry to the final walk-through. Specialist bathroom installer based in Basildon, Essex.",
};

function AboutHero() {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: "url(/assets/about-portrait.png)" }}/>
      <div className="page-hero-grad"/>
      <div className="page-hero-inner">
        <div className="eyebrow">
          <span className="eyebrow-dot"/> About · The Sole-Trader Promise
        </div>
        <h1>
          Specialist Bathroom<br/>
          Installer in <em>Basildon.</em>
        </h1>
        <p className="lede">
          Run by Shane Mills — a single point of accountability from your first
          enquiry to the final walk-through.
        </p>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="narrative">
      <div className="narrative-inner">
        <div>
          <div className="sec-eyebrow"><span className="rule"/> The Story</div>
          <h2 className="narrative-h">
            Fully managed, <em>start to finish.</em><br/>
            No third-party contractors.
          </h2>
          <div className="narrative-rule"/>
          <p>
            SM Plumbing &amp; Property Services is a specialist bathroom installer
            built on one principle: the person you brief is the person who builds your
            bathroom. No hand-offs, no mystery sub-contractors arriving on day three.
          </p>
          <p>
            Every project is fully managed in-house: design coordination, plumbing,
            electrics, plastering, tiling and finishing. We deliver around 30 high-end
            bathrooms a year — deliberately a small number, because every one is built
            by us, not for us.
          </p>
          <p>
            Our work is concentrated in Essex — Basildon, Brentwood, Billericay, Hornchurch
            and Chelmsford — close enough that we can be on site within an hour if anything
            ever needs attention.
          </p>
        </div>
        <div>
          <div className="narrative-stats">
            <div className="narrative-stat"><div className="num">10+</div><div className="lab">Years Trading</div></div>
            <div className="narrative-stat"><div className="num">120+</div><div className="lab">Bathrooms Fitted</div></div>
            <div className="narrative-stat"><div className="num">4.9★</div><div className="lab">Google Rating</div></div>
            <div className="narrative-stat"><div className="num">£7.5k</div><div className="lab">Projects from</div></div>
          </div>
          <div style={{ marginTop: 24, position: "relative", borderRadius: "var(--r-lg)", overflow: "hidden", aspectRatio: "16/10" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/assets/about-craft.png)", backgroundSize: "cover", backgroundPosition: "center" }}/>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <section className="quote-band">
      <div className="quote-band-mark">&ldquo;</div>
      <div className="quote-band-inner">
        <p className="quote-band-text">
          We don&apos;t fix dripping taps. We build the room you&apos;ll spend twenty
          minutes in every morning for the next ten years — and we build it like
          we&apos;ll have to live with it.
        </p>
        <div className="quote-band-att">— Shane Mills · Founder</div>
      </div>
    </section>
  );
}

function ApproachBento() {
  return (
    <section className="sec" style={{ background: "var(--bg-deep)" }}>
      <div className="sec-inner">
        <div className="sec-eyebrow"><span className="rule"/> The Specialist Approach</div>
        <h2 className="h2">Four things we do <em>differently</em>.</h2>
        <p className="body">
          Specialist installers, not generalist builders — and a pace deliberately
          matched to high-end finishing work.
        </p>
        <div className="approach-bento">
          <div className="ab-card ab-tech">
            <div className="ab-card-mark"/>
            <div>
              <h3>Total Technical Coordination</h3>
              <p>Every trade — plumbing, electrics, tiling, plastering — runs to a single sequence. No waiting on no-show contractors.</p>
            </div>
          </div>
          <div className="ab-card ab-quality brand">
            <div className="ab-card-mark"/>
            <div>
              <h3>Quality Over Speed</h3>
              <p>3–4 weeks per project, fixed at quote stage. We don&apos;t book three jobs at once and shuffle the schedule.</p>
            </div>
          </div>
          <div className="ab-card ab-local">
            <div className="ab-card-mark"/>
            <div>
              <h3>Basildon Focus</h3>
              <p>Local-first scheduling. Most projects within a 30-mile radius of Basildon — we know the housing stock and the regs.</p>
            </div>
          </div>
          <div className="ab-card ab-material">
            <div className="ab-card-mark"/>
            <div>
              <h3>Material Mastery</h3>
              <p>Large-format porcelain, microcement, natural stone — we work with the substrates that intimidate generalists.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero/>
      <StorySection/>
      <QuoteBand/>
      <ApproachBento/>
      <ContactSection/>
    </main>
  );
}
