import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2 font-display text-xl font-semibold tracking-tight ${
        light ? "text-primary-foreground" : "text-foreground"
      }`}
    >
      <span
        aria-hidden
        className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-sunset)] text-accent-foreground shadow-glow"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M2 12c5-1 7-3 8-8 1 5 3 7 8 8-5 1-7 3-8 8-1-5-3-7-8-8Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span>
        Go<span className="text-gradient-sunset">Holiday</span>
      </span>
    </Link>
  );
}
