import { useState } from 'react'
import Section from './Section'

export default function CTAFinal() {
  const [showContacts, setShowContacts] = useState(false)

  return (
    <Section
      id="cta-final"
      eyebrow="Qual desafio sua empresa precisa resolver?"
      className="text-center"
    >
      <p className="mx-auto mb-10 max-w-xl text-ink-300">
        Fale com a TNEXA e descubra como conectar sua operação.
      </p>

      <div className="flex flex-col items-center gap-5">

        {/* BOTÃO PRINCIPAL */}
        <button
          onClick={() => setShowContacts(!showContacts)}
          className="inline-block animate-glow rounded-full bg-gradient-to-r from-blue-500 to-aqua-500 px-12 py-5 font-display text-lg font-semibold text-bg-900 transition-transform hover:scale-105"
        >
          Fale com a TNEXA
        </button>

        {/* CONTATOS */}
        {showContacts && (
          <div className="mt-3 w-full max-w-md rounded-2xl border border-aqua-500/30 bg-bg-900/80 p-7 text-left shadow-2xl backdrop-blur-md">

            <h3 className="mb-6 text-center font-display text-xl font-semibold text-white">
              Entre em contato
            </h3>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/5515988160880"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 flex items-center gap-4 rounded-xl border border-aqua-500/20 bg-white/5 p-4 transition-all hover:border-aqua-500 hover:bg-aqua-500/10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500 text-xl">
                💬
              </div>

              <div>
                <p className="font-semibold text-white">
                  WhatsApp
                </p>
                <p className="text-sm text-ink-300">
                  (15) 98816-0880
                </p>
              </div>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:contato.tnexa@gmail.com"
              className="mb-4 flex items-center gap-4 rounded-xl border border-aqua-500/20 bg-white/5 p-4 transition-all hover:border-aqua-500 hover:bg-aqua-500/10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500 text-xl">
                ✉️
              </div>

              <div>
                <p className="font-semibold text-white">
                  E-mail
                </p>
                <p className="text-sm text-ink-300">
                  contato.tnexa@gmail.com
                </p>
              </div>
            </a>

            {/* LOCALIZAÇÃO */}
            <div className="flex items-center gap-4 rounded-xl border border-aqua-500/20 bg-white/5 p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-aqua-500/20 text-xl">
                📍
              </div>

              <div>
                <p className="font-semibold text-white">
                  Localização
                </p>
                <p className="text-sm text-ink-300">
                  Sorocaba / SP
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </Section>
  )
}