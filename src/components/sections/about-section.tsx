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
    { label: "Gym Hours", value: "3,500+" },
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
          <div className="grid grid-cols-2 gap-2 border border-border bg-background p-2">
            <figure className="relative aspect-[3/4] overflow-hidden border border-border">
              <Image
                src="/andrew-coach.jpg"
                alt="Andrew posing in a gym portrait"
                fill
                className="about-photo object-cover object-[center_38%] grayscale-[20%] contrast-[1.05]"
                sizes="(max-width: 767px) 45vw, 22vw"
              />
            </figure>
            <figure className="relative aspect-[3/4] overflow-hidden border border-border">
              <Image
                src="/andrew-gym-pose.jpg"
                alt="Andrew posing in a dark gym"
                fill
                className="about-photo object-cover object-[center_32%] grayscale-[20%] contrast-[1.05]"
                sizes="(max-width: 767px) 45vw, 22vw"
              />
            </figure>
            <figure className="relative col-span-2 aspect-[3/2] overflow-hidden border border-border">
              <Image
                src="/andrew-back-pose.jpg"
                alt="Andrew showing a rear pose at home"
                fill
                className="about-photo object-cover object-[center_38%] grayscale-[20%] contrast-[1.05]"
                sizes="(max-width: 767px) 92vw, 45vw"
              />
            </figure>
          </div>
          <div className="absolute -top-2 -left-2 w-16 h-16 border-l-2 border-t-2 border-primary" />
          <div className="absolute -bottom-2 -right-2 w-16 h-16 border-r-2 border-b-2 border-primary" />
        </div>
        <div className={"motion-reveal transition-[opacity,transform] duration-300 ease-out " + (isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8")}>
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
                className={"motion-reveal relative text-center p-4 border border-border bg-card/50 transition-[opacity,transform] duration-300 ease-out " + (
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: 200 + index * 100 + "ms" }}
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
