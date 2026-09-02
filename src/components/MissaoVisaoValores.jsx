import { motion } from 'framer-motion'
import Section from './Section'

const blocos = [
  {
    numero: '01',
    titulo: 'Missão',
    texto:
      'Transformar desafios reais em soluções tecnológicas que geram eficiência e resultado.',
  },
  {
    numero: '02',
    titulo: 'Visão',
    texto:
      'Tornar a tecnologia mais acessível, conectada e estratégica para empresas de todos os tamanhos.',
  },
  {
    numero: '03',
    titulo: 'Valores',
    texto:
      'Inovação, eficiência, simplicidade, conexão e evolução.',
  },
]

export default function MissaoVisaoValores() {
  return (
    <Section
      id="missao-visao-valores"
      eyebrow="Tecnologia com propósito"
    >
      {/* =====================================================
          CABEÇALHO DA SEÇÃO
      ====================================================== */}

      <motion.div
        className="mx-auto mb-12 max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h2
          className="
            font-display
            text-4xl
            font-bold
            leading-tight
            tracking-tight
            text-white
            sm:text-5xl
            md:text-6xl
          "
        >
          O que guia a{' '}
          <span className="bg-gradient-to-r from-blue-500 to-aqua-400 bg-clip-text text-transparent">
            TNEXA
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-base
            leading-relaxed
            text-ink-300
            sm:text-lg
          "
        >
          Nossa tecnologia nasce de um propósito claro:
          conectar pessoas, processos e resultados.
        </p>
      </motion.div>

      {/* =====================================================
          MISSÃO / VISÃO / VALORES
      ====================================================== */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {blocos.map((bloco, i) => (
          <motion.article
            key={bloco.titulo}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-aqua-500/20
              bg-[#071218]/80
              p-7
              shadow-[0_0_35px_rgba(0,0,0,0.18)]
              backdrop-blur-sm
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-aqua-400/50
              hover:shadow-[0_0_45px_rgba(34,211,238,0.10)]
              sm:p-8
            "
            initial={{
              opacity: 0,
              y: 30,
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
              duration: 0.7,
              delay: i * 0.15,
              ease: 'easeOut',
            }}
          >

            {/* =================================================
                BRILHO INTERNO
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-40
                w-40
                rounded-full
                bg-aqua-400/10
                blur-[70px]
                transition-all
                duration-500
                group-hover:bg-aqua-400/20
              "
            />

            {/* =================================================
                LINHA SUPERIOR
            ================================================== */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-aqua-400/60
                to-transparent
              "
            />

            {/* =================================================
                NÚMERO
            ================================================== */}

            <div className="relative z-10 mb-7 flex items-center justify-between">
              <span
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-aqua-400/20
                  bg-aqua-400/10
                  font-mono
                  text-sm
                  font-semibold
                  text-aqua-400
                "
              >
                {bloco.numero}
              </span>

              <span
                className="
                  text-4xl
                  font-bold
                  text-white/5
                  transition-colors
                  duration-500
                  group-hover:text-aqua-400/10
                "
              >
                {bloco.numero}
              </span>
            </div>

            {/* =================================================
                TÍTULO
            ================================================== */}

            <h3
              className="
                relative
                z-10
                font-display
                text-2xl
                font-bold
                text-white
                transition-colors
                duration-300
                group-hover:text-aqua-400
                sm:text-3xl
              "
            >
              {bloco.titulo}
            </h3>

            {/* =================================================
                LINHA DECORATIVA
            ================================================== */}

            <div
              className="
                relative
                z-10
                mt-4
                h-px
                w-12
                bg-gradient-to-r
                from-blue-500
                to-aqua-400
                transition-all
                duration-500
                group-hover:w-20
              "
            />

            {/* =================================================
                TEXTO
            ================================================== */}

            <p
              className="
                relative
                z-10
                mt-6
                text-base
                leading-8
                text-ink-300
                sm:text-lg
              "
            >
              {bloco.texto}
            </p>

          </motion.article>
        ))}
      </div>

      {/* =====================================================
          FRASE FINAL
      ====================================================== */}

      <motion.div
        className="mx-auto mt-12 max-w-3xl text-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          delay: 0.5,
        }}
      >
        <div
          className="
            mx-auto
            mb-5
            h-px
            w-24
            bg-gradient-to-r
            from-blue-500
            to-aqua-400
          "
        />

        <p
          className="
            text-base
            leading-relaxed
            text-ink-300
            sm:text-lg
          "
        >
          Tecnologia com propósito, processos conectados
          e evolução contínua.
        </p>
      </motion.div>
    </Section>
  )
}