import { useEffect } from 'react'

/**
 * Drives every cursor-tracked effect (the `.glass` spotlight glint and the
 * `.resume-reveal` mask) from a single document-level listener (rAF-throttled)
 * instead of wiring a handler onto each element individually.
 */
export const useGlassSpotlight = () => {
  useEffect(() => {
    let frame = null
    let lastEvent = null

    const track = (e, selector, xVar, yVar) => {
      const el = e.target?.closest?.(selector)
      if (!el) return
      const rect = el.getBoundingClientRect()
      el.style.setProperty(xVar, `${e.clientX - rect.left}px`)
      el.style.setProperty(yVar, `${e.clientY - rect.top}px`)
    }

    const apply = () => {
      frame = null
      const e = lastEvent
      if (!e) return
      track(e, '.glass', '--mx', '--my')
      track(e, '.resume-reveal', '--rx', '--ry')
    }

    const onMove = (e) => {
      lastEvent = e
      if (frame == null) frame = requestAnimationFrame(apply)
    }

    // Reveal masks don't auto-hide on their own (unlike .glass, which is
    // gated by :hover opacity) — reset off-screen so the window doesn't
    // freeze in place once the cursor moves on.
    const resetReveal = (e) => {
      e.currentTarget.style.setProperty('--rx', '-9999px')
      e.currentTarget.style.setProperty('--ry', '-9999px')
    }
    const revealEls = document.querySelectorAll('.resume-reveal')
    revealEls.forEach(el => el.addEventListener('mouseleave', resetReveal))

    document.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      document.removeEventListener('mousemove', onMove)
      revealEls.forEach(el => el.removeEventListener('mouseleave', resetReveal))
      if (frame != null) cancelAnimationFrame(frame)
    }
  }, [])
}
