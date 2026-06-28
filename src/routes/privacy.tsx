import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero } from "../components/site/PageHero";
import hero from "../assets/dest-maldives.jpg";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — GoHoliday" },
      { name: "description", content: "How GoHoliday collects, uses and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — GoHoliday" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-2xl font-medium">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        description="Last updated 28 June 2026. This page is maintained by GoHoliday to explain how we handle your data."
        image={hero}
      />
      <section className="container-page max-w-3xl py-14">
        <Section title="What we collect">
          <p>
            We collect information you give us when you create an account, search for or make a booking — including your name,
            contact details, traveller information, payment metadata and trip preferences.
          </p>
        </Section>
        <Section title="How we use it">
          <p>
            To deliver bookings, process payments through PCI-compliant providers, send transactional updates, prevent fraud,
            and improve the product. We also use it for marketing communications you can opt out of any time.
          </p>
        </Section>
        <Section title="Sharing">
          <p>
            We share the minimum necessary information with airlines, hotels, transport operators and payment processors
            required to fulfil your booking. We do not sell personal information.
          </p>
        </Section>
        <Section title="Your rights">
          <p>
            You can access, correct, export or delete your data from your account settings, or by writing to
            privacy@goholiday.travel. We respond within 30 days.
          </p>
        </Section>
        <Section title="Contact">
          <p>
            Data Protection Officer · privacy@goholiday.travel · Indiranagar, Bengaluru 560038, India.
          </p>
        </Section>
      </section>
    </>
  );
}
