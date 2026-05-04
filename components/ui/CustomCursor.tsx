
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { useUIStore } from '@/store/uiStore'

export default function CustomCursor() {
  const cursorVariant = useUIStore((s) => s.cursorVariant)
  const [visible, setVisible] = useState(false)

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  // Dot: snappy, near-instant
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50, mass: 0.1 })
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50, mass: 0.1 })

  // Ring: lagging, floaty
  const ringX = useSpring(mouseX, { stiffness: 120, damping: 18, mass: 0.5 })
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 18, mass: 0.5 })

  useEffect(() => {
    // Only show on pointer-fine (mouse) devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const onEnter = () => setVisible(true)
    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [mouseX, mouseY])

  const isHovering = cursorVariant === 'hovering'
  const isProject  = cursorVariant === 'project'

  if (!visible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* ── Dot: fast follower ── */}
      <motion.div className="absolute" style={{ x: dotX, y: dotY }}>
        <motion.div
          style={{ transform: 'translate(-50%, -50%)' }}
          className="w-2 h-2 rounded-full bg-white mix-blend-difference"
          animate={{ scale: isHovering ? 3.5 : isProject ? 0 : 1 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
        />
      </motion.div>

      {/* ── Ring: slow follower ── */}
      <motion.div className="absolute" style={{ x: ringX, y: ringY }}>
        {/*
          mix-blend-difference gives the "inversion" effect in default/hovering states.
          Disabled in project state so the white fill + black "VIEW" text renders correctly.
        */}
        <motion.div
          style={{ transform: 'translate(-50%, -50%)' }}
          className={`relative flex items-center justify-center rounded-full border border-white ${
            isProject ? '' : 'mix-blend-difference'
          }`}
          animate={{
            width:           isProject ? 88 : isHovering ? 52 : 36,
            height:          isProject ? 88 : isHovering ? 52 : 36,
            borderWidth:     isProject ? 0  : 1,
            backgroundColor: isProject ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)',
          }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <AnimatePresence>
            {isProject && (
              <motion.span
                className="absolute text-black text-[10px] font-bold tracking-[0.2em] uppercase"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                VIEW
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  )
}
