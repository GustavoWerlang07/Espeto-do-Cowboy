import React, { useMemo } from 'react';
import { Clock } from 'lucide-react';

export function OpeningHours() {
  // Real-time status indicator based on Sinop/MT timezone (UTC-4)
  const currentStatus = useMemo(() => {
    try {
      // Calculate current date/time in Sinop (UTC-4)
      const now = new Date();
      // Adjust to UTC-4 (Mato Grosso standard time)
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const mtTime = new Date(utc + 3600000 * -4);

      const day = mtTime.getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, ... 6 = Saturday
      const hour = mtTime.getHours();
      const minutes = mtTime.getMinutes();
      const timeDecimal = hour + minutes / 60;

      // Monday: Closed
      if (day === 1) {
        return { isOpen: false, text: 'Fechado às segundas · Abre terça às 11h' };
      }

      // Tuesday to Saturday (days 2 to 6)
      if (day >= 2 && day <= 6) {
        if (timeDecimal >= 11 && timeDecimal <= 13.5) {
          return { isOpen: true, text: 'Aberto agora para Almoço (até 13h30)' };
        }
        if (timeDecimal >= 18 && timeDecimal <= 22.5) {
          return { isOpen: true, text: 'Aberto agora para Jantar (até 22h30)' };
        }
        if (timeDecimal < 11) {
          return { isOpen: false, text: 'Abre hoje às 11h para Almoço' };
        }
        if (timeDecimal > 13.5 && timeDecimal < 18) {
          return { isOpen: false, text: 'Abre hoje às 18h para Jantar' };
        }
        return { isOpen: false, text: 'Fechado no momento' };
      }

      // Sunday (day 0)
      if (day === 0) {
        if (timeDecimal >= 10.5 && timeDecimal <= 13.5) {
          return { isOpen: true, text: 'Aberto agora para Assados de Domingo' };
        }
        if (timeDecimal >= 18 && timeDecimal <= 22.5) {
          return { isOpen: true, text: 'Aberto agora para Jantar de Domingo' };
        }
        return { isOpen: false, text: 'Domingo: Assados 10h30 e Jantar normal' };
      }

      return { isOpen: false, text: 'Horário de atendimento' };
    } catch {
      return { isOpen: false, text: 'Sinop/MT' };
    }
  }, []);

  return (
    <section
      aria-label="Horários de Atendimento"
      className="w-full px-4 max-w-md mx-auto mt-6"
    >
      <div className="rounded-xl p-4 bg-[#14100c]/90 border border-[#c8963e]/20 shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
        {/* Title */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#c8963e]/15">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#c8963e]" />
            <h2 className="font-serif-title text-sm sm:text-base font-bold text-[#f2e8dc] tracking-wide uppercase">
              Horários de Atendimento
            </h2>
          </div>
          {/* Live indicator */}
          <span
            className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-full ${
              currentStatus.isOpen
                ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-700/50'
                : 'bg-[#221a14] text-[#c9b89f] border border-[#c8963e]/20'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                currentStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-[#8c7865]'
              }`}
            />
            {currentStatus.isOpen ? 'Aberto' : 'Fechado'}
          </span>
        </div>

        {/* Schedule grid */}
        <div className="space-y-2.5 text-xs text-[#d8cbba]">
          {/* Terça a Sábado */}
          <div className="bg-[#1b1510] p-2.5 rounded-lg border border-white/5">
            <span className="font-bold text-[#c8963e] tracking-wide block mb-1">
              Terça a Sábado:
            </span>
            <div className="flex flex-col gap-0.5 pl-2 text-[#eee3d4]">
              <div className="flex justify-between items-center">
                <span>Almoço:</span>
                <span className="font-mono tabular-nums text-[#fbf5ee]">11h às 13h30</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Jantar:</span>
                <span className="font-mono tabular-nums text-[#fbf5ee]">18h às 22h30</span>
              </div>
            </div>
          </div>

          {/* Domingo */}
          <div className="bg-[#1b1510] p-2.5 rounded-lg border border-white/5">
            <span className="font-bold text-[#c8963e] tracking-wide block mb-1">
              Domingo:
            </span>
            <div className="flex flex-col gap-0.5 pl-2 text-[#eee3d4]">
              <div className="flex justify-between items-center">
                <span>Assados:</span>
                <span className="font-mono tabular-nums text-[#fbf5ee]">10h30 às 13h30</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Jantar:</span>
                <span className="text-[#fbf5ee]">Atendimento normal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status subtext */}
        <p className="text-[11px] text-center text-[#9c8974] mt-2.5 italic">
          {currentStatus.text}
        </p>
      </div>
    </section>
  );
}
