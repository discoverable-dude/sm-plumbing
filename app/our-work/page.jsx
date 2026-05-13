import { ContactSection } from "../../components/ContactSection";
import { OpenQuoteButton } from "../../components/OpenQuoteButton";
import Link from "next/link";

export const metadata = {
  title: "Our Work",
  description: "A selection of recently completed bathroom renovations across Essex. Every project delivered by our own team — no third-party contractors.",
};

const CASE_STUDIES = [
  {
    num: "01",
    loc: "Basildon",
    title: "Full Wet Room Conversion",
    desc: "Complete strip-out to brick. Re-routed plumbing, tanked walls and floor, large-format terrazzo tiling, wall-hung vanity and rain-head shower. The room was reconfigured from a standard bathroom layout.",
    cols: 4,
    images: [
      { src: "/assets/project3_before.jpg", label: "BEFORE" },
      { src: "/assets/project3_during.jpg", label: "DURING" },
      { src: "/assets/project3_after_1.jpg", label: "AFTER" },
      { src: "/assets/project3_after_2.jpg", label: "AFTER" },
    ],
  },
  {
    num: "02",
    loc: "Billericay",
    title: "Full Bathroom Refurbishment",
    desc: "Existing layout retained but every surface replaced. Marble-effect large-format porcelain to walls and floor, new suite, chrome fixtures and fresh plastered ceiling throughout.",
    cols: 2,
    images: [
      { src: "/assets/project1_before.jpg", label: "BEFORE" },
      { src: "/assets/project1_after.jpg", label: "AFTER" },
    ],
  },
  {
    num: "03",
    loc: "Brentwood",
    title: "Bath-to-Shower Conversion",
    desc: "Bath removed and room reconfigured into a dedicated shower room. Plastered walls, large-format dark slate flooring, quadrant enclosure and compact wall-hung vanity.",
    cols: 2,
    images: [
      { src: "/assets/project2_before.jpg", label: "BEFORE" },
      { src: "/assets/project2_after.jpg", label: "AFTER" },
    ],
  },
];

function WorkHero() {
  return (
    <section className="page-hero" style={{ paddingBottom: 80 }}>
      <div className="page-hero-grad"/>
      <div className="page-hero-inner">
        <div className="eyebrow">
          <span className="eyebrow-dot"/> Portfolio · Recent Projects
        </div>
        <h1>
          Our Specialist<br/>
          Bathroom <em>Installations.</em>
        </h1>
        <p className="lede">
          A selection of recently completed renovations across Essex. Every project
          delivered by our own team — no third-party contractors.
        </p>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-inner">
        <div className="gallery-head">
          <div>
            <div className="sec-eyebrow"><span className="rule"/> Case Studies</div>
            <h2 className="h2 h2-md" style={{ margin: 0 }}>
              Three recent projects.<br/>
              <em style={{ fontFamily: "var(--serif-font)", fontStyle: "italic", fontWeight: 400, color: "var(--brand)" }}>
                Documented properly.
              </em>
            </h2>
          </div>
          <div style={{ color: "var(--t-3)", fontSize: 14, maxWidth: 360, textAlign: "right" }}>
            Before, during, and after — every project shown is completed by our own team with no subcontracted trades.
          </div>
        </div>
        <div>
          {CASE_STUDIES.map((cs) => (
            <div key={cs.num} className="case-study">
              <div className="case-study-head">
                <div>
                  <div className="case-study-eyebrow">{cs.num} — {cs.loc}</div>
                  <div className="case-study-title">{cs.title}</div>
                  <p className="case-study-desc">{cs.desc}</p>
                </div>
                <span className="case-study-loc">{cs.loc}</span>
              </div>
              <div className="case-imgs" style={{ "--cols": cs.cols }}>
                {cs.images.map((img, i) => (
                  <div key={i} className="case-img" style={{ backgroundImage: `url(${img.src})` }}>
                    <span className="case-img-label">{img.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAStrip() {
  return (
    <section className="cta-band">
      <div className="cta-band-inner">
        <h2>
          Ready for your own<br/>
          <em>transformation?</em>
        </h2>
        <p>
          Tell us what you have in mind. We&apos;ll arrange a free on-site survey and put together
          a fixed quote within 5 working days.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <OpenQuoteButton label="Get a Free Quote"/>
          <Link href="/contact" className="btn btn-ghost">Send a Message</Link>
        </div>
      </div>
    </section>
  );
}

export default function OurWorkPage() {
  return (
    <main>
      <WorkHero/>
      <Gallery/>
      <CTAStrip/>
      <ContactSection/>
    </main>
  );
}
