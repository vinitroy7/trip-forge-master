import { useState } from "react";
import {
  Plane,
  Hotel,
  Palmtree,
  Bus,
  TrainFront,
  Car,
  MapPin,
  Calendar,
  Users,
  Search,
  ArrowLeftRight,
} from "lucide-react";

const TABS = [
  { id: "flights", label: "Flights", Icon: Plane },
  { id: "hotels", label: "Hotels", Icon: Hotel },
  { id: "packages", label: "Packages", Icon: Palmtree },
  { id: "bus", label: "Bus", Icon: Bus },
  { id: "trains", label: "Trains", Icon: TrainFront },
  { id: "cabs", label: "Cabs", Icon: Car },
] as const;

type TabId = (typeof TABS)[number]["id"];

function Field({
  label,
  icon: Icon,
  value,
  hint,
}: {
  label: string;
  icon: typeof MapPin;
  value: string;
  hint?: string;
}) {
  return (
    <div className="group rounded-xl border border-border bg-surface px-4 py-3 transition-colors hover:border-accent/50">
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <div className="mt-1 truncate text-base font-semibold text-foreground">{value}</div>
      {hint && <div className="truncate text-xs text-muted-foreground">{hint}</div>}
    </div>
  );
}

export function SearchTabs({ initial = "flights" as TabId }: { initial?: TabId }) {
  const [tab, setTab] = useState<TabId>(initial);
  const isStays = tab === "hotels" || tab === "packages";

  return (
    <div className="surface-glass rounded-3xl p-2 shadow-float">
      <div className="flex flex-wrap gap-1 px-1 pt-1">
        {TABS.map(({ id, label, Icon }) => {
          const active = tab === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          );
        })}
      </div>

      <div className="mt-2 rounded-2xl bg-surface p-4 sm:p-5">
        {/* Trip type chips */}
        <div className="mb-4 flex flex-wrap gap-2 text-xs">
          {(tab === "flights"
            ? ["One way", "Round trip", "Multi-city"]
            : tab === "cabs"
              ? ["Outstation", "Local", "Airport transfer", "Hourly"]
              : isStays
                ? ["City", "Landmark", "Hotel name"]
                : ["Single", "Round trip"]
          ).map((chip, i) => (
            <button
              key={chip}
              type="button"
              className={`rounded-full px-3 py-1 ${
                i === 0
                  ? "bg-accent-soft text-accent"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          <div className="relative lg:col-span-2 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
            <Field
              label={isStays ? "Destination" : "From"}
              icon={MapPin}
              value={isStays ? "Bali, Indonesia" : "New Delhi"}
              hint={isStays ? "Denpasar Airport (DPS)" : "DEL · Indira Gandhi Intl"}
            />
            <button
              type="button"
              aria-label="Swap"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <ArrowLeftRight className="h-4 w-4" />
            </button>
            <Field
              label={isStays ? "Check-in / Check-out" : "To"}
              icon={isStays ? Calendar : MapPin}
              value={isStays ? "12 — 18 Aug 2026" : "Singapore"}
              hint={isStays ? "6 nights" : "SIN · Changi Airport"}
            />
          </div>
          <Field
            label={isStays ? "Rooms & Guests" : "Departure"}
            icon={isStays ? Users : Calendar}
            value={isStays ? "2 Rooms · 4 Adults" : "Sat, 15 Aug"}
            hint={isStays ? "1 Child" : "Return: Sat, 22 Aug"}
          />
          <Field
            label="Travellers & class"
            icon={Users}
            value="2 Adults"
            hint="Economy"
          />
          <button
            type="button"
            className="inline-flex h-full min-h-14 items-center justify-center gap-2 rounded-xl bg-[var(--gradient-cta)] px-6 text-base font-semibold text-accent-foreground shadow-soft transition-all hover:shadow-glow"
          >
            <Search className="h-5 w-5" />
            Search
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Free cancellation
          </span>
          <span>· No booking fees</span>
          <span>· Price match guarantee</span>
          <span>· 24/7 support</span>
        </div>
      </div>
    </div>
  );
}
