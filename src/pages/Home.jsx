import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ValueProps from '../components/ValueProps'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-[#0b1020] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
      </main>
      <Footer />
    </div>
  )
}
