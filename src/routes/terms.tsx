import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero } from "../components/site/PageHero";
import hero from "../assets/dest-switzerland.jpg";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — GoHoliday" },
      { name: "description", content: "The terms that govern your use of GoHoliday products and services." },
      { property: "og:title", content: "Terms & Conditions — GoHoliday" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-2xl font-medium">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & conditions"
        description="Last updated 28 June 2026."
        image={hero}
      />
      <section className="container-page max-w-3xl py-14">
        <Section title="Acceptance">
          <p>By creating an account or booking through GoHoliday, you agree to these terms and our Privacy Policy.</p>
        </Section>
        <Section title="Bookings & payments">
          <p>
            Prices, taxes and inventory are confirmed at the moment of payment. GoHoliday acts as a booking agent — the
            travel supplier (airline, hotel, operator) is the principal service provider.
          </p>
        </Section>
        <Section title="Conduct">
          <p>You agree to provide accurate traveller information and to comply with the rules of carriers, hotels and destinations.</p>
        </Section>
        <Section title="Liability">
          <p>
            Our liability is limited to the booking value of the affected service. We are not liable for force-majeure events,
            government actions or supplier insolvency beyond what's required by applicable law.
          </p>
        </Section>
        <Section title="Governing law">
          <p>These terms are governed by the laws of India, with courts in Bengaluru having exclusive jurisdiction.</p>
        </Section>
      </section>
    </>
  );
}
