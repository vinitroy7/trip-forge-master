import { createFileRoute } from "@tanstack/react-router";
import { Globe2, Heart, Users } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import hero from "../assets/dest-kerala.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GoHoliday — Our Story & Mission" },
      {
        name: "description",
        content:
          "GoHoliday is on a mission to make travel simple, transparent and beautiful — for the next 100 million journeys.",
      },
      { property: "og:title", content: "About GoHoliday" },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Travel, the way it should feel."
        description="A small team of travellers and engineers building the booking experience we always wanted."
        image={hero}
      />

      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Our story</p>
            <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl">
              Founded in 2021 — over 2 million trips later.
            </h2>
            <p className="mt-4 text-muted-foreground">
              GoHoliday started with a single frustrating booking flow and a long flight to think
              about it. Today, we power flights, hotels, packages and experiences for travellers
              in 180+ countries, with a customer-loved 4.8★ rating.
            </p>
            <p className="mt-3 text-muted-foreground">
              We're proud of three things: prices that are fair, support that picks up at 3 AM,
              and a design that respects your time. The rest, we keep improving.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "2M+", l: "Trips booked" },
              { v: "180+", l: "Countries" },
              { v: "4.8★", l: "Avg. rating" },
              { v: "₹0", l: "Hidden fees" },
            ].map((s) => (
              <div key={s.l} className="rounded-3xl border border-border bg-surface p-6 shadow-soft">
                <p className="font-display text-4xl font-medium text-accent">{s.v}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-2">
        <div className="container-page py-16">
          <SectionHeader eyebrow="What we stand for" title="Three things, non-negotiable" />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { Icon: Globe2, t: "Honest pricing", s: "What you see is what you pay. No drip-pricing, no surprises at checkout." },
              { Icon: Heart, t: "Human support", s: "Real people in real time, in 7 languages, every hour of every day." },
              { Icon: Users, t: "Built with travellers", s: "Every feature ships only after 50+ travellers test it on real trips." },
            ].map(({ Icon, t, s }) => (
              <div key={t} className="rounded-3xl border border-border bg-surface p-6 shadow-soft">
                <Icon className="h-6 w-6 text-accent" />
                <p className="mt-3 font-display text-xl font-medium">{t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
