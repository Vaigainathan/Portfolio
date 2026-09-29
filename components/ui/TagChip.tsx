type TagChipProps = { children: string };

export function TagChip({ children }: TagChipProps) {
  return (
    <span className="rounded-tag border border-border bg-surface-tag px-2 py-1 font-mono text-tag text-text-soft">
      {children}
    </span>
  );
}
