import React, { useState } from 'react';
import { Search, Filter, Star, CheckCircle2, Play, Sparkles, Bookmark, ShoppingBag } from 'lucide-react';
import { CREATORS_DATA } from '../data/mockData';
import { triggerStarBurst } from '../utils/triggerStarBurst';

interface CreatorsPageProps {
  onOpenVideoModal: (video: any) => void;
  onOpenCampaignModal: (creatorName?: string) => void;
  onShowToast: (msg: string) => void;
}

export const CreatorsPage: React.FC<CreatorsPageProps> = ({
  onOpenVideoModal,
  onOpenCampaignModal,
  onShowToast,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedCreators, setBookmarkedCreators] = useState<string[]>([]);

  const categories = ['All', 'Fashion', 'Beauty', 'Fitness', 'Tech', 'Travel', 'Gaming', 'Food', 'Lifestyle'];

  const filteredCreators = CREATORS_DATA.filter((creator) => {
    const matchesCategory = selectedCategory === 'All' || creator.category === selectedCategory;
    const matchesQuery =
      creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const toggleBookmark = (e: React.MouseEvent<HTMLButtonElement>, id: string, name: string) => {
    e.stopPropagation();
    triggerStarBurst(e, 6);
    if (bookmarkedCreators.includes(id)) {
      setBookmarkedCreators(bookmarkedCreators.filter((c) => c !== id));
      onShowToast(`Removed ${name} from your campaign shortlist.`);
    } else {
      setBookmarkedCreators([...bookmarkedCreators, id]);
      onShowToast(`Added ${name} to your campaign shortlist!`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold">
          <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '4s' }} />
          Verified UGC Talent Pool
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
          Discover & Hire Vetted Creator Talent
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Filter through 100,000+ top-performing short-form video creators specialized in high-CTR ad hooks, unboxings, and product reviews.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="glass-panel p-4 rounded-3xl border border-white/10 space-y-4 shadow-xl">
        
        {/* Search Bar Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search creator by name, @handle, or niche keyword (e.g. #OOTD, ASMR, Glass Skin)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-pink-500 transition-colors"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <span className="text-xs font-bold text-slate-400 flex items-center gap-1 shrink-0 mr-1">
            <Filter className="w-3.5 h-3.5" />
            Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold shrink-0 cursor-pointer border transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white border-pink-400/50 shadow-md'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Creator Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCreators.map((creator) => {
          const isSaved = bookmarkedCreators.includes(creator.id);

          return (
            <div
              key={creator.id}
              className="glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-pink-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              {/* Featured Video Thumbnail */}
              <div
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
                className="relative h-64 bg-slate-900 cursor-pointer overflow-hidden"
              >
                <img
                  src={creator.featuredVideo.thumbnail}
                  alt={creator.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

                {/* Bookmark Trigger */}
                <button
                  onClick={(e) => toggleBookmark(e, creator.id, creator.name)}
                  className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md cursor-pointer transition-transform duration-300 hover:scale-110 ${
                    isSaved ? 'bg-pink-500 text-white' : 'bg-black/50 text-slate-300 hover:text-white'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
                </button>

                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cyan-500/80 backdrop-blur-md text-black font-extrabold text-[10px] border border-cyan-400/40">
                  {creator.category}
                </span>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <div className="w-12 h-12 rounded-full bg-pink-500/90 text-white flex items-center justify-center shadow-xl">
                    <Play className="w-6 h-6 fill-white translate-x-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="font-extrabold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {creator.rating} <span className="text-[10px] text-slate-400 font-normal">({creator.reviewsCount})</span>
                  </span>
                  <span className="font-mono text-cyan-300 font-bold">${creator.startingPrice} / video</span>
                </div>
              </div>

              {/* Creator Bio Info */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img src={creator.avatar} alt={creator.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-pink-500/30" />
                    <div>
                      <h3 className="font-extrabold text-white text-base flex items-center gap-1.5 font-heading">
                        {creator.name}
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
                      </h3>
                      <p className="text-xs text-slate-400">{creator.handle} • {creator.followers}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-medium">
                    {creator.bio}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {creator.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-slate-300 font-semibold border border-white/5">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    triggerStarBurst(e, 10);
                    onOpenCampaignModal(creator.name);
                  }}
                  className="w-full btn-star-cta py-3 rounded-2xl text-xs font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-3"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Book Creator (${creator.startingPrice})</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {filteredCreators.length === 0 && (
        <div className="text-center py-16 glass-panel rounded-3xl space-y-3">
          <p className="text-base text-slate-300 font-semibold">No creators found matching "{searchQuery}".</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="px-4 py-2 rounded-xl bg-pink-500 text-white text-xs font-bold"
          >
            Clear Filters
          </button>
        </div>
      )}

    </div>
  );
};
