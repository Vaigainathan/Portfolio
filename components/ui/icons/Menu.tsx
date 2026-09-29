import type { IconProps } from "./types";

export function Menu({ size, ...props }: IconProps) {
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
      <path d="M0 2.5h16v1.5H0V2.5zm0 4.75h16v1.5H0V7.25zm0 4.75h16v1.5H0V12z" fill="currentColor" />
    </svg>
  );
}
