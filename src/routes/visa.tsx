import { createFileRoute } from "@tanstack/react-router";
import { Stamp, FileCheck2, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import hero from "../assets/dest-santorini.jpg";

export const Route = createFileRoute("/visa")({
  head: () => ({
    meta: [
      { title: "Visa Services — Apply Online, Track Status | GoHoliday" },
      {
        name: "description",
        content:
          "Apply for tourist, business and student visas online. Document checklists, application tracking and embassy appointments for 60+ countries.",
      },
      { property: "og:title", content: "Visa services — GoHoliday" },
      { property: "og:url", content: "/visa" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/visa" }],
  }),
  component: VisaPage,
});

const COUNTRIES = [
  { c: "United Arab Emirates", t: "3–5 days", price: "₹6,499", flag: "🇦🇪" },
  { c: "Thailand", t: "5–7 days", price: "₹3,200", flag: "🇹🇭" },
  { c: "Singapore", t: "4–6 days", price: "₹4,150", flag: "🇸🇬" },
  { c: "Schengen (Europe)", t: "10–14 days", price: "₹8,900", flag: "🇪🇺" },
  { c: "United States", t: "30–45 days", price: "₹14,200", flag: "🇺🇸" },
  { c: "United Kingdom", t: "15–20 days", price: "₹13,800", flag: "🇬🇧" },
  { c: "Japan", t: "7–10 days", price: "₹5,400", flag: "🇯🇵" },
  { c: "Australia", t: "20–28 days", price: "₹11,500", flag: "🇦🇺" },
];

function VisaPage() {
  return (
    <>
      <PageHero
        eyebrow="Visa services"
        title="Less paperwork. More boarding passes."
        description="Apply for tourist, business and short-stay visas to 60+ countries. Our experts review every document before submission."
        image={hero}
      />

      <section className="container-page py-14">
        <SectionHeader
          eyebrow="Popular countries"
          title="Where are you headed?"
          description="Estimated processing times and fees include service charges. Government fees may vary."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COUNTRIES.map((c) => (
            <article
              key={c.c}
              className="group rounded-3xl border border-border bg-surface p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-float"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{c.flag}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs">
                  <Clock className="h-3 w-3" /> {c.t}
                </span>
              </div>
              <p className="mt-4 font-display text-lg font-medium">{c.c}</p>
              <p className="text-xs text-muted-foreground">Tourist visa · single entry</p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <p className="font-display text-xl font-semibold">{c.price}</p>
                <button className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
                  Apply <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface-2">
        <div className="container-page py-16">
          <SectionHeader eyebrow="How it works" title="Four steps to your visa" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Stamp, t: "Pick your country", s: "Choose visa type and dates." },
              { Icon: FileCheck2, t: "Upload documents", s: "We tell you exactly what's needed." },
              { Icon: ShieldCheck, t: "Expert review", s: "Our team checks everything before submission." },
              { Icon: Clock, t: "Track in real time", s: "Get updates till the visa lands in your inbox." },
            ].map(({ Icon, t, s }, i) => (
              <div key={t} className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
                <p className="font-display text-3xl text-accent">0{i + 1}</p>
                <span className="mt-3 inline-grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-3 font-semibold">{t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
