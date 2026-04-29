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
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = prev;
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
