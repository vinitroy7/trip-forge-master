import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";

const COLS = [
  {
    title: "Book",
    links: [
      ["Flights", "/flights"],
      ["Hotels", "/hotels"],
      ["Holiday Packages", "/packages"],
      ["Bus", "/bus"],
      ["Trains", "/trains"],
      ["Cabs", "/cabs"],
    ],
  },
  {
    title: "Travel services",
    links: [
      ["Visa", "/visa"],
      ["Travel Insurance", "/insurance"],
      ["Activities & tours", "/activities"],
      ["Offers", "/offers"],
      ["Travel blog", "/blog"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About us", "/about"],
      ["Careers", "/careers"],
      ["Partner with us", "/partners"],
      ["Contact", "/contact"],
      ["FAQs", "/faq"],
    ],
  },
  {
    title: "Policies",
    links: [
      ["Privacy policy", "/privacy"],
      ["Terms & conditions", "/terms"],
      ["Cancellation policy", "/cancellation"],
      ["Refund policy", "/refund"],
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface-2">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Plan, book and unwind. GoHoliday brings flights, stays, packages and experiences
              into one beautifully simple journey — across 180+ countries.
            </p>
            <form className="mt-6 flex max-w-sm items-center gap-2">
              <label htmlFor="newsletter" className="sr-only">
                Email
              </label>
              <div className="flex flex-1 items-center gap-2 rounded-full border border-border bg-surface pl-4">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <input
                  id="newsletter"
                  type="email"
                  placeholder="Your email for travel deals"
                  className="h-11 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <button
                type="button"
                className="h-11 rounded-full bg-[var(--gradient-cta)] px-5 text-sm font-semibold text-accent-foreground shadow-soft hover:shadow-glow"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex items-center gap-3 text-muted-foreground">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLS.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-base font-semibold">{col.title}</h4>
                <ul className="mt-4 space-y-2 text-sm">
                  {col.links.map(([label, href]) => (
                    <li key={href}>
                      <Link
                        to={href}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} GoHoliday Travel Pvt. Ltd. All rights reserved.</p>
          <p>Made for travellers, with ❤︎ from across the globe.</p>
        </div>
      </div>
    </footer>
  );
}
