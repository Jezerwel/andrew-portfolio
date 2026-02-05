import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "lifestyle-coaching",
    title: "Lifestyle Coaching",
    description:
      "For those who want to get lean, build muscle, and look better. Custom training and nutrition plans built around your schedule and goals.",
    features: [
      "Personalized training program",
      "Custom nutrition plan",
      "Weekly check-ins",
      "Form corrections",
    ],
    icon: "01",
  },
  {
    id: "competition-prep",
    title: "Competition Prep",
    description:
      "Stage-ready physiques. Peak week protocols. Posing guidance. For bodybuilding, physique, and bikini competitors who want to place.",
    features: [
      "Contest prep programming",
      "Peak week strategy",
      "Posing coaching",
      "Show day support",
    ],
    icon: "02",
  },
  {
    id: "online-coaching",
    title: "Online Coaching",
    description:
      "Same proven methods, delivered remotely. Full training and nutrition programming with video check-ins and direct access.",
    features: [
      "Remote programming",
      "Video form checks",
      "Direct messaging support",
      "Weekly adjustments",
    ],
    icon: "03",
  },
  {
    id: "nutrition-only",
    title: "Nutrition Only",
    description:
      "Already training but need help with diet? Get a custom meal plan and macro guidance to finally see the results you've been missing.",
    features: [
      "Custom meal plan",
      "Macro calculations",
      "Food flexibility",
      "Ongoing adjustments",
    ],
    icon: "04",
  },
];
