import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-[#0b1020] min-h-screen text-white">
      <Navbar />
      <section className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-5xl font-semibold">About AUM Capital</h1>
          <p className="mt-6 text-white/80 leading-relaxed">
            We deliver premium asset management for institutions and sophisticated investors. Our team blends systematic strategies with prudent discretion, prioritizing risk management, liquidity, and long-term alignment.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {["Equities","Fixed Income","Alternatives"].map((s) => (
              <div key={s} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h3 className="font-semibold">{s}</h3>
                <p className="mt-2 text-sm text-white/70">Institutional access and research-driven allocation.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
