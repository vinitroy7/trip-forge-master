import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import hero from "../assets/dest-switzerland.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact GoHoliday — 24/7 Travel Support" },
      {
        name: "description",
        content:
          "Reach our travel experts by chat, phone or email — 24/7, in 7 languages. Average response time under 90 seconds.",
      },
      { property: "og:title", content: "Contact GoHoliday" },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="A human is always one tap away."
        description="Plan a trip, change a booking, ask anything. We pick up in under 90 seconds."
        image={hero}
      />

      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {[
              { Icon: Phone, t: "Call us", s: "+91 80 1234 5678 · 24/7" },
              { Icon: Mail, t: "Email", s: "help@goholiday.travel" },
              { Icon: MapPin, t: "Visit us", s: "Indiranagar, Bengaluru 560038, India" },
            ].map(({ Icon, t, s }) => (
              <div key={t} className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5 shadow-soft">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{t}</p>
                  <p className="text-sm text-muted-foreground">{s}</p>
                </div>
              </div>
            ))}
          </div>

          <form className="rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
            <h2 className="font-display text-2xl font-medium">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              We'll get back within a few hours, usually much faster.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Full name", type: "text", ph: "Jane Traveller" },
                { label: "Email", type: "email", ph: "jane@email.com" },
                { label: "Phone", type: "tel", ph: "+91 9xxxxxxxxx" },
                { label: "Subject", type: "text", ph: "Booking enquiry" },
              ].map((f) => (
                <label key={f.label} className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {f.label}
                  </span>
                  <input
                    type={f.type}
                    placeholder={f.ph}
                    className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-accent"
                  />
                </label>
              ))}
            </div>
            <label className="mt-4 block">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Tell us a bit
              </span>
              <textarea
                rows={5}
                placeholder="Where are you headed and how can we help?"
                className="mt-1 w-full rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-accent"
              />
            </label>
            <button
              type="button"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-cta)] px-6 py-3 text-sm font-semibold text-accent-foreground shadow-soft"
            >
              <Send className="h-4 w-4" /> Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
