import { ContactSection } from "../../components/ContactSection";
import { OpenQuoteButton } from "../../components/OpenQuoteButton";
import Link from "next/link";

export const metadata = {
  title: "Our Work",
  description: "A selection of recently completed bathroom renovations across Essex. Every project delivered by our own team — no third-party contractors.",
};

const PROJECTS = [
  { loc: "BASILDON",   title: "High-End Tiling Detail",  desc: "Book-matched marble, mitred edges, full mosaic feature wall.", img: "/assets/showcase-1.png", cls: "gal-feature" },
  { loc: "CHELMSFORD", title: "Bespoke Vanity Unit",     desc: "Wall-hung oak cabinetry with integrated lighting.",            img: "/assets/showcase-2.png", cls: "gal-tall" },
  { loc: "BILLERICAY", title: "Modern Shower System",    desc: "Frameless glass, brushed brass thermostatic kit.",             img: "/assets/showcase-3.png", cls: "gal-wide" },
  { loc: "ROMFORD",    title: "Freestanding Bath Setup", desc: "Wall-mounted bath fill, microcement floor, recessed shelving.", img: "/assets/about-detail.png", cls: "gal-sm" },
  { loc: "BRENTWOOD",  title: "Family Wet Room",         desc: "Full tanking, gradient floor, twin shower zones.",             img: "/assets/contact.png",       cls: "gal-sm" },
  { loc: "CHELMSFORD", title: "Compact Cloakroom",       desc: "Maximum storage, large-format porcelain, brass fittings.",     img: "/assets/about-craft.png",   cls: "gal-wide" },
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
            <div className="sec-eyebrow"><span className="rule"/> Selected Projects</div>
            <h2 className="h2 h2-md" style={{ margin: 0 }}>
              A small portfolio.<br/>
              <em style={{ fontFamily: "var(--serif-font)", fontStyle: "italic", fontWeight: 400, color: "var(--brand)" }}>
                Built carefully.
              </em>
            </h2>
          </div>
          <div style={{ color: "var(--t-3)", fontSize: 14, maxWidth: 380, textAlign: "right" }}>
            Six recent projects — there are dozens more. Get in touch to see work
            similar to your own scope and style.
          </div>
        </div>
        <div className="gallery-grid">
          {PROJECTS.map((p, i) => (
            <article key={i} className={`gal-card ${p.cls}`}>
              <div className="gal-card-img" style={{ backgroundImage: `url(${p.img})` }}/>
              <div className="gal-card-grad"/>
              <div className="gal-card-content">
                <span className="gal-card-loc">{p.loc}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </article>
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
