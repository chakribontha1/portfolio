import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import { contactApi } from '../../services/api'

const socials = [
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/chakribontha',    val: 'github.com/chakribontha',    color: '#EEF2FF' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/chakribontha',val: 'linkedin.com/in/chakribontha',color: '#38BDF8' },
  { icon: Mail,     label: 'Email',    href: 'mailto:chakribontha9@gmail.com',      val: 'chakribontha9@gmail.com',    color: '#6EE7B7' },
]

const init = { name:'', email:'', subject:'', message:'' }

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [form, setForm] = useState(init)
  const [status, setStatus] = useState(null)
  const [errMsg, setErrMsg] = useState('')

  const anim = (i) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })

  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    setStatus('loading'); setErrMsg('')
    try {
      await contactApi.send(form)
      setStatus('success'); setForm(init)
      setTimeout(() => setStatus(null), 5000)
    } catch (err) {
      setStatus('error'); setErrMsg(err.message || 'Failed to send.')
      setTimeout(() => setStatus(null), 4000)
    }
  }

  const field = `w-full bg-white/4 border border-white/8 rounded-lg px-4 py-3 font-body text-sm text-ink placeholder-ink-3
    focus:outline-none focus:border-accent/40 focus:bg-white/6 transition-all duration-200 font-body`

  return (
    <section id="contact" ref={ref} className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div {...anim(0)} className="flex items-center gap-3 mb-12">
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.18em]">05 — Contact</span>
          <div className="flex-1 h-px bg-white/6 max-w-xs" />
        </motion.div>

        {/* Big CTA heading */}
        <motion.div {...anim(1)} className="mb-16">
          <h2 className="font-display font-extrabold text-ink leading-none mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.025em' }}>
            Let's build something<br /><span style={{ color: '#6EE7B7' }}>great together.</span>
          </h2>
          <p className="font-body text-ink-2 text-[15px] max-w-xl">
            Open to full-time roles, freelance projects, and interesting engineering conversations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div {...anim(2)} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="space-y-4 p-8 rounded-2xl border border-white/8 bg-white/2">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] text-ink-3 uppercase tracking-wider mb-2">Name *</label>
                  <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required className={field} />
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-ink-3 uppercase tracking-wider mb-2">Email *</label>
                  <input type="email" name="email" value={form.email} onChange={onChange} placeholder="your@email.com" required className={field} />
                </div>
              </div>
              <div>
                <label className="block font-mono text-[10px] text-ink-3 uppercase tracking-wider mb-2">Subject *</label>
                <input name="subject" value={form.subject} onChange={onChange} placeholder="What's this about?" required className={field} />
              </div>
              <div>
                <label className="block font-mono text-[10px] text-ink-3 uppercase tracking-wider mb-2">Message *</label>
                <textarea name="message" value={form.message} onChange={onChange} placeholder="Tell me about your project..." required rows={5} className={`${field} resize-none`} />
              </div>

              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 p-3.5 bg-green-500/10 border border-green-500/25 rounded-lg">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="font-body text-sm text-green-400">Message sent! I'll get back to you soon.</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 p-3.5 bg-red-500/10 border border-red-500/25 rounded-lg">
                  <AlertCircle size={16} className="text-red-400" />
                  <span className="font-body text-sm text-red-400">{errMsg}</span>
                </motion.div>
              )}

              <motion.button type="submit" disabled={status === 'loading'}
                className="w-full py-3.5 bg-accent text-[#05070F] font-display font-bold text-sm rounded-lg flex items-center justify-center gap-2 hover:bg-[#34D399] transition-all duration-200 disabled:opacity-50"
                style={{ boxShadow: '0 8px 24px rgba(110,231,183,0.18)' }}
                whileHover={{ scale: 1.01, translateY: -1 }} whileTap={{ scale: 0.99 }}>
                {status === 'loading' ? (
                  <><div className="w-4 h-4 border-2 border-[#05070F]/30 border-t-[#05070F] rounded-full animate-spin" />Sending...</>
                ) : (
                  <><Send size={15} />Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div {...anim(3)} className="lg:col-span-2 flex flex-col gap-4">
            {/* Socials */}
            {socials.map(({ icon: Icon, label, href, val, color }, i) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, x: 16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.1 }}
                className="group flex items-center gap-4 p-5 rounded-xl border border-white/8 bg-white/2 hover:border-white/16 hover:-translate-y-0.5 transition-all duration-250"
                whileHover={{ x: 4 }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
                  <Icon size={19} style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold text-[14px] text-ink">{label}</div>
                  <div className="font-mono text-[11px] text-ink-3 truncate">{val}</div>
                </div>
                <ArrowUpRight size={15} className="text-ink-3 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </motion.a>
            ))}

            {/* Quick info */}
            <div className="p-5 rounded-xl border border-white/8 bg-white/2 space-y-3">
              {[
                { icon: MapPin, t: 'Hyderabad, India' },
                { icon: Phone,  t: '+91-8106436244', href: 'tel:+918106436244' },
              ].map(({ icon: Icon, t, href }) => (
                <a key={t} href={href || '#'} className="flex items-center gap-3 font-body text-sm text-ink-2 hover:text-accent transition-colors">
                  <Icon size={13} className="text-accent shrink-0" />{t}
                </a>
              ))}
            </div>

            {/* Available badge */}
            <div className="p-4 rounded-xl border border-accent/20 bg-accent/6 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shrink-0" />
              <div>
                <div className="font-display font-semibold text-sm text-ink">Available for opportunities</div>
                <div className="font-mono text-[11px] text-ink-3 mt-0.5">Full-time · Remote · Hybrid</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
