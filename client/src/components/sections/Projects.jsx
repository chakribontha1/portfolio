import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import { useProjects } from '../../hooks/useData'

const tagColor = {
  'Full Stack':'#6EE7B7','Backend':'#38BDF8','Real-Time':'#34D399',
  'Education':'#F472B6','Admin Panel':'#818CF8','WebSockets':'#FBBF24',
}

function Card({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col border border-white/7 rounded-2xl bg-white/2 overflow-hidden hover:border-white/14 hover:-translate-y-1 transition-all duration-350"
      style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
    >
      {/* Top color bar */}
      <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, #6EE7B7, #34D399, transparent)` }} />

      <div className="p-7 flex flex-col flex-1">
        {/* Number + tags */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex flex-wrap gap-1.5">
            {project.tags?.slice(0, 2).map(t => (
              <span key={t} className="px-2 py-0.5 rounded font-mono text-[10px] border"
                style={{ color: tagColor[t]||'#94A3B8', borderColor: `${tagColor[t]||'#94A3B8'}30`, background: `${tagColor[t]||'#94A3B8'}10` }}>
                {t}
              </span>
            ))}
          </div>
          <span className="font-mono text-4xl font-black leading-none select-none"
            style={{ color: 'rgba(255,255,255,0.04)', transition: 'color 0.3s' }}
            onMouseEnter={e => e.target.style.color = 'rgba(110,231,183,0.08)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.04)'}>
            0{index + 1}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg text-ink leading-tight mb-3 group-hover:text-accent transition-colors duration-250">
          {project.title}
        </h3>

        {/* Desc */}
        <p className="font-body text-ink-2 text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack?.map(t => (
            <span key={t} className="px-2 py-1 rounded font-mono text-[10px] text-ink-3 bg-white/4 border border-white/7">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/6">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-body text-sm text-ink-3 hover:text-accent transition-colors group/link">
              <Github size={14} />
              <span>Source</span>
            </a>
          )}
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-body text-sm text-ink-3 hover:text-accent transition-colors">
              <ExternalLink size={14} />
              <span>Live</span>
            </a>
          )}
          <div className="ml-auto w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-ink-3 group-hover:text-accent group-hover:border-accent/30 group-hover:bg-accent/8 transition-all duration-250">
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })
  const { projects, loading } = useProjects()

  return (
    <section id="projects" ref={ref} className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}
          className="flex items-center gap-3 mb-12">
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.18em]">03 — Projects</span>
          <div className="flex-1 h-px bg-white/6 max-w-xs" />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.55 }}
            className="font-display font-extrabold text-4xl md:text-5xl text-ink" style={{ letterSpacing: '-0.02em' }}>
            Things I've <span style={{ color: '#6EE7B7' }}>built</span>
          </motion.h2>
          <motion.a href="https://github.com/chakribontha" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
            className="flex items-center gap-1.5 font-body text-sm text-ink-3 hover:text-accent transition-colors group pb-1">
            See all on GitHub <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1,2,3].map(i => <div key={i} className="h-72 rounded-2xl border border-white/7 bg-white/2 animate-pulse" />)}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => <Card key={p._id} project={p} index={i} inView={inView} />)}
          </div>
        )}
      </div>
    </section>
  )
}
