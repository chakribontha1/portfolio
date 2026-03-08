import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Zap, Code2, Trophy } from 'lucide-react'

const stats = [
  { icon: Trophy, v: 'Rank 320', sub: 'TCS CodeVita · 537K+ participants', color: '#F59E0B' },
  { icon: Code2,  v: '1000+',   sub: 'DSA problems — LeetCode & Codeforces', color: '#6EE7B7' },
  { icon: Zap,    v: '28% ↑',   sub: 'API performance at Accenture', color: '#818CF8' },
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const anim = (i) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })

  return (
    <section id="about" ref={ref} className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <motion.div {...anim(0)} className="flex items-center gap-3 mb-12">
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.18em]">01 — About</span>
          <div className="flex-1 h-px bg-white/6 max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Bio — left 7 cols */}
          <div className="lg:col-span-7">
            <motion.h2 {...anim(1)}
              className="font-display font-extrabold text-4xl md:text-5xl text-ink leading-tight mb-7"
              style={{ letterSpacing: '-0.02em' }}>
              Building at the intersection of<br />
              <span style={{ color: '#6EE7B7' }}>speed</span> and{' '}
              <span style={{ color: '#6EE7B7' }}>scale</span>
            </motion.h2>

            <motion.div {...anim(2)} className="space-y-4 font-body text-ink-2 leading-relaxed text-[15px]">
              <p>
                I'm a <span className="text-ink font-medium">Full-Stack Software Engineer</span> based in Hyderabad, currently at <span className="text-accent font-semibold">Accenture</span> as an Associate SWE.
                I specialize in React, Node.js, and building APIs that actually perform under load.
              </p>
              <p>
                Before Accenture, I worked at <span className="text-ink font-medium">Tech Mahindra</span> where I built vendor management platforms with multi-role auth, slashing manual dependency by 40%.
                I'm obsessed with clean architecture and measurable impact — not just code that runs, but code that <em>scales</em>.
              </p>
              <p>
                Outside work I'm a competitive programmer — <span className="text-ink font-medium">1000+ DSA problems</span> solved, <span className="text-ink font-medium">Global Rank 320 in TCS CodeVita</span> among 537,000+ participants.
              </p>
            </motion.div>

            {/* Contact chips */}
            <motion.div {...anim(3)} className="flex flex-wrap gap-3 mt-8">
              {[
                { icon: MapPin, text: 'Hyderabad, India' },
                { icon: Mail,   text: 'chakribontha9@gmail.com', href: 'mailto:chakribontha9@gmail.com' },
                { icon: Phone,  text: '+91-8106436244', href: 'tel:+918106436244' },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href || '#'}
                  className="flex items-center gap-2 px-3 py-2 glass rounded-lg font-mono text-[11px] text-ink-2 hover:text-accent hover:border-accent/25 transition-all duration-200 border border-white/7">
                  <Icon size={12} className="text-accent" />{text}
                </a>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div {...anim(4)} className="mt-8 p-5 rounded-xl border border-white/8 bg-white/2 hover:border-accent/20 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center font-display font-black text-sm text-accent shrink-0"
                  style={{ background: 'rgba(110,231,183,0.1)', border: '1px solid rgba(110,231,183,0.2)' }}>
                  MCA
                </div>
                <div>
                  <div className="font-display font-bold text-ink text-[15px]">Master of Computer Applications</div>
                  <div className="font-body text-ink-2 text-sm">Lovely Professional University, Punjab</div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="font-mono text-[11px] text-accent">CGPA 8.2</span>
                    <span className="text-ink-3 text-xs">·</span>
                    <span className="font-mono text-[11px] text-ink-3">Jun 2024</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats — right 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {stats.map(({ icon: Icon, v, sub, color }, i) => (
              <motion.div key={sub} {...anim(2 + i * 0.5)}
                className="p-6 rounded-2xl border border-white/7 bg-white/2 hover:border-white/14 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.025), rgba(255,255,255,0.01))' }}>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center"
                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl text-ink">{v}</div>
                    <div className="font-body text-ink-2 text-sm mt-0.5">{sub}</div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Certifications */}
            <motion.div {...anim(5)} className="p-5 rounded-2xl border border-white/7 bg-white/2">
              <div className="font-mono text-[10px] text-ink-3 uppercase tracking-[0.15em] mb-3">Certifications</div>
              {['GitHub Copilot Fundamentals', 'TCS CodeVita Round 2 — Rank 320'].map(c => (
                <div key={c} className="flex items-center gap-2 py-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="font-body text-sm text-ink-2">{c}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
