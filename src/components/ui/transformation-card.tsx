"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import type { ClientTransformation } from "@/lib/types";

interface TransformationCardProps {
  client: ClientTransformation;
}

export const TransformationCard = ({ client }: TransformationCardProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
      setSliderPosition(percent);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  return (
    <div className="border border-border bg-card overflow-hidden group hover:border-primary/40 transition-colors duration-300">
      <div
        ref={containerRef}
        className="relative aspect-[4/5] overflow-hidden cursor-ew-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        role="slider"
        aria-label={`Before and after comparison for ${client.name}`}
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
      >
        <div className="absolute inset-0">
          <Image
            src={client.afterImage}
            alt={`${client.name} - After: ${client.goal}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAYH/8QAIhAAAQQBBAMBAAAAAAAAAAAAAQIDBBEABQYSITFBUWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABsRAAICAwEAAAAAAAAAAAAAAAECABEDITFB/9oADAMBAAIRAxEAPwC5Pue7YGo7i0lrUNMeYjyFsOJW2hTqFcVAEAgEV2D3n0xjFKxbFlQvTP/Z"
          />
          <div className="absolute top-3 right-3 z-20">
            <span className="px-2 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.1em] uppercase">
              After
            </span>
          </div>
        </div>
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={client.beforeImage}
            alt={`${client.name} - Before: ${client.program}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAYH/8QAIhAAAQQBBAMBAAAAAAAAAAAAAQIDBBEABQYSITFBUWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABsRAAICAwEAAAAAAAAAAAAAAAECABEDITFB/9oADAMBAAIRAxEAPwC5Pue7YGo7i0lrUNMeYjyFsOJW2hTqFcVAEAgEV2D3n0xjFKxbFlQvTP/Z"
          />
          <div className="absolute top-3 left-3 z-20">
            <span className="px-2 py-1 bg-black/80 text-white text-[10px] font-bold tracking-[0.1em] uppercase">
              Before
            </span>
          </div>
        </div>
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white z-30"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white flex items-center justify-center border-2 border-primary">
            <svg
              className="w-4 h-4 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <div className="px-2 py-1 bg-black/60 text-white text-[10px] font-medium tracking-wide uppercase">
            Drag to compare
          </div>
        </div>
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
