import Section from './Section'

export default function CTAFinal() {
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
        <a
          href="mailto:contato@tnexa.com.br"
          className="inline-block animate-glow rounded-full bg-gradient-to-r from-blue-500 to-aqua-500 px-12 py-5 font-display text-lg font-semibold text-bg-900 transition-transform hover:scale-105"
        >
          Fale com a TNEXA
        </a>
      </div>
    </Section>
  )
}