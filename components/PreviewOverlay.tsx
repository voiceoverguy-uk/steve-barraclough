"use client";

import { useEffect } from "react";

export default function PreviewOverlay() {
  useEffect(() => {
    const prevent = (e: Event) => e.preventDefault();
    const blockClicks = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    document.addEventListener("contextmenu", prevent);
    document.addEventListener("selectstart", prevent);
    document.addEventListener("copy", prevent);
    document.addEventListener("cut", prevent);
    document.addEventListener("click", blockClicks, true);
    document.addEventListener("mousedown", blockClicks, true);

    return () => {
      document.removeEventListener("contextmenu", prevent);
      document.removeEventListener("selectstart", prevent);
      document.removeEventListener("copy", prevent);
      document.removeEventListener("cut", prevent);
      document.removeEventListener("click", blockClicks, true);
      document.removeEventListener("mousedown", blockClicks, true);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99999,
          backgroundColor: "#0d1b2a",
          color: "#ffce00",
          textAlign: "center",
          padding: "10px 16px",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.05em",
          fontFamily: "'Inter', sans-serif",
          borderBottom: "2px solid #ffce00",
        }}
      >
        PREVIEW ONLY — NOT FOR DISTRIBUTION
      </div>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99998,
          pointerEvents: "none",
          userSelect: "none",
          WebkitUserSelect: "none",
          overflow: "hidden",
        }}
      >
        <svg
          width="100%"
          height="100%"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <pattern
              id="preview-watermark"
              patternUnits="userSpaceOnUse"
              width="400"
              height="300"
              patternTransform="rotate(-30)"
            >
              <text
                x="200"
                y="150"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="rgba(0,0,0,0.07)"
                fontSize="48"
                fontWeight="900"
                fontFamily="'Montserrat', 'Inter', sans-serif"
                letterSpacing="12"
              >
                PREVIEW
              </text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#preview-watermark)" />
        </svg>
      </div>
    </>
  );
}
