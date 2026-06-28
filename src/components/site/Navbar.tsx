import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/flights", label: "Flights" },
  { to: "/hotels", label: "Hotels" },
  { to: "/packages", label: "Packages" },
  { to: "/bus", label: "Bus" },
  { to: "/trains", label: "Trains" },
  { to: "/cabs", label: "Cabs" },
  { to: "/visa", label: "Visa" },
  { to: "/insurance", label: "Insurance" },
  { to: "/activities", label: "Activities" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 surface-glass">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-8">
          <Logo />
          <nav className="hidden xl:flex items-center gap-1 text-sm">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "rounded-full px-3 py-2 bg-secondary text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/offers"
            className="hidden md:inline-flex items-center rounded-full bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent"
          >
            Flash sale · 30% off
          </Link>
          <Link
            to="/contact"
            className="hidden sm:inline-flex h-9 items-center gap-2 rounded-full border border-border bg-surface px-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <User className="h-4 w-4" />
            Sign in
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="xl:hidden border-t border-border/60 bg-surface">
          <div className="container-page grid grid-cols-2 gap-1 py-3 sm:grid-cols-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              Sign in
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
