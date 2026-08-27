export type CreatorCategory = 'Beauty' | 'Tech' | 'Fitness' | 'Fashion' | 'Gaming' | 'Travel' | 'Food' | 'Lifestyle';

export interface Creator {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  category: CreatorCategory;
  rating: number;
  reviewsCount: number;
  followers: string;
  engagementRate: string;
  startingPrice: number;
  location: string;
  verified: boolean;
  featuredVideo: {
    thumbnail: string;
    videoUrl?: string;
    title: string;
    views: string;
    likes: string;
  };
  tags: string[];
  bio: string;
  platforms: ('tiktok' | 'instagram' | 'youtube')[];
  recentClients: string[];
  sampleVideos: {
    id: string;
    thumbnail: string;
    title: string;
    views: string;
    conversionRate: string;
    duration: string;
  }[];
}

export interface CaseStudy {
  id: string;
  brandName: string;
  brandLogo: string;
  industry: string;
  heroImage: string;
  headline: string;
  summary: string;
  metrics: {
    label: string;
    value: string;
    change: string;
  }[];
  videoSample: {
    thumbnail: string;
    title: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
}

export interface CampaignBrief {
  brandName: string;
  category: CreatorCategory;
  objective: 'Brand Awareness' | 'Sales / Direct Response' | 'App Installs' | 'Product Launch';
  videoQuantity: number;
  format: 'TikTok / Reels (9:16)' | 'YouTube Shorts' | 'Horizontal 16:9' | 'Square 1:1';
  budgetTier: 'Starter ($499)' | 'Growth ($1,499)' | 'Scale ($3,999)' | 'Enterprise ($9,999+)';
  productLink: string;
  instructions: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  videosIncluded: number;
  features: string[];
  popular?: boolean;
}

export type ColorTheme = 'cyber-violet' | 'electric-cyan' | 'neon-sunset' | 'emerald-matrix';
