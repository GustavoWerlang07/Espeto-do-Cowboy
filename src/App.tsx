import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from './components/Header';
import { OrderButtons } from './components/OrderButtons';
import { MenuButton } from './components/MenuButton';
import { MenuModal } from './components/MenuModal';
import { SecondaryButtons } from './components/SecondaryButtons';
import { OpeningHours } from './components/OpeningHours';
import { Footer } from './components/Footer';

// Official URLs for Espeto do Cowboy
export const OFFICIAL_IFOOD_URL =
  'https://www.ifood.com.br/delivery/sinop-mt/espeto-do-cowboy-jardim-das-palmeiras/cc11e384-4b97-4a36-af85-2fe2f8e9ad24?utm_medium=share';

export const OFFICIAL_WHATSAPP_URL =
  'https://wa.me/5566996856259?text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20um%20pedido.';

export const OFFICIAL_KEETA_URL = 'https://url-eu.mykeeta.com/XGa52dYz';

export const OFFICIAL_GOOGLE_REVIEW_URL =
  'https://search.google.com/local/writereview?placeid=ChIJLYP2jsWBp5MRtX4ySpITkvE';

export const OFFICIAL_LOCATION_URL =
  'https://maps.app.goo.gl/SsgZpLjprhWtGJqt6?g_st=ic';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen wood-texture flex flex-col justify-between text-[#ece2d0] selection:bg-[#96261f] selection:text-white relative">
      {/* Subtle top warm atmospheric light */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 inset-x-0 h-96 bg-gradient-to-b from-[#7a1e16]/20 via-[#401f11]/10 to-transparent blur-3xl z-0"
      />

      {/* Main Single-Column Compact Link-in-Bio Container */}
      <main className="relative z-10 w-full max-w-lg mx-auto flex-1 flex flex-col justify-start">
        {/* CABEÇALHO */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Header />
        </motion.div>

        {/* 3 BOTÕES PRINCIPAIS — PEDIDOS (IFOOD, KITA, WHATSAPP) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
        >
          <OrderButtons
            ifoodUrl={OFFICIAL_IFOOD_URL}
            kitaUrl={OFFICIAL_KEETA_URL}
            whatsappUrl={OFFICIAL_WHATSAPP_URL}
          />
        </motion.div>

        {/* BOTÃO ESPECIAL: VISUALIZAR CARDÁPIO */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' }}
        >
          <MenuButton onOpenMenu={() => setIsMenuOpen(true)} />
        </motion.div>

        {/* LOCALIZAÇÃO E AVALIAÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.26, ease: 'easeOut' }}
        >
          <SecondaryButtons
            locationUrl={OFFICIAL_LOCATION_URL}
            googleReviewUrl={OFFICIAL_GOOGLE_REVIEW_URL}
          />
        </motion.div>

        {/* HORÁRIOS DE ATENDIMENTO */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32, ease: 'easeOut' }}
        >
          <OpeningHours />
        </motion.div>

        {/* RODAPÉ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Footer />
        </motion.div>
      </main>

      {/* MODAL OFICIAL DO CARDÁPIO (FRENTE E VERSO COM ZOOM) */}
      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        whatsappUrl={OFFICIAL_WHATSAPP_URL}
      />
    </div>
  );
}
