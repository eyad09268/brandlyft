import React from 'react';
import { Award, PlayCircle, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';
import { triggerStarBurst } from '../utils/triggerStarBurst';

interface CaseStudiesPageProps {
  onOpenVideoModal: (video: any) => void;
  onOpenCampaignModal: () => void;
  onShowToast: (msg: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  onOpenVideoModal,
  onOpenCampaignModal,
  onShowToast,
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold">
          <Award className="w-4 h-4 text-cyan-400" />
          Verified ROI Proof & Metrics
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
          Real E-Commerce Growth Case Studies
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Discover how performance marketing teams scale acquisition budgets using high-converting UGC video creative.
        </p>
      </div>

      {/* Case Studies List */}
      <div className="space-y-12">
        {CASE_STUDIES.map((study) => (
          <div
            key={study.id}
            className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 space-y-8 shadow-2xl relative overflow-hidden bg-gradient-to-br from-[#0c0e22] to-[#121632]"
          >
            {/* Top Brand Info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl shadow-inner border border-white/10">
                  {study.brandLogo}
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-2xl font-heading">{study.brandName}</h3>
                  <span className="text-xs font-semibold text-pink-400">{study.industry}</span>
                </div>
              </div>

              <button
                onClick={(e) => {
                  triggerStarBurst(e, 8);
                  onShowToast(`Loading ${study.brandName} viral ad creative...`);
                  onOpenVideoModal({
                    title: study.videoSample.title,
                    thumbnail: study.videoSample.thumbnail,
                    creatorName: `${study.brandName} Viral Creator Ad`,
                    category: study.industry,
                    views: '3.4M',
                    likes: '410K',
                  });
                }}
                className="px-4 py-2.5 rounded-full glass-pill text-xs font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2 cursor-pointer border border-white/20 self-start md:self-auto"
              >
                <PlayCircle className="w-4 h-4 text-cyan-400" />
                <span>Watch Winning Ad Creative</span>
              </button>
            </div>

            {/* Headline & Summary */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                {study.headline}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {study.summary}
              </p>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {study.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-4 rounded-2xl border border-white/10 text-center space-y-1 bg-white/[0.02]"
                >
                  <div className="text-2xl sm:text-3xl font-black font-heading text-gradient-cyan">
                    {m.value}
                  </div>
                  <div className="text-xs font-bold text-white">{m.label}</div>
                  <div className="text-[10px] font-mono text-emerald-400 font-extrabold">{m.change}</div>
                </div>
              ))}
            </div>

            {/* Testimonial Quote */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative">
              <Quote className="w-8 h-8 text-pink-500/40 shrink-0 hidden sm:block" />
              <div className="space-y-2 flex-1">
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  "{study.testimonial.quote}"
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <img
                    src={study.testimonial.avatar}
                    alt={study.testimonial.author}
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-pink-500/30"
                  />
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1">
                      {study.testimonial.author}
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="text-[10px] text-slate-400">{study.testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-cyan-500/40 text-center space-y-4 bg-gradient-to-tr from-cyan-950/30 to-purple-950/30">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
          Want Similar Scale For Your Brand?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
          Get matched with proven creators who know how to build high-converting video hooks for your exact product.
        </p>

        <button
          onClick={(e) => {
            triggerStarBurst(e, 12);
            onOpenCampaignModal();
          }}
          className="btn-star-cta text-xs px-8 py-3.5 rounded-2xl font-extrabold inline-flex items-center gap-2 cursor-pointer shadow-xl"
        >
          <span>Launch Campaign Free</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
