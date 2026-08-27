import React, { useState } from 'react';
import { Sparkles, Menu, X, Rocket, Palette, ChevronRight } from 'lucide-react';
import { ColorTheme } from '../types';
import { triggerStarBurst } from '../utils/triggerStarBurst';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
  onOpenCampaignModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  colorTheme,
  setColorTheme,
  onOpenCampaignModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'creators', label: 'Creators Marketplace' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'dashboard', label: 'Platform Demo', badge: 'Live' },
  ];

  const themeOptions: { id: ColorTheme; name: string; gradient: string }[] = [
    { id: 'cyber-violet', name: 'Cyber Violet', gradient: 'from-pink-500 to-purple-600' },
    { id: 'electric-cyan', name: 'Electric Cyan', gradient: 'from-cyan-400 to-blue-600' },
    { id: 'neon-sunset', name: 'Neon Sunset', gradient: 'from-amber-400 to-pink-600' },
    { id: 'emerald-matrix', name: 'Emerald Matrix', gradient: 'from-emerald-400 to-teal-600' },
  ];

  return (
    <header className="sticky top-4 z-50 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="glass-panel rounded-full py-3 px-5 flex items-center justify-between border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-300">
        
        {/* Logo */}
        <button
          onClick={(e) => {
            triggerStarBurst(e);
            setActiveTab('home');
          }}
          className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-pink-500/25 group-hover:scale-110 transition-transform duration-300">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5 font-heading">
              BrandLyft <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-white/10 text-pink-400 border border-pink-500/30">UGC 2.0</span>
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/[0.06]">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={(e) => {
                  triggerStarBurst(e, 6);
                  setActiveTab(link.id);
                }}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'text-white bg-white/15 shadow-inner border border-white/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className="px-1.5 py-0.2 text-[9px] font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full uppercase tracking-wider animate-pulse">
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Theme Selector */}
          <div className="relative">
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="p-2.5 rounded-full glass-pill text-slate-300 hover:text-white hover:border-white/30 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-medium"
              title="Change Color Theme"
            >
              <Palette className="w-4 h-4 text-pink-400" />
              <span className="capitalize hidden xl:inline text-[11px]">{colorTheme.replace('-', ' ')}</span>
            </button>

            {themeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-2xl glass-panel p-2 shadow-2xl border border-white/15 z-50">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                  Select Accent Palette
                </div>
                {themeOptions.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setColorTheme(t.id);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                      colorTheme === t.id ? 'bg-white/15 text-white font-bold' : 'text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full bg-gradient-to-r ${t.gradient}`} />
                    {t.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Launch Campaign CTA */}
          <button
            onClick={(e) => {
              triggerStarBurst(e, 14);
              onOpenCampaignModal();
            }}
            className="btn-star-cta px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg cursor-pointer overflow-hidden group"
          >
            <Rocket className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-300" />
            <span>Launch Campaign</span>

            {/* Floating Stars inside Button */}
            <div className="star-1 animate-star-1 absolute -top-1.5 -left-1 w-3.5 h-3.5 pointer-events-none fill-white">
              <svg viewBox="0 0 784.11 815.53"><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></svg>
            </div>
            <div className="star-2 animate-star-2 absolute -top-2 right-4 w-3 h-3 pointer-events-none fill-white">
              <svg viewBox="0 0 784.11 815.53"><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></svg>
            </div>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl glass-pill text-white hover:bg-white/10 cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 glass-panel rounded-3xl p-5 border border-white/15 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="space-y-2 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={(e) => {
                  triggerStarBurst(e, 5);
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-semibold flex items-center justify-between cursor-pointer ${
                  activeTab === link.id
                    ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white border border-pink-500/30'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.label}
                  {link.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-cyan-400 text-black rounded-full">
                      {link.badge}
                    </span>
                  )}
                </span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Palette Accent:</span>
              <div className="flex gap-1.5">
                {themeOptions.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setColorTheme(t.id)}
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${t.gradient} ${
                      colorTheme === t.id ? 'ring-2 ring-white scale-110' : 'opacity-60'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={(e) => {
                triggerStarBurst(e);
                onOpenCampaignModal();
                setMobileMenuOpen(false);
              }}
              className="w-full btn-star-cta py-3.5 rounded-2xl text-sm font-bold flex items-center justify-center gap-2"
            >
              <Rocket className="w-4 h-4" />
              <span>Launch Campaign Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
