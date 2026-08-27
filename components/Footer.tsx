import React, { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';
import { triggerStarBurst } from '../utils/triggerStarBurst';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenCampaignModal: () => void;
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenCampaignModal, onShowToast }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    triggerStarBurst(e as any, 10);
    onShowToast(`Subscribed! You will receive weekly viral video ad breakdown teardowns.`);
    setEmail('');
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#04050b] pt-16 pb-12 overflow-hidden">
      
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-pink-500/25">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white font-heading">
                BrandLyft
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The AI-powered User-Generated Content (UGC) platform connecting top e-commerce brands with verified creators to produce high-converting vertical video ad creatives.
            </p>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Creator Match Engine 100% Operational</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button onClick={onOpenCampaignModal} className="hover:text-pink-400 font-bold transition-colors cursor-pointer flex items-center gap-1 text-pink-400">
                  <span>✦ Launch Campaign</span>
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Home & Overview
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('creators')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Creators Marketplace
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('case-studies')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Brand Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('pricing')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Plans & Pricing
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('dashboard')} className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1">
                  <span>Platform Dashboard</span>
                  <span className="px-1.5 py-0.2 text-[9px] bg-pink-500 text-white font-extrabold rounded-full">NEW</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Creator Categories */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Top Niches</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><span className="hover:text-pink-400 cursor-pointer">Beauty & Skincare UGC</span></li>
              <li><span className="hover:text-pink-400 cursor-pointer">Fashion & Try-On Hauls</span></li>
              <li><span className="hover:text-pink-400 cursor-pointer">Fitness & Supplement Hooks</span></li>
              <li><span className="hover:text-pink-400 cursor-pointer">Tech & Gadget Teardowns</span></li>
              <li><span className="hover:text-pink-400 cursor-pointer">Home & Aesthetic Living</span></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Weekly Ad Breakdown</h4>
            <p className="text-xs text-slate-400">Get top 3 viral UGC video ad scripts delivered every Tuesday.</p>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-pink-500 transition-colors pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-pink-500 hover:bg-pink-600 text-white cursor-pointer transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-1.5">
            <span>© 2026 BrandLyft Inc. Engineered for performance.</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">Creator Agreement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
