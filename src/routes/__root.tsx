import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">404</p>
        <h1 className="mt-3 font-display text-4xl font-medium">Off the beaten track</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          We couldn't find the page you were looking for. Let's get you back on the road.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--gradient-cta)] px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-medium">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-input bg-background px-4 py-2 text-sm font-medium text-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GoHoliday — Flights, Hotels, Holiday Packages & More" },
      {
        name: "description",
        content:
          "Book flights, hotels, holiday packages, buses, trains and cabs at the best prices. Plan your trip with GoHoliday — your premium travel companion.",
      },
      { name: "author", content: "GoHoliday" },
      { name: "theme-color", content: "#0e3a4a" },
      { property: "og:site_name", content: "GoHoliday" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@goholiday" },
      { property: "og:title", content: "GoHoliday — Flights, Hotels, Holiday Packages & More" },
      { name: "twitter:title", content: "GoHoliday — Flights, Hotels, Holiday Packages & More" },
      { name: "description", content: "Voyage Pro is a comprehensive travel booking platform offering flights, hotels, packages, and more." },
      { property: "og:description", content: "Voyage Pro is a comprehensive travel booking platform offering flights, hotels, packages, and more." },
      { name: "twitter:description", content: "Voyage Pro is a comprehensive travel booking platform offering flights, hotels, packages, and more." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cb48aeec-cd22-40d7-bc6c-dba0f27e3a09/id-preview-33ee351a--d32d8b09-529c-426b-89b2-e519bb2a3d33.lovable.app-1782659010411.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cb48aeec-cd22-40d7-bc6c-dba0f27e3a09/id-preview-33ee351a--d32d8b09-529c-426b-89b2-e519bb2a3d33.lovable.app-1782659010411.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "GoHoliday",
          url: "/",
          sameAs: [],
          description:
            "Online travel marketplace for flights, hotels, holiday packages, buses, trains, cabs, visas, insurance and activities.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
