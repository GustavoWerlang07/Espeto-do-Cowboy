import React, { useState, useEffect, useRef } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ArrowLeft, ArrowRight, Download, MessageSquare } from 'lucide-react';
import { WhatsappIcon } from './BrandIcons';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappUrl: string;
}

const MENU_PAGES = [
  {
    id: 'frente',
    title: 'Frente',
    subtitle: 'Espetos, Marmitas, Adicionais e Porções',
    src: '/assets/cardapio_frente.jpeg',
    alt: 'Cardápio Espeto do Cowboy - Frente (Espetos, Simples, Completo, Porções)',
  },
  {
    id: 'verso',
    title: 'Verso',
    subtitle: 'Chapas de Picanha, Costela e Bebidas',
    src: '/assets/cardapio_verso.jpeg',
    alt: 'Cardápio Espeto do Cowboy - Verso (Chapas e Bebidas)',
  },
];

export function MenuModal({ isOpen, onClose, whatsappUrl }: MenuModalProps) {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const currentPage = MENU_PAGES[currentPageIndex];

  // Reset zoom & pan on page change or modal open
  useEffect(() => {
    if (isOpen) {
      setZoom(1);
      setPan({ x: 0, y: 0 });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, currentPageIndex]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPageIndex]);

  const handleNext = () => {
    setCurrentPageIndex((prev) => (prev + 1) % MENU_PAGES.length);
  };

  const handlePrev = () => {
    setCurrentPageIndex((prev) => (prev - 1 + MENU_PAGES.length) % MENU_PAGES.length);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.35, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => {
      const next = Math.max(prev - 0.35, 1);
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleDoubleClick = () => {
    if (zoom > 1) {
      handleResetZoom();
    } else {
      setZoom(1.8);
    }
  };

  // Mouse drag handlers for panning when zoomed
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoom <= 1) return;
    setPan({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cardápio Oficial do Espeto do Cowboy"
      className="fixed inset-0 z-50 flex flex-col bg-black/92 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Top Header Bar */}
      <div className="flex-shrink-0 flex items-center justify-between px-3 sm:px-6 py-3 border-b border-[#c8963e]/20 bg-[#14100c]/90">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="font-serif-title text-base sm:text-lg font-bold text-[#f5ede0] tracking-wide">
            Cardápio Oficial
          </span>
          <span className="hidden sm:inline-block text-xs text-[#c8963e] tracking-wider uppercase font-condensed">
            · Espeto do Cowboy
          </span>
        </div>

        {/* Page Switcher Tabs */}
        <div className="flex items-center gap-1 bg-[#241c16] p-1 rounded-lg border border-[#c8963e]/30">
          {MENU_PAGES.map((page, index) => (
            <button
              key={page.id}
              type="button"
              onClick={() => setCurrentPageIndex(index)}
              className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                currentPageIndex === index
                  ? 'bg-[#c8963e] text-[#120d0a] shadow-sm font-bold'
                  : 'text-[#ded2c3] hover:text-white hover:bg-[#34271d]'
              }`}
            >
              {page.title}
            </button>
          ))}
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar cardápio"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2a2018] text-[#eedec8] hover:text-white hover:bg-[#96261f] border border-[#c8963e]/30 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Floating Zoom / Control Toolbar */}
      <div className="flex-shrink-0 flex items-center justify-between px-4 py-2 bg-[#1b1510]/85 border-b border-white/5 text-xs text-[#d2c4b0]">
        <div className="flex items-center gap-2">
          <span className="font-medium text-[#c8963e]">
            Página {currentPageIndex + 1} de {MENU_PAGES.length}:
          </span>
          <span className="text-[#e2d5c3] truncate max-w-[200px] sm:max-w-xs">
            {currentPage.subtitle}
          </span>
        </div>

        {/* Zoom controls */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={handleZoomOut}
            disabled={zoom <= 1}
            aria-label="Diminuir zoom"
            className="p-1.5 rounded bg-[#2a2018] hover:bg-[#3d2e22] disabled:opacity-40 disabled:pointer-events-none text-[#eedec8] border border-[#c8963e]/20 transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="w-12 text-center font-mono tabular-nums text-[11px] text-[#c8963e]">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={handleZoomIn}
            disabled={zoom >= 3}
            aria-label="Aumentar zoom"
            className="p-1.5 rounded bg-[#2a2018] hover:bg-[#3d2e22] disabled:opacity-40 disabled:pointer-events-none text-[#eedec8] border border-[#c8963e]/20 transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          {zoom > 1 && (
            <button
              type="button"
              onClick={handleResetZoom}
              title="Redefinir Zoom"
              className="p-1.5 rounded bg-[#2a2018] hover:bg-[#3d2e22] text-[#eedec8] border border-[#c8963e]/20 ml-1 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Interactive Main Viewport */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onDoubleClick={handleDoubleClick}
        className={`flex-1 overflow-auto flex items-center justify-center p-2 sm:p-4 relative select-none ${
          zoom > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-zoom-in'
        }`}
      >
        {/* Previous page arrow button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Página anterior"
          className="absolute left-2 sm:left-4 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#c8963e] text-[#eedec8] hover:text-[#120d0a] backdrop-blur-sm border border-[#c8963e]/40 flex items-center justify-center transition-all shadow-lg cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Menu Image with Zoom/Pan */}
        <div
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.15s ease-out',
          }}
          className="max-w-full max-h-[76vh] flex items-center justify-center"
        >
          <img
            src={currentPage.src}
            alt={currentPage.alt}
            className="max-h-[76vh] w-auto object-contain rounded-lg shadow-2xl border border-[#c8963e]/30 pointer-events-auto"
            draggable={false}
          />
        </div>

        {/* Next page arrow button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Próxima página"
          className="absolute right-2 sm:right-4 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#c8963e] text-[#eedec8] hover:text-[#120d0a] backdrop-blur-sm border border-[#c8963e]/40 flex items-center justify-center transition-all shadow-lg cursor-pointer"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Action Footer */}
      <div className="flex-shrink-0 flex items-center justify-between gap-3 px-4 py-3 bg-[#14100c] border-t border-[#c8963e]/20">
        <span className="text-[11px] sm:text-xs text-[#c9b89f] hidden sm:inline">
          Toque duas vezes para dar zoom rápido. Arraste para navegar pelos detalhes.
        </span>

        {/* Direct WhatsApp Order CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25d366] hover:bg-[#20b858] text-[#0a1a0f] font-bold text-sm shadow-lg shadow-[#25d366]/20 transition-all cursor-pointer"
        >
          <WhatsappIcon className="w-5 h-5" />
          <span>Fazer Pedido no WhatsApp</span>
        </a>

        {/* Download original image */}
        <a
          href={currentPage.src}
          download={`espeto_do_cowboy_cardapio_${currentPage.id}.jpeg`}
          className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#2a2018] hover:bg-[#3d2e22] text-[#eedec8] text-xs border border-[#c8963e]/30 transition-colors"
          title="Baixar imagem original do cardápio"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Baixar Imagem</span>
        </a>
      </div>
    </div>
  );
}
