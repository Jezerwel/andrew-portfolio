"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { label: "Years", value: "3+" },
    { label: "Clients", value: "50+" },
    { label: "Gym Hours", value: "3500+" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper id="about" className="bg-muted/20 relative overflow-hidden pattern-stripes">
      <div ref={sectionRef} className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <div className="relative">
          <div className="relative aspect-[3/4] overflow-hidden border border-border">
            <Image
              src="/andrew-coach.jpg"
              alt="Andrew Vinz Ganon - Fitness Coach and Competition Prep Specialist"
              fill
              className="object-cover grayscale-[20%] contrast-[1.05]"
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAYH/8QAIhAAAQQBBAMBAAAAAAAAAAAAAQIDBBEABQYSITFBUWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABsRAAICAwEAAAAAAAAAAAAAAAECABEDITFB/9oADAMBAAIRAxEAPwC5Pue7YGo7i0lrUNMeYjyFsOJW2hTqFcVAEAgEV2D3n0xjFKxbFlQvTP/Z"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
          <div className="absolute -top-2 -left-2 w-16 h-16 border-l-2 border-t-2 border-primary" />
          <div className="absolute -bottom-2 -right-2 w-16 h-16 border-r-2 border-b-2 border-primary" />
        </div>
        <div className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
          <div className="inline-block mb-4 px-3 py-1 border border-primary/40 text-[10px] tracking-[0.2em] uppercase text-primary font-bold">
            About
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Your Coach
          </h2>
          <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
            <p>
              I&apos;m Andrew Vinz Ganon. Personal trainer. Nutrition coach. I&apos;ve spent over 3,500 hours in the gym training myself and clients both in-person and online.
            </p>
            <p className="font-medium text-foreground">
              My clients have won 1st place at Mr. Project-E 2025 and placed 3rd in Men&apos;s Physique Novice. I coach both lifestyle clients looking to get lean and competitors preparing for stage.
            </p>
            <p>
              Science-based training. Practical nutrition. No gimmicks. Whether you want to drop fat, build muscle, or step on stage, I build customized programs that get results.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-10">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative text-center p-4 border border-border bg-card/50 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] text-muted-foreground font-bold tracking-[0.15em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
