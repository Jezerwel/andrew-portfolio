export interface ClientTransformation {
  id: string;
  name: string;
  beforeImage: string;
  afterImage: string;
  timeframe: string;
  stats: {
    weightChange?: string;
    muscleGain?: string;
    bodyFatLoss?: string;
  };
  goal: string;
  testimonial: string;
  program: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  tagline: string;
  url?: string;
  social: {
    instagram?: string;
    facebook?: string;
    email?: string;
    phone?: string;
  };
}
