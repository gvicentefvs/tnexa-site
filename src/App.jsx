import { useEffect, useState } from 'react'
import BackgroundFX from './components/BackgroundFX'
import Hero from './components/Hero'
import TnexaOverlay from './components/TnexaOverlay'
import Problema from './components/Problema'
import QuemSomos from './components/QuemSomos'
import Diferencial from './components/Diferencial'
import Servicos from './components/Servicos'
import MissaoVisaoValores from './components/MissaoVisaoValores'
import Sgor from './components/Sgor'
import Ecossistema from './components/Ecossistema'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'

export default function App() {
  const [tnexaOverlayOpen, setTnexaOverlayOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = tnexaOverlayOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [tnexaOverlayOpen])

  return (
    <main className="min-h-screen">
      <BackgroundFX />

      <Hero
        onOpenTnexa={() => setTnexaOverlayOpen(true)}
      />

      <TnexaOverlay
        open={tnexaOverlayOpen}
        onClose={() => setTnexaOverlayOpen(false)}
      />

      <Problema />

      <QuemSomos />

      <Diferencial />

      <Servicos />

      <MissaoVisaoValores />

      <Sgor />

      <CTAFinal />

      <Footer />
    </main>
  )
}