// PageShell — shared layout for inner pages
// Wraps page content in TopNav + Footer + QuoteWizard + Tweaks panel.
// Pages are inside pages/ so links use base="../".

const PAGE_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "brandColor": "#C0392B",
  "density": "default",
  "displayFont": "Manrope"
}/*EDITMODE-END*/;

function PageShell({ current, screenLabel, children }) {
  const [tweaks, setTweak] = useTweaks(PAGE_TWEAK_DEFAULTS);
  const [scrolled, setScrolled] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const openQuote = () => setQuoteOpen(true);
  const closeQuote = () => setQuoteOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--brand", tweaks.brandColor);
    root.dataset.density = tweaks.density;
    root.style.setProperty("--display-font", `"${tweaks.displayFont}", system-ui, sans-serif`);
  }, [tweaks]);

  // Provide openQuote to inline page event handlers
  useEffect(() => {
    window.__openQuote = openQuote;
    return () => { delete window.__openQuote; };
  }, []);

  return (
    <>
      <TopNav scrolled={scrolled} openQuote={openQuote} current={current} base="../" />
      <main data-screen-label={screenLabel}>
        {typeof children === "function" ? children({ openQuote }) : children}
      </main>
      <Footer base="../" />
      <QuoteWizard open={quoteOpen} onClose={closeQuote} />
      <TweaksPanel title="Tweaks">
        <TweakSection title="Brand">
          <TweakColor label="Brand color" value={tweaks.brandColor} onChange={v => setTweak("brandColor", v)} />
          <TweakSelect
            label="Display font"
            value={tweaks.displayFont}
            onChange={v => setTweak("displayFont", v)}
            options={[
              { label: "Manrope", value: "Manrope" },
              { label: "Work Sans", value: "Work Sans" },
              { label: "Fraunces", value: "Fraunces" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Layout">
          <TweakRadio
            label="Density"
            value={tweaks.density}
            onChange={v => setTweak("density", v)}
            options={[
              { label: "Compact", value: "compact" },
              { label: "Default", value: "default" },
              { label: "Airy", value: "airy" },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

window.PageShell = PageShell;
