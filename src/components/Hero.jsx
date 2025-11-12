import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1020]/70 via-[#0b1020]/40 to-[#0b1020]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
          Premium Asset Management
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          Lean, modern wealth solutions for institutions and high-net-worth clients. Transparent fees. Measurable outcomes.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 font-medium shadow-lg shadow-black/10 hover:shadow-black/20 transition"
          >
            Get in touch <ArrowRight size={18} />
          </a>
          <a
            href="#approach"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white px-5 py-3 font-medium ring-1 ring-white/20 hover:bg-white/20 transition"
          >
            Our approach
          </a>
        </div>
      </div>
    </section>
  )
}
