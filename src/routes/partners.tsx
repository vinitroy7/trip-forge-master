import { createFileRoute, Link } from "@tanstack/react-router";
import { Hotel, Car, Bus, Ticket, ArrowRight, Handshake } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import hero from "../assets/hotel-2.jpg";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partner with GoHoliday — List your business" },
      { name: "description", content: "Hotels, cab fleets, bus operators, activity providers and travel agents — partner with GoHoliday to reach 2M+ travellers." },
      { property: "og:title", content: "Partner with GoHoliday" },
      { property: "og:url", content: "/partners" },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: PartnersPage,
});

const PARTNER_TYPES = [
  { Icon: Hotel, t: "Hotels & resorts", s: "Reach travellers in 180+ countries with zero setup fees." },
  { Icon: Car, t: "Cab operators", s: "Get city-level demand with transparent metered fares." },
  { Icon: Bus, t: "Bus operators", s: "Plug into our live inventory and seat-selection system." },
  { Icon: Ticket, t: "Activity providers", s: "Sell skip-the-line tickets and curated experiences." },
];

function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner with us"
        title="Grow your travel business with GoHoliday."
        description="Join 12,000+ supply partners reaching 2 million travellers worldwide — with tools, payouts and support built for hospitality."
        image={hero}
      />
      <section className="container-page py-14">
        <SectionHeader eyebrow="Who can partner" title="If it moves a traveller, we want to talk." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNER_TYPES.map(({ Icon, t, s }) => (
            <article key={t} className="rounded-3xl border border-border bg-surface p-5 shadow-soft">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 font-display text-lg font-medium">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl bg-[var(--gradient-hero)] p-8 text-primary-foreground sm:p-12">
          <div className="grid items-center gap-6 lg:grid-cols-[2fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest backdrop-blur">
                <Handshake className="h-3.5 w-3.5" /> Vendor portal · live
              </span>
              <h3 className="mt-3 font-display text-3xl font-medium sm:text-4xl">
                One dashboard for inventory, pricing and payouts.
              </h3>
              <p className="mt-3 max-w-xl text-primary-foreground/80">
                Push availability via API or CSV, set seasonal rates, view bookings in real time, and get paid weekly.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-sunset)] px-6 py-3 text-base font-semibold text-accent-foreground shadow-glow lg:justify-self-end"
            >
              Become a partner <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
