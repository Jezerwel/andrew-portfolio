import type { ClientTransformation } from "@/lib/types";

export const clientTransformations: ClientTransformation[] = [
  {
    id: "erw",
    name: "Erwin Chavez",
    beforeImage: "/clients/erwbefore.jpg",
    afterImage: "/clients/erwafter.jpg",
    timeframe: "12 weeks",
    stats: {
      weightChange: "-25 lbs",
      muscleGain: "+8 lbs",
    },
    goal: "Bodybuilding Prep",
    testimonial:
      "Prep was very smooth. I won 1st place in the Mr. Project-E 2025.",
    program: "Training + Nutrition Plan",
  },
  {
    id: "fern",
    name: "Jan Fernan Dela Vega",
    beforeImage: "/clients/fernbefore.jpeg",
    afterImage: "/clients/fernafter.jpeg",
    timeframe: "16 weeks",
    stats: {
      weightChange: "-20 lbs",
    },
    goal: "Bodybuilding Prep",
    testimonial:
      "I won 3rd place in the Men's Physique Novice category in Talisay.",
    program: "Training + Nutrition Plan",
  },
  {
    id: "harr",
    name: "Harri Gallenero",
    beforeImage: "/clients/harrbefore.jpg",
    afterImage: "/clients/harrafter.jpg",
    timeframe: "10 weeks",
    stats: {
      weightChange: "-20 lbs",
      bodyFatLoss: "-12% Body Fat",
    },
    goal: "Cutting Phase",
    testimonial: "I haven't lost muscle in the cut.",
    program: "Nutrition Plan",
  },
  {
    id: "redd",
    name: "Redd",
    beforeImage: "/clients/reddbef.jpg",
    afterImage: "/clients/reddaft.jpg",
    timeframe: "14 weeks",
    stats: {
      weightChange: "-35 lbs",
    },
    goal: "Weight Loss",
    testimonial:
      "Life-changing transformation. Could not have done it without Andrew!",
    program: "Training + Nutrition Plan",
  },
];
