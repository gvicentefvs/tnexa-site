import { motion } from 'framer-motion'
import Section from './Section'

const servicos = [
  'Sites e Plataformas',
  'Automação',
  'Software',
  'Sistemas de Integração',
]

export default function Servicos() {
  return (
    <Section id="servicos" eyebrow="O que fazemos">
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
        {servicos.map((servico, i) => (
          <div key={servico} className="flex items-center gap-2">
            <motion.div
              className="rounded-xl border border-ink-500/20 bg-bg-800/60 px-5 py-3 text-sm text-ink-100 transition-all duration-300 hover:-translate-y-1 hover:border-aqua-500/40"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {servico}
            </motion.div>

            {i < servicos.length - 1 && (
              <motion.span
                className="text-ink-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.12 + 0.2,
                }}
                aria-hidden="true"
              >
                →
              </motion.span>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}