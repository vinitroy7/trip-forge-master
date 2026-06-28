import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Plane, Hotel, Utensils, Camera, Car } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SearchTabs } from "../components/site/SearchTabs";
import { SectionHeader } from "../components/site/SectionHeader";
import { DestinationCard } from "../components/site/DestinationCard";
import hero from "../assets/dest-bali.jpg";
import bali from "../assets/dest-bali.jpg";
import santorini from "../assets/dest-santorini.jpg";
import dubai from "../assets/dest-dubai.jpg";
import maldives from "../assets/dest-maldives.jpg";
import swiss from "../assets/dest-switzerland.jpg";
import kerala from "../assets/dest-kerala.jpg";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Holiday Packages — Curated Trips Worldwide | GoHoliday" },
      {
        name: "description",
        content:
          "Honeymoon, family, adventure, religious and luxury holiday packages. Fully planned itineraries with flights, hotels, transfers and sightseeing.",
      },
      { property: "og:title", content: "Holiday packages — GoHoliday" },
      { property: "og:url", content: "/packages" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: PackagesPage,
});

const CATEGORIES = [
  "Honeymoon", "Family", "Adventure", "Luxury", "Religious",
  "Wildlife", "Beach", "Hill station", "Group tours", "Corporate",
];

const PACKAGES = [
  { city: "Bali Bliss", country: "6N · Indonesia", image: bali, price: "₹52,499", tag: "Honeymoon" },
  { city: "Magical Maldives", country: "4N · Maldives", image: maldives, price: "₹89,000", tag: "Luxury" },
  { city: "Greek Island Hop", country: "8N · Greece", image: santorini, price: "₹1,28,500" },
  { city: "Dubai Discover", country: "5N · UAE", image: dubai, price: "₹38,200", tag: "Family" },
  { city: "Swiss Alps Explorer", country: "7N · Europe", image: swiss, price: "₹1,64,000" },
  { city: "God's Own Kerala", country: "5N · India", image: kerala, price: "₹22,750", tag: "Best seller" },
];

function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Holiday packages"
        title="One booking. Whole trip. Zero hassle."
        description="Flights, hotels, transfers, sightseeing and a local concierge — all included. Pay in 0% EMI on packages above ₹25,000."
        image={hero}
      >
        <SearchTabs initial="packages" />
      </PageHero>

      <section className="container-page py-14">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c, i) => (
            <button
              key={c}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                i === 0
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <SectionHeader
            eyebrow="Most loved"
            title="Curated packages this season"
            description="Built by our destination experts and reviewed by 4.8★ travellers."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PACKAGES.map((p) => (
              <DestinationCard key={p.city} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-surface-2">
        <div className="container-page py-16">
          <SectionHeader
            eyebrow="What's inside"
            title="Every package, the GoHoliday way"
            description="A standard we set, so you can stop double-checking and start packing."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: Plane, t: "Round-trip flights", s: "Direct where possible, with checked baggage." },
              { Icon: Hotel, t: "Vetted hotels", s: "Hand-picked stays, 4★ and above by default." },
              { Icon: Car, t: "All transfers", s: "Airport, intercity and sightseeing in private vehicles." },
              { Icon: Camera, t: "Daily sightseeing", s: "Curated itinerary with tickets pre-booked." },
              { Icon: Utensils, t: "Meals included", s: "Daily breakfast, plus local dinners on tour days." },
              { Icon: Calendar, t: "Flex dates", s: "Reschedule once for free up to 7 days before." },
            ].map(({ Icon, t, s }) => (
              <div key={t} className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 font-semibold">{t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="overflow-hidden rounded-3xl bg-[var(--gradient-hero)] p-8 text-primary-foreground sm:p-12">
          <div className="grid items-center gap-6 lg:grid-cols-[2fr_1fr]">
            <div>
              <h3 className="font-display text-3xl font-medium sm:text-4xl">
                Can't see your dream trip? Let us craft one.
              </h3>
              <p className="mt-3 max-w-xl text-primary-foreground/80">
                Tell us where, when and how you travel. A destination expert will design a
                custom itinerary within 24 hours — free.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-sunset)] px-6 py-3 text-base font-semibold text-accent-foreground shadow-glow lg:justify-self-end"
            >
              Plan my trip <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
