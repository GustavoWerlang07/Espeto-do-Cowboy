import React from 'react';
import { RusticDivider } from './BrandIcons';

export function Header() {
  return (
    <header className="flex flex-col items-center text-center pt-7 pb-2 px-4">
      {/* Centralized Official Circular Espeto do Cowboy Logo Badge */}
      <div className="relative group mb-3 flex items-center justify-center">
        {/* Subtle warm amber/fire glow aura behind logo */}
        <div className="absolute -inset-3 bg-gradient-to-tr from-[#96261f]/35 via-[#c8963e]/20 to-[#96261f]/20 rounded-full blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Logo container */}
        <div className="relative p-1 flex items-center justify-center rounded-full">
          <img
            src="/assets/espeto_cowboy_circular_clean.png"
            alt="Espeto do Cowboy - Logomarca Oficial"
            className="w-44 h-44 sm:w-52 sm:h-52 rounded-full object-contain select-none drop-shadow-[0_10px_28px_rgba(0,0,0,0.95)] transition-transform duration-300 group-hover:scale-[1.02]"
            loading="eager"
          />
        </div>
      </div>

      {/* Accessible Title */}
      <h1 className="sr-only">Espeto do Cowboy</h1>

      {/* Slogan */}
      <p className="text-sm sm:text-base font-normal tracking-wide text-[#d9caa7] italic font-serif">
        “Boa comida, bons momentos.”
      </p>

      {/* Location Subtitle */}
      <p className="text-xs tracking-widest uppercase text-[#9e886d] mt-1 font-condensed">
        Sinop · Mato Grosso
      </p>

      {/* Discrete Rustic Separator */}
      <RusticDivider />
    </header>
  );
}
