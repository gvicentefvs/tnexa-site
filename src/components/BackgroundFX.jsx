// ============================================================
// FUNDO GLOBAL TNEXA
// ============================================================
// Fundo único e contínuo para todo o site.
// Degradê vertical suave, sem divisão lateral.
// ============================================================

export default function BackgroundFX() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* ======================================================
          FUNDO ÚNICO
      ====================================================== */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              #071C22 0%,
              #06171D 35%,
              #041218 70%,
              #02090D 100%
            )
          `,
        }}
      />

      {/* ======================================================
          BRILHO SUPERIOR SUAVE
      ====================================================== */}

      <div
        className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(ellipse, rgba(47,224,176,0.08) 0%, rgba(47,224,176,0.03) 40%, transparent 75%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ======================================================
          BRILHO AZUL INFERIOR
      ====================================================== */}

      <div
        className="absolute bottom-[-200px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(ellipse, rgba(47,128,237,0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* ======================================================
          TEXTURA MUITO SUAVE
      ====================================================== */}

      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(79,240,199,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  )
}