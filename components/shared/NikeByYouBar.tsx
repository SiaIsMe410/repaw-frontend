'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NikeByYouBar() {
  return (
    <>
      {/* 白色二级导航栏 */}
      <div style={{ position: 'sticky', top: 0, zIndex: 45, background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 3rem' }}>
          <span style={{ fontSize: '0.92rem', fontWeight: 700, letterSpacing: '0.02em', color: '#111' }}>Nike By You</span>
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            {[{ href: '/shop', label: '商店' }, { href: '/custom', label: '注册' }].map((item) => (
              <Link key={item.href} href={item.href} className="no-underline font-ui"
                style={{ fontSize: '0.82rem', fontWeight: 600, color: '#111', letterSpacing: '0.08em', transition: 'opacity 0.2s', opacity: 0.7 }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Acid green 横条 */}
      <div style={{ background: 'var(--color-acid)', overflow: 'hidden', height: 38, display: 'flex', alignItems: 'center' }}>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
          {Array(20).fill(null).map((_, i) => (
            <span key={i} style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#000' }}>
              Nike By You
            </span>
          ))}
        </motion.div>
      </div>
    </>
  )
}
