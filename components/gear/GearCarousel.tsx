'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = ['/露营logo.png', '/飞盘logo.png', '/骑车logo.png', '/徒步logo.png']

export default function GearCarousel() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = (next: number) => {
    setDir(next > index || (index === slides.length - 1 && next === 0) ? 1 : -1)
    setIndex(next)
  }

  useEffect(() => {
    timer.current = setInterval(() => {
      setDir(1)
      setIndex((i) => (i + 1) % slides.length)
    }, 3500)
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', background: '#f0f0f0' }}>
      <AnimatePresence mode="popLayout" custom={dir}>
        <motion.img
          key={index} custom={dir}
          variants={{
            enter:  (d: number) => ({ x: d > 0 ? '100%' : '-100%' }),
            center: { x: 0 },
            exit:   (d: number) => ({ x: d > 0 ? '-100%' : '100%' }),
          }}
          initial="enter" animate="center" exit="exit"
          transition={{ duration: 0.55, ease: [0.77, 0, 0.18, 1] }}
          src={slides[index]} alt=""
          style={{ display: 'block', width: '100%', height: 'auto', flexShrink: 0 }}
        />
      </AnimatePresence>
      <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem', zIndex: 2 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => go(i)}
            style={{ width: i === index ? 24 : 8, height: 8, border: 'none', cursor: 'pointer', background: i === index ? 'var(--color-acid)' : 'rgba(0,0,0,0.2)', transition: 'all 0.3s', padding: 0 }} />
        ))}
      </div>
    </div>
  )
}
