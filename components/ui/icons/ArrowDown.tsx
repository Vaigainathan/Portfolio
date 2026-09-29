import type { IconProps } from "./types";

export function ArrowDown({ size, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10.6667 10.6667"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M4.66667 0V8.11667L0.933333 4.38333L0 5.33333L5.33333 10.6667L10.6667 5.33333L9.73333 4.38333L6 8.11667V0H4.66667V0"
        fill="currentColor"
      />
    </svg>
  );
}
