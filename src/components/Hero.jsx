import { useEffect, useState } from 'react'

/* =========================================================
   HEADER
========================================================= */

function Header({ onOpenTnexa }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function scrollToSection(id) {
    const element = document.getElementById(id)

    if (!element) return

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <header
      className={`
        fixed
        left-0
        right-0
        top-0
        z-[100]
        h-[92px]
        border-b
        border-white/[0.07]
        transition-all
        duration-300
        ${
          scrolled
            ? 'bg-[#02070a]/95 backdrop-blur-xl shadow-[0_10px_45px_rgba(0,0,0,0.45)]'
            : 'bg-[#02070a]/80 backdrop-blur-md'
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-full
          w-full
          max-w-[1380px]
          items-center
          justify-between
          px-6
          lg:px-10
          xl:px-14
        "
      >

        {/* =====================================================
            LOGO
        ====================================================== */}

        <button
          type="button"
          onClick={() => scrollToSection('inicio')}
          className="
            flex
            h-full
            items-center
            transition-transform
            duration-300
            hover:scale-[1.03]
          "
          aria-label="Ir para o início"
        >
          <img
            src="/logo.tnexa.spf.png"
            alt="TNEXA Tecnologia"
            className="
              w-[155px]
              object-contain
              drop-shadow-[0_0_18px_rgba(0,190,255,0.18)]
            "
          />
        </button>

        {/* =====================================================
            MENU
        ====================================================== */}

        <nav className="hidden items-center gap-10 lg:flex">

          {/* CONTATO */}

          <button
            type="button"
            onClick={() => scrollToSection('contato')}
            className="
              group
              relative
              font-body
              text-base
              font-semibold
              text-white/75
              transition
              duration-300
              hover:text-white
            "
          >
            Contato

            <span
              className="
                absolute
                -bottom-3
                left-0
                h-[2px]
                w-0
                bg-cyan-400
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </button>

          {/* PRODUTOS */}

          <button
            type="button"
            onClick={() => scrollToSection('servicos')}
            className="
              group
              relative
              font-body
              text-base
              font-semibold
              text-white/75
              transition
              duration-300
              hover:text-white
            "
          >
            Produtos

            <span
              className="
                absolute
                -bottom-3
                left-0
                h-[2px]
                w-0
                bg-cyan-400
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </button>

          {/* CONHEÇA A TNEXA */}

          <button
            type="button"
            onClick={onOpenTnexa}
            className="
              group
              relative
              font-body
              text-base
              font-semibold
              text-white/75
              transition
              duration-300
              hover:text-white
            "
          >
            Conheça a TNEXA

            <span
              className="
                absolute
                -bottom-3
                left-0
                h-[2px]
                w-0
                bg-cyan-400
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </button>

          {/* QUEM SOMOS */}

          <button
            type="button"
            onClick={() => scrollToSection('missao-visao-valores')}
            className="
              group
              relative
              font-body
              text-base
              font-semibold
              text-white/75
              transition
              duration-300
              hover:text-white
            "
          >
            Quem Somos

            <span
              className="
                absolute
                -bottom-3
                left-0
                h-[2px]
                w-0
                bg-cyan-400
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </button>

        </nav>

        {/* =====================================================
            BOTÃO FALE CONOSCO
        ====================================================== */}

        <button
          type="button"
          onClick={() => scrollToSection('contato')}
          className="
            hidden
            rounded-full
            border
            border-cyan-400/90
            px-8
            py-3.5
            font-body
            text-base
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-cyan-400
            hover:text-black
            hover:shadow-[0_0_35px_rgba(34,211,238,0.30)]
            sm:block
          "
        >
          Fale Conosco
        </button>

      </div>
    </header>
  )
}

/* =========================================================
   LABELS DA ÓRBITA
========================================================= */

function OrbitLabel({
  className = '',
  icon,
  title,
  subtitle,
}) {
  return (
    <div
      className={`
        absolute
        z-30
        flex
        w-[155px]
        -translate-x-1/2
        flex-col
        items-center
        text-center
        ${className}
      `}
    >
      <div
        className="
          mb-2
          text-[21px]
          leading-none
          text-cyan-400
          drop-shadow-[0_0_8px_rgba(34,211,238,0.55)]
        "
      >
        {icon}
      </div>

      <div
        className="
          font-display
          text-sm
          font-semibold
          leading-tight
          text-white
        "
      >
        {title}
      </div>

      <div
        className="
          mt-1
          font-body
          text-xs
          leading-tight
          text-white/65
        "
      >
        {subtitle}
      </div>
    </div>
  )
}

/* =========================================================
   SISTEMA DE ÓRBITA
========================================================= */

function OrbitSystem() {
  return (
    <div
      className="
        relative
        h-[500px]
        w-[500px]
        shrink-0
        [perspective:1200px]
      "
    >

      {/* =====================================================
          BRILHO CENTRAL
      ====================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[170px]
          w-[170px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.10]
          blur-[70px]
        "
      />

      {/* =====================================================
          ÓRBITA 3D VERTICAL EXTERNA
      ====================================================== */}

      <div
        className="
          orbit-vertical
          absolute
          left-1/2
          top-1/2
          h-[470px]
          w-[205px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-[50%]
          border
          border-cyan-400/[0.17]
        "
      />

      {/* =====================================================
          ÓRBITA 3D VERTICAL INTERNA
      ====================================================== */}

      <div
        className="
          orbit-vertical-reverse
          absolute
          left-1/2
          top-1/2
          h-[410px]
          w-[155px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-[50%]
          border
          border-cyan-300/[0.13]
        "
      />

      {/* =====================================================
          ÓRBITA HORIZONTAL PRINCIPAL
      ====================================================== */}

      <div
        className="
          orbit-horizontal
          absolute
          left-1/2
          top-1/2
          h-[75px]
          w-[365px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-[50%]
          border
          border-cyan-400/[0.34]
          shadow-[0_0_30px_rgba(0,190,255,0.08)]
        "
      />

      {/* =====================================================
          ÓRBITA HORIZONTAL INTERNA
      ====================================================== */}

      <div
        className="
          orbit-horizontal-inner
          absolute
          left-1/2
          top-1/2
          h-[52px]
          w-[310px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-[50%]
          border
          border-cyan-300/[0.20]
        "
      />

      {/* =====================================================
          PONTOS DA ÓRBITA
      ====================================================== */}

      <div
        className="
          orbit-dot-left
          absolute
          left-[66px]
          top-1/2
          h-2
          w-2
          -translate-y-1/2
          rounded-full
          bg-cyan-300
          shadow-[0_0_14px_rgba(34,211,238,0.95)]
        "
      />

      <div
        className="
          orbit-dot-right
          absolute
          right-[66px]
          top-1/2
          h-2
          w-2
          -translate-y-1/2
          rounded-full
          bg-cyan-300
          shadow-[0_0_14px_rgba(34,211,238,0.95)]
        "
      />

      {/* =====================================================
          NÚCLEO / LOGO
      ====================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          z-20
          -translate-x-1/2
          -translate-y-1/2
          [transform-style:preserve-3d]
          animate-[tnexaFloat_5s_ease-in-out_infinite]
        "
      >
        <img
          src="/logo.tnexa.spf.png"
          alt="TNEXA Tecnologia"
          className="
            w-[215px]
            object-contain
            drop-shadow-[0_0_30px_rgba(0,190,255,0.34)]
          "
        />
      </div>

      {/* =====================================================
          TECNOLOGIA
      ====================================================== */}

      <OrbitLabel
        className="left-1/2 top-[8px]"
        icon="◇"
        title="Tecnologia"
        subtitle="de verdade"
      />

      {/* =====================================================
          PROCESSOS
      ====================================================== */}

      <OrbitLabel
        className="left-[58px] top-[145px]"
        icon="⌘"
        title="Processos"
        subtitle="conectados"
      />

      {/* =====================================================
          RASTREABILIDADE
      ====================================================== */}

      <OrbitLabel
        className="left-[442px] top-[145px]"
        icon="◇"
        title="Rastreabilidade"
        subtitle="completa"
      />

      {/* =====================================================
          INFORMAÇÕES
      ====================================================== */}

      <OrbitLabel
        className="left-[72px] top-[300px]"
        icon="▥"
        title="Informações"
        subtitle="inteligentes"
      />

      {/* =====================================================
          DECISÕES
      ====================================================== */}

      <OrbitLabel
        className="left-[428px] top-[300px]"
        icon="↗"
        title="Decisões"
        subtitle="assertivas"
      />

    </div>
  )
}

/* =========================================================
   HERO
========================================================= */

export default function Hero({ onOpenTnexa }) {

  function scrollToSection(id) {
    const element = document.getElementById(id)

    if (!element) return

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <section
      id="inicio"
      className="
        relative
        min-h-screen
        overflow-visible
        pt-[92px]
      "
    >

      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header onOpenTnexa={onOpenTnexa} />

      {/* =====================================================
          HERO
      ====================================================== */}

      <div
        className="
          mx-auto
          flex
          min-h-[calc(100vh-92px)]
          w-full
          max-w-[1380px]
          items-center
          px-6
          py-12
          lg:px-10
          xl:px-14
        "
      >

        {/* ===================================================
            TEXTO
        ==================================================== */}

        <div
          className="
            relative
            z-40
            w-full
            max-w-[610px]
            shrink-0
            lg:w-[49%]
          "
        >

          <h1
            className="
              font-display
              text-[48px]
              font-bold
              leading-[0.98]
              tracking-[-0.04em]
              text-white
              sm:text-[56px]
              lg:text-[62px]
              xl:text-[66px]
            "
          >
            Quanto sua empresa
            <br />

            perde com processos
            <br />

            <span
              className="
                bg-gradient-to-r
                from-blue-500
                via-cyan-400
                to-cyan-300
                bg-clip-text
                text-transparent
              "
            >
              desconectados?
            </span>
          </h1>

          <p
            className="
              mt-8
              max-w-[520px]
              font-body
              text-base
              leading-7
              text-white/70
              sm:text-lg
            "
          >
            A TNEXA transforma operações complexas em
            <br className="hidden sm:block" />
            fluxos conectados, rastreáveis e inteligentes.
          </p>

          {/* =================================================
              BOTÕES
          ================================================== */}

          <div className="mt-9 flex flex-wrap gap-4">

            {/* CONHEÇA A TNEXA */}

            <button
              type="button"
              onClick={onOpenTnexa}
              className="
                rounded-full
                bg-gradient-to-r
                from-blue-500
                to-cyan-400
                px-8
                py-4
                font-body
                text-sm
                font-bold
                text-white
                shadow-[0_0_30px_rgba(34,150,255,0.20)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_0_40px_rgba(34,211,238,0.38)]
              "
            >
              Conheça a TNEXA
            </button>

            {/* FALE COM A TNEXA */}

            <button
              type="button"
              onClick={() => scrollToSection('contato')}
              className="
                rounded-full
                border
                border-cyan-400
                px-8
                py-4
                font-body
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-cyan-400/10
                hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]
              "
            >
              Fale com a TNEXA
            </button>

          </div>

        </div>

        {/* ===================================================
            ÓRBITA
        ==================================================== */}

        <div
          className="
            relative
            flex
            flex-1
            items-center
            justify-center
            lg:-ml-[20px]
            xl:-ml-[30px]
          "
        >
          <OrbitSystem />
        </div>

      </div>

      {/* =====================================================
          ANIMAÇÕES
      ====================================================== */}

      <style>{`

        @keyframes tnexaFloat {

          0%,
          100% {
            transform:
              translate(-50%, -50%)
              translateY(0px)
              rotateY(-2deg);
          }

          50% {
            transform:
              translate(-50%, -50%)
              translateY(-8px)
              rotateY(4deg);
          }

        }

        @keyframes orbitHorizontal {

          0% {
            transform:
              translate(-50%, -50%)
              rotateX(58deg)
              rotateZ(0deg);
          }

          50% {
            transform:
              translate(-50%, -50%)
              rotateX(58deg)
              rotateZ(180deg);
          }

          100% {
            transform:
              translate(-50%, -50%)
              rotateX(58deg)
              rotateZ(360deg);
          }

        }

        @keyframes orbitHorizontalInner {

          0% {
            transform:
              translate(-50%, -50%)
              rotateX(58deg)
              rotateZ(0deg);
          }

          100% {
            transform:
              translate(-50%, -50%)
              rotateX(58deg)
              rotateZ(-360deg);
          }

        }

        @keyframes orbitVertical {

          0% {
            transform:
              translate(-50%, -50%)
              rotateX(5deg)
              rotateY(-12deg)
              rotateZ(0deg);
          }

          50% {
            transform:
              translate(-50%, -50%)
              rotateX(8deg)
              rotateY(12deg)
              rotateZ(180deg);
          }

          100% {
            transform:
              translate(-50%, -50%)
              rotateX(5deg)
              rotateY(-12deg)
              rotateZ(360deg);
          }

        }

        @keyframes orbitVerticalReverse {

          0% {
            transform:
              translate(-50%, -50%)
              rotateX(5deg)
              rotateY(12deg)
              rotateZ(0deg);
          }

          100% {
            transform:
              translate(-50%, -50%)
              rotateX(5deg)
              rotateY(12deg)
              rotateZ(-360deg);
          }

        }

        @keyframes orbitDotLeft {

          0%,
          100% {
            transform:
              translateY(-50%)
              scale(1);
          }

          50% {
            transform:
              translateY(-50%)
              scale(1.45);
          }

        }

        @keyframes orbitDotRight {

          0%,
          100% {
            transform:
              translateY(-50%)
              scale(1.45);
          }

          50% {
            transform:
              translateY(-50%)
              scale(1);
          }

        }

        .orbit-horizontal {
          animation:
            orbitHorizontal
            18s
            linear
            infinite;
          transform-style: preserve-3d;
        }

        .orbit-horizontal-inner {
          animation:
            orbitHorizontalInner
            13s
            linear
            infinite;
          transform-style: preserve-3d;
        }

        .orbit-vertical {
          animation:
            orbitVertical
            24s
            linear
            infinite;
          transform-style: preserve-3d;
        }

        .orbit-vertical-reverse {
          animation:
            orbitVerticalReverse
            20s
            linear
            infinite;
          transform-style: preserve-3d;
        }

        .orbit-dot-left {
          animation:
            orbitDotLeft
            2.5s
            ease-in-out
            infinite;
        }

        .orbit-dot-right {
          animation:
            orbitDotRight
            2.5s
            ease-in-out
            infinite;
        }

        @media (max-width: 1023px) {

          .orbit-horizontal {
            transform: scale(0.82);
          }

          .orbit-horizontal-inner {
            transform: scale(0.82);
          }

          .orbit-vertical {
            transform: scale(0.82);
          }

          .orbit-vertical-reverse {
            transform: scale(0.82);
          }

        }

        @media (prefers-reduced-motion: reduce) {

          .orbit-horizontal,
          .orbit-horizontal-inner,
          .orbit-vertical,
          .orbit-vertical-reverse,
          .orbit-dot-left,
          .orbit-dot-right {
            animation: none;
          }

        }

      `}</style>

    </section>
  )
}