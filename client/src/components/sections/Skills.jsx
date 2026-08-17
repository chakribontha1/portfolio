import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const skills = {
  Backend:               [['Spring Boot',96],['REST APIs',95],['Microservices',90],['Spring Security',88],['Hibernate / JPA',85]],
  'Distributed Systems':  [['Apache Kafka',90],['Event-Driven Architecture',88],['RabbitMQ',85],['Caching',85],['Async Processing',82]],
  Databases:              [['MySQL',90],['PostgreSQL',88],['Query Optimization',86],['MongoDB',82]],
  'Cloud & DevOps':        [['Docker',88],['AWS (EC2, S3, CloudFront)',85],['CI/CD',85],['Kubernetes',82],['Nginx',78]],
  Languages:               [['Java',92],['SQL',90],['JavaScript',85],['TypeScript',78],['C++',75]],
}

const catColor = { Backend:'#6EE7B7', 'Distributed Systems':'#38BDF8', Databases:'#818CF8', 'Cloud & DevOps':'#34D399', Languages:'#F472B6' }

export default function Skills() {
  const [active, setActive] = useState('Backend')
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const anim = (i) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })

  return (
    <section id="skills" ref={ref} className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">

        <motion.div {...anim(0)} className="flex items-center gap-3 mb-12">
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.18em]">02 — Skills</span>
          <div className="flex-1 h-px bg-ink/6 max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-3 items-start mb-3">
          <motion.h2 {...anim(1)} className="font-display font-extrabold text-4xl md:text-5xl text-ink leading-tight" style={{ letterSpacing: '-0.02em' }}>
            My technical<br /><span className="text-accent">toolkit</span>
          </motion.h2>
          <motion.p {...anim(2)} className="font-body text-ink-2 text-[15px] leading-relaxed self-end">
            What I use to design, build, and operate backend systems — from API design to distributed event processing at scale.
          </motion.p>
        </div>

        {/* Category tabs */}
        <motion.div {...anim(3)} className="flex flex-wrap gap-2 mt-10 mb-8">
          {Object.keys(skills).map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-xl font-display font-semibold text-sm transition-all duration-250 ${
                active === cat
                  ? 'text-accent-contrast shadow-lg'
                  : 'text-ink-2 glass glass-interactive hover:text-ink'
              }`}
              style={active === cat ? { background: catColor[cat], boxShadow: `0 8px 24px ${catColor[cat]}30` } : {}}>
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Skill bars */}
          <motion.div key={active}
            initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}
            className="lg:col-span-2 glass p-7 rounded-3xl">
            <div className="flex items-center gap-2 mb-7">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: catColor[active] }} />
              <span className="font-display font-bold text-ink">{active}</span>
              <span className="ml-auto font-mono text-[10px] text-ink-3">{skills[active].length} skills</span>
            </div>
            <div className="space-y-5">
              {skills[active].map(([name, pct], i) => (
                <div key={name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-body text-sm text-ink-2">{name}</span>
                    <span className="font-mono text-[11px] text-ink-3">{pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-ink/6 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${pct}%` } : { width: 0 }}
                      transition={{ duration: 1.1, delay: i * 0.08, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${catColor[active]}, ${catColor[active]}99)` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Category cards */}
          <div className="space-y-3">
            {Object.entries(skills).map(([cat, items], i) => (
              <motion.button key={cat} {...anim(3 + i * 0.5)} onClick={() => setActive(cat)}
                className={`glass w-full p-4 rounded-2xl text-left transition-all duration-250 ${
                  active === cat ? '' : 'glass-interactive'
                }`}
                style={active === cat ? { borderColor: `${catColor[cat]}4D`, background: `${catColor[cat]}0F` } : {}}
                whileHover={{ x: 4 }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-semibold text-sm text-ink">{cat}</span>
                  <span className="font-mono text-[10px]" style={{ color: catColor[cat] }}>{items.length}</span>
                </div>
                <div className="flex gap-1">
                  {items.map(([name]) => (
                    <div key={name} className="h-1 flex-1 rounded-full" style={{ background: active === cat ? `${catColor[cat]}60` : 'rgb(var(--text-rgb) / 0.08)' }} />
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Also familiar with */}
        <motion.div {...anim(8)} className="mt-10">
          <div className="font-mono text-[10px] text-ink-3 uppercase tracking-[0.15em] mb-4">Also familiar with</div>
          <div className="flex flex-wrap gap-2">
            {['Node.js','Express.js','JWT','OAuth 2.0','OpenAPI/Swagger','JUnit','Mockito','Maven','Git','JIRA','Confluence','Agile/Scrum'].map(t => (
              <motion.span key={t} whileHover={{ scale: 1.05 }}
                className="glass glass-interactive px-3 py-1.5 rounded-lg font-mono text-[11px] text-ink-3 hover:text-accent transition-colors cursor-default">
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
