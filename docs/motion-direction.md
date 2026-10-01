# Built By Drew motion direction

Black/red brutalism, oversized editorial type, hard photo frames, native scrolling. GSAP owns coordinated entrances and scroll motion; CSS owns press and hover feedback. Existing photos, program options, and contact details are retained.

## Opportunities and gate decisions

| # | Location | Today | Purpose | Frequency | Suggested motion |
| --- | --- | --- | --- | --- | --- |
| 1 | `hero-section.tsx` | Centered text covers the portrait | Delight | First visit | Separate text and portrait; headline `translateY(110%) → 0`, 900ms, 80ms stagger; portrait `clip-path: inset(0 0 100% 0) → inset(0)`, 1000ms. Curve: `cubic-bezier(0.23, 1, 0.32, 1)`. Reduced motion keeps both visible and fades supporting copy over 180ms. |
| 2 | `motion-page.tsx`, section headings/cards | Independent or absent entrances | Preventing a jarring change | Once per section | Heading clip reveal + `translateY(18px → 0)`; cards `opacity: 0 → 1`, `translateY(24px → 0)`; 600ms with the same curve, triggered at 88–90% viewport, once. Reduced motion keeps sections immediately visible. Keyboard focus completes an entrance immediately. |
| 3 | `hero-section.tsx`, `about-section.tsx` | Photo frames have no scroll depth | Spatial consistency | First scroll | Desktop only: hero image `translateY(0 → 10%)`, gallery images `translateY(-5% → 5%)`, linear progress tied directly to native scroll. Clip within overscanned frames; no parallax on mobile or reduced motion. |
| 4 | `hero-section.tsx` manifesto band | No bridge between the hero and coach section | Delight | First scroll | Outlined/fill typography, horizontal `translateX(4% → -18%)`, linear progress across viewport traversal. No autonomous loop; static under reduced motion. |
| 5 | Instagram CTA wrappers | Press feedback exists; no pointer response | Feedback | Occasional hover | Fine mouse pointer only: maximum ±6px X / ±4px Y, 180ms with the same curve; reset on leave/focus. Arrow travels 2px diagonally over 180ms. No tracking or arrow movement under reduced motion. |

## Rejected candidates

- Comparison sliders: rejected by Function. The native range input and photo wipe must follow the user's pointer/arrow keys directly; decorative easing would reduce precision.
- Rolling statistics/program names: rejected by Function. These are information to read. Values remain static after their container enters.
- Custom cursor and scroll hijacking: rejected by Function. They replace familiar input behavior without helping coaching inquiries.
- Keyboard navigation transitions: rejected by Frequency/input method. Focus and anchor navigation remain native; no GSAP delay.

## Verdict

The hero composition and coordinated introduction provide the strongest change. The rest of the motion supports the first browse without replaying section entrances on every pass. The opportunity-finding pass hands these recipes to the `animate` implementation in `MotionPage`; it adds no separate animation framework or gesture abstraction.

## Vocabulary

- **Reveal** — Content is uncovered gradually, often by animating a clip-path or mask.
- **Orchestration** — Deliberately timing multiple animations so they feel like one coordinated motion.
- **Parallax** — Background and foreground move at different speeds while scrolling, creating depth.
- **Scroll-driven animation** — An animation whose progress is tied directly to scroll position.

## Implementation references

- [GSAP matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/): conditions, selector scope, and automatic reversion when media queries change.
- [GSAP context](https://gsap.com/docs/v3/GSAP/gsap.context()/): scoped animation cleanup.
- [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/): scrubbed progress and once-only entrances.
- [CustomEase](https://gsap.com/docs/v3/Eases/CustomEase/): the exact existing UI ease-out curve.

## Repeatable browser check

Run `npm run dev`, open `http://127.0.0.1:3000/`, then inspect:

1. At 1280px: headline/portrait enter together, Andrew is horizontally centered, and the headline does not cover his face. Scroll down/up: photos and manifesto track scroll; section entrances play once.
2. At 390px: hero stacks, all CTA text fits, photo stays centered; no photo parallax or pointer tracking. Program options and comparison sliders remain usable.
3. Tab through links and comparison inputs: focus is visible and no focused card remains transparent. Slider arrow keys update the comparison directly.
4. Toggle `prefers-reduced-motion: reduce` while scrolled: inline movement/clip styles revert, content stays visible, and progress indicator disappears. Toggle back: one controller remains active; no duplicate event response.
5. Open `/#contact` and `/#transformations` directly. Content is readable without an intro or jump to the top.

After step 4, the following read-only browser-console check is runnable without dependencies. It fails if the reduced-motion branch leaves content hidden or translated:

```js
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce) throw new Error('Enable reduced motion before this check.');
for (const el of document.querySelectorAll('[data-reveal], section h2, [data-hero-frame], [data-hero-image], [data-parallax-image], [data-manifesto-track], [data-magnetic]')) {
  const css = getComputedStyle(el);
  if (css.opacity !== '1' || css.transform !== 'none' || !['none', 'inset(0px)'].includes(css.clipPath)) {
    throw new Error('Motion did not revert: ' + el.outerHTML.slice(0, 120));
  }
}
console.log('Reduced-motion content is visible and stationary.');
```

## Observed local checks — 2026-10-02

- `npm run lint` and `npm run build`: passed. The production preview returned HTTP 200.
- Desktop and 390px phone viewports: centered hero portrait, all images loaded, no horizontal overflow on the phone.
- Native proof anchor reached `#transformations`; comparison keyboard input changed 50 → 51 → 50. All four handles use horizontal chevrons.
- Reduced motion at the top and while scrolled: zero hidden or transformed motion targets; progress indicator hidden. Phone photo parallax was inactive.
- Browser media and viewport overrides were reset after inspection. These results cover the local preview.
