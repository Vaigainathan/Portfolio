type PillProps = {
  children: string;
  size?: "md" | "sm";
};

const sizes = {
  md: "gap-2 px-3 py-1 text-pill",
  sm: "gap-1.5 px-2.5 py-0.5 font-mono text-status",
};

export function Pill({ children, size = "md" }: PillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-pill border border-status-border bg-status-tint text-accent-gold ${sizes[size]}`}
    >
      <span className="size-1.5 shrink-0 rounded-pill bg-accent-gold" aria-hidden="true" />
      {children}
    </span>
  );
}
