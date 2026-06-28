import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Globe2,
  ShieldCheck,
  Headphones,
  CreditCard,
  ArrowRight,
  Quote,
  Plane,
  Hotel,
  Palmtree,
  Bus,
  TrainFront,
  Car,
  Stamp,
  Heart,
  Ticket,
} from "lucide-react";

import heroImg from "../assets/hero-tropical.jpg";
import bali from "../assets/dest-bali.jpg";
import santorini from "../assets/dest-santorini.jpg";
import dubai from "../assets/dest-dubai.jpg";
import maldives from "../assets/dest-maldives.jpg";
import swiss from "../assets/dest-switzerland.jpg";
import kerala from "../assets/dest-kerala.jpg";
import hotel1 from "../assets/hotel-1.jpg";
import hotel2 from "../assets/hotel-2.jpg";
import hotel3 from "../assets/hotel-3.jpg";

import { SearchTabs } from "../components/site/SearchTabs";
import { SectionHeader } from "../components/site/SectionHeader";
import { DestinationCard } from "../components/site/DestinationCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GoHoliday — Flights, Hotels & Holiday Packages" },
      {
        name: "description",
        content:
          "Compare and book flights, hotels, holiday packages, buses, trains, cabs, visas, travel insurance and activities. Best prices, free cancellation, 24/7 support.",
      },
      { property: "og:title", content: "GoHoliday — Plan, book, unwind" },
      {
        property: "og:description",
        content:
          "Premium online travel platform for flights, hotels, packages and more across 180+ countries.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "GoHoliday",
          url: "/",
          potentialAction: {
            "@type": "SearchAction",
            target: "/hotels?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  { Icon: Plane, label: "Flights", to: "/flights", tint: "from-sky-500/15" },
  { Icon: Hotel, label: "Hotels", to: "/hotels", tint: "from-amber-500/15" },
  { Icon: Palmtree, label: "Packages", to: "/packages", tint: "from-emerald-500/15" },
  { Icon: Bus, label: "Bus", to: "/bus", tint: "from-rose-500/15" },
  { Icon: TrainFront, label: "Trains", to: "/trains", tint: "from-indigo-500/15" },
  { Icon: Car, label: "Cabs", to: "/cabs", tint: "from-orange-500/15" },
  { Icon: Stamp, label: "Visa", to: "/visa", tint: "from-fuchsia-500/15" },
  { Icon: Heart, label: "Insurance", to: "/insurance", tint: "from-red-500/15" },
  { Icon: Ticket, label: "Activities", to: "/activities", tint: "from-teal-500/15" },
] as const;

const DESTINATIONS = [
  { city: "Bali", country: "Indonesia", image: bali, price: "₹38,499", rating: 4.9, tag: "Trending" },
  { city: "Santorini", country: "Greece", image: santorini, price: "₹86,200", rating: 4.8 },
  { city: "Dubai", country: "UAE", image: dubai, price: "₹29,950", rating: 4.7, tag: "Visa free" },
  { city: "Maldives", country: "Indian Ocean", image: maldives, price: "₹74,900", rating: 4.9, tag: "Honeymoon" },
  { city: "Switzerland", country: "Europe", image: swiss, price: "₹1,12,000", rating: 4.9 },
  { city: "Kerala", country: "India", image: kerala, price: "₹14,250", rating: 4.6, tag: "Best seller" },
] as const;

const HOTELS = [
  { name: "Ocean Reef Resort & Spa", city: "Bali, Indonesia", price: "₹12,400", img: hotel1, rating: 4.8 },
  { name: "Cloudline Mountain Lodge", city: "Interlaken, Switzerland", price: "₹18,750", img: hotel2, rating: 4.9 },
  { name: "Raj Mahal Heritage Palace", city: "Jaipur, India", price: "₹7,900", img: hotel3, rating: 4.7 },
] as const;

const REVIEWS = [
  {
    name: "Ananya & Vikram",
    trip: "Maldives honeymoon",
    quote:
      "Every detail was thought through — the overwater villa, the seaplane transfer, even the dietary notes. Easiest booking of our lives.",
  },
  {
    name: "Daniel Park",
    trip: "Solo trip · Tokyo",
    quote:
      "I got a JR Pass, hotel and an evening food tour in three taps. Support helped me reschedule a flight at midnight without any fuss.",
  },
  {
    name: "The Rao family",
    trip: "Kerala family package",
    quote:
      "Houseboats, treehouses, a private cab the whole way. Kids loved it, parents loved it. Already booked Bali for next year.",
  },
];

const POSTS = [
  {
    tag: "Destination guide",
    title: "12 hidden beaches in Southeast Asia you've never heard of",
    read: "8 min read",
    img: bali,
  },
  {
    tag: "Visa guide",
    title: "Schengen visa in 2026: documents, timelines and fees",
    read: "6 min read",
    img: santorini,
  },
  {
    tag: "Budget travel",
    title: "How to do Dubai on under ₹50,000 (yes, really)",
    read: "5 min read",
    img: dubai,
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Tropical sunset over an overwater villa"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.18_0.04_230/0.35)_0%,oklch(0.18_0.04_230/0.55)_55%,oklch(0.16_0.025_235/0.85)_100%)]" />
        </div>

        <div className="container-page relative pt-12 pb-10 sm:pt-20 sm:pb-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Monsoon sale · up to 40% off
            </span>
            <h1 className="mt-5 font-display text-4xl font-medium text-primary-foreground sm:text-5xl lg:text-6xl">
              Plan, book, <span className="text-gradient-sunset">unwind</span>.
              <br className="hidden sm:block" />
              Your next holiday starts here.
            </h1>
            <p className="mt-4 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
              Flights, hotels, curated holiday packages, buses, trains, cabs, visas and
              experiences — all in one beautifully simple journey across 180+ countries.
            </p>
          </div>

          <div className="mt-8 sm:mt-10">
            <SearchTabs />
          </div>

          {/* Trust strip */}
          <div className="mt-10 grid gap-4 text-primary-foreground/90 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: ShieldCheck, t: "Price match", s: "Lower fare? We refund the difference." },
              { Icon: CreditCard, t: "0% EMI options", s: "Pay over 3–12 months on packages." },
              { Icon: Headphones, t: "24/7 humans", s: "Real travel experts, not chatbots." },
              { Icon: Globe2, t: "180+ countries", s: "From weekend getaways to round-the-world." },
            ].map(({ Icon, t, s }) => (
              <div
                key={t}
                className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold">{t}</p>
                  <p className="text-sm opacity-80">{s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeader
          eyebrow="Everything you need"
          title="One platform, every kind of trip"
          description="From a 6-hour bus ride to a 6-country tour, we'll handle the bookings, paperwork and the in-between."
        />
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-9">
          {SERVICES.map(({ Icon, label, to, tint }) => (
            <Link
              key={label}
              to={to}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface p-4 text-center transition-all hover:-translate-y-1 hover:shadow-soft`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-b ${tint} to-transparent opacity-0 transition-opacity group-hover:opacity-100`}
              />
              <div className="relative">
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-3 text-sm font-semibold text-foreground">{label}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* OFFERS BANNER */}
      <section className="container-page">
        <div className="overflow-hidden rounded-3xl bg-[var(--gradient-hero)] p-8 text-primary-foreground sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                Flash sale · ends Sunday
              </p>
              <h3 className="mt-2 font-display text-3xl font-medium sm:text-4xl">
                Long weekends. Shorter prices.
              </h3>
              <p className="mt-3 max-w-lg text-primary-foreground/80">
                Up to 40% off on handpicked weekend escapes, with free cancellation and
                pay-at-hotel options. New stays added every Friday.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/offers"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-sunset)] px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-glow"
                >
                  See all deals <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/packages"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold backdrop-blur hover:bg-white/10"
                >
                  Browse packages
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { v: "40%", l: "Off weekend stays" },
                { v: "₹0", l: "Cancellation fee" },
                { v: "12×", l: "EMI on packages" },
                { v: "2M+", l: "Happy travellers" },
                { v: "180+", l: "Countries" },
                { v: "4.8★", l: "Avg. rating" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur"
                >
                  <p className="font-display text-2xl font-medium text-gold">{s.v}</p>
                  <p className="text-xs text-primary-foreground/75">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="container-page py-16 sm:py-24">
        <SectionHeader
          eyebrow="Trending now"
          title="Popular destinations this season"
          description="Where travellers are heading, what they're spending, and which corners are worth booking before the prices climb."
          action={
            <Link
              to="/packages"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-secondary"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <DestinationCard key={d.city} {...d} />
          ))}
        </div>
      </section>

      {/* TRENDING HOTELS */}
      <section className="bg-surface-2">
        <div className="container-page py-16 sm:py-24">
          <SectionHeader
            eyebrow="Stay in style"
            title="Trending hotels & resorts"
            description="Handpicked properties our travellers loved this month — from infinity-pool resorts to heritage palaces."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {HOTELS.map((h) => (
              <article
                key={h.name}
                className="group overflow-hidden rounded-3xl border border-border bg-surface shadow-soft transition-all hover:-translate-y-1 hover:shadow-float"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={h.img}
                    alt={h.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-surface/95 px-2.5 py-1 text-xs font-semibold backdrop-blur">
                    ★ {h.rating}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {h.city}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-medium">{h.name}</h3>
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Per night, taxes incl.</p>
                      <p className="font-display text-2xl font-semibold">{h.price}</p>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      View deal <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="container-page py-16 sm:py-24">
        <SectionHeader
          eyebrow="Loved by travellers"
          title="4.8 stars across 180,000 trips"
          description="Real stories from real journeys — booked, lived and remembered with GoHoliday."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="rounded-3xl border border-border bg-surface p-6 shadow-soft"
            >
              <Quote className="h-7 w-7 text-accent" />
              <blockquote className="mt-4 text-base leading-relaxed text-foreground">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.trip}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section className="container-page pb-16 sm:pb-24">
        <SectionHeader
          eyebrow="Travel journal"
          title="Stories, guides & inspiration"
          action={
            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-secondary"
            >
              All articles <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
        <div className="grid gap-6 md:grid-cols-3">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-3xl border border-border bg-surface shadow-soft transition-all hover:-translate-y-1 hover:shadow-float"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full bg-accent-soft px-2.5 py-1 font-semibold text-accent">
                    {p.tag}
                  </span>
                  <span className="text-muted-foreground">{p.read}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-medium leading-snug">
                  {p.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DOWNLOAD APP / NEWSLETTER CTA */}
      <section className="container-page pb-20">
        <div className="overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-soft sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Travel smarter
              </p>
              <h3 className="mt-2 font-display text-3xl font-medium sm:text-4xl">
                Get the GoHoliday app
              </h3>
              <p className="mt-3 max-w-md text-muted-foreground">
                Manage bookings offline, get gate-change alerts, store boarding passes and
                unlock app-only deals up to ₹2,000 off.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft">
                  ⏵ App Store
                </button>
                <button className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft">
                  ▶ Google Play
                </button>
              </div>
            </div>
            <div className="rounded-3xl bg-[var(--gradient-hero)] p-8 text-primary-foreground">
              <p className="font-display text-2xl font-medium">
                Or get weekend deals in your inbox.
              </p>
              <p className="mt-2 text-sm text-primary-foreground/75">
                One curated email a week. No spam, ever.
              </p>
              <form className="mt-5 flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="you@somewhere.com"
                  className="h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-4 text-sm text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:border-accent"
                />
                <button
                  type="button"
                  className="h-12 rounded-full bg-[var(--gradient-sunset)] px-6 text-sm font-semibold text-accent-foreground shadow-glow"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
