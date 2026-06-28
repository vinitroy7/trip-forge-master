import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Globe2, Sparkles } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import hero from "../assets/dest-bali.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join GoHoliday" },
      { name: "description", content: "Build the future of travel with us. Engineering, design, operations and travel-expert roles across India and remote." },
      { property: "og:title", content: "Careers — GoHoliday" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const JOBS = [
  { t: "Senior Product Designer", team: "Design", loc: "Bengaluru / Remote" },
  { t: "Staff Engineer, Booking Platform", team: "Engineering", loc: "Bengaluru" },
  { t: "Travel Consultant (Multi-lingual)", team: "Operations", loc: "Bengaluru" },
  { t: "Growth Marketing Lead", team: "Marketing", loc: "Remote" },
  { t: "Supplier Partnerships, EMEA", team: "Partnerships", loc: "Dubai" },
  { t: "Customer Support Specialist", team: "Support", loc: "Remote · India" },
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the travel platform you wish you had."
        description="We're a remote-friendly team of 240 builders and travellers across 14 countries — and we're hiring."
        image={hero}
      />
      <section className="container-page py-14">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { Icon: Sparkles, t: "Stipend for one trip a year — on us" },
            { Icon: Globe2, t: "Work from any of our 4 hubs or fully remote" },
            { Icon: Briefcase, t: "ESOPs from day one + healthcare for the family" },
          ].map(({ Icon, t }) => (
            <div key={t} className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
              <Icon className="h-5 w-5 text-accent" />
              <p className="mt-3 text-sm font-medium">{t}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <SectionHeader eyebrow="Open roles" title="Find your fit" />
          <div className="space-y-3">
            {JOBS.map((j) => (
              <article
                key={j.t}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-float sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-display text-lg font-medium">{j.t}</p>
                  <p className="text-xs text-muted-foreground">{j.team} · {j.loc}</p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                >
                  Apply <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
