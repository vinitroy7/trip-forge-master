import { createFileRoute } from "@tanstack/react-router";
import { Shield, Heart, Users, Plane, ArrowRight, Check } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import hero from "../assets/dest-maldives.jpg";

export const Route = createFileRoute("/insurance")({
  head: () => ({
    meta: [
      { title: "Travel Insurance — Domestic & International | GoHoliday" },
      {
        name: "description",
        content:
          "Travel insurance from ₹49/day. Medical emergencies, baggage loss, trip cancellation and adventure cover. Instant policy, no paperwork.",
      },
      { property: "og:title", content: "Travel insurance — GoHoliday" },
      { property: "og:url", content: "/insurance" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/insurance" }],
  }),
  component: InsurancePage,
});

const PLANS = [
  {
    name: "Voyager",
    tag: "Most popular",
    price: "₹399",
    sub: "for a 7-day trip",
    sum: "$100k", baggage: "$1k",
    perks: ["Medical & emergency evacuation", "Baggage loss", "Trip cancellation", "24/7 helpline"],
  },
  {
    name: "Explorer",
    price: "₹699",
    sub: "for a 7-day trip",
    sum: "$250k", baggage: "$2k",
    perks: ["Voyager benefits", "Adventure sports cover", "Pre-existing diseases (declared)", "Personal accident"],
  },
  {
    name: "Family Shield",
    price: "₹1,199",
    sub: "for a 7-day trip · up to 4 pax",
    sum: "$500k", baggage: "$3k",
    perks: ["Explorer benefits", "Family floater", "Child personal accident", "Hijack distress"],
  },
];

function InsurancePage() {
  return (
    <>
      <PageHero
        eyebrow="Travel insurance"
        title="Wander far. Worry less."
        description="From a missed connection in Frankfurt to a snorkel mishap in Phuket — get covered in 60 seconds."
        image={hero}
      />

      <section className="container-page py-14">
        <SectionHeader eyebrow="Pick a plan" title="Plans for every kind of trip" />
        <div className="grid gap-5 md:grid-cols-3">
          {PLANS.map((p, i) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-3xl border bg-surface p-6 shadow-soft ${
                i === 0 ? "border-accent shadow-glow" : "border-border"
              }`}
            >
              {p.tag && (
                <span className="absolute -top-3 right-6 inline-flex rounded-full bg-[var(--gradient-sunset)] px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {p.tag}
                </span>
              )}
              <p className="font-display text-2xl font-medium">{p.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{p.sub}</p>
              <p className="mt-4 font-display text-4xl font-semibold">{p.price}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 rounded-2xl bg-secondary p-3 text-xs">
                <div><p className="text-muted-foreground">Sum insured</p><p className="font-semibold">{p.sum}</p></div>
                <div><p className="text-muted-foreground">Baggage</p><p className="font-semibold">{p.baggage}</p></div>
              </div>
              <ul className="mt-5 flex-1 space-y-2 text-sm">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-accent" />
                    {perk}
                  </li>
                ))}
              </ul>
              <button className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--gradient-cta)] px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft">
                Buy now <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface-2">
        <div className="container-page py-16">
          <SectionHeader eyebrow="Why insure with GoHoliday" title="The fine print, made fair" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Shield, t: "Underwritten by IRDAI-licensed partners" },
              { Icon: Heart, t: "Cashless claims at 6,000+ hospitals worldwide" },
              { Icon: Users, t: "Family floater starts at ₹1,199" },
              { Icon: Plane, t: "Instant cover until 4 hours before departure" },
            ].map(({ Icon, t }) => (
              <div key={t} className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
                <Icon className="h-6 w-6 text-accent" />
                <p className="mt-3 text-sm font-medium">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
