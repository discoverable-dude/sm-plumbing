import { Star } from "./Icons";

const REVIEWS = [
  {
    title: "Hugely recommend!",
    text: "Had a nightmare when I tried to replace a shower screen myself and found a leak behind the tiles. I gave Shane a manic call on a Sunday and he picked up and figured out a plan. Communication since then has been fantastic. The work is impeccable. Will 100% be letting friends and family know to give Shane a ring.",
    location: "SS2",
    date: "March 2026",
  },
  {
    title: "Bathroom refurbishment",
    text: "We hired Shane and his team to carry out a complete refurbishment of both bathrooms in our flat. Shane was amazing throughout — patient, punctual and meticulous — and, crucially for flat living, he kept everything spotless at every stage. We'll definitely hire him again.",
    location: "CM2",
    date: "September 2025",
  },
  {
    title: "En suite remodel",
    text: "Shane gave us a very reasonably priced, detailed, easy to understand quote. He was able to start quickly and made sure everything was completed smoothly. They worked SO cleanly and tidily and were genuinely nice people. They worked to a very high standard and we are so pleased with the result. I can't recommend him highly enough!",
    location: "CM13",
    date: "October 2024",
  },
  {
    title: "Radiator & burst pipe — brilliant service!",
    text: "Shane was brilliant — fitted the radiator despite the job not being as easy as we'd hoped. We then burst a pipe about 15 minutes after he left (completely unrelated!) and he came back within an hour to fix it. Couldn't recommend Shane more.",
    location: "CM11",
    date: "July 2024",
  },
  {
    title: "Bathroom fixtures",
    text: "Shane was so helpful from my very first interaction. He came exactly on time, worked diligently and efficiently, sorted out additional faults I noted, all while being pleasant. He never tired of explaining what he was doing and was very neat and tidy throughout. Thank you for making this stress free.",
    location: "SS8",
    date: "April 2025",
  },
  {
    title: "Fixing heating",
    text: "Shane went above and beyond. My heating had packed up in cold weather. I explained I had a young baby and a newborn — he fixed me in straight away and worked his magic. Would definitely recommend. Reliable, fairly priced, and most of all a top man who helped me out when I needed it.",
    location: "RM14",
    date: "May 2023",
  },
];

export function Testimonial() {
  return (
    <section className="sec reviews">
      <div className="sec-inner">
        <div className="reviews-head">
          <div>
            <div className="sec-eyebrow"><span className="rule"/> Customer Reviews</div>
            <h2 className="h2" style={{ margin: 0 }}>
              Rated 10/10<br/>
              <em style={{ fontFamily: "var(--serif-font)", fontStyle: "italic", fontWeight: 400, color: "var(--brand)" }}>on Checkatrade.</em>
            </h2>
          </div>
          <a href="https://www.checkatrade.com/trades/smplumbingandpropertyservices" target="_blank" rel="noopener noreferrer" className="checkatrade-badge">
            <div className="checkatrade-score">10<span>/10</span></div>
            <div className="checkatrade-label">Checkatrade<br/>Verified Reviews</div>
          </a>
        </div>
        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">
                <Star/><Star/><Star/><Star/><Star/>
              </div>
              <div className="review-title">{r.title}</div>
              <p className="review-text">&ldquo;{r.text}&rdquo;</p>
              <div className="review-meta">
                <span className="review-loc">Verified · {r.location}</span>
                <span className="review-date">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
