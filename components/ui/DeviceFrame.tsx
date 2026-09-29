import Image from "next/image";
import { Card } from "@/components/ui/Card";

type DeviceFrameProps = {
  variant: "browser" | "phone" | "screen";
  src: string;
  alt: string;
  caption?: string;
  chromeLabel?: string;
};

const CAPTION_SEPARATOR = " — ";

type ScreenProps = { src: string; alt: string; sizes: string; aspect: string };

function Screen({ src, alt, sizes, aspect }: ScreenProps) {
  return (
    <div className={`relative w-full ${aspect}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" />
    </div>
  );
}

export function DeviceFrame({ variant, src, alt, caption, chromeLabel }: DeviceFrameProps) {
  if (variant === "screen") {
    return (
      <figure className="w-full overflow-hidden rounded-card border border-border-card shadow-card">
        <Screen src={src} alt={alt} sizes="505px" aspect="aspect-desktop" />
      </figure>
    );
  }

  if (variant === "browser") {
    return (
      <Card as="figure" tone="frame" className="overflow-hidden shadow-frame">
        <div className="flex h-12 items-center gap-2 border-b border-border bg-frame-chrome px-4">
          <span className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-pill bg-chrome-dot" />
            <span className="size-2.5 rounded-pill bg-chrome-dot" />
            <span className="size-2.5 rounded-pill bg-chrome-dot" />
          </span>
          {chromeLabel && (
            <span className="pl-2 font-mono text-caption text-text-muted">{chromeLabel}</span>
          )}
        </div>
        <div className="bg-frame-well p-3">
          <div className="relative overflow-hidden rounded-tile border border-border-card">
            <Screen src={src} alt={alt} sizes="535px" aspect="aspect-desktop" />
            {caption && (
              <figcaption className="absolute bottom-3 left-3 rounded-caption border border-border-strong bg-caption-bg px-3 py-1.5 text-caption font-medium text-text backdrop-blur-caption">
                {caption}
              </figcaption>
            )}
          </div>
        </div>
      </Card>
    );
  }

  const [title, subline] = caption ? caption.split(CAPTION_SEPARATOR) : [];

  return (
    <Card as="figure" tone="frame" className="flex w-full flex-col p-3 shadow-card">
      <div className="overflow-hidden rounded-tile border border-border-card pb-0.75">
        <Screen src={src} alt={alt} sizes="136px" aspect="aspect-phone" />
      </div>
      {title && (
        <figcaption className="flex flex-col items-center px-1 pt-3 text-center">
          <span className="text-caption font-medium text-text">{title}</span>
          {subline && <span className="text-tag text-text-dim">{subline}</span>}
        </figcaption>
      )}
    </Card>
  );
}
