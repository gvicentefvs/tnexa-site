import Section from './Section'

const pilares = ['Engenharia', 'Tecnologia', 'Automação', 'Dados', 'Inteligência']

export default function QuemSomos() {
  return (
    <Section id="quem-somos" eyebrow="Quem é a TNEXA">
      <p className="mb-8 text-ink-300">
        A TNEXA é uma empresa de tecnologia B2B criada para transformar
        desafios reais de empresas em soluções digitais inteligentes,
        eficientes e escaláveis.
      </p>
      <div className="flex flex-wrap gap-3">
        {pilares.map((p) => (
          <span
            key={p}
            className="rounded-full border border-blue-500/40 px-4 py-2 font-mono text-xs text-ink-100"
          >
            {p}
          </span>
        ))}
      </div>
    </Section>
  )
}
