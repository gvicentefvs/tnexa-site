import { motion } from 'framer-motion'
import Section from './Section'

const produtos = [
  {
    numero: '01',
    titulo: 'Sites e Plataformas',
    texto:
      'Experiências digitais, sites institucionais, landing pages e plataformas desenvolvidas para cada necessidade.',
  },
  {
    numero: '02',
    titulo: 'Automação',
    texto:
      'Automatizamos tarefas e processos para reduzir trabalho manual, erros e desperdícios de tempo.',
  },
  {
    numero: '03',
    titulo: 'Software',
    texto:
      'Desenvolvemos softwares sob medida para gestão, controle, análise e operação do seu negócio.',
  },
  {
    numero: '04',
    titulo: 'Sistemas de Integração',
    texto:
      'Conectamos sistemas, dados e processos para transformar operações complexas em um ecossistema inteligente.',
  },
]

export default function Servicos({ onOpenSgor }) {
  return (
    <Section id="servicos" eyebrow="Produtos">

      {/* =====================================================
          INTRODUÇÃO
      ====================================================== */}

      <div className="mb-10 max-w-3xl">
        <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
          Tecnologia construída para a realidade de cada operação.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-300 md:text-lg">
          Desenvolvemos soluções digitais para transformar processos,
          conectar informações e criar novas possibilidades para cada negócio.
        </p>
      </div>

      {/* =====================================================
          PRODUTOS
      ====================================================== */}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

        {produtos.map((produto, i) => (
          <motion.div
            key={produto.titulo}
            className="group relative overflow-hidden rounded-2xl border border-ink-500/20 bg-bg-800/50 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-aqua-500/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.55,
              delay: i * 0.1,
            }}
          >

            {/* brilho */}

            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-aqua-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative">

              <div className="mb-8 flex items-center justify-between">

                <span className="font-mono text-xs tracking-widest text-aqua-400">
                  {produto.numero}
                </span>

                <span className="text-ink-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-aqua-400">
                  →
                </span>

              </div>

              <h3 className="text-xl text-ink-100 sm:text-2xl">
                {produto.titulo}
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-300">
                {produto.texto}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

      {/* =====================================================
          DESTAQUE SGOR
      ====================================================== */}

      <motion.div
        className="relative mt-10 overflow-hidden rounded-2xl border border-aqua-400/30 bg-bg-800/60 p-7 backdrop-blur md:p-9"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
      >

        {/* brilho */}

        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-aqua-500/10 blur-[100px]"
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          {/* TEXTO */}

          <div className="max-w-2xl">

            <span className="font-mono text-xs uppercase tracking-widest text-aqua-400">
              Produto TNEXA
            </span>

            <h3 className="mt-3 text-2xl text-ink-100 sm:text-3xl">
              Conheça o SGOR
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-ink-300 sm:text-base">
              Uma solução TNEXA desenvolvida para conectar etapas da operação
              em um único fluxo.
            </p>

          </div>

          {/* BOTÃO */}

          <button
            type="button"
            onClick={onOpenSgor}
            className="shrink-0 rounded-full border border-aqua-400/60 bg-aqua-400/10 px-6 py-3 font-semibold text-aqua-300 transition-all duration-300 hover:border-aqua-400 hover:bg-aqua-400 hover:text-bg-900 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
          >
            Conheça o SGOR
          </button>

        </div>

      </motion.div>

    </Section>
  )
}