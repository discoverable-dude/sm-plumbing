"use client";

import { useState } from "react";
import { Arrow, Phone, Shield, Check } from "./Icons";
import { useOpenQuote } from "./QuoteWizardProvider";

function FieldInput({ label, value, onChange, type = "text" }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <input className="field-input" type={type} value={value} onChange={onChange} placeholder={label}/>
    </label>
  );
}

function FieldTextarea({ label, value, onChange }) {
  return (
    <label className="field">
      <span className="field-label">{label.replace(/…$/, "")}</span>
      <textarea className="field-input field-area" value={value} onChange={onChange} placeholder={label} rows={4}/>
    </label>
  );
}

function QuickContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", note: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const submit = (e) => { e.preventDefault(); setSent(true); };

  if (sent) {
    return (
      <div className="form-success form-success-sm">
        <div className="fs-icon"><Check size={20}/></div>
        <div>
          <div className="fs-title">Message received.</div>
          <div className="fs-body">Shane will reply within one working day.</div>
        </div>
      </div>
    );
  }
  return (
    <form className="form" onSubmit={submit}>
      <FieldInput label="Your Name" value={form.name} onChange={set("name")}/>
      <div className="row">
        <FieldInput label="Email" value={form.email} onChange={set("email")} type="email"/>
        <FieldInput label="Phone (optional)" value={form.phone} onChange={set("phone")}/>
      </div>
      <FieldTextarea label="How can we help?" value={form.note} onChange={set("note")}/>
      <button className="btn btn-ghost btn-block" type="submit">Send Message <Arrow size={14}/></button>
    </form>
  );
}

export function ContactSection({ hideDescriptions = false }) {
  const openQuote = useOpenQuote();

  return (
    <section className="sec contact" id="contact">
      <div className="sec-inner">
        <div className="contact-head">
          <div className="sec-eyebrow"><span className="rule"/> 06 — Two ways to start</div>
          <h2 className="h2">Pick the route that<br/>suits where you&apos;re at.</h2>
        </div>
        <div className="cta-split">
          <div className="cta-card cta-quick">
            <div className="cta-tag">Just a question</div>
            <h3 className="cta-title">Contact us</h3>
            {!hideDescriptions && <p className="cta-desc">A quick message — perfect if you&apos;re early in your thinking, want availability, or have a one-off plumbing job.</p>}
            <QuickContactForm/>
            <div className="cta-or">
              <span/>or call direct<span/>
            </div>
            <div className="cta-direct">
              <a href="tel:" className="cta-direct-phone"><Phone size={16}/> 07XXX XXXXXX</a>
              <a href="mailto:hello@smplumbing.example" className="cta-direct-mail">hello@smplumbing.example</a>
              <div className="cta-direct-hours">Mon–Sat · 7am – 6pm</div>
            </div>
          </div>

          <div className="cta-card cta-quote" style={{ backgroundImage: "url(/assets/contact.png)" }}>
            <div className="cta-quote-overlay"/>
            <div className="cta-quote-inner">
              <div className="cta-tag cta-tag-light">Ready to scope it</div>
              <h3 className="cta-title cta-title-light">Get a Quote</h3>
              {!hideDescriptions && <p className="cta-desc cta-desc-light">A guided 9-step questionnaire that captures everything Shane needs to write a fixed-price quote — usually back within one working day.</p>}
              <ul className="cta-quote-feats">
                <li><span className="cqf-num">9</span><span>structured questions</span></li>
                <li><span className="cqf-num">~3</span><span>minutes to complete</span></li>
                <li><span className="cqf-num">£0</span><span>cost &amp; obligation-free</span></li>
              </ul>
              <button className="btn btn-primary btn-block btn-lg" onClick={openQuote}>
                Start Quote Questionnaire <Arrow size={16}/>
              </button>
              <div className="cta-quote-foot">
                <Shield size={14}/> Saves as you go · No spam · No call centre
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
