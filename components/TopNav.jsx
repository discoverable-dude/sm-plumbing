"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LogoMark, Phone, Menu, Arrow } from "./Icons";
import { useOpenQuote } from "./QuoteWizardProvider";

const NAV_LINKS = [
  { label: "About", href: "/about", key: "about" },
  { label: "Bathroom Installations", href: "/bathroom-installations", key: "installations" },
  { label: "Our Work", href: "/our-work", key: "work" },
  { label: "Contact", href: "/contact", key: "contact" },
];

export function TopNav({ current }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openQuote = useOpenQuote();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      <header className="nav" data-scrolled={scrolled ? "true" : "false"}>
        <div className="nav-inner">
          <Link className="brand" href="/">
            <LogoMark size={40}/>
            <div className="brand-text">
              <span className="brand-name">SM Plumbing</span>
              <span className="brand-tag">&amp; Property Services</span>
            </div>
          </Link>
          <nav className="nav-links">
            {NAV_LINKS.map(l => (
              <Link key={l.key} href={l.href} data-active={current === l.key ? "true" : undefined}>{l.label}</Link>
            ))}
          </nav>
          <div className="nav-cta">
            <a href="tel:01375430300" className="phone-link"><Phone size={14}/> 01375 430300</a>
            <button onClick={openQuote} className="btn btn-primary btn-sm">Get a Quote</button>
            <button className="nav-hamburger" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
              <Menu size={20}/>
            </button>
          </div>
        </div>
      </header>

      <nav className={`nav-drawer${drawerOpen ? " is-open" : ""}`} aria-hidden={!drawerOpen}>
        <button className="nav-drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">×</button>
        {NAV_LINKS.map(l => (
          <Link key={l.key} href={l.href} data-active={current === l.key ? "true" : undefined}
            onClick={() => setDrawerOpen(false)}>{l.label}</Link>
        ))}
        <a href="tel:01375430300" className="nav-drawer-phone"><Phone size={16}/> 01375 430300</a>
        <button onClick={() => { setDrawerOpen(false); openQuote(); }}
          className="btn btn-primary" style={{ marginTop: 8 }}>
          Get a Free Quote <Arrow size={16}/>
        </button>
      </nav>
    </>
  );
}
