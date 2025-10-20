import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "one-on-one",
    title: "One-on-One Training",
    description:
      "Personalized training sessions tailored to your specific goals, fitness level, and schedule. Get the attention and expertise you deserve.",
    features: [
      "Tailored exercise selection",
      "Progressive overload programming",
      "Form coaching and technique",
      "Training program adjustments",
    ],
    icon: "🏋️",
  },
  {
    id: "nutrition",
    title: "Nutrition Coaching",
    description:
      "Custom meal plans and nutritional guidance to fuel your body properly and maximize your results both in and out of the gym.",
    features: [
      "Customized meal plans",
      "Macro and calorie guidance",
      "Flexible dieting approach",
      "Ongoing nutritional support",
    ],
    icon: "🥗",
  },
  {
    id: "online",
    title: "Online Training",
    description:
      "Can't make it to the gym? No problem. Get professional guidance with custom workout plans and video check-ins",
    features: [
      "Remote coaching",
      "Video form checks",
      "Weekly progress reviews",
      "Flexible scheduling",
    ],
    icon: "📱",
  },
  {
    id: "group",
    title: "Group Sessions",
    description:
      "Train with friends and stay motivated in small group settings. Perfect for teams or workout buddies looking to stay accountable.",
    features: [
      "Small group training",
      "Shared accountability",
      "Fun atmosphere",
      "Cost-effective option",
    ],
    icon: "👥",
  },
  {
    id: "goal-tracking",
    title: "Goal Setting & Tracking",
    description:
      "Set realistic goals and track your progress with regular assessments, measurements, and performance evaluations.",
    features: [
      "Goal setting strategies",
      "Progress measurements",
      "Performance tracking",
      "Regular evaluations",
    ],
    icon: "🎯",
  },
  {
    id: "transformation",
    title: "Body Transformation",
    description:
      "Complete transformation programs combining strength training, cardio, nutrition, and lifestyle coaching for dramatic results.",
    features: [
      "Full program design",
      "Nutrition planning",
      "Lifestyle coaching",
      "Ongoing support",
    ],
    icon: "🔥",
  },
];
