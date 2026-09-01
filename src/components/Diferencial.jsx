import Section from './Section'

const etapas = ['Entender', 'Mapear', 'Projetar', 'Construir', 'Conectar', 'Inteligentizar', 'Evoluir']

export default function Diferencial() {
  return (
    <Section id="diferencial" eyebrow="O nosso diferencial">
      <div className="flex flex-wrap items-center gap-2">
        {etapas.map((etapa, i) => (
          <div key={etapa} className="flex items-center gap-2">
            <span className="rounded-lg border border-aqua-500/40 px-4 py-2 text-sm text-ink-100">
              {etapa}
            </span>
            {i < etapas.length - 1 && <span className="text-ink-500">→</span>}
          </div>
        ))}
      </div>
    </Section>
  )
}
