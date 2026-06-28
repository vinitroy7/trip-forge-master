import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import hero from "../assets/dest-kerala.jpg";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — GoHoliday" },
      { name: "description", content: "Refund timelines, methods and dispute resolution for GoHoliday bookings." },
      { property: "og:title", content: "Refund policy — GoHoliday" },
      { property: "og:url", content: "/refund" },
    ],
    links: [{ rel: "canonical", href: "/refund" }],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Refund policy"
        description="Approved refunds are processed automatically — here's how long they take and where they go."
        image={hero}
      />
      <section className="container-page max-w-3xl py-14 text-sm leading-relaxed text-muted-foreground">
        <ul className="space-y-3">
          <li><strong className="text-foreground">UPI / wallet:</strong> 1–3 business days.</li>
          <li><strong className="text-foreground">Net banking:</strong> 3–5 business days.</li>
          <li><strong className="text-foreground">Credit / debit cards:</strong> 5–7 business days.</li>
          <li><strong className="text-foreground">International cards:</strong> 7–14 business days.</li>
        </ul>
        <p className="mt-6">
          Refunds go back to the original payment method. If you don't see the credit after the maximum window, write to
          refunds@goholiday.travel with your booking ID and we'll escalate with the payment partner within 48 hours.
        </p>
      </section>
    </>
  );
}
