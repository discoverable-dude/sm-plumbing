import { ContactSection } from "../../components/ContactSection";
import { Phone } from "../../components/Icons";

export const metadata = {
  title: "Contact",
  description: "Get a free, no-obligation bathroom installation quote. Call us directly or send your project details. We respond to every enquiry within one working day.",
};

function ContactHero() {
  return (
    <section className="page-hero" style={{ paddingBottom: 60 }}>
      <div className="page-hero-grad"/>
      <div className="page-hero-inner">
        <div className="eyebrow">
          <span className="eyebrow-dot"/> Direct Access · Free On-Site Survey
        </div>
        <h1>
          Get a Free,<br/>
          <em>No-Obligation Quote.</em>
        </h1>
        <p className="lede">
          Call us directly, or send the details of your project below. We respond
          to every enquiry within one working day.
        </p>
      </div>
    </section>
  );
}

function ContactMap() {
  return (
    <section className="map-block">
      <div className="map-card">
        <div className="map-card-img" style={{ backgroundImage: "url(/assets/contact-workspace.png)" }}/>
        <div className="map-card-grad"/>
        <div className="map-card-pin">
          <div className="map-pin-dot"/>
          <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, color: "var(--brand-2)", background: "var(--brand)", padding: "6px 12px", borderRadius: 999 }}>
            Basildon · Workshop
          </div>
        </div>
        <div className="map-card-content">
          <div>
            <div className="map-card-h">SM Plumbing &amp; Property Services</div>
            <div className="map-card-sub">Basildon, Essex · Serving SS, RM, CM &amp; surrounding</div>
          </div>
          <a href="tel:01375430300" className="btn btn-primary btn-sm"><Phone size={14}/> 01375 430300</a>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main>
      <ContactHero/>
      <ContactSection/>
      <ContactMap/>
    </main>
  );
}
