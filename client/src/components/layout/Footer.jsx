import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-display font-bold text-[17px] text-ink flex items-center gap-1">
            Bontha Chakri<span style={{ color: '#6EE7B7' }}>.</span>
          </div>
          <p className="font-body text-ink-3 text-xs mt-1">Full Stack Engineer · Hyderabad, India</p>
        </div>
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: 'https://github.com/chakribontha' },
            { icon: Linkedin, href: 'https://linkedin.com/in/chakribontha' },
            { icon: Mail, href: 'mailto:chakribontha9@gmail.com' },
          ].map(({ icon: Icon, href }) => (
            <motion.a key={href} href={href} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-ink-3 hover:text-accent hover:border-accent/25 transition-all"
              whileHover={{ y: -2 }}>
              <Icon size={15} />
            </motion.a>
          ))}
        </div>
        <p className="font-mono text-[11px] text-ink-3">Built with React + Node.js · {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
