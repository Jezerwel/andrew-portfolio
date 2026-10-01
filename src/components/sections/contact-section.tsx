import { ArrowUpRight, Instagram, Mail } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data/site-config";

export const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="bg-muted/20 relative overflow-hidden pattern-stripes">
      <div className="text-center mb-12 relative z-10">
        <div className="inline-block mb-4 px-3 py-1 border border-primary/40 text-[10px] tracking-[0.2em] uppercase text-primary font-bold">
          Start Now
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          Ready To Work?
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          DM me on Instagram to get started. I&apos;ll reply within 24 hours.
        </p>
      </div>
      <div className="max-w-xl mx-auto relative z-10">
        <div className="border border-border border-t-2 border-t-primary bg-card p-6 sm:p-8 text-center">
          <Instagram aria-hidden="true" className="w-8 h-8 text-primary mx-auto mb-4" />
          <p className="text-lg font-semibold mb-2">@drewliftz1</p>
          <p className="text-sm text-muted-foreground mb-6">
            Tell me your goal and how many days you can train.
          </p>
          <Button
            asChild
            size="lg"
            className="w-full min-h-14 rounded-none text-sm sm:text-base px-4 font-bold tracking-[0.08em] uppercase border-2 border-primary"
          >
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram aria-hidden="true" />
              DM on Instagram
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </div>
        <div className="mt-3 grid gap-3">
          {siteConfig.social.email && (
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="flex items-center gap-4 p-5 border border-border bg-card/50 hover:border-primary hover:bg-card transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
            >
              <Mail aria-hidden="true" className="w-5 h-5 text-primary shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide mb-1">Email</p>
                <p className="text-base text-foreground break-all">{siteConfig.social.email}</p>
              </div>
            </a>
          )}
          {siteConfig.social.tiktok && (
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 border border-border bg-card/50 hover:border-primary hover:bg-card transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
            >
              <svg aria-hidden="true" className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.6 0h-4.1v16.4a3.1 3.1 0 1 1-2.7-3.1V9.1a7.3 7.3 0 1 0 6.8 7.3V8.1a9.8 9.8 0 0 0 5.7 1.8V5.8A5.7 5.7 0 0 1 16.6 0Z" />
              </svg>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide mb-1">TikTok</p>
                <p className="text-base text-foreground">@drewliftz1</p>
              </div>
              <ArrowUpRight aria-hidden="true" className="w-5 h-5 text-muted-foreground shrink-0" />
            </a>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};
