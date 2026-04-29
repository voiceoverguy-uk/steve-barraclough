"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const COMING_SOON = process.env.NEXT_PUBLIC_COMING_SOON === "true";

export default function ComingSoonOverlay() {
  const pathname = usePathname();

  const active = COMING_SOON && !pathname.startsWith("/the-pitch");

  useEffect(() => {
    if (!active) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "transparent",
        pointerEvents: "all",
        userSelect: "none",
        WebkitUserSelect: "none",
        cursor: "default",
        touchAction: "none",
      }}
      onWheel={(e) => e.preventDefault()}
      onTouchMove={(e) => e.preventDefault()}
    />
  );
}
