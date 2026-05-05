import { Star } from "./Icons";

export function Testimonial() {
  return (
    <section className="sec testimonial">
      <div className="sec-inner testimonial-inner">
        <div className="quote-mark">&ldquo;</div>
        <blockquote>
          Shane took our cramped 1980s family bathroom and turned it into the
          calmest room in the house. The estimate was the final bill, the
          finish is exceptional, and he left the place cleaner than he found
          it. I cannot recommend SM Plumbing highly enough.
        </blockquote>
        <div className="quote-meta">
          <div className="qm-stars">
            <Star/><Star/><Star/><Star/><Star/>
          </div>
          <div className="qm-name">A. Whitcombe — Billericay</div>
          <div className="qm-proj">Full ensuite refit · Apr 2026</div>
        </div>
      </div>
    </section>
  );
}
