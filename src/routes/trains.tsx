import { createFileRoute } from "@tanstack/react-router";
import { TrainFront, ArrowRight, MapPin, Clock } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SearchTabs } from "../components/site/SearchTabs";
import { SectionHeader } from "../components/site/SectionHeader";
import hero from "../assets/dest-switzerland.jpg";

export const Route = createFileRoute("/trains")({
  head: () => ({
    meta: [
      { title: "Train Tickets — IRCTC Booking, PNR Status | GoHoliday" },
      {
        name: "description",
        content:
          "Book train tickets, check PNR status and live running status. Tatkal, premium tatkal and reservation across the IRCTC network.",
      },
      { property: "og:title", content: "Train tickets — GoHoliday" },
      { property: "og:url", content: "/trains" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/trains" }],
  }),
  component: TrainsPage,
});

function TrainsPage() {
  return (
    <>
      <PageHero
        eyebrow="Trains"
        title="Catch the train, the easy way."
        description="Live availability across IRCTC, PNR checks, running status and Tatkal booking — all in one place."
        image={hero}
      >
        <SearchTabs initial="trains" />
      </PageHero>

      <section className="container-page py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: "PNR status", d: "Check the live status of your 10-digit PNR." },
            { t: "Live running status", d: "Where is your train right now? Track it live." },
            { t: "Seat availability", d: "Class-wise availability, including Tatkal & Premium." },
          ].map((c) => (
            <div key={c.t} className="rounded-3xl border border-border bg-surface p-6 shadow-soft">
              <p className="font-display text-xl font-medium">{c.t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              <div className="mt-4 flex gap-2">
                <input
                  className="h-11 flex-1 rounded-full border border-border bg-secondary px-4 text-sm outline-none focus:border-accent"
                  placeholder="Enter 10-digit number"
                />
                <button className="inline-flex h-11 items-center gap-1.5 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground">
                  Check <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <SectionHeader eyebrow="Mumbai CST → New Delhi · Sat, 15 Aug" title="14 trains found" />
          <div className="space-y-3">
            {[
              { name: "Rajdhani Express", code: "12951", dep: "16:55", arr: "08:32", dur: "15h 37m", cls: "1A · 2A · 3A · SL" },
              { name: "Tejas Express", code: "22119", dep: "15:40", arr: "23:05", dur: "8h 25m", cls: "CC · EC" },
              { name: "Duronto Express", code: "12267", dep: "23:00", arr: "16:25", dur: "17h 25m", cls: "1A · 2A · 3A" },
            ].map((t) => (
              <article
                key={t.code}
                className="rounded-2xl border border-border bg-surface p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-float"
              >
                <div className="grid items-center gap-4 lg:grid-cols-[1.6fr_2fr_1.4fr_auto]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                      <TrainFront className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">#{t.code}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                    <div>
                      <p className="font-display text-lg font-semibold">{t.dep}</p>
                      <p className="inline-flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" />CSMT</p>
                    </div>
                    <div className="text-center text-xs text-muted-foreground inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />{t.dur}
                    </div>
                    <div className="text-right">
                      <p className="font-display text-lg font-semibold">{t.arr}</p>
                      <p className="text-xs text-muted-foreground">NDLS</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{t.cls}</p>
                  <button className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--gradient-cta)] px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft">
                    Book <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
