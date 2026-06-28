import { createFileRoute } from "@tanstack/react-router";
import { Filter, ArrowRight, Wifi, Utensils, Waves, Dumbbell, Car, Star, MapPin } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SearchTabs } from "../components/site/SearchTabs";
import { SectionHeader } from "../components/site/SectionHeader";
import hero from "../assets/dest-maldives.jpg";
import h1 from "../assets/hotel-1.jpg";
import h2 from "../assets/hotel-2.jpg";
import h3 from "../assets/hotel-3.jpg";

export const Route = createFileRoute("/hotels")({
  head: () => ({
    meta: [
      { title: "Hotel Booking — Hotels, Resorts & Villas | GoHoliday" },
      {
        name: "description",
        content:
          "Book 1.5 million hotels worldwide. Free cancellation, instant confirmation, verified guest reviews and the best rates guaranteed.",
      },
      { property: "og:title", content: "Hotels you'll love — GoHoliday" },
      { property: "og:url", content: "/hotels" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/hotels" }],
  }),
  component: HotelsPage,
});

const HOTELS = [
  {
    name: "Ocean Reef Resort & Spa",
    area: "Seminyak, Bali",
    img: h1,
    rating: 4.8, reviews: 2410,
    price: "₹12,400",
    tag: "Free cancellation",
    perks: ["Beachfront", "Infinity pool", "Breakfast included"],
  },
  {
    name: "Cloudline Mountain Lodge",
    area: "Interlaken, Switzerland",
    img: h2,
    rating: 4.9, reviews: 980,
    price: "₹18,750",
    tag: "Pay at hotel",
    perks: ["Mountain view", "Ski access", "Spa"],
  },
  {
    name: "Raj Mahal Heritage Palace",
    area: "Jaipur, India",
    img: h3,
    rating: 4.7, reviews: 3120,
    price: "₹7,900",
    tag: "Best seller",
    perks: ["Heritage property", "Pool", "Royal suite"],
  },
];

function HotelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Hotels"
        title="A place to stay for every kind of you."
        description="1.5 million hotels, resorts and villas in 220 countries. Free cancellation and pay-at-hotel on most bookings."
        image={hero}
      >
        <SearchTabs initial="hotels" />
      </PageHero>

      <section className="container-page py-14">
        <SectionHeader
          eyebrow="Bali, Indonesia"
          title="284 properties available"
          description="Check-in Wed, 12 Aug — Check-out Tue, 18 Aug · 2 adults, 1 room"
        />

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="hidden h-fit rounded-3xl border border-border bg-surface p-5 shadow-soft lg:block">
            <h3 className="flex items-center gap-2 font-display text-lg font-medium">
              <Filter className="h-4 w-4" /> Filters
            </h3>

            {[
              { label: "Price per night", opts: ["Under ₹5,000", "₹5–10k", "₹10–20k", "₹20k+"] },
              { label: "Star rating", opts: ["★★★★★", "★★★★", "★★★", "★★"] },
              { label: "Amenities", opts: ["Pool", "WiFi", "Breakfast", "Gym", "Parking", "Spa"] },
              { label: "Property type", opts: ["Hotel", "Resort", "Villa", "Hostel", "Apartment"] },
              { label: "Guest rating", opts: ["Exceptional 9+", "Wonderful 8+", "Good 7+"] },
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
          </aside>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-surface p-2 text-sm">
              <span className="px-3 text-muted-foreground">Sort:</span>
              {["Recommended", "Price: low to high", "Top rated", "Distance"].map((s, i) => (
                <button
                  key={s}
                  className={`rounded-full px-3 py-1.5 ${
                    i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {HOTELS.map((h) => (
              <article
                key={h.name}
                className="grid gap-0 overflow-hidden rounded-3xl border border-border bg-surface shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-float sm:grid-cols-[280px_1fr]"
              >
                <div className="relative aspect-[4/3] sm:aspect-auto">
                  <img src={h.img} alt={h.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                    {h.tag}
                  </span>
                </div>
                <div className="grid gap-3 p-5 sm:grid-cols-[1fr_auto]">
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-medium">{h.name}</h3>
                    <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" /> {h.area}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                      {h.perks.map((p) => (
                        <span key={p} className="rounded-full bg-secondary px-2.5 py-1 text-secondary-foreground">
                          {p}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5"><Wifi className="h-3.5 w-3.5" />Free WiFi</span>
                      <span className="inline-flex items-center gap-1.5"><Utensils className="h-3.5 w-3.5" />Breakfast</span>
                      <span className="inline-flex items-center gap-1.5"><Waves className="h-3.5 w-3.5" />Pool</span>
                      <span className="inline-flex items-center gap-1.5"><Dumbbell className="h-3.5 w-3.5" />Gym</span>
                      <span className="inline-flex items-center gap-1.5"><Car className="h-3.5 w-3.5" />Parking</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="rounded-lg bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
                        {h.rating}
                      </span>
                      <div className="text-right">
                        <p className="inline-flex items-center gap-1 text-xs font-semibold">
                          <Star className="h-3 w-3 fill-gold text-gold" /> Exceptional
                        </p>
                        <p className="text-xs text-muted-foreground">{h.reviews.toLocaleString()} reviews</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground line-through">₹16,800</p>
                      <p className="font-display text-2xl font-semibold">{h.price}</p>
                      <p className="text-xs text-muted-foreground">per night, taxes incl.</p>
                      <button className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--gradient-cta)] px-4 py-2 text-sm font-semibold text-accent-foreground shadow-soft">
                        Choose room <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
