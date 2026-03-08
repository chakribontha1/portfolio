import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const ids = navLinks.map(l => l.href.slice(1))
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-white/5 bg-[#05070F]/85 backdrop-blur-2xl' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[64px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="font-display font-bold text-[17px] tracking-tight flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center text-accent text-xs font-mono group-hover:bg-accent/25 transition-colors">BC</span>
          <span className="text-ink">Chakri</span><span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={e => { e.preventDefault(); go(l.href) }}
              className={`relative px-4 py-2 font-body text-sm rounded-lg transition-all duration-200 ${
                active === l.href.slice(1) ? 'text-accent bg-accent/8' : 'text-ink-2 hover:text-ink hover:bg-white/4'
              }`}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <motion.a href="mailto:chakribontha9@gmail.com"
            className="px-5 py-2 rounded-lg border border-accent/30 text-accent font-display font-semibold text-sm hover:bg-accent hover:text-[#05070F] transition-all duration-250"
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            Hire Me
          </motion.a>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-ink-2 hover:text-accent transition-colors" aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#080C18]/98 backdrop-blur-2xl border-b border-white/5 px-6 py-4 flex flex-col gap-1">
            {navLinks.map((l, i) => (
              <motion.a key={l.href} href={l.href} onClick={e => { e.preventDefault(); go(l.href) }}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
                className="py-3 px-4 font-body text-ink-2 hover:text-accent hover:bg-white/4 rounded-lg transition-all">
                {l.label}
              </motion.a>
            ))}
            <a href="mailto:chakribontha9@gmail.com" className="mt-2 py-3 text-center bg-accent text-[#05070F] font-display font-bold text-sm rounded-lg">
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
