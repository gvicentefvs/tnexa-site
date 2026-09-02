import { useEffect, useState } from 'react'

import Hero from './components/Hero'
import TnexaOverlay from './components/TnexaOverlay'
import SgorOverlay from './components/SgorOverlay'
import Problema from './components/Problema'
import QuemSomos from './components/QuemSomos'
import Diferencial from './components/Diferencial'
import Servicos from './components/Servicos'
import MissaoVisaoValores from './components/MissaoVisaoValores'
import Sgor from './components/Sgor'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'

export default function App() {
  const [tnexaOverlayOpen, setTnexaOverlayOpen] = useState(false)
  const [sgorOverlayOpen, setSgorOverlayOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow =
      tnexaOverlayOpen || sgorOverlayOpen
        ? 'hidden'
        : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [tnexaOverlayOpen, sgorOverlayOpen])

  return (
    <main className="min-h-screen">

      {/* =====================================================
          HERO
      ====================================================== */}
      <Hero
        onOpenTnexa={() => setTnexaOverlayOpen(true)}
      />

      {/* =====================================================
          OVERLAY TNEXA
      ====================================================== */}
      <TnexaOverlay
        open={tnexaOverlayOpen}
        onClose={() => setTnexaOverlayOpen(false)}
      />

      {/* =====================================================
          OVERLAY SGOR
      ====================================================== */}
      <SgorOverlay
        open={sgorOverlayOpen}
        onClose={() => setSgorOverlayOpen(false)}
      />

      {/* =====================================================
          PROBLEMA
      ====================================================== */}
      <Problema />

      {/* =====================================================
          QUEM SOMOS
      ====================================================== */}
      <QuemSomos />

      {/* =====================================================
          DIFERENCIAL
      ====================================================== */}
      <Diferencial />

      {/* =====================================================
          PRODUTOS
      ====================================================== */}
      <div id="servicos">
        <Servicos
          onOpenSgor={() => setSgorOverlayOpen(true)}
        />
      </div>

      {/* =====================================================
          MISSÃO, VISÃO E VALORES
      ====================================================== */}
      <MissaoVisaoValores />

      {/* =====================================================
          CONTATO
      ====================================================== */}
      <div id="contato">
        <CTAFinal />
      </div>

      {/* =====================================================
          RODAPÉ
      ====================================================== */}
      <Footer />

      {/* =====================================================
          WHATSAPP
      ====================================================== */}
      <a
        href="https://wa.me/5515988160880"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/30 transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.47c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.66.15-.19.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.58-.9-2.16-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34z" />
          <path d="M16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.44 1.74 6.32L3 29l6.86-1.7A12.93 12.93 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.7c-2.06 0-4.08-.55-5.84-1.59l-.42-.25-4.07 1.01 1.03-3.97-.27-.43A10.68 10.68 0 1 1 16 26.7z" />
        </svg>
      </a>

    </main>
  )
}