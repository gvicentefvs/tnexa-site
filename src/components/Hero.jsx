import { motion } from 'framer-motion'

function ConnectionThread() {
  const nodes = [
    { x: 60, y: 220 },
    { x: 180, y: 90 },
    { x: 340, y: 260 },
    { x: 520, y: 70 },
    { x: 690, y: 210 },
    { x: 860, y: 100 },
    { x: 1020, y: 240 },
  ]

  const pathD = 'M ' + nodes.map((n) => n.x + ' ' + n.y).join(' L ')

  return (
    <svg
      viewBox="0 0 1080 320"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <motion.path
        d={pathD}
        fill="none"
        stroke="url(#threadGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.4, delay: 0.4, ease: 'easeInOut' }}
      />

      <defs>
        <linearGradient id="threadGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2F80ED" />
          <stop offset="100%" stopColor="#2FE0B0" />
        </linearGradient>
      </defs>

      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="5"
          fill={i % 2 === 0 ? '#2F80ED' : '#2FE0B0'}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.28 }}
        />
      ))}
    </svg>
  )
}

export default function Hero({ onOpenTnexa }) {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <ConnectionThread />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">

        {/* LOGO */}
        <div className="relative z-20 flex w-full justify-center">
          <img
            src="/logo.tnexa.spf.png"
            alt="TNEXA"
            className="block h-auto w-full max-w-[480px] object-contain"
          />
        </div>

        {/* TÍTULO */}
        <h1 className="mt-8 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Quanto sua empresa perde com processos desconectados?
        </h1>

        {/* DESCRIÇÃO */}
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-300 sm:text-base md:text-lg">
          A TNEXA transforma processos complexos em operações conectadas, rastreáveis e inteligentes
        </p>

        {/* BOTÕES */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={onOpenTnexa}
            className="rounded-full bg-gradient-to-r from-blue-500 to-aqua-500 px-7 py-2.5 font-display text-sm font-semibold text-bg-900 transition-transform hover:scale-105"
          >
            Conheça a TNEXA
          </button>

          <button
            onClick={() => scrollToSection('cta-final')}
            className="rounded-full border border-ink-500/40 px-7 py-2.5 font-display text-sm font-semibold text-ink-100 transition-colors hover:border-aqua-500 hover:text-aqua-400"
          >
            Fale com a TNEXA
          </button>
        </div>
      </div>
    </section>
  )
}
