import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const solutions = [
  {
    title: 'Sites e Plataformas',
    description:
      'Experiências digitais, sites institucionais, landing pages e plataformas desenvolvidas para cada necessidade.',
  },
  {
    title: 'Automação',
    description:
      'Automatizamos tarefas e processos para reduzir trabalho manual, erros e desperdícios de tempo.',
  },
  {
    title: 'Software',
    description:
      'Desenvolvemos softwares sob medida para gestão, controle, análise e operação do seu negócio.',
  },
  {
    title: 'Sistemas de Integração',
    description:
      'Conectamos sistemas, dados e processos para transformar operações complexas em um ecossistema inteligente.',
  },
]

const scatter = [
  { x: -60, y: -40, rotate: -8 },
  { x: 50, y: 30, rotate: 6 },
  { x: -30, y: 50, rotate: -5 },
  { x: 70, y: -20, rotate: 9 },
]

const lastCardDelay = 0.3 + (solutions.length - 1) * 0.18

export default function TnexaOverlay({ open, onClose }) {
  useEffect(() => {
    if (!open) return

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKey)

    // Impede a página principal de rolar atrás do overlay
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-bg-900 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* =====================================================
              FUNDO / GLOW
          ====================================================== */}

          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]"
            aria-hidden="true"
          />

          {/* =====================================================
              BOTÃO FECHAR
              FICA FORA DA ÁREA DE ROLAGEM
          ====================================================== */}

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="
              absolute
              right-4
              top-4
              z-[200]
              flex
              items-center
              gap-2
              rounded-full
              border
              border-ink-500/30
              bg-bg-900/80
              px-4
              py-2
              font-mono
              text-xs
              text-ink-300
              shadow-lg
              backdrop-blur-md
              transition-all
              duration-200
              hover:border-aqua-400
              hover:text-aqua-400
              active:scale-95
              sm:right-6
              sm:top-6
            "
          >
            <span>fechar</span>

            <span
              aria-hidden="true"
              className="text-sm"
            >
              ✕
            </span>
          </button>

          {/* =====================================================
              ÁREA DE ROLAGEM
          ====================================================== */}

          <div
            className="
              relative
              h-full
              w-full
              overflow-y-auto
              overflow-x-hidden
              overscroll-contain
              px-5
              pb-16
              pt-24
              sm:px-6
              sm:pt-28
            "
          >

            {/* ===================================================
                CONTEÚDO
            ==================================================== */}

            <div className="mx-auto flex w-full max-w-5xl flex-col items-center">

              {/* =================================================
                  TÍTULO
              ================================================== */}

              <motion.div
                className="relative z-10 mb-10 w-full max-w-3xl text-center sm:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-aqua-400">
                  TNEXA
                </p>

                <h2 className="text-3xl font-semibold leading-tight text-ink-100 sm:text-4xl md:text-5xl">
                  Tecnologia que conecta
                  <br />

                  <span className="text-aqua-400">
                    ideias, processos e resultados.
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-ink-300 sm:text-base">
                  Desenvolvemos soluções tecnológicas sob medida para a sua
                  operação.
                </p>
              </motion.div>

              {/* =================================================
                  SOLUÇÕES
              ================================================== */}

              <div className="relative z-10 grid w-full gap-4 md:grid-cols-2">
                {solutions.map((solution, i) => (
                  <motion.div
                    key={solution.title}
                    className="
                      rounded-2xl
                      border
                      border-blue-500/20
                      bg-bg-800/70
                      p-6
                      shadow-lg
                      shadow-black/20
                      backdrop-blur
                      sm:p-7
                    "
                    initial={{
                      x: scatter[i].x,
                      y: scatter[i].y,
                      rotate: scatter[i].rotate,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      y: 0,
                      rotate: 0,
                      opacity: 1,
                      borderColor: 'rgba(47,224,176,0.35)',
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + i * 0.18,
                      ease: 'easeOut',
                    }}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-aqua-400/10
                          font-mono
                          text-xs
                          text-aqua-400
                        "
                      >
                        0{i + 1}
                      </span>

                      <h3 className="text-lg font-semibold text-ink-100 sm:text-xl">
                        {solution.title}
                      </h3>
                    </div>

                    <p className="text-sm leading-relaxed text-ink-300 sm:text-base">
                      {solution.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* =================================================
                  LINHA DE CONEXÃO
              ================================================== */}

              <motion.div
                className="
                  relative
                  z-10
                  mt-8
                  h-px
                  w-full
                  origin-left
                  bg-gradient-to-r
                  from-blue-500
                  via-aqua-500
                  to-aqua-400
                "
                initial={{
                  scaleX: 0,
                  opacity: 0,
                }}
                animate={{
                  scaleX: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: lastCardDelay + 0.5,
                  ease: 'easeInOut',
                }}
              />

              {/* =================================================
                  FRASE FINAL
              ================================================== */}

              <motion.div
                className="relative z-10 mt-8 max-w-2xl pb-10 text-center"
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: lastCardDelay + 0.9,
                }}
              >
                <p className="text-sm leading-relaxed text-ink-300 sm:text-base">
                  Uma necessidade, um processo ou uma operação inteira.
                  <br />
                  A TNEXA transforma desafios em soluções tecnológicas.
                </p>
              </motion.div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}