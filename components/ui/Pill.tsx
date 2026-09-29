type PillProps = { children: string; size?: "md" | "sm" | "category" };

const sizes = {
  md: "gap-2 border-status-border bg-status-tint px-3 py-1 text-pill",
  sm: "gap-1.5 border-status-border bg-status-tint px-2.5 py-0.5 font-mono text-status",
  category: "border-status-border bg-status-tint-deep px-2.5 py-0.5 font-mono text-label uppercase",
};

export function Pill({ children, size = "md" }: PillProps) {
  return (
    <span className={`inline-flex items-center rounded-pill border text-accent-gold ${sizes[size]}`}>
      {size !== "category" && (
        <span className="size-1.5 shrink-0 rounded-pill bg-accent-gold" aria-hidden="true" />
      )}
      {children}
    </span>
  );
}
