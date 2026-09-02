import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

export default function SgorOverlay({ open, onClose }) {
  const [etapaAtiva, setEtapaAtiva] = useState(0)

  const etapa = etapas[etapaAtiva]

  useEffect(() => {
    if (!open) return

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKey)

    return () => {
      window.removeEventListener('keydown', handleKey)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) {
      setEtapaAtiva(0)
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto bg-bg-900 px-6 py-20 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* BRILHO CENTRAL */}

          <div
            className="pointer-events-none fixed left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua-500/10 blur-[120px]"
            aria-hidden="true"
          />

          {/* BOTÃO FECHAR */}

          <button
            onClick={onClose}
            className="fixed right-6 top-6 z-[110] flex items-center gap-2 rounded-full border border-ink-500/30 bg-bg-900/80 px-4 py-2 font-mono text-xs text-ink-300 backdrop-blur transition-colors hover:border-aqua-400 hover:text-aqua-400"
          >
            fechar
            <span aria-hidden="true">✕</span>
          </button>

          {/* CONTEÚDO */}

          <div className="relative z-10 mx-auto max-w-6xl">

            {/* TÍTULO */}

            <motion.div
              className="mx-auto mb-12 max-w-4xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-aqua-400">
                PRODUTO TNEXA
              </p>

              <h2 className="text-3xl font-semibold leading-tight text-ink-100 sm:text-4xl md:text-5xl lg:text-6xl">
                Conheça o SGOR,
                <br />
                <span className="text-aqua-400">
                  um produto da TNEXA.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-ink-300 sm:text-base md:text-lg">
                O SGOR conecta as etapas da operação em um único fluxo,
                transformando informações dispersas em processos organizados,
                rastreáveis e inteligentes.
              </p>
            </motion.div>

            {/* LINHA DAS ETAPAS */}

            <motion.div
              className="mb-8 overflow-x-auto pb-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex min-w-max items-center justify-center gap-2">

                {etapas.map((item, index) => (
                  <div
                    key={item.numero}
                    className="flex items-center"
                  >
                    <button
                      onClick={() => setEtapaAtiva(index)}
                      className={`group flex items-center gap-3 rounded-full border px-4 py-3 transition-all duration-300 ${
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
                      <span className="mx-2 text-ink-500">
                        →
                      </span>
                    )}
                  </div>
                ))}

              </div>
            </motion.div>

            {/* ETAPA ATIVA */}

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

                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-300 md:text-lg">
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

            {/* CONTROLES */}

            <div className="mt-6 flex items-center justify-between">

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
                {etapa.numero} / 08
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

            <motion.div
              className="mt-12 border-t border-ink-500/20 pt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-lg text-ink-200 md:text-xl">
                Não é apenas registrar informações.
              </p>

              <p className="mt-2 text-lg text-aqua-400 md:text-xl">
                É conectar toda a operação.
              </p>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}