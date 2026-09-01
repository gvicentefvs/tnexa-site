import Section from './Section'

export default function CTAFinal() {
  return (
    <Section id="cta-final" eyebrow="Qual desafio sua empresa precisa resolver?" className="text-center">
      <p className="mx-auto mb-10 max-w-xl text-ink-300">
        Fale com a TNEXA e descubra como conectar sua operação.
      </p>
      <div className="flex flex-col items-center gap-5">
        <a
          href="mailto:contato@tnexa.com.br"
          className="inline-block animate-glow rounded-full bg-gradient-to-r from-blue-500 to-aqua-500 px-12 py-5 font-display text-lg font-semibold text-bg-900 transition-transform hover:scale-105"
        >
          Fale com a TNEXA
        </a>
        <button
          onClick={() => document.getElementById('sgor')?.scrollIntoView({ behavior: 'smooth' })}
          className="rounded-full border border-ink-500/40 px-6 py-2.5 font-display text-sm font-medium text-ink-300 transition-colors hover:border-aqua-500 hover:text-aqua-400"
        >
          Conheça o SGOR
        </button>
      </div>
    </Section>
  )
}
