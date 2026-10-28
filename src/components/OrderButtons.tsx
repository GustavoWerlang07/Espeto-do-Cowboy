import React from 'react';
import { IfoodIcon, KitaIcon, WhatsappIcon } from './BrandIcons';

interface OrderButtonsProps {
  ifoodUrl: string;
  kitaUrl: string;
  whatsappUrl: string;
}

export function OrderButtons({
  ifoodUrl,
  kitaUrl,
  whatsappUrl,
}: OrderButtonsProps) {
  return (
    <section aria-label="Pedidos Online" className="w-full flex flex-col gap-3.5 px-4 max-w-md mx-auto">
      {/* 1º — PEDIR PELO IFOOD */}
      <a
        href={ifoodUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center w-full h-[64px] px-4 rounded-xl bg-gradient-to-r from-[#1c1612] via-[#241c16] to-[#1e1713] border border-[#c8963e]/25 hover:border-[#ea1d2c]/60 active:scale-[0.985] transition-all duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.6)] hover:shadow-[0_6px_22px_rgba(234,29,44,0.22)]"
      >
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#ea1d2c]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl" />

        {/* Icon aligned to the left - Official iFood logo badge */}
        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-white p-1 border border-white/40 shadow-sm overflow-hidden group-hover:scale-105 transition-transform">
          <IfoodIcon className="w-full h-full" />
        </div>

        {/* Visually centered text */}
        <div className="flex-1 text-center pr-10">
          <span className="font-semibold text-base sm:text-lg text-[#f4eee6] tracking-wide group-hover:text-white transition-colors">
            Pedir pelo iFood
          </span>
          <span className="block text-[11px] text-[#ded2c3]/80 font-normal">
            Entrega rápida e pedidos no app
          </span>
        </div>
      </a>

      {/* 2º — PEDIR PELO KITA (KEETA) */}
      <a
        href={kitaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center w-full h-[64px] px-4 rounded-xl bg-gradient-to-r from-[#1c1612] via-[#241c16] to-[#1e1713] border border-[#c8963e]/25 hover:border-[#ffd100]/60 active:scale-[0.985] transition-all duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.6)] hover:shadow-[0_6px_22px_rgba(255,209,0,0.22)]"
      >
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffd100]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl" />

        {/* Icon aligned to the left - Official Keeta/Kita logo badge */}
        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#ffd100] border border-[#ffd100]/50 shadow-sm overflow-hidden group-hover:scale-105 transition-transform">
          <KitaIcon className="w-full h-full" />
        </div>

        {/* Visually centered text */}
        <div className="flex-1 text-center pr-10">
          <span className="font-semibold text-base sm:text-lg text-[#f4eee6] tracking-wide group-hover:text-white transition-colors">
            Pedir pelo Kita
          </span>
          <span className="block text-[11px] text-[#ded2c3]/80 font-normal">
            Peça na plataforma do Kita
          </span>
        </div>
      </a>

      {/* 3º — PEDIR PELO WHATSAPP */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center w-full h-[64px] px-4 rounded-xl bg-gradient-to-r from-[#1f1712] via-[#2a1e16] to-[#201813] border border-[#25d366]/40 hover:border-[#25d366]/80 active:scale-[0.985] transition-all duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.6)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.22)]"
      >
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#25d366]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl" />

        {/* Icon aligned to the left - Official WhatsApp logo badge */}
        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#25d366] border border-[#25d366]/50 shadow-sm overflow-hidden group-hover:scale-105 transition-transform">
          <WhatsappIcon className="w-6 h-6" />
        </div>

        {/* Visually centered text */}
        <div className="flex-1 text-center pr-10">
          <span className="font-bold text-base sm:text-lg text-[#25d366] group-hover:text-[#3ce67d] tracking-wide transition-colors">
            Pedir pelo WhatsApp
          </span>
          <span className="block text-[11px] text-[#ded2c3]/80 font-normal">
            (66) 9 9685-6259 · Atendimento Direto
          </span>
        </div>
      </a>
    </section>
  );
}
