import React from 'react';
import { MapPin, Star, ExternalLink } from 'lucide-react';
import { GoogleIcon } from './BrandIcons';

interface SecondaryButtonsProps {
  locationUrl?: string;
  googleReviewUrl: string;
}

const DEFAULT_MAPS_URL = 'https://maps.app.goo.gl/SsgZpLjprhWtGJqt6?g_st=ic';

export function SecondaryButtons({
  locationUrl = DEFAULT_MAPS_URL,
  googleReviewUrl,
}: SecondaryButtonsProps) {
  return (
    <section aria-label="Localização e Avaliações" className="w-full px-4 max-w-md mx-auto mt-4 flex flex-col gap-3">
      {/* LOCALIZAÇÃO: Como Chegar */}
      <a
        href={locationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-between w-full p-3.5 rounded-xl bg-gradient-to-r from-[#1a140f] to-[#221a14] border border-[#c8963e]/25 hover:border-[#c8963e]/60 active:scale-[0.985] transition-all duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#2a2018] text-[#e2ab4b] border border-[#c8963e]/30 group-hover:bg-[#c8963e] group-hover:text-[#120d0a] transition-all">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="text-left">
            <span className="block font-semibold text-sm sm:text-base text-[#f0e7dc] group-hover:text-white transition-colors">
              Como Chegar
            </span>
            <span className="block text-xs text-[#b8a691] font-normal leading-tight">
              Av. das Palmeiras, 1534 · Sinop/MT
            </span>
          </div>
        </div>

        <div className="flex items-center text-[#c8963e]/70 group-hover:text-[#e2ab4b] transition-colors pr-1">
          <ExternalLink className="w-4 h-4" />
        </div>
      </a>

      {/* AVALIAR NO GOOGLE */}
      <a
        href={googleReviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-between w-full p-3.5 rounded-xl bg-gradient-to-r from-[#1a140f] to-[#221a14] border border-[#c8963e]/25 hover:border-[#c8963e]/60 active:scale-[0.985] transition-all duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#2a2018] border border-[#c8963e]/30 group-hover:border-white/30 transition-all">
            <GoogleIcon className="w-5 h-5" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="block font-semibold text-sm sm:text-base text-[#f0e7dc] group-hover:text-white transition-colors">
                Avaliar no Google
              </span>
              <div className="flex text-[#fbbc05]">
                <Star className="w-3.5 h-3.5 fill-[#fbbc05]" />
              </div>
            </div>
            <span className="block text-xs text-[#b8a691] font-normal leading-tight">
              Deixe seu depoimento e nota
            </span>
          </div>
        </div>

        <div className="flex items-center text-[#c8963e]/70 group-hover:text-[#e2ab4b] transition-colors pr-1">
          <ExternalLink className="w-4 h-4" />
        </div>
      </a>
    </section>
  );
}
