import React, { useState } from 'react';
import {
  BarChart3,
  Video,
  CheckCircle2,
  PlayCircle,
  Upload,
  Sparkles,
  Rocket
} from 'lucide-react';
import { triggerStarBurst } from '../utils/triggerStarBurst';

interface DashboardPageProps {
  onOpenVideoModal: (video: any) => void;
  onOpenCampaignModal: () => void;
  onShowToast: (msg: string) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  onOpenVideoModal,
  onOpenCampaignModal,
  onShowToast,
}) => {
  const [viewMode, setViewMode] = useState<'brand' | 'creator'>('brand');

  const mockDeliverables = [
    {
      id: 'd1',
      title: 'Silk Slip Dress 3 Styling Variations Hook',
      creator: 'Sophia Chen',
      handle: '@sophiastyle',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80',
      status: 'Needs Approval',
      duration: '0:28',
      score: '9.8 Hook Score',
      deliveredTime: '2 hours ago',
    },
    {
      id: 'd2',
      title: 'Why I Swapped Regular Whey Hydrolyzed Test',
      creator: 'Marcus Vance',
      handle: '@vancefitness',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80',
      status: 'Approved & Licensing Live',
      duration: '0:42',
      score: '9.5 Hook Score',
      deliveredTime: 'Yesterday',
    },
    {
      id: 'd3',
      title: '7-Day Niacinamide Serum Glass Skin Demo',
      creator: 'Elena Rostova',
      handle: '@glowbyelena',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
      status: 'Needs Approval',
      duration: '0:35',
      score: '9.9 Hook Score',
      deliveredTime: '4 hours ago',
    },
  ];

  const handleApproveVideo = (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    triggerStarBurst(e as any, 10);
    onShowToast(`Approved "${title}"! Commercial license token generated & synced to Meta/TikTok Ads.`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* Top Banner & View Switcher */}
      <div className="glass-panel p-6 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl bg-gradient-to-r from-[#0d0f25] via-[#101332] to-[#0c0e25]">
        
        <div className="space-y-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            Live Platform Simulation
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            BrandLyft Unified Workspace Demo
          </h1>
          <p className="text-xs text-slate-400">
            Experience how brands and creators collaborate, approve scripts, and track live video performance.
          </p>
        </div>

        {/* Switcher Button */}
        <div className="flex items-center p-1.5 rounded-2xl bg-black/50 border border-white/10 shrink-0">
          <button
            onClick={() => setViewMode('brand')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              viewMode === 'brand'
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Brand Admin View</span>
          </button>

          <button
            onClick={() => setViewMode('creator')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              viewMode === 'creator'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-extrabold shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>Creator Workbench View</span>
          </button>
        </div>

      </div>

      {/* BRAND ADMIN VIEW */}
      {viewMode === 'brand' ? (
        <div className="space-y-8 animate-in fade-in duration-300">
          
          {/* Key Metric Overview Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-1">
              <div className="text-xs text-slate-400 font-semibold">Active Video Campaigns</div>
              <div className="text-2xl sm:text-3xl font-black text-white font-heading">4 Live</div>
              <div className="text-[10px] text-emerald-400 font-bold">12 creators currently filming</div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-1">
              <div className="text-xs text-slate-400 font-semibold">Draft Videos Pending Review</div>
              <div className="text-2xl sm:text-3xl font-black text-pink-400 font-heading">2 Videos</div>
              <div className="text-[10px] text-pink-300 font-bold">Requires your approval</div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-1">
              <div className="text-xs text-slate-400 font-semibold">Average Ad ROAS</div>
              <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-heading">4.6x</div>
              <div className="text-[10px] text-cyan-300 font-bold">+180% vs static image ads</div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-1">
              <div className="text-xs text-slate-400 font-semibold">Total Ad Impressions</div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-heading">1.8M</div>
              <div className="text-[10px] text-emerald-300 font-bold">3,400+ conversions generated</div>
            </div>
          </div>

          {/* Pending Video Approvals Section */}
          <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h3 className="font-extrabold text-white text-lg font-heading">
                  Video Deliverables Inbox
                </h3>
                <p className="text-xs text-slate-400">Preview creator drafts, request timestamps edits, or approve for instant licensing.</p>
              </div>

              <button
                onClick={(e) => {
                  triggerStarBurst(e, 8);
                  onOpenCampaignModal();
                }}
                className="btn-star-cta text-xs px-4 py-2.5 rounded-xl font-bold flex items-center gap-1.5"
              >
                <Rocket className="w-4 h-4" />
                <span>+ Launch New Brief</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockDeliverables.map((item) => (
                <div
                  key={item.id}
                  className="glass-panel rounded-2xl border border-white/10 overflow-hidden hover:border-pink-500/30 transition-all flex flex-col justify-between"
                >
                  <div
                    onClick={(e) => {
                      triggerStarBurst(e, 6);
                      onOpenVideoModal({
                        title: item.title,
                        thumbnail: item.thumbnail,
                        creatorName: item.creator,
                        handle: item.handle,
                        avatar: item.avatar,
                        views: '2.1M',
                        likes: '310K',
                      });
                    }}
                    className="relative h-52 bg-slate-900 cursor-pointer overflow-hidden group"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-pink-500 text-white text-[10px] font-extrabold">
                      {item.status}
                    </div>

                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/60 text-cyan-300 text-[10px] font-mono font-bold">
                      {item.score}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                        <PlayCircle className="w-6 h-6 text-pink-400" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-2.5">
                      <img src={item.avatar} alt={item.creator} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1">
                          {item.creator}
                          <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        </div>
                        <div className="text-[10px] text-slate-400">{item.handle}</div>
                      </div>
                    </div>

                    <h4 className="text-xs font-semibold text-slate-200 line-clamp-2">{item.title}</h4>

                    <div className="flex gap-2 pt-1">
                      <button
                        onClick={(e) => handleApproveVideo(e, item.title)}
                        className="flex-1 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black text-xs font-extrabold cursor-pointer transition-colors"
                      >
                        Approve & License
                      </button>
                      <button
                        onClick={() => onShowToast(`Revision comment box opened for ${item.creator}`)}
                        className="px-3 py-2 rounded-xl bg-white/10 text-slate-300 hover:text-white text-xs font-semibold cursor-pointer"
                      >
                        Edit
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      ) : (
        /* CREATOR WORKBENCH VIEW */
        <div className="space-y-8 animate-in fade-in duration-300">
          
          {/* Creator Earnings & Active Invites */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 space-y-1 bg-cyan-950/20">
              <div className="text-xs text-slate-400 font-semibold">Available Payout Balance</div>
              <div className="text-3xl font-black text-cyan-400 font-mono">$1,840.00 USD</div>
              <div className="text-[10px] text-emerald-400 font-bold">Payout processing in 24 hours via Stripe</div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-1">
              <div className="text-xs text-slate-400 font-semibold">Open Campaign Briefs</div>
              <div className="text-3xl font-black text-white font-heading">3 Invites</div>
              <div className="text-[10px] text-pink-400 font-bold">Accept brief to start recording</div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-1">
              <div className="text-xs text-slate-400 font-semibold">Creator Star Rating</div>
              <div className="text-3xl font-black text-amber-400 font-heading">4.98 ★</div>
              <div className="text-[10px] text-slate-300 font-bold">Top 1% UGC Creator Badge</div>
            </div>
          </div>

          {/* Active Brief Workbench */}
          <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="font-extrabold text-white text-lg font-heading">
                  Active Brand Brief: GlowBotanica Niacinamide Serum
                </h3>
                <p className="text-xs text-slate-400">Brief status: Accepted • Product shipped • Recording due in 48 hours</p>
              </div>

              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold border border-cyan-500/30">
                Reward: $250.00
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Teleprompter Script Helper */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-pink-400 uppercase tracking-wider">
                  <span>Suggested Script Teleprompter</span>
                  <span>0:30 Vertical Reel</span>
                </div>

                <div className="space-y-2 text-xs text-slate-200 leading-relaxed font-mono bg-black/40 p-4 rounded-xl border border-white/5">
                  <p><strong className="text-cyan-400">[HOOK 0-3s]:</strong> "Stop using 5 different skincare serums until you try this one ingredient..."</p>
                  <p><strong className="text-cyan-400">[DEMO 3-15s]:</strong> Show macro close-up applying 3 drops on cheek with glass skin glow reflection.</p>
                  <p><strong className="text-cyan-400">[CTA 15-30s]:</strong> "Tap the link below for 20% off your first bottle!"</p>
                </div>
              </div>

              {/* Video Upload Box */}
              <div className="p-5 rounded-2xl bg-white/5 border border-dashed border-cyan-500/40 flex flex-col items-center justify-center text-center space-y-3 cursor-pointer hover:bg-white/[0.07] transition-colors">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Upload className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Upload Finished 4K Video Reel</h4>
                  <p className="text-xs text-slate-400">Drag MP4 or MOV file (Max 500MB)</p>
                </div>
                <button
                  onClick={() => onShowToast('Simulated Video Upload Complete! Draft sent to Brand Admin.')}
                  className="btn-glow-cyan px-5 py-2 rounded-xl text-xs font-extrabold cursor-pointer"
                >
                  Simulate Upload & Submit
                </button>
              </div>

            </div>
          </div>

        </div>
      )}

    </div>
  );
};
