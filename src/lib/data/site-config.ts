import type { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Built By Drew",
  title: "Built By Drew | Fitness Coach & Body Transformation Specialist",
  description:
    "No shortcuts. No gimmicks. Just results. Personal trainer and nutrition coach Andrew Vinz Ganon delivers customized training and nutrition plans for fat loss, muscle building, and competition prep. Stage-ready physiques and lifestyle transformations.",
  tagline: "No Shortcuts. Just Results.",
  url: "https://builtbydrew.com",
  social: {
    instagram: "https://www.instagram.com/drewliftz/",
    facebook: "https://www.facebook.com/drewtzybtw",
    email: "andrewvinzg@gmail.com",
    phone: "09202634088",
  },
};

// JSON-LD Structured Data for SEO
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.social.phone,
  email: siteConfig.social.email,
  founder: {
    "@type": "Person",
    name: "Andrew Vinz Ganon",
    jobTitle: "Fitness Coach & Nutrition Coach",
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  },
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  priceRange: "$$",
  serviceType: [
    "Personal Training",
    "Nutrition Coaching",
    "Body Transformation",
    "Weight Loss Programs",
    "Muscle Building Programs",
    "Online Coaching",
  ],
  areaServed: {
    "@type": "Country",
    name: "Philippines",
  },
  knowsAbout: [
    "Fitness Training",
    "Nutrition Planning",
    "Body Transformation",
    "Weight Management",
    "Strength Training",
    "Bodybuilding",
  ],
};
