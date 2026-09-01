import Section from './Section'

const pontos = [
  {
    titulo: 'Processos manuais',
    descricao: 'Tarefas que consomem horas e poderiam ser automatizadas.',
  },
  {
    titulo: 'Sistemas que não conversam',
    descricao: 'Informações que precisam ser transferidas manualmente entre sistemas.',
  },
  {
    titulo: 'Informações espalhadas',
    descricao: 'Dados distribuídos entre planilhas, documentos e diferentes ferramentas.',
  },
  {
    titulo: 'Falta de rastreabilidade',
    descricao: 'Dificuldade para saber o que aconteceu, quando e por quem.',
  },
  {
    titulo: 'Retrabalho',
    descricao: 'Atividades repetidas que consomem tempo e recursos da operação.',
  },
  {
    titulo: 'Dificuldade para acompanhar a operação',
    descricao: 'Falta de uma visão clara do que está acontecendo em tempo real.',
  },
  {
    titulo: 'Dados sem inteligência',
    descricao: 'Informações disponíveis que poderiam gerar decisões melhores.',
  },
]

export default function Problema() {
  return (
    <Section id="problema" eyebrow="Onde sua operação pode evoluir?">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {pontos.map((ponto) => (
          <div
            key={ponto.titulo}
            className="rounded-xl border border-ink-500/20 bg-bg-800/60 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-aqua-500/40"
          >
            <h3 className="text-base font-semibold text-ink-100">
              {ponto.titulo}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-ink-400">
              {ponto.descricao}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}