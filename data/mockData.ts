import { Creator, CaseStudy, PricingPlan } from '../types';

export const CREATORS_DATA: Creator[] = [
  {
    id: 'c1',
    name: 'Sophia Chen',
    handle: '@sophiastyle',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    category: 'Fashion',
    rating: 4.98,
    reviewsCount: 142,
    followers: '480K',
    engagementRate: '8.4%',
    startingPrice: 180,
    location: 'Los Angeles, CA',
    verified: true,
    tags: ['OOTD', 'Luxury Try-On', 'Unboxing', 'Gen-Z Vibe'],
    bio: 'High-converting UGC creator specializing in luxury fashion, capsule wardrobes, and viral TikTok outfit transitions.',
    platforms: ['tiktok', 'instagram'],
    recentClients: ['Skims', 'Gymshark', 'Zara', 'Revolve'],
    featuredVideo: {
      thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80',
      title: 'Silk Slip Dress Hook & 3 Styling Variations',
      views: '2.4M',
      likes: '310K'
    },
    sampleVideos: [
      {
        id: 'v101',
        thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80',
        title: '3 Ways to Style an Oversized Blazer',
        views: '1.2M',
        conversionRate: '4.8%',
        duration: '0:28'
      },
      {
        id: 'v102',
        thumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop&q=80',
        title: 'Honest Skincare & Makeup Routine',
        views: '890K',
        conversionRate: '5.2%',
        duration: '0:35'
      }
    ]
  },
  {
    id: 'c2',
    name: 'Marcus Vance',
    handle: '@vancefitness',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    category: 'Fitness',
    rating: 4.95,
    reviewsCount: 98,
    followers: '620K',
    engagementRate: '7.9%',
    startingPrice: 220,
    location: 'Miami, FL',
    verified: true,
    tags: ['Pre-Workout', 'Protein Reviews', 'Gym Gear', 'Supplements'],
    bio: 'Fitness coach turned UGC specialist. High-energy video hooks, workout product demos, and genuine supplement reviews.',
    platforms: ['tiktok', 'instagram', 'youtube'],
    recentClients: ['MyProtein', 'Onnit', 'Whoop', 'Under Armour'],
    featuredVideo: {
      thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80',
      title: 'Why I Swapped My Regular Whey for Hydrolyzed Protein',
      views: '1.8M',
      likes: '245K'
    },
    sampleVideos: [
      {
        id: 'v201',
        thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80',
        title: 'Whoop Band 30-Day Sleep Tracking Results',
        views: '1.4M',
        conversionRate: '6.1%',
        duration: '0:42'
      }
    ]
  },
  {
    id: 'c3',
    name: 'Elena Rostova',
    handle: '@glowbyelena',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    category: 'Beauty',
    rating: 4.99,
    reviewsCount: 215,
    followers: '950K',
    engagementRate: '9.2%',
    startingPrice: 250,
    location: 'New York, NY',
    verified: true,
    tags: ['Glass Skin', 'ASMR Unboxing', 'Serums', 'Clean Beauty'],
    bio: 'Esthetician and viral beauty creator. Creates crisp 4K macro video reviews that convert browsers into buyers.',
    platforms: ['tiktok', 'instagram'],
    recentClients: ['Glow Recipe', 'Glossier', 'The Ordinary', 'Drunk Elephant'],
    featuredVideo: {
      thumbnail: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
      title: '7-Day Niacinamide Serum Before & After Transformation',
      views: '4.1M',
      likes: '580K'
    },
    sampleVideos: [
      {
        id: 'v301',
        thumbnail: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
        title: 'Satisfying Hydration Mask Application ASMR',
        views: '2.9M',
        conversionRate: '7.4%',
        duration: '0:30'
      }
    ]
  },
  {
    id: 'c4',
    name: 'Alex Rivera',
    handle: '@alextechreviews',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    category: 'Tech',
    rating: 4.92,
    reviewsCount: 87,
    followers: '340K',
    engagementRate: '6.8%',
    startingPrice: 195,
    location: 'Austin, TX',
    verified: true,
    tags: ['Desk Setup', 'Gadgets', 'SaaS Demos', 'Smart Home'],
    bio: 'Tech enthusiast crafting crisp product teardowns, magnetic hooks, and problem-solving gadget showcases.',
    platforms: ['tiktok', 'youtube'],
    recentClients: ['Anker', 'Keychron', 'Logitech', 'Notion'],
    featuredVideo: {
      thumbnail: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=600&auto=format&fit=crop&q=80',
      title: 'The Wireless Charger Every Desk Needs in 2026',
      views: '980K',
      likes: '112K'
    },
    sampleVideos: [
      {
        id: 'v401',
        thumbnail: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=600&auto=format&fit=crop&q=80',
        title: 'Mechanical Keyboard Sound Test & Review',
        views: '720K',
        conversionRate: '4.1%',
        duration: '0:25'
      }
    ]
  },
  {
    id: 'c5',
    name: 'Chloe Kim',
    handle: '@chloe.travels',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
    category: 'Travel',
    rating: 4.97,
    reviewsCount: 110,
    followers: '510K',
    engagementRate: '8.1%',
    startingPrice: 210,
    location: 'San Francisco, CA',
    verified: true,
    tags: ['Luggage Review', 'Packing Hacks', 'Travel Tech', 'Hotels'],
    bio: 'Full-time travel creator producing cinematic yet authentic video reviews for travel accessories and hotel booking apps.',
    platforms: ['tiktok', 'instagram'],
    recentClients: ['Away Luggage', 'Hopper', 'Beis', 'Airalo'],
    featuredVideo: {
      thumbnail: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=80',
      title: 'How I Packed 2 Weeks of Clothes in 1 Carry-On Bag',
      views: '3.2M',
      likes: '420K'
    },
    sampleVideos: [
      {
        id: 'v501',
        thumbnail: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=80',
        title: 'Compression Packing Cubes Test',
        views: '1.9M',
        conversionRate: '5.8%',
        duration: '0:38'
      }
    ]
  },
  {
    id: 'c6',
    name: 'Jayden Brooks',
    handle: '@jaydenplays',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80',
    category: 'Gaming',
    rating: 4.91,
    reviewsCount: 76,
    followers: '880K',
    engagementRate: '11.2%',
    startingPrice: 230,
    location: 'Seattle, WA',
    verified: true,
    tags: ['Gaming Chairs', 'Headsets', 'Mobile Games', 'Console Gear'],
    bio: 'Twitch streamer & short-form video creator. Specializes in relatable gaming hooks, product stress tests, and funny scenarios.',
    platforms: ['tiktok', 'youtube'],
    recentClients: ['Razer', 'SteelSeries', 'RAID Shadow Legends', 'Secretlab'],
    featuredVideo: {
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80',
      title: 'I Tested This $40 Gaming Headset vs $300 Headset',
      views: '2.1M',
      likes: '290K'
    },
    sampleVideos: [
      {
        id: 'v601',
        thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80',
        title: 'Ultra Low-Latency Earbuds Gaming Test',
        views: '1.1M',
        conversionRate: '4.5%',
        duration: '0:29'
      }
    ]
  },
  {
    id: 'c7',
    name: 'Maya Lin',
    handle: '@mayacooks',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    category: 'Food',
    rating: 4.96,
    reviewsCount: 130,
    followers: '430K',
    engagementRate: '8.7%',
    startingPrice: 175,
    location: 'Chicago, IL',
    verified: true,
    tags: ['Meal Prep', 'Kitchen Gadgets', 'Healthy Eats', 'Air Fryer'],
    bio: 'Culinary content creator sharing mouth-watering 30-second recipe hooks and kitchen tool demonstrations.',
    platforms: ['tiktok', 'instagram'],
    recentClients: ['Ninja Kitchen', 'HelloFresh', 'Ooni Pizza', 'NutriBullet'],
    featuredVideo: {
      thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80',
      title: 'High Protein Air Fryer Crispy Chicken Bites',
      views: '1.7M',
      likes: '210K'
    },
    sampleVideos: [
      {
        id: 'v701',
        thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80',
        title: 'Ninja Blender Smoothie Bowl Demo',
        views: '920K',
        conversionRate: '5.4%',
        duration: '0:32'
      }
    ]
  },
  {
    id: 'c8',
    name: 'David & Clara',
    handle: '@homevibes.dc',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80',
    category: 'Lifestyle',
    rating: 4.99,
    reviewsCount: 164,
    followers: '710K',
    engagementRate: '9.0%',
    startingPrice: 260,
    location: 'Denver, CO',
    verified: true,
    tags: ['Home Decor', 'Couple Vlogs', 'Smart Appliances', 'Aesthetic'],
    bio: 'Duo creator team producing aesthetic home makeover videos, unboxings, and high-CTR Amazon find style ads.',
    platforms: ['tiktok', 'instagram'],
    recentClients: ['Dyson', 'Our Place', 'Ruggable', 'Brooklinen'],
    featuredVideo: {
      thumbnail: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=80',
      title: '5 Aesthetic Amazon Home Upgrades That Feel Hotel-Quality',
      views: '3.8M',
      likes: '510K'
    },
    sampleVideos: [
      {
        id: 'v801',
        thumbnail: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=80',
        title: 'Testing the Vacuum Air Purifier Combo',
        views: '2.2M',
        conversionRate: '6.7%',
        duration: '0:45'
      }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    brandName: 'GlowBotanica',
    brandLogo: '🌸',
    industry: 'Beauty & Skincare',
    heroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
    headline: 'How GlowBotanica Scaled to $1.2M Monthly Revenue with 40 UGC TikTok Ads',
    summary: 'By switching from traditional studio photo ads to dynamic problem-solution UGC videos created through BrandLyft, GlowBotanica slashed acquisition costs while boosting ROAS exponentially.',
    metrics: [
      { label: 'ROAS Lift', value: '4.6x', change: '+360%' },
      { label: 'Customer Acq. Cost', value: '$18.40', change: '-52%' },
      { label: 'Click-Through Rate', value: '3.8%', change: '+180%' },
      { label: 'Total Video Views', value: '14.2M', change: 'Viral Growth' }
    ],
    videoSample: {
      thumbnail: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
      title: '3-Step Night Routine for Glass Skin'
    },
    testimonial: {
      quote: "BrandLyft completely transformed our ad strategy. We got 15 high-performing creator videos delivered in under 48 hours, and our revenue exploded within the first week.",
      author: 'Camilla Vance',
      role: 'Head of Growth, GlowBotanica',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'cs2',
    brandName: 'FitFuel Pro',
    brandLogo: '⚡',
    industry: 'Health & Nutrition',
    heroImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80',
    headline: 'FitFuel Reached 8.5M Views & Reduced Ad Burn by 64% using Creator Reels',
    summary: 'FitFuel leveraged BrandLyft’s automated creator matching to partner with 25 fitness creators, creating authentic taste-test reaction videos for Meta & TikTok ads.',
    metrics: [
      { label: 'Ad Conversion Rate', value: '6.2%', change: '+210%' },
      { label: 'ROAS', value: '5.1x', change: '+280%' },
      { label: 'Content Delivery', value: '3 Days', change: 'Record Speed' },
      { label: 'Ad Spend Efficiency', value: '+$340K', change: 'Saved' }
    ],
    videoSample: {
      thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80',
      title: 'Blind Taste Test: Zero Sugar Protein Powder'
    },
    testimonial: {
      quote: "Finding authentic creators who actually love our products used to take weeks. With BrandLyft, it happens automatically with ready-to-scale video ad variations.",
      author: 'Derek Miller',
      role: 'CMO, FitFuel Pro',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'cs3',
    brandName: 'NordicDesk Tech',
    brandLogo: '💻',
    industry: 'Consumer Electronics',
    heroImage: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800&auto=format&fit=crop&q=80',
    headline: 'NordicDesk Unlocked $850K in Black Friday Sales via Unboxing Hooks',
    summary: 'Custom unboxing videos and desk aesthetic setups allowed NordicDesk to dominate Instagram Reels and YouTube Shorts during Q4 peak season.',
    metrics: [
      { label: 'Sales Generated', value: '$850,000', change: '+410%' },
      { label: 'Engagement Rate', value: '11.4%', change: 'Top 1%' },
      { label: 'Content Created', value: '60 Videos', change: 'Omnichannel' },
      { label: 'Cost Per Acquisition', value: '$22.10', change: '-45%' }
    ],
    videoSample: {
      thumbnail: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=600&auto=format&fit=crop&q=80',
      title: 'Ergonomic Desk Setup Transformation'
    },
    testimonial: {
      quote: "The quality of video editing and hook variations provided by BrandLyft creators gave our performance marketing team the fuel needed to scale Facebook ad budgets tenfold.",
      author: 'Sarah Jenkins',
      role: 'VP Marketing, NordicDesk',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80'
    }
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'p1',
    name: 'Starter Sprint',
    monthlyPrice: 499,
    annualPrice: 399,
    description: 'Perfect for fast-growing brands launching their first UGC ad campaigns.',
    videosIncluded: 4,
    features: [
      '4 High-Quality UGC Videos / month',
      'AI Creator Matching & Briefing',
      'Full Commercial Licensing & Usage Rights',
      'Vertical Formats (9:16 TikTok / Reels)',
      '1 Revision Round per Video',
      '72-Hour Average Delivery'
    ]
  },
  {
    id: 'p2',
    name: 'Growth Engine',
    monthlyPrice: 1299,
    annualPrice: 999,
    popular: true,
    badge: 'Most Popular',
    description: 'Designed for scaling e-commerce brands needing fresh ad creatives weekly.',
    videosIncluded: 12,
    features: [
      '12 Custom UGC Videos / month',
      'Dedicated Creator Success Manager',
      'Raw Footage & Sound Stems Provided',
      'A/B Hook Variations & Text Overlays',
      '2 Revision Rounds per Video',
      'Priority 48-Hour Delivery',
      'TikTok & Meta Ad Hook Analytics'
    ]
  },
  {
    id: 'p3',
    name: 'Scale & Dominate',
    monthlyPrice: 2999,
    annualPrice: 2399,
    badge: 'Maximum ROAS',
    description: 'Omnichannel creative machine for high-spend performance marketers.',
    videosIncluded: 30,
    features: [
      '30 Scaled UGC Videos / month',
      'Top 1% Vetted Creator Access',
      'Multi-Format Exports (9:16, 1:1, 16:9)',
      'Custom Voiceover & Native Subtitles',
      'Unlimited Revisions',
      '24-Hour Express Delivery',
      'Custom Whitelisting / Spark Ads Setup'
    ]
  }
];

export const FAQ_ITEMS = [
  {
    question: 'How fast will I receive my completed UGC videos?',
    answer: 'Once your brief is submitted, creators are matched within 2 to 4 hours. Video turnarounds range from 24 to 72 hours max! You can review draft videos directly in your dashboard.'
  },
  {
    question: 'Do I own full commercial usage rights for all videos?',
    answer: 'Yes! Every video created through BrandLyft includes 100% royalty-free, perpetual commercial rights for Meta Ads, TikTok Spark Ads, YouTube Shorts, TV, and your website.'
  },
  {
    question: 'Can I request revisions if I need changes to the script or edit?',
    answer: 'Absolutely. Every tier includes free revision rounds. You can leave timestamped comments directly on video previews in your BrandLyft dashboard.'
  },
  {
    question: 'How does AI creator matching work?',
    answer: 'Our AI analyzes your product URL, target demographic, brand tone, and niche, then automatically invites top-performing creators whose audience demographics align with your ideal customer profile.'
  },
  {
    question: 'Can I send physical products to creators?',
    answer: 'Yes! Our platform automatically generates shipping labels and provides real-time package tracking so you know exactly when creator product unboxings begin.'
  }
];

export const BRAND_LOGOS = [
  { name: 'Shopify', logo: '🛍️' },
  { name: 'Meta Ads', logo: '♾️' },
  { name: 'TikTok Shop', logo: '🎵' },
  { name: 'Klaviyo', logo: '✉️' },
  { name: 'Amazon', logo: '📦' },
  { name: 'Google Ads', logo: '🎯' },
  { name: 'WooCommerce', logo: '⚙️' },
  { name: 'Stripe', logo: '💳' }
];

export const HERO_GALLERY_CARDS = [
  { id: '1', title: 'Luxury Fashion', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80', tag: 'Fashion', ctr: '+4.2% CTR' },
  { id: '2', title: 'Peak Fitness', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80', tag: 'Fitness', ctr: '+5.1% CTR' },
  { id: '3', title: 'Glow Skincare', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80', tag: 'Beauty', ctr: '+6.8% CTR' },
  { id: '4', title: 'Tech Gadgets', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=80', tag: 'Tech', ctr: '+4.9% CTR' },
  { id: '5', title: 'Aesthetic Home', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80', tag: 'Lifestyle', ctr: '+5.4% CTR' },
  { id: '6', title: 'Travel Essentials', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80', tag: 'Travel', ctr: '+3.9% CTR' },
  { id: '7', title: 'Gaming Setup', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=80', tag: 'Gaming', ctr: '+5.8% CTR' },
];
