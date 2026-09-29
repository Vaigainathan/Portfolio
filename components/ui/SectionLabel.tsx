type SectionLabelProps = { children: string; dot?: boolean; tone?: "gold" | "muted" };

const tones = {
  gold: "font-medium text-accent-gold",
  muted: "font-normal text-text-dim",
};

export function SectionLabel({ children, dot = false, tone = "gold" }: SectionLabelProps) {
  return (
    <p className={`flex items-center gap-2 font-mono text-section-label uppercase ${tones[tone]}`}>
      {dot && <span className="size-2 shrink-0 rounded-pill bg-accent-gold" aria-hidden="true" />}
      {children}
    </p>
  );
}
