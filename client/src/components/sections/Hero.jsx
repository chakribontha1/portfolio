import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Code2, ExternalLink, Download } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import ResumeReveal from '../ui/ResumeReveal'
import { useISTClock } from '../../hooks/useISTClock'

const marqueeItems = ['Java', '·', 'Spring Boot', '·', 'Apache Kafka', '·', 'Microservices', '·', 'Kubernetes', '·', 'Docker', '·', 'AWS', '·', 'PostgreSQL', '·', 'MySQL', '·', 'REST APIs', '·', 'System Design', '·', 'CI/CD', '·']

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setLoaded(true), 100) }, [])
  const istTime = useISTClock()

  const stagger = (i) => ({ initial: { opacity: 0, y: 28 }, animate: loaded ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } })

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Main content */}
      <div className="flex-1 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 pb-12 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* LEFT */}
          <div>
            {/* Status */}
            <motion.div {...stagger(0)} className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass font-mono text-[11px] text-accent tracking-wide" title="Theme follows Hyderabad time — toggle to override">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Open to backend roles · Hyderabad, India · {istTime} IST
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
                className="font-display font-extrabold leading-none tracking-tight text-accent"
                style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', lineHeight: 1.0 }}
              >
                Chakri.
              </motion.h1>
            </div>

            {/* Role animation */}
            <motion.div {...stagger(3)} className="font-mono text-sm text-ink-3 mb-2 flex items-center gap-2">
              <span className="text-accent">&gt;</span>
              <TypeAnimation
                sequence={['Java Backend Engineer', 2500, 'Spring Boot · Microservices', 2500, 'Apache Kafka · Distributed Systems', 2500, '1000+ DSA · Global Rank 320', 2500]}
                wrapper="span" speed={55} repeat={Infinity}
                className="text-ink-2"
              />
              <span className="cursor-blink text-accent">_</span>
            </motion.div>

            {/* Tagline */}
            <motion.p {...stagger(4)} className="font-body text-ink-2 text-base leading-relaxed max-w-[480px] mb-10 mt-4">
              I build <span className="text-ink font-medium">backend systems that hold up under real load</span> — Spring Boot services, Kafka event pipelines, databases tuned for scale.
              Currently at <span className="text-accent font-semibold">Accenture</span> — cut p95 API latency <span className="text-ink font-medium">28%</span>, raised event throughput <span className="text-ink font-medium">35%</span>.
            </motion.p>

            {/* Buttons */}
            <motion.div {...stagger(5)} className="flex flex-wrap gap-3 mb-10">
              <a href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-contrast font-display font-bold text-sm rounded-xl hover:bg-accent-2 hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
                style={{ boxShadow: '0 8px 30px var(--accent-soft)' }}>
                <ExternalLink size={15} /> View Projects
              </a>
              <a href="/Bontha_Chakri_Resume.pdf" download="Bontha_Chakri_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-ink/15 text-ink font-display font-semibold text-sm rounded-xl hover:border-accent/40 hover:text-accent transition-all duration-200">
                <Download size={15} /> Download Resume
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div {...stagger(6)} className="flex items-center gap-6 pb-4">
              {[
                { v: '2.5+ yrs', l: 'Backend Experience' },
                { v: '1000+', l: 'DSA Solved' },
                { v: 'Rank 320', l: 'TCS CodeVita · 537K+' },
              ].map(({ v, l }, i) => (
                <div key={l} className={`${i > 0 ? 'pl-6 border-l border-ink/8' : ''}`}>
                  <div className="font-display font-bold text-xl text-ink">{v}</div>
                  <div className="font-mono text-[10px] text-ink-3 uppercase tracking-wider mt-0.5">{l}</div>
                </div>
              ))}
            </motion.div>

            {/* Socials */}
            <motion.div {...stagger(7)} className="flex items-center gap-3 mt-6">
              {[
                { icon: Github, href: 'https://github.com/chakribontha', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/bonthachakri/', label: 'LinkedIn' },
                { icon: Code2, href: 'https://leetcode.com/u/chakribontha9/', label: 'LeetCode' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 glass glass-interactive rounded-lg flex items-center justify-center text-ink-2 hover:text-accent transition-colors duration-200"
                  whileHover={{ y: -3 }} aria-label={label}>
                  <Icon size={17} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={loaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col items-center justify-center relative gap-4 py-6"
          >
            {/* Ambient glow behind the whole composition */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
              <div className="w-[380px] h-[380px] rounded-full" style={{ background: 'radial-gradient(circle, var(--accent-soft), transparent 70%)', filter: 'blur(40px)' }} />
            </div>

            {/* Hidden resume text — move your cursor around the photo to reveal it */}
            <ResumeReveal />

            {/* Current-role chip — sits above the frame on clean background, never over the photo */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="glass rounded-2xl p-4 min-w-[220px] self-end mr-6">
              <div className="font-mono text-[10px] text-accent uppercase tracking-wider mb-1">Current</div>
              <div className="font-display font-bold text-sm text-ink">Accenture</div>
              <div className="font-body text-[11px] text-ink-2">Software Development Engineer</div>
            </motion.div>

            {/* Glass-framed portrait */}
            <div className="relative w-[300px] h-[360px] rounded-[2.5rem] glass overflow-hidden">
              <img
                src="/profile.png"
                alt="Bontha Chakri"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(200deg, rgba(6,7,11,0.08) 30%, rgba(6,7,11,0.6) 100%)' }} />
            </div>

            {/* Latency chip — sits below the frame on clean background */}
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="glass rounded-2xl p-4 min-w-[220px] self-start ml-6">
              <div className="font-mono text-[10px] text-accent uppercase tracking-wider mb-1">API Latency</div>
              <div className="font-display font-bold text-2xl text-ink">420<span className="text-ink-3 text-base">→</span>302<span className="text-accent text-sm">ms</span></div>
              <div className="font-body text-[11px] text-ink-2">p95, at 30K+ req/day</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Tech marquee */}
      <div className="border-t border-ink/6 py-4 overflow-hidden">
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
