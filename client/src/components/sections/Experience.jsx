import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { MapPin, Calendar, ChevronRight } from 'lucide-react'
import { useExperience } from '../../hooks/useData'

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const { experiences, loading } = useExperience()
  const anim = (i) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })

  return (
    <section id="experience" ref={ref} className="py-28 relative">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent, rgba(8,12,24,0.4) 50%, transparent)' }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <motion.div {...anim(0)} className="flex items-center gap-3 mb-12">
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.18em]">04 — Experience</span>
          <div className="flex-1 h-px bg-white/6 max-w-xs" />
        </motion.div>

        <motion.h2 {...anim(1)} className="font-display font-extrabold text-4xl md:text-5xl text-ink mb-14" style={{ letterSpacing: '-0.02em' }}>
          Where I've <span style={{ color: '#6EE7B7' }}>shipped</span>
        </motion.h2>

        {loading ? (
          <div className="max-w-4xl space-y-6">
            {[1, 2].map(i => (
              <div key={i} className="h-40 rounded-2xl border border-white/7 bg-white/2 animate-pulse" />
            ))}
          </div>
        ) : (
        <div className="max-w-4xl space-y-6">
          {experiences.map((e, idx) => (
            <motion.div key={e._id || e.company} {...anim(2 + idx)}
              className="group border border-white/8 rounded-2xl p-7 hover:border-white/14 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.025), rgba(255,255,255,0.01))' }}>

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <h3 className="font-display font-bold text-xl text-ink">{e.role}</h3>
                    {e.current && (
                      <span className="px-2 py-0.5 rounded-full font-mono text-[10px] text-accent border border-accent/30 bg-accent/8">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-[15px]" style={{ color: e.color }}>{e.company}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 sm:items-end shrink-0">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-ink-3">
                    <Calendar size={11} />{e.period}
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-ink-3">
                    <MapPin size={11} />{e.location}
                  </div>
                </div>
              </div>

              {/* Left accent bar */}
              <div className="relative pl-5 border-l-2 space-y-2.5 mb-6" style={{ borderColor: `${e.color}40` }}>
                {e.bullets?.map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <ChevronRight size={12} className="mt-0.5 shrink-0" style={{ color: e.color }} />
                    <span className="font-body text-sm text-ink-2 leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/6">
                {e.tech?.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded font-mono text-[10px] text-ink-3 bg-white/4 border border-white/7 hover:text-accent hover:border-accent/25 transition-all cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        )}
      </div>
    </section>
  )
}
