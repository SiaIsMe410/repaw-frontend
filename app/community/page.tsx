'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RegisterModal from '@/components/community/RegisterModal'
import CommunityEvents, { events } from '@/components/community/CommunityEvents'
import CommunitySpaces from '@/components/community/CommunitySpaces'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

export default function CommunityPage() {
  const [registerEvent, setRegisterEvent] = useState<typeof events[0] | null>(null)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-site-black)', paddingTop: '7rem' }}>

      {/* Hero */}
      <div style={{ paddingInline: '3rem', paddingBottom: '5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <motion.p className="eyebrow" style={{ marginBottom: '1.5rem', color: 'rgba(245,242,236,0.35)' }} {...fadeUp(0)}>运动社群</motion.p>
        <motion.h1 className="font-display" style={{ fontSize: 'clamp(60px,10vw,140px)', lineHeight: 0.9, marginBottom: '2rem' }} {...fadeUp(0.08)}>
          一起出发<br /><span style={{ color: 'var(--color-acid)' }}>不止装备</span>
        </motion.h1>
        <motion.p style={{ fontSize: '0.97rem', fontWeight: 300, lineHeight: 1.85, color: 'rgba(245,242,236,0.45)', maxWidth: 520 }} {...fadeUp(0.16)}>
          REPAW 社群定期组织线下运动活动，并在全国设有体验空间。选择附近的线下空间预约体验，或直接报名参加我们的线上组织活动。
        </motion.p>
      </div>

      <CommunityEvents onRegister={setRegisterEvent} />
      <CommunitySpaces />

      <AnimatePresence>
        {registerEvent && <RegisterModal event={registerEvent} onClose={() => setRegisterEvent(null)} />}
      </AnimatePresence>
    </div>
  )
}
