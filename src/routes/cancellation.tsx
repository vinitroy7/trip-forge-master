import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import hero from "../assets/dest-dubai.jpg";

export const Route = createFileRoute("/cancellation")({
  head: () => ({
    meta: [
      { title: "Cancellation Policy — GoHoliday" },
      { name: "description", content: "Cancellation rules across flights, hotels, packages, bus, train and cabs." },
      { property: "og:title", content: "Cancellation policy — GoHoliday" },
      { property: "og:url", content: "/cancellation" },
    ],
    links: [{ rel: "canonical", href: "/cancellation" }],
  }),
  component: CancellationPage,
});

function CancellationPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cancellation policy"
        description="A summary of how cancellations work across each product. Booking-specific rules always apply at checkout."
        image={hero}
      />
      <section className="container-page max-w-3xl py-14 text-sm leading-relaxed text-muted-foreground">
        <p>
          Most bookings on GoHoliday offer free cancellation up to a defined cutoff. The exact cutoff and any fees are shown on
          the booking page and in your confirmation email.
        </p>
        <ul className="mt-6 space-y-3">
          <li><strong className="text-foreground">Flights:</strong> Airline-specific rules apply. We pass through cancellations and never charge extra service fees on top.</li>
          <li><strong className="text-foreground">Hotels:</strong> Free cancellation is offered on most stays up to 24–72 hours before check-in.</li>
          <li><strong className="text-foreground">Packages:</strong> Free cancellation up to 30 days prior. 25% fee within 15–30 days, 50% within 7–14 days, 100% inside 7 days.</li>
          <li><strong className="text-foreground">Bus & train:</strong> Operator/IRCTC rules apply; charges deducted as per their schedules.</li>
          <li><strong className="text-foreground">Cabs:</strong> Free cancellation up to 1 hour before pickup.</li>
        </ul>
      </section>
    </>
  );
}
