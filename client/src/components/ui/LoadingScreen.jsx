import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="min-h-[200px] flex items-center justify-center">
      <motion.div
        className="flex gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-accent-cyan"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </motion.div>
    </div>
  )
}
