"use client";

import dynamic from "next/dynamic";
import WorldNetworkFallback from "./WorldNetworkFallback";

const WorldGlobeScene = dynamic(() => import("./WorldGlobeScene"), {
  ssr: false,
  loading: () => <WorldNetworkFallback />,
});

export default function WorldNetworkHero() {
  return (
    <div className="relative w-full h-full">
      <WorldGlobeScene />
    </div>
  );
}
