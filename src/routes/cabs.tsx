import { createFileRoute } from "@tanstack/react-router";
import { Car, ArrowRight, Star } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SearchTabs } from "../components/site/SearchTabs";
import { SectionHeader } from "../components/site/SectionHeader";
import hero from "../assets/dest-dubai.jpg";

export const Route = createFileRoute("/cabs")({
  head: () => ({
    meta: [
      { title: "Cab Booking — Outstation, Airport & Local Cabs | GoHoliday" },
      {
        name: "description",
        content:
          "Book sedans, SUVs, luxury cars and tempo travellers for outstation, airport, local and hourly rental trips. Live tracking, transparent fares.",
      },
      { property: "og:title", content: "Cab booking — GoHoliday" },
      { property: "og:url", content: "/cabs" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/cabs" }],
  }),
  component: CabsPage,
});

const CARS = [
  { type: "Hatchback", model: "Swift / Wagon-R", seats: "4 + 1", price: "₹11/km", rating: 4.6 },
  { type: "Sedan", model: "Dzire / Etios", seats: "4 + 1", price: "₹13/km", rating: 4.7 },
  { type: "SUV", model: "Ertiga / Innova", seats: "6 + 1", price: "₹17/km", rating: 4.8 },
  { type: "Luxury", model: "Mercedes E-Class", seats: "4 + 1", price: "₹34/km", rating: 4.9 },
  { type: "Tempo Traveller", model: "Force 12-seater", seats: "11 + 1", price: "₹22/km", rating: 4.7 },
];

function CabsPage() {
  return (
    <>
      <PageHero
        eyebrow="Cabs"
        title="From the curb to the coast."
        description="Outstation, local, hourly rentals and airport transfers. Pay only what the meter says — no surge, no surprises."
        image={hero}
      >
        <SearchTabs initial="cabs" />
      </PageHero>

      <section className="container-page py-14">
        <SectionHeader eyebrow="Bengaluru → Mysore · One way" title="Choose your ride" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CARS.map((c) => (
            <article
              key={c.type}
              className="rounded-3xl border border-border bg-surface p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-float"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Car className="h-5 w-5" />
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-xs font-semibold">
                  <Star className="h-3 w-3 fill-gold text-gold" /> {c.rating}
                </span>
              </div>
              <p className="mt-4 font-display text-xl font-medium">{c.type}</p>
              <p className="text-sm text-muted-foreground">{c.model} · {c.seats}</p>
              <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                <div>
                  <p className="font-display text-2xl font-semibold">{c.price}</p>
                  <p className="text-xs text-muted-foreground">incl. driver, fuel & tolls</p>
                </div>
                <button className="inline-flex items-center gap-1.5 rounded-full bg-[var(--gradient-cta)] px-4 py-2 text-sm font-semibold text-accent-foreground shadow-soft">
                  Book <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
