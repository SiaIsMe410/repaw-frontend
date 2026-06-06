'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { gearItems, Activity } from '@/lib/gear-data'
import Link from 'next/link'

const prices = ['¥ 588', '¥ 468', '¥ 528', '¥ 328', '¥ 488']

const swatchMap: Record<Activity, string[]> = {
  night:   ['#3b6fff', '#111', '#8ab4f8', '#c8e6ff'],
  trail:   ['#52c41a', '#2d6a00', '#a8e063', '#d4f0a0'],
  frisbee: ['#fa8c16', '#d46b08', '#ffd591', '#fff3cd'],
}

interface Props {
  visible: typeof gearItems
  showSidebar: boolean
}

export default function ShopProductGrid({ visible, showSidebar }: Props) {
  return (
    <div style={{ flex: 1, padding: '1.5rem 2rem 6rem' }}>
      <div className={`grid ${showSidebar ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-2 lg:grid-cols-4'}`} style={{ gap: '1.5rem' }}>
        <AnimatePresence mode="popLayout">
          {visible.map((item, i) => (
            <motion.div key={item.id} layout
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }} transition={{ duration: 0.28, delay: i * 0.04 }}
              className="group" style={{ cursor: 'pointer' }}>

              <div style={{ aspectRatio: '3/4', background: '#f0f0f0', position: 'relative', overflow: 'hidden', marginBottom: '0.85rem' }}>
                <Link href={`/custom/${item.id}`} className="no-underline" onClick={(e) => e.stopPropagation()}
                  style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', zIndex: 2, background: '#fff', borderRadius: 100, padding: '0.4rem 0.7rem', display: 'flex', alignItems: 'center', gap: '0.35rem', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>
                  <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
                    <defs>
                      <linearGradient id={`g${i}`} x1="2" y1="2" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#c8ff00"/>
                        <stop offset="50%" stopColor="#3b6fff"/>
                        <stop offset="100%" stopColor="#fa8c16"/>
                      </linearGradient>
                    </defs>
                    <path d="M12.5 2.5l2 2-9 9H3.5v-2l9-9z" stroke={`url(#g${i})`} strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M11 4l2 2" stroke={`url(#g${i})`} strokeWidth="1.5"/>
                  </svg>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#111', whiteSpace: 'nowrap' }}>定制</span>
                </Link>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="group-hover:scale-105 transition-transform duration-500 block select-none"
                    style={{ fontSize: '7.5rem', opacity: 0.6 }}>{item.emoji}</span>
                </div>
                <div className="group-hover:opacity-100"
                  style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', right: '0.75rem', opacity: 0, transition: 'opacity 0.25s' }}>
                  <Link href={`/custom/${item.id}`} className="no-underline block"
                    style={{ textAlign: 'center', padding: '0.65rem', background: '#111', color: '#fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.05em' }}
                    onClick={(e) => e.stopPropagation()}>
                    定制专属款
                  </Link>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: '0.45rem' }}>
                {swatchMap[item.activity].slice(0, 4).map((c, ci) => (
                  <div key={ci} style={{ width: 20, height: 20, borderRadius: '50%', background: c, border: '1.5px solid rgba(0,0,0,0.12)', flexShrink: 0 }} />
                ))}
                <span style={{ fontSize: '0.72rem', color: 'rgba(0,0,0,0.4)', marginLeft: 1 }}>+1</span>
              </div>

              <Link href={`/custom/${item.id}`} className="no-underline"
                style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: swatchMap[item.activity][0], marginBottom: '0.2rem' }}>
                定制
              </Link>

              <div style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: '0.18rem', lineHeight: 1.3 }}>{item.name}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(0,0,0,0.45)', marginBottom: '0.4rem', lineHeight: 1.4 }}>{item.description}</div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700 }}>{prices[i % prices.length]}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
