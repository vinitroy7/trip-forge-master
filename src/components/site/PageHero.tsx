import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, image, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          width={1920}
          height={900}
          loading="eager"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.18_0.04_230/0.55)_0%,oklch(0.18_0.04_230/0.75)_100%)]" />
      </div>
      <div className="container-page relative pt-16 pb-24 sm:pt-24 sm:pb-32">
        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary-foreground backdrop-blur">
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl font-medium text-primary-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
          {description}
        </p>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
