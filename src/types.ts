export type Language = 'en' | 'sv';

export type CurrentView = 'index' | 'work' | 'about' | 'case-study';

export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  videoSrc?: string;
  role: string;
  timeline: string;
  metrics: {
    label: string;
    value: string;
  }[];
  overview: string;
  goals: {
    title: string;
    description: string;
  }[];
  process: {
    title: string;
    description: string;
  }[];
  userNeeds?: {
    title: string;
    description: string;
  }[];
  researchFindings?: {
    title: string;
    description: string;
  }[];
  shipped: {
    title: string;
    description: string;
  }[];
  results: {
    title: string;
    description: string;
  }[];
}

export interface ArchiveItem {
  company: string;
  role: string;
  year: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BeliefItem {
  title: string;
  body: string;
}
