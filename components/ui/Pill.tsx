type PillProps = { children: string; size?: "md" | "sm" | "category" | "outline" };

const sizes = {
  md: "gap-2 border-status-border bg-status-tint px-3 py-1 text-pill text-accent-gold",
  sm: "gap-1.5 border-status-border bg-status-tint px-2.5 py-0.5 font-mono text-status text-accent-gold",
  category:
    "border-status-border bg-status-tint-deep px-2.5 py-0.5 font-mono text-label text-accent-gold uppercase",
  outline: "gap-2.5 border-accent-gold bg-surface-pill px-4 py-2 text-caption text-text-soft",
};

const dots = {
  md: "size-1.5",
  sm: "size-1.5",
  category: null,
  outline: "size-2",
};

export function Pill({ children, size = "md" }: PillProps) {
  const dot = dots[size];

  return (
    <span className={`inline-flex items-center rounded-pill border ${sizes[size]}`}>
      {dot && <span className={`${dot} shrink-0 rounded-pill bg-accent-gold`} aria-hidden="true" />}
      {children}
    </span>
  );
}
