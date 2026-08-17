import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      whileHover={{ y: -2 }}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title="Defaults to Hyderabad daylight hours — click to override"
      className="glass glass-interactive w-9 h-9 rounded-xl flex items-center justify-center text-ink-2 hover:text-accent transition-colors duration-200 shrink-0"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </motion.button>
  )
}
