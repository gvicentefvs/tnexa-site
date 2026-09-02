import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from './Section'

const etapas = [
  {
    numero: '01',
    titulo: 'Recebimento',
    descricao:
      'O SGOR registra a entrada da matéria-prima e organiza as informações necessárias para iniciar o rastreamento.',
    resultado: 'Entrada registrada e identificada.',
  },
  {
    numero: '02',
    titulo: 'Análise',
    descricao:
      'As informações da matéria-prima são registradas e vinculadas ao processo antes de avançar para a próxima etapa.',
    resultado: 'Produto analisado e liberado.',
  },
  {
    numero: '03',
    titulo: 'Estoque',
    descricao:
      'Os materiais passam a ser acompanhados dentro do estoque, permitindo visualizar quantidades e movimentações.',
    resultado: 'Estoque atualizado em tempo real.',
  },
  {
    numero: '04',
    titulo: 'Formação de lotes',
    descricao:
      'O sistema organiza os materiais em lotes e mantém o vínculo entre origem, processamento e resultado.',
    resultado: 'Lote identificado e rastreável.',
  },
  {
    numero: '05',
    titulo: 'Produção',
    descricao:
      'As etapas de produção são registradas em sequência, criando um histórico estruturado da operação.',
    resultado: 'Produção registrada.',
  },
  {
    numero: '06',
    titulo: 'Industrialização',
    descricao:
      'O SGOR acompanha o processo de industrialização e mantém a relação entre produto, lote e quantidade.',
    resultado: 'Produto pronto para expedição.',
  },
  {
    numero: '07',
    titulo: 'Expedição',
    descricao:
      'A saída dos produtos é registrada, permitindo acompanhar o que foi expedido e em qual contexto.',
    resultado: 'Expedição registrada.',
  },
  {
    numero: '08',
    titulo: 'Histórico',
    descricao:
      'Todas as informações permanecem conectadas, permitindo consultar o histórico completo da operação.',
    resultado: 'Rastreabilidade completa.',
  },
]

export default function Sgor() {
  const [etapaAtiva, setEtapaAtiva] = useState(0)

  const etapa = etapas[etapaAtiva]

  return (
    <Section id="sgor">

      <div className="space-y-10">

        {/* TÍTULO */}
        <div className="max-w-4xl">

          <h2 className="text-4xl leading-tight md:text-6xl">
            Conheça o SGOR, um produto TNEXA.
          </h2>

          <p className="mt-5 max-w-3xl text-base text-ink-300 md:text-lg">
            O SGOR conecta as etapas da operação em um único fluxo,
            transformando informações dispersas em processos organizados,
            rastreáveis e inteligentes.
          </p>

        </div>

        {/* FLUXO */}
        <div className="overflow-x-auto pb-4">

          <div className="flex min-w-max items-center gap-2">

            {etapas.map((item, index) => (

              <div
                key={item.numero}
                className="flex items-center"
              >

                <button
                  onClick={() => setEtapaAtiva(index)}
                  className={`group relative flex items-center gap-3 rounded-full border px-4 py-3 transition-all duration-300 ${
                    etapaAtiva === index
                      ? 'border-aqua-400 bg-aqua-400/10 text-aqua-300'
                      : 'border-ink-500/30 bg-bg-800/50 text-ink-300 hover:border-aqua-400/50 hover:text-ink-100'
                  }`}
                >

                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full font-mono text-[10px] ${
                      etapaAtiva === index
                        ? 'bg-aqua-400 text-bg-900'
                        : 'border border-ink-500/40 text-ink-400'
                    }`}
                  >
                    {item.numero}
                  </span>

                  <span className="whitespace-nowrap font-display text-sm">
                    {item.titulo}
                  </span>

                </button>

                {index < etapas.length - 1 && (

                  <motion.span
                    className="mx-2 text-ink-500"
                    animate={{
                      opacity: etapaAtiva >= index ? 1 : 0.4,
                    }}
                  >
                    →
                  </motion.span>

                )}

              </div>

            ))}

          </div>

        </div>

        {/* CONTEÚDO DA ETAPA */}
        <AnimatePresence mode="wait">

          <motion.div
            key={etapa.numero}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-ink-500/20 bg-bg-800/60 p-8 md:p-10"
          >

            {/* BRILHO */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-aqua-500/10 blur-[100px]"
              aria-hidden="true"
            />

            <div className="relative grid gap-8 md:grid-cols-[120px_1fr]">

              {/* NÚMERO */}
              <div>

                <span className="font-mono text-sm text-aqua-400">
                  ETAPA
                </span>

                <div className="mt-2 font-display text-6xl text-ink-100">
                  {etapa.numero}
                </div>

              </div>

              {/* TEXTO */}
              <div>

                <h3 className="text-3xl text-ink-100 md:text-4xl">
                  {etapa.titulo}
                </h3>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300 md:text-lg">
                  {etapa.descricao}
                </p>

                <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-aqua-400/30 bg-aqua-400/5 px-4 py-2">

                  <span className="h-2 w-2 rounded-full bg-aqua-400" />

                  <span className="font-mono text-xs text-aqua-300">
                    {etapa.resultado}
                  </span>

                </div>

              </div>

            </div>

          </motion.div>

        </AnimatePresence>

        {/* CONTROLE */}
        <div className="flex items-center justify-between">

          <button
            onClick={() =>
              setEtapaAtiva((atual) =>
                atual === 0 ? etapas.length - 1 : atual - 1
              )
            }
            className="rounded-full border border-ink-500/30 px-5 py-2.5 font-mono text-xs text-ink-300 transition-colors hover:border-aqua-400 hover:text-aqua-400"
          >
            ← anterior
          </button>

          <span className="font-mono text-xs text-ink-500">
            {etapa.numero} / {String(etapas.length).padStart(2, '0')}
          </span>

          <button
            onClick={() =>
              setEtapaAtiva((atual) =>
                atual === etapas.length - 1 ? 0 : atual + 1
              )
            }
            className="rounded-full border border-ink-500/30 px-5 py-2.5 font-mono text-xs text-ink-300 transition-colors hover:border-aqua-400 hover:text-aqua-400"
          >
            próxima →
          </button>

        </div>

        {/* FECHAMENTO */}
        <div className="border-t border-ink-500/20 pt-8">

          <p className="max-w-3xl text-lg text-ink-200 md:text-xl">
            Não é apenas registrar informações.

            <span className="text-aqua-400">
              {' '}
              É conectar toda a operação.
            </span>

          </p>

        </div>

      </div>

    </Section>
  )
}