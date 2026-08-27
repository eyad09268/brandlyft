import React from 'react';
import { Sparkles, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="glass-panel px-5 py-3.5 rounded-2xl border border-pink-500/40 shadow-2xl shadow-pink-500/20 flex items-center gap-3 bg-[#0d0f20]/90 backdrop-blur-xl">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg">
          <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
        </div>
        
        <p className="text-xs font-semibold text-white max-w-xs">{message}</p>

        <button
          onClick={onClose}
          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-2 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
