import { motion } from 'framer-motion'
import Section from './Section'

const blocos = [
  {
    titulo: 'Missão',
    texto:
      'Transformar desafios reais em soluções tecnológicas que geram eficiência e resultado.',
  },
  {
    titulo: 'Visão',
    texto:
      'Tornar a tecnologia mais acessível, conectada e estratégica para empresas de todos os tamanhos.',
  },
  {
    titulo: 'Valores',
    texto:
      'Inovação, eficiência, simplicidade, conexão e evolução.',
  },
]

export default function MissaoVisaoValores() {
  return (
    <Section id="missao-visao-valores" eyebrow="Tecnologia com propósito">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {blocos.map((bloco, i) => (
          <motion.div
            key={bloco.titulo}
            className="rounded-xl border border-ink-500/20 bg-bg-800/60 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-aqua-500/40"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="text-base font-semibold text-aqua-400">
              {bloco.titulo}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-ink-300">
              {bloco.texto}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}