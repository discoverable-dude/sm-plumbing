"use client";

import { useOpenQuote } from "./QuoteWizardProvider";
import { Arrow } from "./Icons";

export function OpenQuoteButton({ label = "Get a Free Quote", className = "btn btn-primary", showArrow = true }) {
  const openQuote = useOpenQuote();
  return (
    <button onClick={openQuote} className={className}>
      {label}{showArrow && <Arrow size={16}/>}
    </button>
  );
}
