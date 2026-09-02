import { useEffect, useState } from 'react'

export default function Hero({ onOpenTnexa }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <style>{`
        @keyframes orbitRotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes orbitRotateReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes orbitPulse {
          0%, 100% {
            opacity: 0.55;
            transform: translate(-50%, -50%) scale(1);
          }

          50% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        @keyframes logoFloat {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }

          50% {
            transform: translate(-50%, -50%) translateY(-8px);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.25;
            transform: translate(-50%, -50%) scale(0.9);
          }

          50% {
            opacity: 0.55;
            transform: translate(-50%, -50%) scale(1.15);
          }
        }

        .orbit-outer {
          animation: orbitRotate 22s linear infinite;
        }

        .orbit-middle {
          animation: orbitRotateReverse 16s linear infinite;
        }

        .orbit-inner {
          animation: orbitRotate 11s linear infinite;
        }

        .orbit-glow {
          animation: glowPulse 3s ease-in-out infinite;
        }

        .orbit-logo {
          animation: logoFloat 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .orbit-outer,
          .orbit-middle,
          .orbit-inner,
          .orbit-glow,
          .orbit-logo {
            animation: none;
          }
        }
      `}</style>

      <section
        id="inicio"
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#02070A]
        "
      >

        {/* =====================================================
            FUNDO ÚNICO
            =====================================================
            IMPORTANTE:
            Não existe mais nenhuma divisão vertical.
            O Hero inteiro usa o mesmo fundo.
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
          "
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(180deg, #02070A 0%, #041015 50%, #02070A 100%)',
          }}
        />

        {/* =====================================================
            CABEÇALHO
        ====================================================== */}

        <header className="relative z-50 border-b border-white/5 bg-[#02070A]/95 backdrop-blur-md">
          <div className="mx-auto flex h-[86px] max-w-[1400px] items-center justify-between px-6 lg:px-10">

            {/* LOGO */}

            <a
              href="#inicio"
              className="flex items-center"
              aria-label="TNEXA Tecnologia"
            >
              <img
                src="/logo.tnexa.spf.png"
                alt="TNEXA Tecnologia"
                className="h-[72px] w-auto object-contain"
              />
            </a>

            {/* MENU DESKTOP */}

            <nav className="hidden items-center gap-10 md:flex">

              <a
                href="#contato"
                className="font-display text-sm font-semibold text-white transition-colors hover:text-aqua-400"
              >
                Contato
              </a>

              <a
                href="#servicos"
                className="font-display text-sm font-semibold text-white transition-colors hover:text-aqua-400"
              >
                Produtos
              </a>

              <button
                onClick={onOpenTnexa}
                className="font-display text-sm font-semibold text-white transition-colors hover:text-aqua-400"
              >
                Conheça a TNEXA
              </button>

              <a
                href="#quem-somos"
                className="font-display text-sm font-semibold text-white transition-colors hover:text-aqua-400"
              >
                Quem Somos
              </a>

              <a
                href="#contato"
                className="
                  rounded-full
                  border
                  border-aqua-500
                  px-8
                  py-3.5
                  font-display
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  hover:bg-aqua-500/10
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]
                "
              >
                Fale Conosco
              </a>

            </nav>

            {/* BOTÃO MOBILE */}

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-aqua-500/70
                text-white
                md:hidden
              "
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
            >
              <div className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-6 bg-white" />
                <span className="block h-0.5 w-6 bg-white" />
                <span className="block h-0.5 w-6 bg-white" />
              </div>
            </button>

          </div>

          {/* MENU MOBILE */}

          {menuOpen && (
            <div className="border-t border-white/5 bg-[#02070A] px-6 py-6 md:hidden">

              <nav className="flex flex-col gap-5 text-center">

                <a
                  href="#contato"
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-base font-semibold text-white"
                >
                  Contato
                </a>

                <a
                  href="#servicos"
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-base font-semibold text-white"
                >
                  Produtos
                </a>

                <button
                  onClick={() => {
                    setMenuOpen(false)
                    onOpenTnexa?.()
                  }}
                  className="font-display text-base font-semibold text-white"
                >
                  Conheça a TNEXA
                </button>

                <a
                  href="#quem-somos"
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-base font-semibold text-white"
                >
                  Quem Somos
                </a>

                <a
                  href="#contato"
                  onClick={() => setMenuOpen(false)}
                  className="
                    rounded-full
                    border
                    border-aqua-500
                    px-6
                    py-3
                    font-display
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Fale Conosco
                </a>

              </nav>

            </div>
          )}

        </header>

        {/* =====================================================
            CONTEÚDO HERO
        ====================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[calc(100vh-86px)]
            max-w-[1400px]
            flex-col
            px-6
            lg:px-10
          "
        >

          {/* =================================================
              ÓRBITA
          ================================================== */}

          <div
            className="
              order-1
              relative
              flex
              h-[510px]
              w-full
              items-center
              justify-center

              md:absolute
              md:right-[-60px]
              md:top-[50%]
              md:order-none
              md:h-[650px]
              md:w-[650px]
              md:-translate-y-1/2

              lg:right-[-20px]
              lg:h-[720px]
              lg:w-[720px]
            "
          >

            {/* BRILHO CENTRAL */}

            <div
              className="
                orbit-glow
                absolute
                left-1/2
                top-1/2
                h-32
                w-32
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-aqua-400/20
                blur-3xl
                md:h-44
                md:w-44
              "
            />

            {/* PONTO CENTRAL */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-10
                h-5
                w-5
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-aqua-300
                shadow-[0_0_25px_rgba(34,211,238,0.9)]
              "
            />

            {/* ÓRBITA VERTICAL */}

            <div
              className="
                orbit-outer
                absolute
                left-1/2
                top-1/2
                h-[390px]
                w-[210px]
                rounded-[50%]
                border
                border-aqua-500/20
                md:h-[590px]
                md:w-[320px]
              "
            />

            {/* ÓRBITA DIAGONAL */}

            <div
              className="
                orbit-middle
                absolute
                left-1/2
                top-1/2
                h-[230px]
                w-[500px]
                rounded-[50%]
                border
                border-blue-500/25
                md:h-[300px]
                md:w-[650px]
              "
              style={{
                transform: 'translate(-50%, -50%) rotate(-18deg)',
              }}
            />

            {/* ÓRBITA HORIZONTAL */}

            <div
              className="
                orbit-inner
                absolute
                left-1/2
                top-1/2
                h-[170px]
                w-[450px]
                rounded-[50%]
                border
                border-cyan-400/25
                md:h-[210px]
                md:w-[590px]
              "
            />

            {/* LOGO CENTRAL */}

            <img
              src="/logo.tnexa.spf.png"
              alt="TNEXA"
              className="
                orbit-logo
                absolute
                left-1/2
                top-1/2
                z-20
                w-[145px]
                max-w-none
                object-contain
                drop-shadow-[0_0_18px_rgba(0,180,255,0.45)]
                md:w-[205px]
              "
            />

            {/* =================================================
                TECNOLOGIA
            ================================================== */}

            <div
              className="
                absolute
                left-1/2
                top-[42px]
                -translate-x-1/2
                text-center
                md:top-[25px]
              "
            >
              <span className="mb-3 block text-2xl text-aqua-400">
                ◇
              </span>

              <p className="font-display text-sm font-bold text-white md:text-base">
                Tecnologia
              </p>

              <p className="text-xs text-ink-300 md:text-sm">
                de verdade
              </p>
            </div>

            {/* =================================================
                PROCESSOS
            ================================================== */}

            <div
              className="
                absolute
                left-[20px]
                top-[175px]
                text-center
                md:left-[40px]
                md:top-[205px]
              "
            >
              <span className="mb-2 block text-3xl text-aqua-400">
                ⌘
              </span>

              <p className="font-display text-sm font-bold text-white md:text-base">
                Processos
              </p>

              <p className="text-xs text-ink-300 md:text-sm">
                conectados
              </p>
            </div>

            {/* =================================================
                RASTREABILIDADE
            ================================================== */}

            <div
              className="
                absolute
                right-[5px]
                top-[185px]
                text-center
                md:right-[25px]
                md:top-[215px]
              "
            >
              <span className="mb-2 block text-2xl text-aqua-400">
                ◇
              </span>

              <p className="font-display text-sm font-bold text-white md:text-base">
                Rastreabilidade
              </p>

              <p className="text-xs text-ink-300 md:text-sm">
                completa
              </p>
            </div>

            {/* =================================================
                INFORMAÇÕES
            ================================================== */}

            <div
              className="
                absolute
                bottom-[48px]
                left-[35px]
                text-center
                md:bottom-[85px]
                md:left-[55px]
              "
            >
              <span className="mb-2 block text-2xl text-aqua-400">
                ▥
              </span>

              <p className="font-display text-sm font-bold text-white md:text-base">
                Informações
              </p>

              <p className="text-xs text-ink-300 md:text-sm">
                inteligentes
              </p>
            </div>

            {/* =================================================
                DECISÕES
            ================================================== */}

            <div
              className="
                absolute
                bottom-[48px]
                right-[20px]
                text-center
                md:bottom-[85px]
                md:right-[45px]
              "
            >
              <span className="mb-2 block text-2xl text-aqua-400">
                ↗
              </span>

              <p className="font-display text-sm font-bold text-white md:text-base">
                Decisões
              </p>

              <p className="text-xs text-ink-300 md:text-sm">
                assertivas
              </p>
            </div>

          </div>

          {/* =================================================
              TEXTO
          ================================================== */}

          <div
            className="
              order-2
              flex
              max-w-[680px]
              flex-col
              justify-center
              pb-20
              pt-4

              md:absolute
              md:left-10
              md:top-1/2
              md:order-none
              md:-translate-y-1/2
              md:pb-0
              md:pt-0

              lg:left-10
            "
          >

            <h1
              className="
                max-w-[650px]
                text-4xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-5xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              Quanto sua empresa perde com processos{' '}

              <span className="bg-gradient-to-r from-blue-500 to-aqua-400 bg-clip-text text-transparent">
                desconectados?
              </span>
            </h1>

            <p
              className="
                mt-7
                max-w-[650px]
                text-base
                leading-relaxed
                text-ink-300
                sm:text-lg
                md:text-xl
              "
            >
              A TNEXA transforma operações complexas em fluxos conectados,
              rastreáveis e inteligentes.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <button
                onClick={onOpenTnexa}
                className="
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-aqua-500
                  px-8
                  py-4
                  font-display
                  text-sm
                  font-semibold
                  text-bg-900
                  shadow-[0_0_30px_rgba(34,211,238,0.18)]
                  transition-transform
                  hover:scale-105
                "
              >
                Conheça a TNEXA
              </button>

              <a
                href="#contato"
                className="
                  rounded-full
                  border
                  border-aqua-500
                  px-8
                  py-4
                  text-center
                  font-display
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  hover:bg-aqua-500/10
                "
              >
                Fale com a TNEXA
              </a>

            </div>

          </div>

        </div>

        {/* =====================================================
            WHATSAPP
        ====================================================== */}

        <a
          href="https://wa.me/5515988160880"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com a TNEXA pelo WhatsApp"
          className="
            fixed
            bottom-5
            right-5
            z-[100]
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-[#25D366]
            text-white
            shadow-[0_0_30px_rgba(37,211,102,0.35)]
            transition-transform
            hover:scale-110
            md:bottom-7
            md:right-7
          "
        >
          <svg
            viewBox="0 0 32 32"
            className="h-9 w-9 fill-current"
            aria-hidden="true"
          >
            <path d="M19.11 17.21c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.57-1.48-1.84-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.11 2.84c.14.18 1.92 2.93 4.65 4.11.65.28 1.15.45 1.54.57.65.21 1.24.18 1.7.11.52-.08 1.59-.65 1.81-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />

            <path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.63-1.74A13 13 0 1 0 16 3zm0 23.7c-2.06 0-4.08-.55-5.85-1.59l-.42-.25-3.93 1.03 1.05-3.83-.27-.44A10.69 10.69 0 1 1 16 26.7z" />
          </svg>
        </a>

      </section>
    </>
  )
}