import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import hero from "../assets/dest-bali.jpg";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs — GoHoliday Help Center" },
      {
        name: "description",
        content:
          "Answers to the most common questions about bookings, cancellations, refunds, payments and travel documents.",
      },
      { property: "og:title", content: "FAQs — GoHoliday" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

const FAQS = [
  {
    q: "Can I cancel my booking and get a refund?",
    a: "Most bookings come with free cancellation up to 24 hours before check-in or departure. Cancellation fees and refund timelines vary by airline, hotel and package supplier — the exact policy is shown before you pay.",
  },
  {
    q: "How long do refunds take?",
    a: "Once approved, refunds reach your original payment method in 5–7 business days for cards and 2–3 days for UPI and bank transfers. We'll keep you updated by email and WhatsApp.",
  },
  {
    q: "Do you offer 0% EMI?",
    a: "Yes, on holiday packages above ₹25,000 with most major Indian banks. EMI tenures of 3, 6 and 12 months are available at checkout.",
  },
  {
    q: "Can I book for someone else?",
    a: "Absolutely. Use your account and enter the traveller's name and ID details during checkout. You'll receive the e-tickets and they'll get an SMS with their travel details.",
  },
  {
    q: "What if my flight is delayed or cancelled?",
    a: "We monitor every booking. You'll get proactive alerts on WhatsApp and email. For cancellations, our team will rebook or refund you automatically as per the airline's policy.",
  },
  {
    q: "Do you help with visas?",
    a: "Yes — we offer end-to-end visa services for 60+ countries, with document checklists, expert review and live tracking. See the Visa page for fees and processing times.",
  },
];

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Help center"
        title="Questions, answered."
        description="Everything you might need before, during and after the trip."
        image={hero}
      />
      <section className="container-page py-14">
        <SectionHeader eyebrow="Top questions" title="The ones travellers ask the most" />
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-surface p-5 shadow-soft open:shadow-float"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium">
                {f.q}
                <span className="grid h-8 w-8 place-items-center rounded-full bg-secondary text-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
