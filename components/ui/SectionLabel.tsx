type SectionLabelProps = { children: string };

export function SectionLabel({ children }: SectionLabelProps) {
  return <p className="font-mono text-section-label text-accent-gold uppercase">{children}</p>;
}
