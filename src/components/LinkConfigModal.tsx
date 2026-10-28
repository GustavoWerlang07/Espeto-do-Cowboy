import React, { useState } from 'react';
import { X, Check, MapPin, Link as LinkIcon } from 'lucide-react';
import { WhatsappIcon, IfoodIcon, KitaIcon, GoogleIcon } from './BrandIcons';

interface LinkConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  ifoodUrl: string;
  kitaUrl: string;
  googleReviewUrl: string;
  locationUrl?: string;
  whatsappUrl: string;
  activePlatform?: string;
  onSave: (links: {
    ifoodUrl: string;
    kitaUrl: string;
    googleReviewUrl: string;
    locationUrl?: string;
  }) => void;
}

export function LinkConfigModal({
  isOpen,
  onClose,
  ifoodUrl,
  kitaUrl,
  googleReviewUrl,
  locationUrl = '',
  whatsappUrl,
  activePlatform,
  onSave,
}: LinkConfigModalProps) {
  const [formIfood, setFormIfood] = useState(ifoodUrl);
  const [formKita, setFormKita] = useState(kitaUrl);
  const [formGoogle, setFormGoogle] = useState(googleReviewUrl);
  const [formLocation, setFormLocation] = useState(locationUrl);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ifoodUrl: formIfood.trim(),
      kitaUrl: formKita.trim(),
      googleReviewUrl: formGoogle.trim(),
      locationUrl: formLocation.trim(),
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-[#16110d] border border-[#c8963e]/40 p-5 shadow-2xl text-[#ece2d0]">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#c8963e]/20">
          <div className="flex items-center gap-2">
            <LinkIcon className="w-5 h-5 text-[#c8963e]" />
            <h2 className="font-serif-title text-base sm:text-lg font-bold text-[#f5ede0]">
              Links Oficiais do Restaurante
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-[#b8a691] hover:text-white hover:bg-[#281f18] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {activePlatform && (
          <div className="mb-4 p-3 rounded-xl bg-[#261c14] border border-[#c8963e]/30 text-xs">
            <p className="font-semibold text-[#f5ede0] mb-1">
              Link de {activePlatform}:
            </p>
            <p className="text-[#c8b7a0] mb-2">
              Seu link oficial já está ativo! Você também pode atender pedidos direto pelo WhatsApp:
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#25d366] text-[#0a1a0f] font-bold text-xs"
            >
              <WhatsappIcon className="w-4 h-4" />
              <span>Pedir no WhatsApp agora</span>
            </a>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {/* iFood */}
          <div>
            <label className="flex items-center gap-2 font-semibold text-[#f5ede0] mb-1.5">
              <div className="w-5 h-5 rounded bg-white p-0.5 flex items-center justify-center overflow-hidden">
                <IfoodIcon className="w-full h-full" />
              </div>
              <span>Link no iFood:</span>
            </label>
            <input
              type="text"
              value={formIfood}
              onChange={(e) => setFormIfood(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-[#0e0b08] border border-[#c8963e]/30 text-white placeholder-[#7d6e5d] focus:outline-none focus:border-[#c8963e]"
            />
          </div>

          {/* Kita */}
          <div>
            <label className="flex items-center gap-2 font-semibold text-[#f5ede0] mb-1.5">
              <div className="w-5 h-5 rounded bg-[#ffd100] flex items-center justify-center overflow-hidden">
                <KitaIcon className="w-full h-full" />
              </div>
              <span>Link no Kita (Keeta):</span>
            </label>
            <input
              type="text"
              value={formKita}
              onChange={(e) => setFormKita(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-[#0e0b08] border border-[#c8963e]/30 text-white placeholder-[#7d6e5d] focus:outline-none focus:border-[#c8963e]"
            />
          </div>

          {/* Google Review */}
          <div>
            <label className="flex items-center gap-2 font-semibold text-[#f5ede0] mb-1.5">
              <GoogleIcon className="w-4 h-4" />
              <span>Link de Avaliação no Google:</span>
            </label>
            <input
              type="text"
              value={formGoogle}
              onChange={(e) => setFormGoogle(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-[#0e0b08] border border-[#c8963e]/30 text-white placeholder-[#7d6e5d] focus:outline-none focus:border-[#c8963e]"
            />
          </div>

          {/* Google Maps Location */}
          <div>
            <label className="flex items-center gap-2 font-semibold text-[#f5ede0] mb-1.5">
              <MapPin className="w-4 h-4 text-[#c8963e]" />
              <span>Link de Localização (Google Maps):</span>
            </label>
            <input
              type="text"
              value={formLocation}
              onChange={(e) => setFormLocation(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-[#0e0b08] border border-[#c8963e]/30 text-white placeholder-[#7d6e5d] focus:outline-none focus:border-[#c8963e]"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 rounded-lg bg-[#261c14] text-[#c9b89f] hover:text-white text-xs font-semibold cursor-pointer"
            >
              Fechar
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#c8963e] hover:bg-[#dfab4e] text-[#120d0a] text-xs font-bold shadow-md transition-colors cursor-pointer"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Salvo com sucesso!</span>
                </>
              ) : (
                <span>Salvar Alterações</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
