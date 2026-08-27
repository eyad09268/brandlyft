import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Heart, Share2, ShoppingBag, Eye, CheckCircle2 } from 'lucide-react';
import { triggerStarBurst } from '../utils/triggerStarBurst';

interface VideoModalProps {
  video: {
    id?: string;
    title: string;
    thumbnail: string;
    creatorName?: string;
    handle?: string;
    avatar?: string;
    views?: string;
    likes?: string;
    price?: number;
    category?: string;
  } | null;
  onClose: () => void;
  onHireCreator?: (creatorName: string) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose, onHireCreator }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(parseInt(video?.likes?.replace(/[^0-9]/g, '') || '245', 10));

  if (!video) return null;

  const handleLike = (e: React.MouseEvent<HTMLElement>) => {
    triggerStarBurst(e, 8);
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
      
      {/* Background backdrop click to close */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-lg bg-[#0a0c16] rounded-3xl border border-white/20 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-3">
            {video.avatar ? (
              <img src={video.avatar} alt={video.creatorName} className="w-10 h-10 rounded-full object-cover ring-2 ring-pink-500/50" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm">
                BL
              </div>
            )}
            <div>
              <h4 className="font-bold text-white text-sm flex items-center gap-1.5">
                {video.creatorName || 'Featured UGC Creator'}
                <CheckCircle2 className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
              </h4>
              <p className="text-xs text-slate-400">{video.handle || '@brandlyft.creator'}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full glass-pill text-slate-300 hover:text-white hover:bg-white/20 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Reel Frame */}
        <div className="relative flex-1 bg-black overflow-hidden aspect-[9/16] max-h-[520px] group flex items-center justify-center">
          
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />

          {/* Center Play Overlay */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-20 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform shadow-2xl"
          >
            {isPlaying ? <Pause className="w-7 h-7 fill-white" /> : <Play className="w-7 h-7 fill-white translate-x-0.5" />}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-black/70 cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>

          {/* Category Tag */}
          {video.category && (
            <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-pink-500/80 backdrop-blur-md text-white text-xs font-bold border border-pink-400/40">
              {video.category}
            </div>
          )}

          {/* Right Action Bar (TikTok style) */}
          <div className="absolute right-4 bottom-16 z-20 flex flex-col items-center gap-4">
            <button
              onClick={handleLike}
              className="flex flex-col items-center gap-1 group/btn cursor-pointer"
            >
              <div className={`p-3 rounded-full backdrop-blur-md transition-transform duration-300 group-hover/btn:scale-110 ${
                liked ? 'bg-pink-500 text-white' : 'bg-black/50 text-white hover:bg-black/70'
              }`}>
                <Heart className={`w-6 h-6 ${liked ? 'fill-white' : ''}`} />
              </div>
              <span className="text-xs font-bold text-white shadow-black drop-shadow">{likeCount}k</span>
            </button>

            <button
              onClick={(e) => triggerStarBurst(e, 5)}
              className="flex flex-col items-center gap-1 group/btn cursor-pointer"
            >
              <div className="p-3 rounded-full bg-black/50 backdrop-blur-md text-white group-hover/btn:scale-110 transition-transform">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-white shadow-black drop-shadow">{video.views || '1.8M'}</span>
            </button>

            <button
              onClick={(e) => triggerStarBurst(e, 5)}
              className="flex flex-col items-center gap-1 group/btn cursor-pointer"
            >
              <div className="p-3 rounded-full bg-black/50 backdrop-blur-md text-white group-hover/btn:scale-110 transition-transform">
                <Share2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-white shadow-black drop-shadow">Share</span>
            </button>
          </div>

          {/* Bottom Video Information */}
          <div className="absolute bottom-4 left-4 right-16 z-20 text-white space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-cyan-400 text-black uppercase tracking-wider">
                High CTR Hook
              </span>
              <span className="text-xs text-slate-300 font-medium">9:16 Vertical UHD</span>
            </div>
            <h3 className="font-bold text-base leading-snug line-clamp-2">{video.title}</h3>
          </div>
        </div>

        {/* Footer Action Bar */}
        <div className="p-4 bg-[#0e1122] border-t border-white/10 flex items-center justify-between gap-4">
          <div>
            <div className="text-[11px] text-slate-400 font-medium">Starting Rate</div>
            <div className="text-lg font-extrabold text-cyan-400">
              ${video.price || 180} <span className="text-xs font-normal text-slate-400">/ video</span>
            </div>
          </div>

          <button
            onClick={(e) => {
              triggerStarBurst(e, 12);
              onClose();
              if (onHireCreator) {
                onHireCreator(video.creatorName || 'Sophia Chen');
              }
            }}
            className="btn-star-cta px-6 py-3 rounded-2xl text-xs font-extrabold flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Book This Creator</span>
          </button>
        </div>

      </div>
    </div>
  );
};
