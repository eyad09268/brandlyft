import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Rocket, Check, ArrowRight, ArrowLeft, Video, Target, Link, Zap } from 'lucide-react';
import { CreatorCategory } from '../types';
import { triggerStarBurst } from '../utils/triggerStarBurst';

interface CampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCreator?: string | null;
}

export const CampaignModal: React.FC<CampaignModalProps> = ({ isOpen, onClose, preselectedCreator }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [objective, setObjective] = useState<'Sales' | 'Awareness' | 'App Installs'>('Sales');
  const [category, setCategory] = useState<CreatorCategory>('Fashion');
  const [videoCount, setVideoCount] = useState<number>(4);
  const [productUrl, setProductUrl] = useState<string>('');
  const [brandName, setBrandName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  if (!isOpen) return null;

  const estimatedPricePerVideo = 135;
  const totalPrice = videoCount * estimatedPricePerVideo;

  const handleNextStep = (e: React.MouseEvent<HTMLElement>) => {
    triggerStarBurst(e, 8);
    if (step < 3) {
      setStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
    } else if (step === 3) {
      // Fire confetti burst!
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff3b6b', '#00f2fe', '#ff7b00', '#10b981', '#a855f7'],
      });
      setStep(4);
    }
  };

  const handleResetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-300">
      
      {/* Backdrop click */}
      <div className="absolute inset-0 cursor-pointer" onClick={handleResetAndClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-2xl bg-[#0a0c1a] border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 bg-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/30">
              <Rocket className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-lg font-heading">
                {preselectedCreator ? `Book Creator: ${preselectedCreator}` : 'Launch UGC Campaign'}
              </h3>
              <p className="text-xs text-slate-400">Step {step} of 4 • AI Automated Creator Matching</p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2.5 rounded-full glass-pill text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/5 h-1.5">
          <div
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 h-full transition-all duration-500"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h4 className="font-bold text-white text-base mb-1 flex items-center gap-2">
                  <Target className="w-5 h-5 text-pink-400" />
                  What is your primary campaign objective?
                </h4>
                <p className="text-xs text-slate-400">Creators will tailor video hooks to match your conversion goal.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'Sales', title: 'Sales & ROAS', desc: 'Direct response & product hooks' },
                  { id: 'Awareness', title: 'Brand Awareness', desc: 'Viral organic reach & trends' },
                  { id: 'App Installs', title: 'App Installs', desc: 'Screen demos & user reactions' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setObjective(item.id as any)}
                    className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                      objective === item.id
                        ? 'bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-pink-500 shadow-lg text-white'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-extrabold text-sm mb-1">{item.title}</div>
                    <div className="text-xs text-slate-400">{item.desc}</div>
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Target Niche / Creator Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['Fashion', 'Beauty', 'Fitness', 'Tech', 'Travel', 'Gaming', 'Food', 'Lifestyle'] as CreatorCategory[]).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer border transition-all ${
                        category === cat
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-extrabold'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h4 className="font-bold text-white text-base mb-1 flex items-center gap-2">
                  <Video className="w-5 h-5 text-cyan-400" />
                  How many creator videos do you need?
                </h4>
                <p className="text-xs text-slate-400">Scale volume for higher A/B testing variations across TikTok & Meta.</p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300 font-semibold">Video Quantity:</span>
                  <span className="text-2xl font-extrabold text-pink-400 font-heading">{videoCount} Videos</span>
                </div>

                <input
                  type="range"
                  min={2}
                  max={20}
                  step={1}
                  value={videoCount}
                  onChange={(e) => setVideoCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-pink-500"
                />

                <div className="flex justify-between text-[11px] text-slate-400 font-medium pt-1">
                  <span>2 Videos (Starter Test)</span>
                  <span>10 Videos (Growth Scale)</span>
                  <span>20 Videos (Dominate)</span>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Estimated Campaign Cost:</span>
                  <span className="text-xl font-extrabold text-cyan-400 font-mono">${totalPrice} USD</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center gap-3">
                <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <p className="text-xs text-cyan-200">
                  Includes full commercial usage rights, raw video files, 9:16 vertical 4K resolution & free revisions.
                </p>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div>
                <h4 className="font-bold text-white text-base mb-1 flex items-center gap-2">
                  <Link className="w-5 h-5 text-purple-400" />
                  Product Link & Brand Information
                </h4>
                <p className="text-xs text-slate-400">Our AI scanner will generate briefing hooks from your product landing page.</p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Brand / Product Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Lumina Skin Serum"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-pink-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Product Store URL</label>
                  <input
                    type="text"
                    placeholder="https://yourbrand.com/products/sample"
                    value={productUrl}
                    onChange={(e) => setProductUrl(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-pink-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Key Selling Points / Notes (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="e.g., Focus on before/after skin glow, mention free shipping, target Gen Z..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-pink-500 transition-colors resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: SUCCESS CONFIRMATION */}
          {step === 4 && (
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-500 flex items-center justify-center mx-auto text-black shadow-2xl shadow-emerald-500/40 animate-bounce">
                <Check className="w-10 h-10 stroke-[3]" />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  AI Matching Initiated!
                </span>
                <h3 className="font-extrabold text-2xl text-white mt-3 font-heading">
                  Campaign Brief Live 🎉
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
                  We are now pairing your brief with <span className="text-pink-400 font-bold">{videoCount} verified creators</span> in the {category} niche. You will receive draft video previews in your dashboard within 24 hours.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Brand:</span>
                  <span className="font-bold text-white">{brandName || 'My Brand'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Objective:</span>
                  <span className="font-bold text-cyan-400">{objective}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Videos Requested:</span>
                  <span className="font-bold text-pink-400">{videoCount} Custom UGC Reels</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-2 font-mono text-sm">
                  <span className="text-slate-300 font-bold">Estimated Cost:</span>
                  <span className="text-emerald-400 font-bold">${totalPrice} USD</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="p-6 bg-[#0c0e1e] border-t border-white/10 flex items-center justify-between">
          {step > 1 && step < 4 ? (
            <button
              onClick={() => setStep((prev) => (prev - 1) as any)}
              className="px-4 py-2.5 rounded-xl glass-pill text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              onClick={handleNextStep}
              className="btn-star-cta px-6 py-3 rounded-xl text-xs font-extrabold flex items-center gap-2 cursor-pointer shadow-lg ml-auto"
            >
              <span>{step === 3 ? 'Confirm & Match Creators' : 'Continue Step'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleResetAndClose}
              className="btn-glow-primary px-8 py-3 rounded-xl text-xs font-extrabold cursor-pointer mx-auto"
            >
              View Live Dashboard Demo
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
