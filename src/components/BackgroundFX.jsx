// ============================================================
// FUNDO GLOBAL TNEXA
// ============================================================
// Fica fixo atrás de toda a página.
// Não interfere em botões, rolagem ou conteúdo.
// ============================================================

export default function BackgroundFX() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg-900"
      aria-hidden="true"
    >

      {/* ======================================================
          BASE
      ====================================================== */}

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 140% 90% at 50% -10%, #12363A 0%, #091D21 42%, #041015 72%, #02070A 100%)',
        }}
      />

      {/* ======================================================
          PARTÍCULAS — SUPERIOR DIREITO
      ====================================================== */}

      <div className="absolute -right-1/5 -top-1/5 h-[85vh] w-[85vh] rotate-[15deg]">

        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(79,240,199,0.55) 1px, transparent 1.7px)',
            backgroundSize: '17px 17px',
            maskImage:
              'radial-gradient(circle at 55% 45%, black 0%, black 25%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(circle at 55% 45%, black 0%, black 25%, transparent 75%)',
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(47,224,176,0.45) 1.5px, transparent 2.5px)',
            backgroundSize: '38px 38px',
            maskImage:
              'radial-gradient(circle at 50% 50%, black 0%, black 22%, transparent 70%)',
            WebkitMaskImage:
              'radial-gradient(circle at 50% 50%, black 0%, black 22%, transparent 70%)',
          }}
        />

        <div className="absolute left-1/3 top-1/4 h-40 w-40 rounded-full bg-aqua-300/20 blur-[90px]" />

        <div
          className="absolute left-1/4 top-1/3 h-[1px] w-[65%] -rotate-[20deg] blur-[2px] opacity-[0.35]"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(150,255,230,0.7), transparent)',
          }}
        />

      </div>

      {/* ======================================================
          BRILHO SUPERIOR DIREITO
      ====================================================== */}

      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-aqua-500/10 blur-[120px]" />

      {/* ======================================================
          PARTÍCULAS — INFERIOR ESQUERDO
      ====================================================== */}

      <div className="absolute -bottom-1/5 -left-1/5 h-[85vh] w-[85vh] -rotate-[15deg]">

        <div
          className="absolute inset-0 opacity-[0.30]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(47,128,237,0.55) 1px, transparent 1.7px)',
            backgroundSize: '17px 17px',
            maskImage:
              'radial-gradient(circle at 45% 55%, black 0%, black 25%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(circle at 45% 55%, black 0%, black 25%, transparent 75%)',
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(76,159,255,0.45) 1.5px, transparent 2.5px)',
            backgroundSize: '38px 38px',
            maskImage:
              'radial-gradient(circle at 50% 50%, black 0%, black 22%, transparent 70%)',
            WebkitMaskImage:
              'radial-gradient(circle at 50% 50%, black 0%, black 22%, transparent 70%)',
          }}
        />

        <div className="absolute right-1/3 bottom-1/4 h-40 w-40 rounded-full bg-blue-400/20 blur-[90px]" />

        <div
          className="absolute right-1/4 bottom-1/3 h-[1px] w-[65%] -rotate-[20deg] blur-[2px] opacity-[0.30]"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(140,190,255,0.7), transparent)',
          }}
        />

      </div>

      {/* ======================================================
          BRILHO INFERIOR ESQUERDO
      ====================================================== */}

      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      {/* ======================================================
          TEXTURA
      ====================================================== */}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, rgba(79,240,199,0.5) 0px, rgba(79,240,199,0.5) 1px, transparent 1px, transparent 100px)',
        }}
      />

    </div>
  )
}