export default function Footer() {
  return (
    <footer className="border-t border-ink-500/10 px-6 py-12 text-center">
      <img
        src="/logo.tnexa.spf.png"
        alt="TNEXA Tecnologia"
        className="mx-auto mb-4 h-16 w-auto object-contain opacity-95"
      />

      <p className="font-mono text-xs text-ink-500">
        Engineering the next.
      </p>

      <p className="mt-1 text-xs text-ink-500">
        Tecnologia que conecta. Inteligência que transforma.
      </p>

      <div className="mt-6 flex flex-col items-center gap-2 text-sm text-ink-300">
        <a
          href="mailto:contato.tnexa@gmail.com"
          className="transition-colors hover:text-aqua-400"
        >
          contato.tnexa@gmail.com
        </a>

        <span>Sorocaba / SP</span>
      </div>

      <p className="mt-6 text-xs text-ink-500">
        © {new Date().getFullYear()} TNEXA. Todos os direitos reservados.
      </p>
    </footer>
  )
}
