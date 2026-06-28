import { createFileRoute } from "@tanstack/react-router";
import { Bus, ArrowRight, Snowflake, Bed } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SearchTabs } from "../components/site/SearchTabs";
import { SectionHeader } from "../components/site/SectionHeader";
import hero from "../assets/dest-kerala.jpg";

export const Route = createFileRoute("/bus")({
  head: () => ({
    meta: [
      { title: "Bus Tickets — Online Bus Booking | GoHoliday" },
      {
        name: "description",
        content:
          "Book bus tickets across 2,000+ routes. AC, sleeper, Volvo and luxury coaches. Live seat selection, boarding points and instant confirmation.",
      },
      { property: "og:title", content: "Bus tickets — GoHoliday" },
      { property: "og:url", content: "/bus" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/bus" }],
  }),
  component: BusPage,
});

const ROUTES = [
  { op: "VRL Travels", type: "AC Sleeper", dep: "21:30", arr: "07:15", dur: "9h 45m", price: "₹1,250", seats: 18 },
  { op: "SRS Travels", type: "Volvo Multi-axle", dep: "22:15", arr: "07:50", dur: "9h 35m", price: "₹1,540", seats: 6 },
  { op: "Orange Tours", type: "Non-AC Seater", dep: "20:00", arr: "06:45", dur: "10h 45m", price: "₹890", seats: 24 },
  { op: "Kallada Travels", type: "Luxury Sleeper", dep: "23:00", arr: "08:30", dur: "9h 30m", price: "₹1,790", seats: 4 },
];

function BusPage() {
  return (
    <>
      <PageHero
        eyebrow="Bus tickets"
        title="On the road, in style."
        description="2,000+ routes across India and Southeast Asia. Pick your seat, choose your boarding point, pay later."
        image={hero}
      >
        <SearchTabs initial="bus" />
      </PageHero>

      <section className="container-page py-14">
        <SectionHeader
          eyebrow="Bengaluru → Goa · Fri, 15 Aug"
          title="32 buses available"
        />
        <div className="space-y-3">
          {ROUTES.map((r) => (
            <article
              key={r.op}
              className="rounded-2xl border border-border bg-surface p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-float"
            >
              <div className="grid items-center gap-4 lg:grid-cols-[1.4fr_2fr_1fr_auto]">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                    <Bus className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{r.op}</p>
                    <p className="text-xs text-muted-foreground inline-flex items-center gap-1">
                      {r.type.includes("AC") && <Snowflake className="h-3 w-3" />}
                      {r.type.includes("Sleeper") && <Bed className="h-3 w-3" />}
                      {r.type}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                  <div>
                    <p className="font-display text-lg font-semibold">{r.dep}</p>
                    <p className="text-xs text-muted-foreground">Bengaluru</p>
                  </div>
                  <div className="text-center text-xs text-muted-foreground">{r.dur}</div>
                  <div className="text-right">
                    <p className="font-display text-lg font-semibold">{r.arr}</p>
                    <p className="text-xs text-muted-foreground">Goa</p>
                  </div>
                </div>
                <div className="text-left lg:text-right">
                  <p className="font-display text-xl font-semibold">{r.price}</p>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300">{r.seats} seats left</p>
                </div>
                <button className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--gradient-cta)] px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft">
                  Select seats <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
