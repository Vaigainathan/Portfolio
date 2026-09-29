import type { IconProps } from "./types";

export function Close({ size, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M1.4.3 0 1.7 6.3 8 0 14.3 1.4 15.7 7.7 9.4 14.1 15.7 15.5 14.3 9.1 8 15.5 1.7 14.1.3 7.7 6.6 1.4.3z"
        fill="currentColor"
      />
    </svg>
  );
}
