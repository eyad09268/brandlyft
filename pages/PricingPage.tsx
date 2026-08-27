import React, { useState } from 'react';
import { Check, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/mockData';
import { triggerStarBurst } from '../utils/triggerStarBurst';

interface PricingPageProps {
  onOpenCampaignModal: () => void;
  onShowToast: (msg: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenCampaignModal, onShowToast }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [customVideoCount, setCustomVideoCount] = useState(8);

  const pricePerCustomVideo = isAnnual ? 110 : 135;
  const customMonthlyPrice = customVideoCount * pricePerCustomVideo;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold">
          <Zap className="w-4 h-4 text-pink-400" />
          Transparent Creator Pricing
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
          Flexible UGC Plans For Every Brand Size
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          No hidden fees or long-term lock-ins. All plans include 100% commercial usage rights & 48-hour video delivery.
        </p>

        {/* Monthly / Annual Toggle */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <span className={`text-xs font-bold ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
            Monthly Billing
          </span>

          <button
            onClick={(e) => {
              triggerStarBurst(e, 6);
              setIsAnnual(!isAnnual);
              onShowToast(isAnnual ? 'Switched to Monthly billing' : 'Switched to Annual billing (20% discount applied!)');
            }}
            className="w-14 h-7 rounded-full bg-white/10 p-1 border border-white/20 relative cursor-pointer transition-colors"
          >
            <div
              className={`w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 transition-transform duration-300 ${
                isAnnual ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>

          <span className={`text-xs font-bold flex items-center gap-1.5 ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
            <span>Annual Billing</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-extrabold border border-emerald-500/30 animate-pulse">
              Save 20%
            </span>
          </span>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRICING_PLANS.map((plan) => {
          const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

          return (
            <div
              key={plan.id}
              className={`glass-panel rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 relative shadow-2xl ${
                plan.popular
                  ? 'border-pink-500/60 bg-gradient-to-b from-pink-950/30 via-[#0c0e24] to-[#0a0c1a] scale-102 ring-1 ring-pink-500/50'
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-[11px] font-extrabold shadow-lg uppercase tracking-wider">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="font-extrabold text-white text-2xl font-heading">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{plan.description}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black font-heading text-white">${price}</span>
                    <span className="text-xs text-slate-400 font-semibold">/ month</span>
                  </div>
                  <span className="text-[10px] text-pink-400 font-bold block">
                    {plan.videosIncluded} Custom UGC Videos Included
                  </span>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">What's included:</span>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={(e) => {
                  triggerStarBurst(e, 12);
                  onOpenCampaignModal();
                }}
                className={`w-full py-3.5 rounded-2xl text-xs font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-8 transition-all ${
                  plan.popular ? 'btn-star-cta' : 'btn-glow-primary'
                }`}
              >
                <span>Select {plan.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

      {/* CUSTOM PAY-PER-VIDEO CALCULATOR */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-500/30 space-y-6 bg-gradient-to-br from-[#0c1228] to-[#0e1635]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Custom Calculator
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-2">
              Pay-Per-Video Custom Package
            </h2>
          </div>
          <span className="text-xs text-slate-400">Need a specific video volume or one-off batch test?</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-slate-300">Selected Videos / Month:</label>
              <span className="text-2xl font-extrabold text-pink-400 font-heading">{customVideoCount} Videos</span>
            </div>

            <input
              type="range"
              min={2}
              max={40}
              step={1}
              value={customVideoCount}
              onChange={(e) => setCustomVideoCount(parseInt(e.target.value))}
              className="w-full h-2.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-pink-500"
            />

            <div className="flex justify-between text-[11px] text-slate-400">
              <span>2 Videos</span>
              <span>20 Videos</span>
              <span>40 Videos</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-3">
            <div className="text-xs text-slate-400 font-medium">Estimated Custom Price</div>
            <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono">
              ${customMonthlyPrice.toLocaleString()} <span className="text-xs text-slate-400 font-normal">USD</span>
            </div>
            <p className="text-[11px] text-slate-300">
              Effective rate: <strong className="text-white">${pricePerCustomVideo} / video</strong>
            </p>

            <button
              onClick={(e) => {
                triggerStarBurst(e, 10);
                onOpenCampaignModal();
              }}
              className="w-full btn-star-cta py-3 rounded-xl text-xs font-bold"
            >
              Order {customVideoCount} Custom Videos
            </button>
          </div>
        </div>
      </div>

      {/* Money-back guarantee callout */}
      <div className="glass-panel p-6 rounded-3xl border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-emerald-950/20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <h4 className="font-extrabold text-white text-base font-heading">100% Satisfaction & Revision Guarantee</h4>
            <p className="text-xs text-slate-300">If you are not thrilled with your video draft, we offer free revisions or 100% credit refund.</p>
          </div>
        </div>

        <button
          onClick={onOpenCampaignModal}
          className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-black text-xs font-extrabold shrink-0 cursor-pointer shadow-lg"
        >
          Try Risk-Free
        </button>
      </div>

    </div>
  );
};
