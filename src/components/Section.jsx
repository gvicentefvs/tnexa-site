export default function Section({ id, eyebrow, children, className = '' }) {
  return (
    <section id={id} className={`px-6 py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-4xl">
        {eyebrow && (
          <h2 className="mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {eyebrow}
          </h2>
        )}

        {children}
      </div>
    </section>
  )
}