import { motion } from 'framer-motion'

// Shared wrapper: fade/slide-in on scroll, consistent section spacing.
// Every content section (Problema, QuemSomos, etc.) uses this.
// Each section has a single heading (the "eyebrow" label), large and with
// the blue -> aqua gradient — no separate secondary title.
export default function Section({ id, eyebrow, children, className = '' }) {
  return (
    <section id={id} className={`px-6 py-24 md:py-32 ${className}`}>
      <motion.div
        className="mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {eyebrow && (
          <h2 className="mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{eyebrow}</h2>
        )}
        {children}
      </motion.div>
    </section>
  )
}
