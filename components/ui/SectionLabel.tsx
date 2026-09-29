type SectionLabelProps = { children: string; dot?: boolean };

export function SectionLabel({ children, dot = false }: SectionLabelProps) {
  return (
    <p className="flex items-center gap-2 font-mono text-section-label text-accent-gold uppercase">
      {dot && <span className="size-2 shrink-0 rounded-pill bg-accent-gold" aria-hidden="true" />}
      {children}
    </p>
  );
}
