"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function RFMVisualizer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const legacyRef = useRef<SVGGElement>(null);
  const rfmRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1.5,
        },
      });

      tl.to(legacyRef.current, { opacity: 0, scale: 0.85, duration: 1 }, 0)
        .to(rfmRef.current, { opacity: 1, scale: 1, duration: 1 }, 0.3);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const legacyBars = [
    { x: 20, height: 80, y: 70 },
    { x: 55, height: 50, y: 100 },
    { x: 90, height: 110, y: 40 },
    { x: 125, height: 30, y: 120 },
    { x: 160, height: 90, y: 60 },
    { x: 195, height: 60, y: 90 },
  ];

  const scatterPoints = [
    { cx: 40, cy: 40 }, { cx: 80, cy: 100 }, { cx: 120, cy: 60 },
    { cx: 160, cy: 130 }, { cx: 50, cy: 120 }, { cx: 100, cy: 30 },
    { cx: 140, cy: 90 }, { cx: 180, cy: 50 }, { cx: 70, cy: 80 },
    { cx: 110, cy: 140 }, { cx: 150, cy: 20 }, { cx: 190, cy: 110 },
    { cx: 30, cy: 150 }, { cx: 90, cy: 70 }, { cx: 170, cy: 75 },
  ];

  return (
    <div ref={containerRef} className="relative w-full h-[200px] flex items-center justify-center">
      <svg viewBox="0 0 230 160" className="w-full max-w-[280px] h-auto" aria-hidden="true">
        {/* Legacy scorecard bars */}
        <g ref={legacyRef} opacity={1}>
          {legacyBars.map((bar, i) => (
            <rect
              key={i}
              x={bar.x}
              y={bar.y}
              width={22}
              height={bar.height}
              rx={2}
              fill="#FF4C4C"
              fillOpacity={0.6}
            />
          ))}
          <text x="115" y="158" textAnchor="middle" fontSize="8" fill="#FF4C4C" opacity={0.7}>
            STATIC SCORECARD
          </text>
        </g>

        {/* RFM scatter plot */}
        <g ref={rfmRef} opacity={0}>
          {scatterPoints.map((pt, i) => (
            <circle
              key={i}
              cx={pt.cx}
              cy={pt.cy}
              r={i % 3 === 0 ? 6 : i % 2 === 0 ? 4 : 3}
              fill="#635BFF"
              fillOpacity={0.7}
            />
          ))}
          {/* Trend line */}
          <line x1="25" y1="145" x2="200" y2="20" stroke="#635BFF" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 3" />
          <text x="115" y="158" textAnchor="middle" fontSize="8" fill="#635BFF" opacity={0.7}>
            RFM SIGNAL SPACE
          </text>
        </g>
      </svg>
    </div>
  );
}
