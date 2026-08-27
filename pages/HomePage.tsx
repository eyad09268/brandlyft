import React, { useState } from 'react';
import {
  TrendingUp,
  PlayCircle,
  Zap,
  Video,
  ChevronDown,
  ArrowRight,
  Calculator,
  CheckCircle2,
  Star,
  Rocket
} from 'lucide-react';
import { HERO_GALLERY_CARDS, CREATORS_DATA, FAQ_ITEMS, BRAND_LOGOS } from '../data/mockData';
import { triggerStarBurst } from '../utils/triggerStarBurst';

interface HomePageProps {
  onOpenVideoModal: (video: any) => void;
  onOpenCampaignModal: () => void;
  setActiveTab: (tab: string) => void;
  onShowToast: (msg: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenVideoModal,
  onOpenCampaignModal,
  setActiveTab,
  onShowToast
}) => {
  // Live ROI Calculator state
  const [adSpend, setAdSpend] = useState<number>(25000);
  const [currentRoas, setCurrentRoas] = useState<number>(2.1);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Calculations for ROI tool
  const predictedRoas = (currentRoas * 2.2).toFixed(1);
  const currentRevenue = Math.round(adSpend * currentRoas);
  const predictedRevenue = Math.round(adSpend * parseFloat(predictedRoas));
  const profitBoost = predictedRevenue - currentRevenue;
  const recommendedVideos = Math.max(4, Math.round(adSpend / 3500));

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  return (
    <div className="space-y-24 pt-8 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative max-w-5xl mx-auto px-4 text-center space-y-8">
        
        {/* Live Creator Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill border border-pink-500/30 backdrop-blur-xl shadow-lg shadow-pink-500/10 animate-in fade-in zoom-in duration-500">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#00ff88] animate-ping" />
          <span className="text-xs font-semibold text-slate-200">
            Join over <strong className="text-white">100,000+ creators</strong> & 4,500 scale-up brands
          </span>
          <span className="px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 text-[10px] font-bold border border-pink-500/30">
            Live Platform
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] font-heading">
          Engage Audiences<br />
          <span className="text-gradient-primary">With Viral Short Videos</span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Boost your brand performance with high-impact UGC short videos crafted by top-performing creators. Engineered for maximum TikTok, Meta & YouTube ad conversions.
        </p>

        {/* Hero CTA Button Stack */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          
          {/* Main Star CTA Button */}
          <button
            onClick={(e) => {
              triggerStarBurst(e, 16);
              onOpenCampaignModal();
            }}
            className="btn-star-cta text-base px-8 py-4 rounded-full font-extrabold flex items-center gap-3 cursor-pointer shadow-2xl w-full sm:w-auto justify-center group"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

            {/* Dynamic Star Overlay Elements */}
            <div className="star-1 animate-star-1 absolute -top-3 -left-2 w-5 h-5 pointer-events-none fill-white">
              <svg viewBox="0 0 784.11 815.53"><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></svg>
            </div>
            <div className="star-2 animate-star-2 absolute -top-4 right-8 w-4 h-4 pointer-events-none fill-white">
              <svg viewBox="0 0 784.11 815.53"><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></svg>
            </div>
            <div className="star-3 animate-star-3 absolute -bottom-3 left-1/4 w-3.5 h-3.5 pointer-events-none fill-white">
              <svg viewBox="0 0 784.11 815.53"><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></svg>
            </div>
          </button>

          {/* Secondary Explorer Button */}
          <button
            onClick={() => setActiveTab('creators')}
            className="px-8 py-4 rounded-full glass-panel text-white font-bold text-base hover:bg-white/10 transition-all cursor-pointer flex items-center gap-2 border border-white/20 w-full sm:w-auto justify-center"
          >
            <PlayCircle className="w-5 h-5 text-cyan-400" />
            <span>Browse Creators</span>
          </button>
        </div>

        {/* Creator Avatars Stack */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <div className="flex -space-x-3">
            {CREATORS_DATA.slice(0, 4).map((c) => (
              <img
                key={c.id}
                src={c.avatar}
                alt={c.name}
                className="w-9 h-9 rounded-full object-cover border-2 border-[#05060f]"
              />
            ))}
          </div>
          <div className="text-xs text-slate-400 text-left">
            <div className="flex items-center gap-1 text-amber-400 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>4.98 / 5.0 Star Rating</span>
            </div>
            <span>From 12,400+ verified brand reviews</span>
          </div>
        </div>

      </section>

      {/* 3D CURVED ARC CREATOR GALLERY CAROUSEL */}
      <section className="space-y-4">
        <div className="text-center">
          <span className="text-xs font-bold text-pink-400 uppercase tracking-widest px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
            Interactive Showcase
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-2">
            Click Any Video Card To Preview
          </h2>
        </div>

        <div className="w-full overflow-x-auto no-scrollbar py-8 px-4">
          <div className="flex items-center justify-center gap-4 min-w-max mx-auto px-6">
            {HERO_GALLERY_CARDS.map((item, idx) => {
              // Custom Arc Curve Offsets
              const arcClasses = [
                'card-arc-1',
                'card-arc-2',
                'card-arc-3',
                'card-arc-4',
                'card-arc-5',
                'card-arc-6',
                'card-arc-7',
              ];

              return (
                <div
                  key={item.id}
                  onClick={(e) => {
                    triggerStarBurst(e, 10);
                    onOpenVideoModal({
                      title: `${item.title} Conversion Hook`,
                      thumbnail: item.image,
                      category: item.tag,
                      views: '1.9M',
                      likes: '240K',
                      price: 180,
                    });
                  }}
                  className={`relative w-52 sm:w-60 h-80 sm:h-96 rounded-3xl overflow-hidden glass-panel border border-white/20 shadow-2xl cursor-pointer group hover:-translate-y-4 transition-all duration-500 shrink-0 ${arcClasses[idx % arcClasses.length]}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Play Icon Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-5 h-5 text-pink-400" />
                  </div>

                  {/* CTR Badge */}
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-emerald-500/80 backdrop-blur-md text-white font-mono text-[10px] font-extrabold border border-emerald-400/40">
                    {item.ctr}
                  </div>

                  {/* Bottom Text */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                      {item.tag}
                    </span>
                    <h3 className="font-extrabold text-white text-base leading-snug">{item.title}</h3>
                    <p className="text-[11px] text-slate-300 font-medium">Click to watch video reel →</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS HIGHLIGHT GRID */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { number: '4.8x', label: 'Average ROAS on Ad Spend', desc: 'Versus static graphic ads' },
            { number: '12M+', label: 'Monthly Video Views', desc: 'Generated across social platforms' },
            { number: '85%', label: 'Lower Production Cost', desc: 'Save thousands on studio shoots' },
            { number: '24h', label: 'Average Delivery Time', desc: 'Fastest turnaround in industry' },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-panel p-6 rounded-3xl border border-white/10 text-center space-y-2 hover:border-pink-500/30 transition-all duration-300"
            >
              <div className="text-3xl sm:text-5xl font-black font-heading text-gradient-primary">
                {stat.number}
              </div>
              <div className="font-bold text-sm text-white">{stat.label}</div>
              <div className="text-xs text-slate-400 font-medium">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LIVE INTERACTIVE ROI CALCULATOR */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-pink-500/30 shadow-2xl relative overflow-hidden space-y-8 bg-gradient-to-br from-[#0c0e20] to-[#121630]">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold border border-pink-500/30 mb-2">
                <Calculator className="w-4 h-4" />
                Live Revenue Predictor
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
                Calculate Your UGC ROAS Lift
              </h2>
            </div>
            <span className="text-xs text-slate-400 font-medium max-w-xs text-left md:text-right">
              Drag the sliders below to see estimated revenue boost from switching to BrandLyft creator videos.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Sliders Input */}
            <div className="space-y-6">
              
              {/* Ad Spend Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Monthly Ad Spend ($)
                  </label>
                  <span className="text-lg font-mono font-extrabold text-cyan-400">
                    ${adSpend.toLocaleString()} USD
                  </span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={200000}
                  step={2500}
                  value={adSpend}
                  onChange={(e) => setAdSpend(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-white/15 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Current ROAS Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Current Ad ROAS (Return On Ad Spend)
                  </label>
                  <span className="text-lg font-mono font-extrabold text-pink-400">
                    {currentRoas}x ROAS
                  </span>
                </div>
                <input
                  type="range"
                  min={1.0}
                  max={4.0}
                  step={0.1}
                  value={currentRoas}
                  onChange={(e) => setCurrentRoas(parseFloat(e.target.value))}
                  className="w-full h-2.5 bg-white/15 rounded-lg appearance-none cursor-pointer accent-pink-500"
                />
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
                <div className="flex justify-between">
                  <span>Estimated Video Reels Needed:</span>
                  <strong className="text-white font-mono">{recommendedVideos} Videos / Month</strong>
                </div>
                <div className="flex justify-between">
                  <span>Platform Creator Delivery:</span>
                  <strong className="text-emerald-400 font-mono">48 Hours</strong>
                </div>
              </div>
            </div>

            {/* Results Display Box */}
            <div className="glass-panel p-6 rounded-3xl border border-cyan-500/40 bg-gradient-to-tr from-cyan-950/40 via-purple-950/40 to-pink-950/40 text-center space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-300 bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-500/30">
                Projected Monthly Growth
              </span>

              <div className="space-y-1">
                <div className="text-xs text-slate-400 font-medium">Estimated New Monthly Revenue</div>
                <div className="text-4xl sm:text-5xl font-black font-heading text-gradient-cyan">
                  ${predictedRevenue.toLocaleString()}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-left">
                <div>
                  <div className="text-[11px] text-slate-400">Target UGC ROAS</div>
                  <div className="text-xl font-bold text-emerald-400 font-mono">{predictedRoas}x ROAS</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Extra Monthly Profit</div>
                  <div className="text-xl font-bold text-pink-400 font-mono">+${profitBoost.toLocaleString()}</div>
                </div>
              </div>

              <button
                onClick={(e) => {
                  triggerStarBurst(e, 14);
                  onShowToast(`ROI Projection Calculated: Estimated $${predictedRevenue.toLocaleString()} monthly revenue!`);
                  onOpenCampaignModal();
                }}
                className="w-full btn-star-cta py-3.5 rounded-2xl text-xs font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-xl mt-2"
              >
                <Rocket className="w-4 h-4" />
                <span>Unlock This Revenue Growth Now</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* WHY BRANDS CHOOSE US FEATURES */}
      <section className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Platform Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            Why Top E-Commerce Brands Choose BrandLyft
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Everything you need to source, manage, and scale high-performing creator video ad content in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Zap,
              title: 'Automated Creator Matching',
              desc: 'AI pairs your product URL with top 1% verified creators specialized in your niche within 2 to 4 hours.',
              color: 'text-pink-400',
              bg: 'from-pink-500/20 to-purple-500/10',
            },
            {
              icon: Video,
              title: 'Ready-to-Post Formats',
              desc: 'Receive fully edited 9:16 vertical videos with native subtitles, trending hooks, and music stems.',
              color: 'text-cyan-400',
              bg: 'from-cyan-500/20 to-blue-500/10',
            },
            {
              icon: TrendingUp,
              title: 'Performance & Hook Analytics',
              desc: 'Track click-through rates, hold rates, and direct ROAS conversions across TikTok & Meta Ads.',
              color: 'text-emerald-400',
              bg: 'from-emerald-500/20 to-teal-500/10',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4 hover:border-white/30 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.bg} border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <h3 className="font-extrabold text-white text-xl font-heading">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOP CREATORS SHOWCASE */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
              Verified Creators
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading mt-2">
              Featured UGC Creators Ready To Hire
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('creators')}
            className="px-5 py-2.5 rounded-full glass-panel text-xs font-bold text-white hover:bg-white/15 transition-all flex items-center gap-2 cursor-pointer border border-white/15"
          >
            <span>Explore All 100K+ Creators</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CREATORS_DATA.slice(0, 4).map((creator) => (
            <div
              key={creator.id}
              onClick={(e) => {
                triggerStarBurst(e, 8);
                onOpenVideoModal({
                  title: creator.featuredVideo.title,
                  thumbnail: creator.featuredVideo.thumbnail,
                  creatorName: creator.name,
                  handle: creator.handle,
                  avatar: creator.avatar,
                  views: creator.featuredVideo.views,
                  likes: creator.featuredVideo.likes,
                  price: creator.startingPrice,
                  category: creator.category,
                });
              }}
              className="glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-pink-500/40 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-64 bg-slate-900 overflow-hidden">
                <img
                  src={creator.featuredVideo.thumbnail}
                  alt={creator.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold border border-white/20">
                  {creator.category}
                </div>

                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-pink-500/80 backdrop-blur-md flex items-center justify-center text-white">
                  <PlayCircle className="w-5 h-5" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="font-extrabold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {creator.rating}
                  </span>
                  <span className="font-mono text-cyan-300 font-bold">${creator.startingPrice} / video</span>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center gap-3">
                  <img src={creator.avatar} alt={creator.name} className="w-9 h-9 rounded-full object-cover ring-2 ring-pink-500/30" />
                  <div>
                    <h4 className="font-bold text-white text-sm flex items-center gap-1">
                      {creator.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400/20" />
                    </h4>
                    <span className="text-[11px] text-slate-400">{creator.followers} followers</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {creator.tags.slice(0, 2).map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-slate-300 font-medium">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INFINITE CLIENT BRAND MARQUEE */}
      <section className="py-6 space-y-4 overflow-hidden border-y border-white/10 bg-white/[0.01]">
        <div className="text-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Trusted by 4,500+ D2C Brands & Omnichannel Advertisers
          </span>
        </div>

        <div className="flex overflow-hidden relative">
          <div className="animate-marquee flex gap-12 items-center">
            {BRAND_LOGOS.concat(BRAND_LOGOS).map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-slate-400 hover:text-white font-extrabold text-sm sm:text-base cursor-pointer transition-colors shrink-0"
              >
                <span className="text-xl">{b.logo}</span>
                <span>{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-white font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">Everything you need to know about BrandLyft UGC video production.</p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-white flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-pink-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-pink-500/40 text-center space-y-6 relative overflow-hidden bg-gradient-to-r from-pink-950/30 via-purple-950/40 to-cyan-950/30 shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            Ready To Elevate Your Content?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Join top-performing e-commerce brands and launch your first viral creator campaign today. Guaranteed 48-hour delivery.
          </p>

          <button
            onClick={(e) => {
              triggerStarBurst(e, 18);
              onOpenCampaignModal();
            }}
            className="btn-star-cta text-base px-10 py-4 rounded-full font-extrabold inline-flex items-center gap-3 cursor-pointer shadow-2xl"
          >
            <Rocket className="w-5 h-5" />
            <span>Launch Campaign Free</span>
          </button>
        </div>
      </section>

    </div>
  );
};
