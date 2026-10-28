import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

interface MenuButtonProps {
  onOpenMenu: () => void;
}

export function MenuButton({ onOpenMenu }: MenuButtonProps) {
  return (
    <div className="w-full px-4 max-w-md mx-auto mt-4">
      <button
        type="button"
        onClick={onOpenMenu}
        className="group relative w-full h-[64px] px-5 rounded-xl bg-gradient-to-r from-[#2c2016] via-[#38281c] to-[#2b1f16] border-2 border-[#c8963e]/60 hover:border-[#e2ab4b] active:scale-[0.985] transition-all duration-200 shadow-[0_6px_24px_rgba(0,0,0,0.7)] hover:shadow-[0_8px_30px_rgba(200,150,62,0.25)] flex items-center justify-between cursor-pointer"
      >
        {/* Decorative corner accents */}
        <span className="absolute top-1 left-1.5 text-[9px] text-[#c8963e]/50 font-mono select-none">✦</span>
        <span className="absolute top-1 right-1.5 text-[9px] text-[#c8963e]/50 font-mono select-none">✦</span>
        <span className="absolute bottom-1 left-1.5 text-[9px] text-[#c8963e]/50 font-mono select-none">✦</span>
        <span className="absolute bottom-1 right-1.5 text-[9px] text-[#c8963e]/50 font-mono select-none">✦</span>

        {/* Left Icon */}
        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#18110c] border border-[#c8963e]/40 text-[#e2ab4b] group-hover:scale-105 transition-transform">
          <BookOpen className="w-5 h-5" />
        </div>

        {/* Center Title and subtitle */}
        <div className="flex-1 text-center px-2">
          <div className="flex items-center justify-center gap-1.5">
            <span className="font-serif-title text-base sm:text-lg font-bold text-[#fcefdc] tracking-wider uppercase group-hover:text-white transition-colors">
              Visualizar Cardápio
            </span>
          </div>
          <span className="block text-[11px] text-[#c8963e] font-medium tracking-wide">
            Espetos · Chapas · Porções · Bebidas
          </span>
        </div>

        {/* Right prompt indicator */}
        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-[#c8963e]/80 group-hover:text-[#e2ab4b] group-hover:translate-x-0.5 transition-all">
          <span className="text-xl">➔</span>
        </div>
      </button>
    </div>
  );
}
