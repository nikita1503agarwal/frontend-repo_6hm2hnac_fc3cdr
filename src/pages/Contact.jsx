import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [status, setStatus] = useState('')

  return (
    <div className="bg-[#0b1020] min-h-screen text-white">
      <Navbar />
      <section id="contact" className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-5xl font-semibold">Contact us</h1>
          <p className="mt-3 text-white/80">Tell us about your mandate, and we’ll get back within one business day.</p>

          <form
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={(e) => {
              e.preventDefault()
              setStatus('Thanks — we\'ll be in touch shortly.')
              e.currentTarget.reset()
            }}
          >
            <input required placeholder="Full name" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 ring-blue-400/60" />
            <input required type="email" placeholder="Email" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 ring-blue-400/60" />
            <input placeholder="Company" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 ring-blue-400/60 md:col-span-2" />
            <textarea required rows={5} placeholder="Message" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 ring-blue-400/60 md:col-span-2" />
            <div className="md:col-span-2">
              <button className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 font-medium shadow-lg shadow-black/10 hover:shadow-black/20 transition">
                Send message
              </button>
              {status && <p className="mt-3 text-sm text-white/70">{status}</p>}
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}
