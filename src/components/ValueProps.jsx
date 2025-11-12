export default function ValueProps() {
  const items = [
    {
      title: 'Institutional-grade strategy',
      desc: 'Disciplined portfolio construction with factor tilts, risk parity overlays, and robust drawdown controls.',
    },
    {
      title: 'Transparent fees',
      desc: 'Simple, aligned pricing. No hidden costs. Performance reported with clarity across accounts.',
    },
    {
      title: 'Secure, compliant',
      desc: 'Enterprise security, SOC2-aligned controls, and strict governance across all operations.',
    },
  ]

  return (
    <section id="approach" className="relative py-24 bg-gradient-to-b from-[#0b1020] to-[#0f1733]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white">
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
