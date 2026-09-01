import Section from './Section'

const conexoes = ['Módulos', 'Integrações', 'Automação', 'Dados', 'Inteligência', 'Novos produtos']

export default function Ecossistema() {
  return (
    <Section id="ecossistema" eyebrow="Um produto hoje. Um ecossistema amanhã.">
      <div className="flex flex-wrap gap-3">
        {conexoes.map((c) => (
          <span key={c} className="rounded-full border border-blue-500/40 px-4 py-2 text-sm text-ink-100">
            {c}
          </span>
        ))}
      </div>
    </Section>
  )
}
