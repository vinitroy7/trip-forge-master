import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl">{title}</h2>
        {description && (
          <p className="mt-3 text-base text-muted-foreground">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}
