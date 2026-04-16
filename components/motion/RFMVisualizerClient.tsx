"use client";

import dynamic from "next/dynamic";

const RFMVisualizer = dynamic(
  () => import("@/components/motion/RFMVisualizer").then((m) => m.RFMVisualizer),
  { ssr: false, loading: () => <div className="w-full h-[200px]" /> }
);

export function RFMVisualizerClient() {
  return <RFMVisualizer />;
}
