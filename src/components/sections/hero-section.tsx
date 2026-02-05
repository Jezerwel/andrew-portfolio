"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data/site-config";

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInstagramClick = () => {
    window.open(siteConfig.social.instagram, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/andrew-coach.jpg"
          alt="Andrew Vinz Ganon - Fitness Coach and Body Transformation Specialist"
          fill
          className="object-cover brightness-[0.25] contrast-[1.1]"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAYH/8QAIhAAAQQBBAMBAAAAAAAAAAAAAQIDBBEABQYSITFBUWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABsRAAICAwEAAAAAAAAAAAAAAAECABEDITFB/9oADAMBAAIRAxEAPwC5Pue7YGo7i0lrUNMeYjyFsOJW2hTqFcVAEAgEV2D3n0xjFKxbFlQvTP/Z"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/95" />
        <div className="absolute inset-0 hero-gradient animate-gradient opacity-60" />
        <div className="absolute inset-0 noise-overlay" />
      </div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div
          className={`inline-block mb-6 px-4 py-1.5 border border-white/20 bg-white/5 text-xs tracking-[0.2em] uppercase transition-all duration-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Fitness Coach & Body Transformation Specialist
        </div>
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-[0.04em] transition-all duration-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          {siteConfig.tagline}
        </h1>
        <p
          className={`text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto font-light tracking-wide transition-all duration-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Fat loss. Muscle building. Competition prep. Lifestyle coaching.
          <span className="block mt-2 text-primary font-medium">
            Real transformations. Proven methods.
          </span>
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <Button
            size="lg"
            className="text-base px-8 py-6 bg-primary hover:bg-primary/90 font-bold tracking-[0.1em] uppercase border-2 border-primary"
            onClick={handleInstagramClick}
            aria-label="Send a direct message on Instagram"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            DM Me On Instagram
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 py-6 bg-transparent hover:bg-white/10 text-white border-2 border-white/40 hover:border-white/60 font-bold tracking-[0.1em] uppercase"
            onClick={() => scrollToSection("transformations")}
          >
            See The Proof
          </Button>
        </div>
      </div>
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-500 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "500ms" }}
      >
        <button
          onClick={() => scrollToSection("about")}
          className="text-white/50 hover:text-white transition-colors"
          aria-label="Scroll to next section"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
      <div className="absolute top-0 left-0 w-24 h-24 border-l border-t border-white/10 m-6 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-white/10 m-6 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-primary/20 m-6 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-primary/20 m-6 pointer-events-none" />
    </section>
  );
};
