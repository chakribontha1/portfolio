import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/projects'

const tagColor = {
  Backend: '#6EE7B7',
  'Distributed Systems': '#38BDF8',
  'Real-Time': '#34D399',
  'Admin Panel': '#818CF8',
}

function Card({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group glass glass-interactive flex flex-col rounded-3xl overflow-hidden"
    >
      <div className="p-7 flex flex-col flex-1">
        {/* Tags + index */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex flex-wrap gap-1.5">
            {project.tags?.slice(0, 2).map(t => (
              <span key={t} className="px-2 py-0.5 rounded font-mono text-[10px] border"
                style={{ color: tagColor[t]||'#97A1B4', borderColor: `${tagColor[t]||'#97A1B4'}30`, background: `${tagColor[t]||'#97A1B4'}10` }}>
                {t}
              </span>
            ))}
          </div>
          <span className="font-mono text-4xl font-black leading-none select-none text-ink/[0.04]">
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
            <span key={t} className="px-2 py-1 rounded font-mono text-[10px] text-ink-3 bg-ink/4 border border-ink/7">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-ink/6">
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
          <div className="ml-auto w-7 h-7 rounded-full border border-ink/10 flex items-center justify-center text-ink-3 group-hover:text-accent group-hover:border-accent/30 group-hover:bg-accent/8 transition-all duration-250">
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="projects" ref={ref} className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}
          className="flex items-center gap-3 mb-12">
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.18em]">04 — Projects</span>
          <div className="flex-1 h-px bg-ink/6 max-w-xs" />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.55 }}
            className="font-display font-extrabold text-4xl md:text-5xl text-ink" style={{ letterSpacing: '-0.02em' }}>
            Things I've <span className="text-accent">built</span>
          </motion.h2>
          <motion.a href="https://github.com/chakribontha" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
            className="flex items-center gap-1.5 font-body text-sm text-ink-3 hover:text-accent transition-colors group pb-1">
            See all on GitHub <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => <Card key={p.id} project={p} index={i} inView={inView} />)}
        </div>
      </div>
    </section>
  )
}
