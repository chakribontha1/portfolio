import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Zap, Code2, Trophy, GraduationCap, Award } from 'lucide-react'

const stats = [
  { icon: Trophy, v: 'Rank 320', sub: 'TCS CodeVita · 537,000+ participants', color: '#F59E0B' },
  { icon: Zap,    v: '28% ↓',   sub: 'p95 API latency at Accenture — 420ms → 302ms', color: '#818CF8' },
  { icon: Code2,  v: '1000+',   sub: 'DSA problems — LeetCode & Codeforces', color: 'var(--accent)' },
]

const education = [
  { degree: 'Master of Computer Applications (MCA)', school: 'Lovely Professional University, Punjab', grade: 'CGPA 8.2', period: '2022 – 2024' },
  { degree: 'B.Sc. Computer Science', school: 'Chaitanya (Deemed to be University), Telangana', grade: 'CGPA 8.4', period: '2019 – 2022' },
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
          <div className="flex-1 h-px bg-ink/6 max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Bio — left 7 cols */}
          <div className="lg:col-span-7">
            <motion.h2 {...anim(1)}
              className="font-display font-extrabold text-4xl md:text-5xl text-ink leading-tight mb-7 text-balance"
              style={{ letterSpacing: '-0.02em' }}>
              Backend systems that hold up<br />
              under <span className="text-accent">real load</span>
            </motion.h2>

            <motion.div {...anim(2)} className="space-y-4 font-body text-ink-2 leading-relaxed text-[15px]">
              <p>
                I'm a <span className="text-ink font-medium">Java backend engineer</span> based in Hyderabad, currently at <span className="text-accent font-semibold">Accenture</span>, building and owning production microservices for a global banking client — <span className="text-ink font-medium">Spring Boot</span> REST APIs, event-driven pipelines on <span className="text-ink font-medium">Apache Kafka</span>, deployed to Kubernetes on AWS.
              </p>
              <p>
                Before Accenture, I was at <span className="text-ink font-medium">Tech Mahindra</span>, where I owned a vendor-management platform end to end — API design, schema modeling, multi-role auth — serving 150 users and 70 vendors across 20+ workflows.
                I care about clean architecture and measurable impact: not just code that runs, but systems that stay fast as load grows.
              </p>
              <p>
                Outside of shipping code, I compete — <span className="text-ink font-medium">1000+ DSA problems solved</span> across LeetCode and Codeforces, <span className="text-ink font-medium">global rank 320 of 537,000+</span> in TCS CodeVita.
              </p>
            </motion.div>

            {/* Contact chips */}
            <motion.div {...anim(3)} className="flex flex-wrap gap-3 mt-8">
              {[
                { icon: MapPin, text: 'Hyderabad, India' },
                { icon: Mail,   text: 'bonthachakri1@gmail.com', href: 'mailto:bonthachakri1@gmail.com' },
                { icon: Phone,  text: '+91-8106436244', href: 'tel:+918106436244' },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href || '#'}
                  className="glass glass-interactive flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-[11px] text-ink-2 hover:text-accent transition-colors duration-200">
                  <Icon size={12} className="text-accent" />{text}
                </a>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div {...anim(4)} className="mt-8 space-y-3">
              {education.map(e => (
                <div key={e.degree} className="glass rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(110,231,183,0.1)', border: '1px solid rgba(110,231,183,0.2)' }}>
                    <GraduationCap size={18} className="text-accent" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-bold text-ink text-[15px]">{e.degree}</div>
                    <div className="font-body text-ink-2 text-sm">{e.school}</div>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="font-mono text-[11px] text-accent">{e.grade}</span>
                      <span className="text-ink-3 text-xs">·</span>
                      <span className="font-mono text-[11px] text-ink-3">{e.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Stats — right 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {stats.map(({ icon: Icon, v, sub, color }, i) => (
              <motion.div key={sub} {...anim(2 + i * 0.5)}
                className="glass glass-interactive p-6 rounded-2xl cursor-default">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl text-ink">{v}</div>
                    <div className="font-body text-ink-2 text-sm mt-0.5">{sub}</div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Achievements */}
            <motion.div {...anim(5)} className="glass p-5 rounded-2xl">
              <div className="font-mono text-[10px] text-ink-3 uppercase tracking-[0.15em] mb-3">Achievements & Certifications</div>
              {[
                { t: 'Top 9.2% — LeetCode Weekly Contest 464 (rank 3,298 / 35,600+)', icon: Award },
                { t: 'GitHub Copilot Fundamentals — Certified', icon: Award },
              ].map(({ t, icon: Icon }) => (
                <div key={t} className="flex items-start gap-2.5 py-1.5">
                  <Icon size={13} className="text-accent shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-ink-2 leading-snug">{t}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
