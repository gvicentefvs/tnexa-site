import { motion } from 'framer-motion'
import Section from './Section'

const pilares = [
  {
    numero: '01',
    titulo: 'Tecnologia',
    descricao: 'Soluções digitais pensadas para a realidade de cada operação.',
  },
  {
    numero: '02',
    titulo: 'Automação',
    descricao: 'Processos mais rápidos, inteligentes e com menos trabalho manual.',
  },
  {
    numero: '03',
    titulo: 'Dados',
    descricao: 'Informações organizadas para gerar visão e apoiar decisões.',
  },
  {
    numero: '04',
    titulo: 'Integração',
    descricao: 'Sistemas e processos conectados em um único ecossistema.',
  },
  {
    numero: '05',
    titulo: 'Inteligência',
    descricao: 'Tecnologia aplicada para transformar complexidade em resultado.',
  },
]

export default function QuemSomos() {
  return (
    <Section id="quem-somos" eyebrow="Quem é a TNEXA">

      <div className="relative overflow-hidden rounded-[2rem] border border-aqua-400/10 bg-bg-900/40 px-6 py-10 sm:px-10 sm:py-14 lg:px-14">

        {/* =====================================================
            ELEMENTOS DECORATIVOS
        ====================================================== */}

        <div
          className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[130px]"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-aqua-400/10 blur-[130px]"
          aria-hidden="true"
        />

        {/* Grade tecnológica */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage: `
              linear-gradient(rgba(79,240,199,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(47,128,237,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Linha decorativa superior */}
        <div
          className="pointer-events-none absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-aqua-400/40 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* =================================================
              TEXTO PRINCIPAL
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >

            {/* Identificação */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-blue-500 to-aqua-400" />

              <span className="font-mono text-xs uppercase tracking-[0.25em] text-aqua-400">
                TNEXA
              </span>
            </div>

            {/* Título */}
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-ink-100 sm:text-5xl md:text-6xl">

              Tecnologia para transformar

              <span className="block bg-gradient-to-r from-blue-400 via-aqua-400 to-emerald-300 bg-clip-text text-transparent">
                complexidade em resultado.
              </span>

            </h2>

            {/* Texto principal */}
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
              A TNEXA desenvolve soluções digitais para empresas que precisam
              conectar operações, automatizar processos e transformar dados em
              decisões.
            </p>

            {/* Texto secundário */}
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-400 sm:text-base">
              Unimos tecnologia, engenharia e visão de negócio para construir
              soluções que acompanham a realidade de cada operação.
            </p>

            {/* =================================================
                INDICADORES
            ================================================== */}

            <div className="mt-8 flex flex-wrap gap-3">

              <div className="rounded-full border border-blue-400/20 bg-blue-500/5 px-4 py-2">
                <span className="text-xs font-medium text-blue-300">
                  Engenharia
                </span>
              </div>

              <div className="rounded-full border border-aqua-400/20 bg-aqua-400/5 px-4 py-2">
                <span className="text-xs font-medium text-aqua-300">
                  Tecnologia
                </span>
              </div>

              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2">
                <span className="text-xs font-medium text-emerald-300">
                  Inteligência
                </span>
              </div>

            </div>

          </motion.div>


          {/* =================================================
              PILARES
          ================================================== */}

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >

            {/* Glow */}
            <div
              className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-blue-500/10 via-transparent to-aqua-400/10 blur-3xl"
              aria-hidden="true"
            />

            {/* Caixa principal */}
            <div className="relative overflow-hidden rounded-2xl border border-aqua-400/20 bg-bg-800/60 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6">

              {/* Cabeçalho */}
              <div className="mb-6 flex items-center justify-between">

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-aqua-400">
                    Nossa base
                  </span>

                  <h3 className="mt-2 text-xl font-semibold text-ink-100">
                    Cinco pilares
                  </h3>
                </div>

                {/* Núcleo */}
                <div className="relative flex h-12 w-12 items-center justify-center">

                  <div className="absolute inset-0 rounded-full bg-aqua-400/10 blur-xl" />

                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-aqua-400/40 bg-bg-900">
                    <span className="h-2 w-2 rounded-full bg-aqua-400 shadow-[0_0_15px_rgba(79,240,199,0.9)]" />
                  </div>

                </div>

              </div>


              {/* Lista */}
              <div className="space-y-3">

                {pilares.map((pilar, i) => (

                  <motion.div
                    key={pilar.titulo}
                    className="group relative overflow-hidden rounded-xl border border-ink-500/15 bg-bg-900/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-aqua-400/40 hover:bg-bg-900/80"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.25 + i * 0.08,
                    }}
                  >

                    {/* brilho ao passar mouse */}
                    <div
                      className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-aqua-400/10 to-transparent transition-transform duration-700 group-hover:translate-x-[250%]"
                      aria-hidden="true"
                    />

                    <div className="relative flex gap-4">

                      {/* Número */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-aqua-400/20 bg-aqua-400/5">
                        <span className="font-mono text-xs text-aqua-400">
                          {pilar.numero}
                        </span>
                      </div>

                      {/* Conteúdo */}
                      <div className="min-w-0">

                        <div className="flex items-center gap-2">

                          <h4 className="text-sm font-semibold text-ink-100 sm:text-base">
                            {pilar.titulo}
                          </h4>

                          <span className="h-1 w-1 rounded-full bg-aqua-400/60" />

                        </div>

                        <p className="mt-1 text-xs leading-relaxed text-ink-400 sm:text-sm">
                          {pilar.descricao}
                        </p>

                      </div>

                    </div>

                  </motion.div>

                ))}

              </div>


              {/* Rodapé da caixa */}
              <div className="mt-5 flex items-center gap-3">

                <div className="h-px flex-1 bg-gradient-to-r from-aqua-400/30 to-transparent" />

                <span className="font-mono text-[9px] uppercase tracking-widest text-ink-500">
                  TNEXA SYSTEM
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </Section>
  )
}