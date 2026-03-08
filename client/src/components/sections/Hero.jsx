import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, ExternalLink, Download } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'

const HeroScene = lazy(() => import('../three/HeroScene'))

const marqueeItems = ['React.js', '·', 'Node.js', '·', 'TypeScript', '·', 'MongoDB', '·', 'PostgreSQL', '·', 'Docker', '·', 'AWS', '·', 'Express.js', '·', 'WebSockets', '·', 'REST APIs', '·', 'CI/CD', '·', 'Tailwind CSS', '·']

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setLoaded(true), 100) }, [])

  const stagger = (i) => ({ initial: { opacity: 0, y: 28 }, animate: loaded ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } })

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Radial glow top-right */}
      <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(110,231,183,0.07) 0%, transparent 65%)' }} />
      {/* Bottom left glow */}
      <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.05) 0%, transparent 65%)' }} />

      {/* Main content */}
      <div className="flex-1 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 pb-12 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* LEFT */}
          <div>
            {/* Status */}
            <motion.div {...stagger(0)} className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/8 font-mono text-[11px] text-accent tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Open to Work · Hyderabad, India
              </div>
            </motion.div>

            {/* Name — BIG editorial */}
            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: 80, opacity: 0 }} animate={loaded ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-extrabold leading-none tracking-tight"
                style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', lineHeight: 1.0 }}
              >
                <span className="text-ink">Bontha</span>
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: 80, opacity: 0 }} animate={loaded ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-extrabold leading-none tracking-tight"
                style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', lineHeight: 1.0, color: '#6EE7B7' }}
              >
                Chakri.
              </motion.h1>
            </div>

            {/* Role animation */}
            <motion.div {...stagger(3)} className="font-mono text-sm text-ink-3 mb-2 flex items-center gap-2">
              <span className="text-accent">&gt;</span>
              <TypeAnimation
                sequence={['Full Stack Engineer', 2500, 'React + Node.js Dev', 2500, 'Backend Architect', 2500, 'Problem Solver · 1000+ DSA', 2500]}
                wrapper="span" speed={55} repeat={Infinity}
                className="text-ink-2"
              />
              <span className="cursor-blink text-accent">_</span>
            </motion.div>

            {/* Tagline */}
            <motion.p {...stagger(4)} className="font-body text-ink-2 text-base leading-relaxed max-w-[480px] mb-10 mt-4">
              I build <span className="text-ink font-medium">performant web applications</span> and backend systems at scale.
              Currently at <span className="text-accent font-semibold">Accenture</span> — reduced API response time by <span className="text-ink font-medium">28%</span>, improved dashboard speed by <span className="text-ink font-medium">20%</span>.
            </motion.p>

            {/* Buttons */}
            <motion.div {...stagger(5)} className="flex flex-wrap gap-3 mb-10">
              <a href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-[#05070F] font-display font-bold text-sm rounded-lg hover:bg-[#34D399] hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
                style={{ boxShadow: '0 8px 30px rgba(110,231,183,0.2)' }}>
                <ExternalLink size={15} /> View Projects
              </a>
              <a href="mailto:chakribontha9@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/12 text-ink font-display font-semibold text-sm rounded-lg hover:border-accent/35 hover:text-accent hover:-translate-y-0.5 transition-all duration-200">
                <Download size={15} /> Get Resume
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div {...stagger(6)} className="flex items-center gap-6 pb-4">
              {[
                { v: '1000+', l: 'DSA Solved' },
                { v: 'Rank 320', l: 'TCS CodeVita' },
                { v: '2+ yrs', l: 'Experience' },
              ].map(({ v, l }, i) => (
                <div key={l} className={`${i > 0 ? 'pl-6 border-l border-white/8' : ''}`}>
                  <div className="font-display font-bold text-xl text-ink">{v}</div>
                  <div className="font-mono text-[10px] text-ink-3 uppercase tracking-wider mt-0.5">{l}</div>
                </div>
              ))}
            </motion.div>

            {/* Socials */}
            <motion.div {...stagger(7)} className="flex items-center gap-3 mt-6">
              {[
                { icon: Github, href: 'https://github.com/chakribontha', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/chakribontha', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-ink-3 hover:text-accent hover:border-accent/25 transition-all duration-200"
                  whileHover={{ y: -3 }} aria-label={label}>
                  <Icon size={16} />
                </motion.a>
              ))}
              <span className="w-px h-5 bg-white/8" />
              <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs text-ink-3 hover:text-accent transition-colors px-2 py-1 rounded border border-white/8 hover:border-accent/25">
                LC
              </a>
              <a href="https://codeforces.com" target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs text-ink-3 hover:text-accent transition-colors px-2 py-1 rounded border border-white/8 hover:border-accent/25">
                CF
              </a>
            </motion.div>
          </div>

          {/* RIGHT — 3D Scene / Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={loaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center relative h-[580px]"
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[420px] h-[420px] rounded-full border border-accent/8 animate-spin-slow" style={{ animationDuration: '25s' }} />
              <div className="absolute w-[300px] h-[300px] rounded-full border border-accent/12" style={{ animation: 'spin 18s linear infinite reverse' }} />
            </div>

            {/* Glow + Profile image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full glow-pulse border border-accent/20 overflow-hidden"
                style={{ background: 'radial-gradient(circle, rgba(110,231,183,0.15) 0%, transparent 70%)' }}>
                <img
                  src="/profile.png"
                  alt="Bontha Chakri"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating info cards */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-12 right-4 glass rounded-xl p-4 border-accent/15 min-w-[150px]">
              <div className="font-mono text-[10px] text-accent uppercase tracking-wider mb-1">Current</div>
              <div className="font-display font-bold text-sm text-ink">Accenture</div>
              <div className="font-body text-[11px] text-ink-2">Associate SWE</div>
            </motion.div>

            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-20 left-0 glass rounded-xl p-4 border-accent/15 min-w-[150px]">
              <div className="font-mono text-[10px] text-accent uppercase tracking-wider mb-1">Problems Solved</div>
              <div className="font-display font-bold text-2xl text-ink">1000<span className="text-accent">+</span></div>
              <div className="font-body text-[11px] text-ink-2">LeetCode · Codeforces</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Tech marquee */}
      <div className="border-t border-white/5 py-4 overflow-hidden">
        <div className="flex overflow-hidden">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className={`px-4 font-mono text-xs whitespace-nowrap ${item === '·' ? 'text-accent/40' : 'text-ink-3 hover:text-accent transition-colors cursor-default'}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}
          className="cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <ArrowDown size={16} className="text-ink-3 hover:text-accent transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  )
}
