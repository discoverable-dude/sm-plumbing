import { Manrope, Work_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { TopNav } from "../components/TopNav";
import { Footer } from "../components/Footer";
import { QuoteWizardProvider } from "../components/QuoteWizardProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "700", "800"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["300", "400", "500", "600", "800", "900"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://sm-plumbing.vercel.app"),
  title: {
    default: "SM Plumbing & Property Services — Specialist Bathroom Installations, Essex",
    template: "%s — SM Plumbing & Property Services",
  },
  description: "Specialist bathroom fitter covering Basildon, Brentwood, Billericay, Hornchurch and Chelmsford. Full project management, fixed-price quotes, 12-month guarantee.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${workSans.variable} ${fraunces.variable}`}>
      <body>
        <QuoteWizardProvider>
          <TopNav/>
          {children}
          <Footer/>
        </QuoteWizardProvider>
      </body>
    </html>
  );
}
