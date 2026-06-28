import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import hero from "../assets/dest-santorini.jpg";
import bali from "../assets/dest-bali.jpg";
import dubai from "../assets/dest-dubai.jpg";
import maldives from "../assets/dest-maldives.jpg";
import swiss from "../assets/dest-switzerland.jpg";
import kerala from "../assets/dest-kerala.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Travel Blog — Guides, Tips & Inspiration | GoHoliday" },
      {
        name: "description",
        content:
          "Destination guides, visa walkthroughs, budget travel tips and seasonal inspiration from GoHoliday's editorial team.",
      },
      { property: "og:title", content: "Travel blog — GoHoliday" },
      { property: "og:url", content: "/blog" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const CATS = ["All", "Destination guides", "Travel tips", "Visa guides", "Budget travel", "Luxury", "Adventure", "News"];

const POSTS = [
  { img: bali, tag: "Destination guide", title: "12 hidden beaches in Southeast Asia", read: "8 min", author: "Anjali Sharma" },
  { img: dubai, tag: "Budget travel", title: "Dubai on under ₹50,000 — yes, really", read: "5 min", author: "Daniel Park" },
  { img: maldives, tag: "Luxury", title: "Inside the new wave of overwater resorts", read: "6 min", author: "Priya Menon" },
  { img: swiss, tag: "Travel tips", title: "Switzerland in summer vs winter — what to pick", read: "7 min", author: "Lars Berg" },
  { img: kerala, tag: "Adventure", title: "Western Ghats: 6 monsoon treks worth the rain", read: "9 min", author: "Rahul Iyer" },
  { img: hero, tag: "Visa guide", title: "Schengen visa in 2026: documents, timelines & fees", read: "6 min", author: "Editorial team" },
];

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Travel journal"
        title="Stories from the road."
        description="Field-tested guides, honest reviews and the kind of tips your group chat actually asks for."
        image={hero}
      />
      <section className="container-page py-14">
        <div className="mb-8 flex flex-wrap gap-2">
          {CATS.map((c, i) => (
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
        <SectionHeader eyebrow="Latest" title="Fresh from the editorial desk" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-3xl border border-border bg-surface shadow-soft transition-all hover:-translate-y-1 hover:shadow-float"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full bg-accent-soft px-2.5 py-1 font-semibold text-accent">{p.tag}</span>
                  <span className="text-muted-foreground">{p.read} read</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-medium leading-snug">{p.title}</h3>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>By {p.author}</span>
                  <Link to="/blog" className="inline-flex items-center gap-1 font-semibold text-accent">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
