export default function Footer() {
  return (
    <footer className="border-t border-ink-500/10 px-6 py-12 text-center">
      <img src="/assets/images/logo-tnexa.jpeg" alt="TNEXA" className="mx-auto mb-4 h-11 w-auto opacity-90" />
      <p className="font-mono text-xs text-ink-500">Engineering the next.</p>
      <p className="mt-1 text-xs text-ink-500">Tecnologia que conecta. Inteligência que transforma.</p>
      <p className="mt-6 text-xs text-ink-500">© {new Date().getFullYear()} TNEXA. Todos os direitos reservados.</p>
    </footer>
  )
}
