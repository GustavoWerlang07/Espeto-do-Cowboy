import React from 'react';

export function Footer() {
  return (
    <footer className="w-full max-w-md mx-auto pt-8 pb-12 px-4 text-center">
      {/* Decorative Rustic Line */}
      <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#c8963e]" />
        <span className="text-[10px] text-[#c8963e]">❖</span>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#c8963e]" />
      </div>

      {/* Typography */}
      <h3 className="font-serif-title text-sm sm:text-base font-bold text-[#e8ded1] tracking-widest uppercase">
        Espeto do Cowboy
      </h3>

      <p className="text-xs text-[#a89682] italic mt-0.5">
        “Boa comida, bons momentos.”
      </p>

      <p className="text-[11px] text-[#7d6e5d] uppercase tracking-wider font-condensed mt-1">
        Sinop — Mato Grosso
      </p>
    </footer>
  );
}
