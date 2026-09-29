import Image from "next/image";
import { Card } from "@/components/ui/Card";

type DeviceFrameProps = {
  variant: "browser" | "phone";
  src: string;
  alt: string;
  caption: string;
  chromeLabel?: string;
};

const CAPTION_SEPARATOR = " — ";

function Screen({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
  return (
    <div className="relative h-80 w-full">
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" />
    </div>
  );
}

export function DeviceFrame({ variant, src, alt, caption, chromeLabel }: DeviceFrameProps) {
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
            <Screen src={src} alt={alt} sizes="532px" />
            <figcaption className="absolute bottom-3 left-3 rounded-caption border border-border-strong bg-caption-bg px-3 py-1.5 text-caption font-medium text-text backdrop-blur-caption">
              {caption}
            </figcaption>
          </div>
        </div>
      </Card>
    );
  }

  const [title, subline] = caption.split(CAPTION_SEPARATOR);

  return (
    <Card as="figure" tone="frame" className="flex flex-col justify-between p-3 shadow-card">
      <div className="overflow-hidden rounded-tile border border-border-card pb-0.75">
        <Screen src={src} alt={alt} sizes="161px" />
      </div>
      <figcaption className="flex flex-col items-center px-1 pt-3 text-center">
        <span className="text-caption font-medium text-text">{title}</span>
        {subline && <span className="text-tag text-text-dim">{subline}</span>}
      </figcaption>
    </Card>
  );
}
