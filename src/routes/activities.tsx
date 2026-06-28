import { createFileRoute } from "@tanstack/react-router";
import { Ticket, Star, ArrowRight } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import hero from "../assets/dest-bali.jpg";
import bali from "../assets/dest-bali.jpg";
import santorini from "../assets/dest-santorini.jpg";
import dubai from "../assets/dest-dubai.jpg";
import maldives from "../assets/dest-maldives.jpg";
import swiss from "../assets/dest-switzerland.jpg";
import kerala from "../assets/dest-kerala.jpg";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Activities & Experiences — Tours, Tickets & Day Trips | GoHoliday" },
      {
        name: "description",
        content:
          "Skip-the-line tickets, city tours, adventure sports, theme parks, cruises and unique local experiences in 1,200+ destinations.",
      },
      { property: "og:title", content: "Activities & experiences — GoHoliday" },
      { property: "og:url", content: "/activities" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/activities" }],
  }),
  component: ActivitiesPage,
});

const ACTIVITIES = [
  { title: "Burj Khalifa: Level 124 + 125 entry", city: "Dubai", img: dubai, price: "₹3,200", rating: 4.8, duration: "1h 30m" },
  { title: "Mt Batur sunrise trek + breakfast", city: "Bali", img: bali, price: "₹2,499", rating: 4.9, duration: "8h" },
  { title: "Santorini caldera sailing cruise", city: "Greece", img: santorini, price: "₹8,400", rating: 4.9, duration: "5h" },
  { title: "Maldives sandbank picnic & snorkel", city: "Maldives", img: maldives, price: "₹6,800", rating: 4.8, duration: "4h" },
  { title: "Jungfraujoch ‘Top of Europe’ pass", city: "Switzerland", img: swiss, price: "₹11,200", rating: 4.9, duration: "Full day" },
  { title: "Alleppey houseboat day cruise", city: "Kerala", img: kerala, price: "₹4,500", rating: 4.7, duration: "6h" },
];

function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="Holidays are made of the in-betweens."
        description="Skip-the-line tickets, sunrise treks, sunset cruises and the things you'll talk about for years."
        image={hero}
      />

      <section className="container-page py-14">
        <SectionHeader eyebrow="Top experiences" title="Loved by travellers this month" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.map((a) => (
            <article
              key={a.title}
              className="group overflow-hidden rounded-3xl border border-border bg-surface shadow-soft transition-all hover:-translate-y-1 hover:shadow-float"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={a.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-surface/95 px-2.5 py-1 text-xs font-semibold backdrop-blur">
                  <Star className="h-3 w-3 fill-gold text-gold" /> {a.rating}
                </span>
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                  <Ticket className="h-3 w-3" /> {a.duration}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{a.city}</p>
                <h3 className="mt-1 font-display text-lg font-medium leading-snug">{a.title}</h3>
                <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-xs text-muted-foreground">From</p>
                    <p className="font-display text-xl font-semibold">{a.price}</p>
                  </div>
                  <button className="inline-flex items-center gap-1.5 rounded-full bg-[var(--gradient-cta)] px-4 py-2 text-sm font-semibold text-accent-foreground shadow-soft">
                    Book <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
