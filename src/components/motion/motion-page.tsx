"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

export const MotionPage = ({ children }: { children: ReactNode }) => {
  const scope = useRef<HTMLDivElement>(null);
  const introPlayed = useRef(false);

  useLayoutEffect(() => {
    const root = scope.current;
    if (!root) return;

    gsap.registerPlugin(ScrollTrigger, CustomEase);
    CustomEase.create("drew-out", "0.23,1,0.32,1");
    const media = gsap.matchMedia();
    let disposed = false;

    media.add(
      {
        all: "all",
        desktop: "(min-width: 1024px)",
        pointer: "(hover: hover) and (pointer: fine)",
        reduce: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, pointer, reduce } = context.conditions!;

        if (reduce) {
          gsap.from("[data-hero-meta]", { opacity: 0, duration: 0.18, clearProps: "opacity" });
          return;
        }

        // Keep restored scroll positions and anchor visits readable immediately.
        if (!introPlayed.current && window.scrollY < window.innerHeight / 2) {
          gsap.timeline({
            defaults: { ease: "drew-out" },
            onComplete: () => { introPlayed.current = true; },
          })
            .from("[data-hero-line]", { yPercent: 110, duration: 0.9, stagger: 0.08, clearProps: "transform" }, 0)
            .from("[data-hero-frame]", { clipPath: "inset(0 0 100% 0)", duration: 1, clearProps: "clipPath" }, 0.08)
            .from("[data-hero-meta]", { y: 16, opacity: 0, duration: 0.6, stagger: 0.06, clearProps: "opacity,transform" }, 0.3);
        }

        root.querySelectorAll<HTMLElement>("section h2").forEach((heading) => {
          gsap.from(heading, {
            clipPath: "inset(0 0 100% 0)",
            y: 18,
            duration: 0.6,
            ease: "drew-out",
            clearProps: "clipPath,transform",
            scrollTrigger: { trigger: heading, start: "top 88%", once: true },
          });
        });

        root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.from(element, {
            y: 24,
            opacity: 0,
            duration: 0.6,
            ease: "drew-out",
            clearProps: "opacity,transform",
            scrollTrigger: { trigger: element, start: "top 90%", once: true },
          });
        });

        gsap.fromTo("[data-scroll-progress]", { scaleX: 0 }, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: true },
        });

        gsap.fromTo("[data-manifesto-track]", { xPercent: 4 }, {
          xPercent: -18,
          ease: "none",
          scrollTrigger: { trigger: "[data-manifesto]", start: "top bottom", end: "bottom top", scrub: true },
        });

        if (desktop) {
          gsap.to("[data-hero-image]", {
            yPercent: 10,
            ease: "none",
            scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: true },
          });
          root.querySelectorAll<HTMLElement>("[data-parallax-image]").forEach((image) => {
            gsap.fromTo(image, { yPercent: -5 }, {
              yPercent: 5,
              ease: "none",
              scrollTrigger: { trigger: image.parentElement, start: "top bottom", end: "bottom top", scrub: true },
            });
          });
        }

        const cleanup: (() => void)[] = [];
        if (pointer) {
          root.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((element) => {
            const xTo = gsap.quickTo(element, "x", { duration: 0.18, ease: "drew-out" });
            const yTo = gsap.quickTo(element, "y", { duration: 0.18, ease: "drew-out" });
            const move = (event: PointerEvent) => {
              if (event.pointerType !== "mouse") return;
              const bounds = element.getBoundingClientRect();
              xTo(gsap.utils.clamp(-6, 6, (event.clientX - bounds.left - bounds.width / 2) * 0.08));
              yTo(gsap.utils.clamp(-4, 4, (event.clientY - bounds.top - bounds.height / 2) * 0.08));
            };
            const reset = () => { xTo(0); yTo(0); };
            element.addEventListener("pointermove", move);
            element.addEventListener("pointerleave", reset);
            element.addEventListener("focusin", reset);
            cleanup.push(() => {
              element.removeEventListener("pointermove", move);
              element.removeEventListener("pointerleave", reset);
              element.removeEventListener("focusin", reset);
            });
          });
        }

        // Keyboard focus must never wait for a decorative entrance.
        const showFocusedContent = (event: FocusEvent) => {
          const target = (event.target as Element).closest("[data-reveal]");
          if (target) gsap.getTweensOf(target).forEach((tween) => tween.progress(1));
        };
        root.addEventListener("focusin", showFocusedContent);
        return () => {
          root.removeEventListener("focusin", showFocusedContent);
          cleanup.forEach((remove) => remove());
        };
      },
      root,
    );

    document.fonts.ready.then(() => { if (!disposed) ScrollTrigger.refresh(); });
    return () => {
      disposed = true;
      media.revert();
    };
  }, []);

  return (
    <div ref={scope} className="motion-page">
      {children}
      <div data-scroll-progress className="scroll-progress" aria-hidden="true" />
    </div>
  );
};
