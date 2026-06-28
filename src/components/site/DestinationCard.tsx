import { ArrowUpRight, Star } from "lucide-react";

interface DestinationCardProps {
  image: string;
  city: string;
  country: string;
  price: string;
  rating?: number;
  tag?: string;
  large?: boolean;
}

export function DestinationCard({
  image,
  city,
  country,
  price,
  rating = 4.8,
  tag,
  large,
}: DestinationCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl shadow-soft transition-all hover:-translate-y-1 hover:shadow-float ${
        large ? "aspect-[4/5] sm:aspect-[3/4]" : "aspect-[3/4]"
      }`}
    >
      <img
        src={image}
        alt={`${city}, ${country}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,oklch(0.16_0.025_235/0.85)_100%)]" />
      {tag && (
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-soft">
          {tag}
        </span>
      )}
      <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-surface/90 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur">
        <Star className="h-3 w-3 fill-gold text-gold" />
        {rating.toFixed(1)}
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
        <p className="text-xs uppercase tracking-widest opacity-80">{country}</p>
        <div className="mt-1 flex items-end justify-between gap-3">
          <h3 className="font-display text-2xl font-medium">{city}</h3>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-surface text-foreground transition-transform group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <p className="mt-2 text-sm opacity-90">
          From <span className="font-semibold text-gold">{price}</span> · 5 nights
        </p>
      </div>
    </article>
  );
}
