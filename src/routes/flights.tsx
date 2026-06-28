import { createFileRoute } from "@tanstack/react-router";
import { Plane, Filter, ArrowRight, Wifi, Coffee, BaggageClaim, Clock } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SearchTabs } from "../components/site/SearchTabs";
import { SectionHeader } from "../components/site/SectionHeader";
import hero from "../assets/dest-dubai.jpg";

export const Route = createFileRoute("/flights")({
  head: () => ({
    meta: [
      { title: "Flight Booking — Cheap Flights, Best Fares | GoHoliday" },
      {
        name: "description",
        content:
          "Search & book domestic and international flights. Compare airlines, one-way, round-trip and multi-city fares with free cancellation on select bookings.",
      },
      { property: "og:title", content: "Cheap flights, best fares — GoHoliday" },
      { property: "og:description", content: "Compare 500+ airlines across 180+ countries." },
      { property: "og:url", content: "/flights" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/flights" }],
  }),
  component: FlightsPage,
});

const RESULTS = [
  {
    airline: "IndiGo",
    code: "6E 2145",
    from: "DEL", to: "DXB",
    dep: "06:25", arr: "09:10",
    dur: "3h 45m", stops: "Non-stop",
    price: "₹14,820", refundable: true,
  },
  {
    airline: "Emirates",
    code: "EK 511",
    from: "DEL", to: "DXB",
    dep: "21:50", arr: "00:35",
    dur: "3h 45m", stops: "Non-stop",
    price: "₹22,300", refundable: true,
  },
  {
    airline: "Vistara",
    code: "UK 245",
    from: "DEL", to: "DXB",
    dep: "13:10", arr: "16:00",
    dur: "3h 50m", stops: "Non-stop",
    price: "₹18,990", refundable: false,
  },
  {
    airline: "Air India",
    code: "AI 915",
    from: "DEL", to: "DXB",
    dep: "04:15", arr: "07:05",
    dur: "3h 50m", stops: "Non-stop",
    price: "₹16,440", refundable: true,
  },
];

function FlightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Flights"
        title={<>The world is closer than you think.</>}
        description="Search over 500 airlines and 4,000 airports. Live fares, free seat selection on most carriers, and instant e-tickets."
        image={hero}
      >
        <SearchTabs initial="flights" />
      </PageHero>

      <section className="container-page py-14">
        <SectionHeader
          eyebrow="Live fares"
          title="New Delhi → Dubai · Sat, 15 Aug"
          description="46 flights found · Prices include taxes and fees"
          action={
            <button className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-secondary lg:hidden">
              <Filter className="h-4 w-4" /> Filters
            </button>
          }
        />

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* FILTERS */}
          <aside className="hidden h-fit rounded-3xl border border-border bg-surface p-5 shadow-soft lg:block">
            <h3 className="font-display text-lg font-medium">Filters</h3>

            {[
              { label: "Stops", opts: ["Non-stop (28)", "1 stop (14)", "2+ stops (4)"] },
              { label: "Airlines", opts: ["IndiGo", "Emirates", "Vistara", "Air India", "Etihad"] },
              { label: "Departure", opts: ["Early morning", "Morning", "Afternoon", "Evening"] },
              { label: "Refundable", opts: ["Refundable", "Non-refundable"] },
            ].map((g) => (
              <div key={g.label} className="mt-5 border-t border-border pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {g.label}
                </p>
                <div className="mt-2 space-y-2 text-sm">
                  {g.opts.map((o) => (
                    <label key={o} className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-border accent-[var(--color-accent)]" />
                      <span>{o}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-5 border-t border-border pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Price
              </p>
              <input type="range" className="mt-3 w-full accent-[var(--color-accent)]" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>₹8,500</span>
                <span>₹68,000</span>
              </div>
            </div>
          </aside>

          {/* RESULTS */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-surface p-2 text-sm">
              <span className="px-3 text-muted-foreground">Sort:</span>
              {["Recommended", "Cheapest", "Fastest", "Earliest"].map((s, i) => (
                <button
                  key={s}
                  className={`rounded-full px-3 py-1.5 ${
                    i === 0
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {RESULTS.map((r) => (
              <article
                key={r.code}
                className="rounded-2xl border border-border bg-surface p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-float"
              >
                <div className="grid items-center gap-4 lg:grid-cols-[1.6fr_2.2fr_1fr_auto]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                      <Plane className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold">{r.airline}</p>
                      <p className="text-xs text-muted-foreground">{r.code} · A320neo</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                    <div>
                      <p className="font-display text-xl font-semibold">{r.dep}</p>
                      <p className="text-xs text-muted-foreground">{r.from} · New Delhi</p>
                    </div>
                    <div className="text-center text-xs text-muted-foreground">
                      <p>{r.dur}</p>
                      <div className="my-1 h-px bg-border" />
                      <p>{r.stops}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-xl font-semibold">{r.arr}</p>
                      <p className="text-xs text-muted-foreground">{r.to} · Dubai</p>
                    </div>
                  </div>
                  <div className="text-left lg:text-right">
                    <p className="font-display text-2xl font-semibold">{r.price}</p>
                    <p className="text-xs text-muted-foreground">per adult</p>
                  </div>
                  <button className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--gradient-cta)] px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft">
                    Book <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Wifi className="h-3.5 w-3.5" />Wi-Fi</span>
                  <span className="inline-flex items-center gap-1.5"><Coffee className="h-3.5 w-3.5" />Meal included</span>
                  <span className="inline-flex items-center gap-1.5"><BaggageClaim className="h-3.5 w-3.5" />25kg check-in</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />Free reschedule</span>
                  {r.refundable && (
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-medium text-emerald-700 dark:text-emerald-300">
                      Refundable
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
