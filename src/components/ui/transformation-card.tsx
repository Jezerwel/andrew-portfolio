"use client";

import { useState } from "react";
import Image from "next/image";
import type { ClientTransformation } from "@/lib/types";

interface TransformationCardProps {
  client: ClientTransformation;
}

export const TransformationCard = ({ client }: TransformationCardProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div data-reveal className="border border-border bg-card overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden cursor-ew-resize select-none focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary">
        <Image
          src={client.afterImage}
          alt={client.name + " - After: " + client.goal}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-3 right-3 z-20">
          <span className="px-2 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.1em] uppercase">
            After
          </span>
        </div>

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: "inset(0 " + (100 - sliderPosition) + "% 0 0)" }}
        >
          <Image
            src={client.beforeImage}
            alt={client.name + " - Before: " + client.program}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute top-3 left-3 z-20">
            <span className="px-2 py-1 bg-black/80 text-white text-[10px] font-bold tracking-[0.1em] uppercase">
              Before
            </span>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 z-30 w-0.5 bg-white"
          style={{ left: sliderPosition + "%", transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center border-2 border-primary bg-white">
            <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8l-4 4 4 4m6-8 4 4-4 4" />
            </svg>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2">
          <div className="bg-black/60 px-2 py-1 text-[10px] font-medium tracking-wide text-white uppercase">
            Drag or use arrow keys
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={(event) => setSliderPosition(Number(event.target.value))}
          aria-label={"Compare before and after photos for " + client.name}
          aria-valuetext={Math.round(sliderPosition) + "% of the before photo shown"}
          className="absolute inset-0 z-40 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <div className="p-5 bg-card border-t border-border">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold tracking-tight uppercase">{client.name}</h3>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
              {client.goal}
            </p>
          </div>
          <span className="px-2 py-1 bg-gold text-gold-foreground text-[10px] font-bold tracking-[0.1em] uppercase">
            {client.timeframe}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {client.stats.weightChange && (
            <span className="text-[10px] px-2 py-1 border border-primary/30 text-primary font-bold tracking-wide uppercase">
              {client.stats.weightChange}
            </span>
          )}
          {client.stats.muscleGain && (
            <span className="text-[10px] px-2 py-1 border border-primary/30 text-primary font-bold tracking-wide uppercase">
              {client.stats.muscleGain}
            </span>
          )}
          {client.stats.bodyFatLoss && (
            <span className="text-[10px] px-2 py-1 border border-primary/30 text-primary font-bold tracking-wide uppercase">
              {client.stats.bodyFatLoss}
            </span>
          )}
        </div>
        <div className="text-[10px] text-muted-foreground pt-3 border-t border-border font-medium tracking-wide uppercase">
          {client.program}
        </div>
      </div>
    </div>
  );
};
