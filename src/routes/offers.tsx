import { createFileRoute } from "@tanstack/react-router";
import { Flame, ArrowRight, Tag } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import hero from "../assets/dest-dubai.jpg";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Travel Offers & Coupons | GoHoliday" },
      {
        name: "description",
        content:
          "Flash sales, bank offers and seasonal deals on flights, hotels and packages. Save up to 40% with GoHoliday exclusive coupons.",
      },
      { property: "og:title", content: "Travel offers — GoHoliday" },
      { property: "og:url", content: "/offers" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/offers" }],
  }),
  component: OffersPage,
});

const COUPONS = [
  { code: "WEEKEND40", t: "40% off weekend stays", sub: "On 1-night domestic bookings · Min ₹4,000", icon: Flame },
  { code: "HDFCFLY", t: "₹2,500 off on flights", sub: "With HDFC credit cards · Min ₹15,000" },
  { code: "BALI8K", t: "Flat ₹8,000 off Bali", sub: "On 5N+ holiday packages · Use by 31 Aug" },
  { code: "FIRST500", t: "₹500 off your first booking", sub: "New users · No min spend" },
  { code: "EMI0", t: "0% EMI · 3, 6 or 12 months", sub: "On packages above ₹25,000 · All major banks" },
  { code: "GOAFEST", t: "Up to 30% off Goa hotels", sub: "Festive season · Limited availability" },
];

function OffersPage() {
  return (
    <>
      <PageHero
        eyebrow="Offers"
        title="Big trips. Smaller bills."
        description="Bank offers, flash sales and seasonal codes. Stackable with our price-match guarantee."
        image={hero}
      />
      <section className="container-page py-14">
        <SectionHeader eyebrow="Available now" title="Coupons you can use today" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COUPONS.map((c) => {
            const Icon = c.icon ?? Tag;
            return (
              <article
                key={c.code}
                className="flex items-start gap-4 rounded-3xl border border-border bg-surface p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-float"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-lg font-medium leading-snug">{c.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.sub}</p>
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <code className="rounded-lg border border-dashed border-accent bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
                      {c.code}
                    </code>
                    <button className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
                      Copy & apply <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
