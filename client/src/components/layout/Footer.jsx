import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-ink/6 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-display font-bold text-[17px] text-ink flex items-center gap-1">
            Bontha Chakri<span className="text-accent">.</span>
          </div>
          <p className="font-body text-ink-3 text-xs mt-1">Java Backend Engineer · Hyderabad, India</p>
        </div>
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: 'https://github.com/chakribontha' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/bonthachakri/' },
            { icon: Mail, href: 'mailto:bonthachakri1@gmail.com' },
          ].map(({ icon: Icon, href }) => (
            <motion.a key={href} href={href} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 glass glass-interactive rounded-xl flex items-center justify-center text-ink-2 hover:text-accent transition-colors"
              whileHover={{ y: -2 }}>
              <Icon size={15} />
            </motion.a>
          ))}
        </div>
        <p className="font-mono text-[11px] text-ink-3">© {new Date().getFullYear()} Bontha Chakri</p>
      </div>
    </footer>
  )
}
