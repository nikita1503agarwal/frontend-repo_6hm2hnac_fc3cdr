import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItemClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-black/60' : 'text-white/80 hover:text-white hover:bg-white/10'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-inner"></div>
              <span className="text-white font-semibold tracking-tight">AUM Capital</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              <NavLink to="/" className={navItemClass} end>
                Home
              </NavLink>
              <NavLink to="/about" className={navItemClass}>
                About
              </NavLink>
              <NavLink to="/contact" className={navItemClass}>
                Contact
              </NavLink>
            </nav>
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-2 pb-3">
              <NavLink to="/" onClick={() => setOpen(false)} className={navItemClass} end>
                Home
              </NavLink>
              <NavLink to="/about" onClick={() => setOpen(false)} className={navItemClass}>
                About
              </NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)} className={navItemClass}>
                Contact
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
