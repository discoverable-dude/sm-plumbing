import Link from "next/link";
import { LogoMark, Phone, Insta, Fb } from "./Icons";

const TOWN_PAGES = [
  { name: "Basildon",   href: "/bathroom-fitter-basildon"   },
  { name: "Brentwood",  href: "/bathroom-fitter-brentwood"  },
  { name: "Billericay", href: "/bathroom-fitter-billericay" },
  { name: "Hornchurch", href: "/bathroom-fitter-hornchurch" },
  { name: "Chelmsford", href: "/bathroom-fitter-chelmsford" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="sec-inner footer-inner">
        <div className="foot-col foot-brand">
          <Link className="brand brand-foot" href="/">
            <LogoMark size={56}/>
            <div className="brand-text">
              <span className="brand-name">SM Plumbing</span>
              <span className="brand-tag">&amp; Property Services</span>
            </div>
          </Link>
          <p className="foot-blurb">
            Specialist bathroom fitters delivering high-end architectural
            renovations across Essex.
          </p>
        </div>
        <div className="foot-col">
          <div className="foot-h">SERVICE AREAS</div>
          <ul className="foot-list">
            {TOWN_PAGES.map(a => <li key={a.name}><Link href={a.href}>{a.name}</Link></li>)}
          </ul>
        </div>
        <div className="foot-col">
          <div className="foot-h">SERVICES</div>
          <ul className="foot-list">
            <li><Link href="/bathroom-installations">Full Bathroom Installations</Link></li>
            <li><Link href="/bathroom-installations#wetrooms">Wet Rooms</Link></li>
            <li><Link href="/bathroom-installations#tiling">Tiling &amp; Stonework</Link></li>
            <li><Link href="/our-work">Project Portfolio</Link></li>
          </ul>
        </div>
        <div className="foot-col">
          <div className="foot-h">DIRECT CONTACT</div>
          <a className="foot-phone" href="tel:01375430300"><Phone size={16}/> 01375 430300</a>
          <div className="foot-hours">Mon–Sat · 7am – 6pm</div>
          <div className="foot-socials">
            <a href="#" className="soc"><Insta size={16}/></a>
            <a href="#" className="soc"><Fb size={16}/></a>
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
