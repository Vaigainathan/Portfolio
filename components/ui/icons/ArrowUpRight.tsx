import type { IconProps } from "./types";

export function ArrowUpRight({ size, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8.125 8.125"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M0.875 8.125L0 7.25L6 1.25H0.625V0H8.125V7.5H6.875V2.125L0.875 8.125V8.125"
        fill="currentColor"
      />
    </svg>
  );
}
