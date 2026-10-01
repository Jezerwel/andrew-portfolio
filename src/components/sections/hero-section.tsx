import Image from "next/image";
import { ArrowDown, ArrowUpRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data/site-config";

export const HeroSection = () => {
  return (
    <>
      <section data-hero id="top" className="hero-stage relative overflow-hidden bg-[#080706] text-white pattern-stripes">
        <div className="hero-layout max-w-7xl mx-auto px-5 sm:px-8">
          <div className="hero-copy relative z-10">
            <div data-hero-meta className="flex items-center gap-3 mb-8 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-white/60">
              <span className="h-2 w-2 bg-primary" aria-hidden="true" />
              Fitness coach / Body transformation
            </div>
            <h1 className="hero-title" aria-label={siteConfig.tagline}>
              <span className="hero-title-line" aria-hidden="true">
                <span data-hero-line>No shortcuts.</span>
              </span>
              <span className="hero-title-line text-primary" aria-hidden="true">
                <span data-hero-line>Just results.</span>
              </span>
            </h1>
            <p data-hero-meta className="mt-8 max-w-md text-base sm:text-lg leading-relaxed text-white/60">
              Fat loss. Muscle building. Competition prep.
              <span className="block text-white mt-1">Real transformations. Proven methods.</span>
            </p>
            <div data-hero-meta className="flex flex-col sm:flex-row gap-3 mt-8 sm:mt-10">
              <div data-magnetic className="inline-flex">
                <Button asChild size="lg" className="w-full min-h-14 rounded-none px-5 text-xs font-bold uppercase tracking-[0.1em]">
                  <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram aria-hidden="true" />
                    DM on Instagram
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
              <Button asChild size="lg" variant="outline" className="min-h-14 rounded-none px-5 text-xs bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white font-bold uppercase tracking-[0.1em]">
                <a href="#transformations">See the proof <ArrowDown aria-hidden="true" /></a>
              </Button>
            </div>
            <div data-hero-meta className="mt-10 sm:mt-12 pt-5 border-t border-white/15 flex items-center justify-between gap-6 text-[10px] uppercase tracking-[0.15em] text-white/45">
              <span>Science-based training.<br />Practical nutrition.</span>
              <a href="#about" className="inline-flex items-center gap-3 min-h-11 text-white/70 hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4">
                Meet your coach <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <figure className="hero-portrait-wrap relative">
            <div data-hero-frame className="hero-portrait relative overflow-hidden border border-white/15">
              <div data-hero-image className="absolute -inset-y-[7%] left-0 w-[140%]">
                <Image
                  src="/andrew-monochrome.jpg"
                  alt="Andrew posing in a monochrome gym portrait"
                  fill
                  className="object-cover object-[center_58%] contrast-[1.1]"
                  priority
                  sizes="(min-width: 1024px) 55vw, 140vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 right-4 text-[10px] tracking-[0.15em] uppercase text-white/50" aria-hidden="true">01 / 06</div>
              <div data-hero-meta className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <span className="text-[10px] uppercase tracking-[0.18em] text-white/60">Built through<br /><span className="text-white">the work.</span></span>
                <span className="text-5xl font-bold text-primary font-heading" aria-hidden="true">↗</span>
              </div>
            </div>
            <figcaption data-hero-meta className="flex justify-between gap-4 mt-4 text-[10px] uppercase tracking-[0.12em] text-white/45">
              <span>Andrew Vinz Ganon</span>
              <span>Personal / Online coaching</span>
            </figcaption>
            <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-primary pointer-events-none" aria-hidden="true" />
          </figure>
        </div>
      </section>
      <div data-manifesto className="manifesto-band border-y border-border overflow-hidden py-6 sm:py-8 bg-background" aria-hidden="true">
        <div data-manifesto-track className="manifesto-track flex items-center gap-8 sm:gap-12 w-max">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex items-center gap-8 sm:gap-12">
              <span className="text-primary">No shortcuts.</span>
              <span className="manifesto-outline">Just results.</span>
              <span className="text-primary text-[0.65em]">↗</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
