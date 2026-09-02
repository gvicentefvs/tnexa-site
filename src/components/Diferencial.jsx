import { motion } from 'framer-motion'
import Section from './Section'

const etapas = [
  {
    numero: '01',
    titulo: 'Entender',
    descricao: 'Compreender o desafio, a operação e a necessidade real.',
  },
  {
    numero: '02',
    titulo: 'Mapear',
    descricao: 'Identificar processos, informações e pontos de melhoria.',
  },
  {
    numero: '03',
    titulo: 'Projetar',
    descricao: 'Criar uma solução alinhada ao objetivo do negócio.',
  },
  {
    numero: '04',
    titulo: 'Construir',
    descricao: 'Transformar a estratégia em tecnologia funcional.',
  },
  {
    numero: '05',
    titulo: 'Conectar',
    descricao: 'Integrar sistemas, pessoas, dados e processos.',
  },
  {
    numero: '06',
    titulo: 'Inteligentizar',
    descricao: 'Aplicar inteligência para gerar eficiência e controle.',
  },
  {
    numero: '07',
    titulo: 'Evoluir',
    descricao: 'Aprimorar continuamente a solução junto ao negócio.',
  },
]

export default function Diferencial() {
  return (
    <Section id="diferencial" eyebrow="O nosso diferencial">

      <div className="relative overflow-hidden rounded-[2rem] border border-aqua-400/10 bg-bg-900/40 px-6 py-10 sm:px-10 sm:py-14 lg:px-14">

        {/* =====================================================
            GLOWS
        ====================================================== */}

        <div
          className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[130px]"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-aqua-400/10 blur-[130px]"
          aria-hidden="true"
        />

        {/* =====================================================
            GRADE
        ====================================================== */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          aria-hidden="true"
          style={{
            backgroundImage: `
              linear-gradient(rgba(79,240,199,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(47,128,237,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* =====================================================
            LINHA SUPERIOR
        ====================================================== */}

        <div
          className="pointer-events-none absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-aqua-400/40 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10">

          {/* =================================================
              CABEÇALHO
          ================================================== */}

          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-blue-500 to-aqua-400" />

              <span className="font-mono text-xs uppercase tracking-[0.25em] text-aqua-400">
                Nosso diferencial
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-ink-100 sm:text-5xl md:text-6xl">

              Tecnologia não é apenas

              <span className="block bg-gradient-to-r from-blue-400 via-aqua-400 to-emerald-300 bg-clip-text text-transparent">
                construir.
              </span>

              <span className="mt-1 block text-ink-200">
                É entender para evoluir.
              </span>

            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
              Na TNEXA, cada projeto percorre uma jornada estruturada para
              transformar desafios reais em soluções conectadas, inteligentes
              e preparadas para evoluir.
            </p>

          </motion.div>


          {/* =================================================
              FLUXO
          ================================================== */}

          <div className="relative mt-14">

            {/* Linha horizontal desktop */}
            <motion.div
              className="absolute left-[7%] right-[7%] top-[31px] hidden h-px bg-gradient-to-r from-blue-500/20 via-aqua-400/70 to-emerald-400/30 lg:block"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.3 }}
            />

            {/* Brilho da linha */}
            <motion.div
              className="absolute left-[7%] right-[7%] top-[29px] hidden h-[5px] bg-gradient-to-r from-transparent via-aqua-400/20 to-transparent blur-md lg:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            />

            {/* Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-7 lg:gap-3">

              {etapas.map((etapa, i) => (

                <motion.div
                  key={etapa.titulo}
                  className="group relative"
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: 0.15 + i * 0.1,
                  }}
                >

                  {/* =================================================
                      NÚCLEO
                  ================================================== */}

                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-aqua-400/30 bg-bg-900 shadow-[0_0_30px_rgba(79,240,199,0.08)] transition-all duration-300 group-hover:border-aqua-400/70 group-hover:shadow-[0_0_35px_rgba(79,240,199,0.2)]">

                    {/* Anel */}
                    <div className="absolute inset-1 rounded-full border border-blue-400/10 transition-all duration-500 group-hover:scale-110 group-hover:border-aqua-400/20" />

                    {/* Ponto */}
                    <div className="absolute h-2 w-2 rounded-full bg-aqua-400 shadow-[0_0_15px_rgba(79,240,199,0.9)] transition-all duration-300 group-hover:h-3 group-hover:w-3" />

                    <span className="absolute -top-2 right-0 rounded-full border border-aqua-400/20 bg-bg-900 px-1.5 py-0.5 font-mono text-[9px] text-aqua-400">
                      {etapa.numero}
                    </span>

                  </div>


                  {/* =================================================
                      CARD
                  ================================================== */}

                  <div className="mt-4 h-full rounded-xl border border-ink-500/15 bg-bg-800/40 p-4 text-center backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-aqua-400/30 group-hover:bg-bg-800/70">

                    <h3 className="text-sm font-semibold text-ink-100 sm:text-base">
                      {etapa.titulo}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-ink-400">
                      {etapa.descricao}
                    </p>

                  </div>

                  {/* =================================================
                      SETA MOBILE
                  ================================================== */}

                  {i < etapas.length - 1 && (
                    <div
                      className="flex justify-center py-2 text-aqua-400/50 lg:hidden"
                      aria-hidden="true"
                    >
                      ↓
                    </div>
                  )}

                </motion.div>

              ))}

            </div>

          </div>


          {/* =================================================
              FRASE FINAL
          ================================================== */}

          <motion.div
            className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-ink-500/10 pt-7 sm:flex-row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-aqua-400/20 bg-aqua-400/5">

                <span className="h-2 w-2 rounded-full bg-aqua-400 shadow-[0_0_12px_rgba(79,240,199,0.8)]" />

              </div>

              <span className="text-sm text-ink-300">
                Do desafio à evolução.
              </span>

            </div>

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
              TNEXA / SYSTEM
            </span>

          </motion.div>

        </div>

      </div>

    </Section>
  )
}