'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Activity } from '@/lib/gear-data'
import Link from 'next/link'

const types = [
  { key: 'night' as Activity, label: '城市夜跑', sub: '反光 · 安全 · 轻量', color: '#3b6fff' },
  { key: 'trail' as Activity, label: '山野徒步', sub: '防护 · 耐磨 · 透气', color: '#52c41a' },
  { key: 'frisbee' as Activity, label: '草坪飞盘', sub: '弹性 · 灵活 · 快干', color: '#fa8c16' },
]

export default function GearChooseType() {
  const [chosenType, setChosenType] = useState<Activity | null>(null)

  return (
    <section style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        style={{ textAlign: 'center', padding: '4rem 3rem 3.5rem', maxWidth: 620, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(24px,2.8vw,36px)', fontWeight: 700, lineHeight: 1.2, marginBottom: '0.9rem', color: '#111' }}>
          你的布料，我们的版型
        </h2>
        <p style={{ fontSize: '1rem', fontWeight: 400, lineHeight: 1.65, color: 'rgba(0,0,0,0.5)', marginBottom: '2rem' }}>
          将一件旧衣物裁切成半成品，附赠专业版型图，自己动手剪裁拼接成宠物装备——每一刀都是你的故事延续。
        </p>
        <Link href="/shop" className="font-ui no-underline inline-block hover:-translate-y-0.5 transition-transform"
          style={{ fontSize: '0.88rem', fontWeight: 700, padding: '0.9rem 2.5rem', background: '#111', color: '#fff', borderRadius: '100px' }}>
          立即定制
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
        style={{ position: 'relative', marginInline: '0rem', marginBottom: '5rem' }}>
        <div id="diy-scene" style={{ width: '100%', aspectRatio: '16/7', background: '#000', backgroundImage: 'url(/制作.png)', backgroundSize: '80%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
        <motion.div
          initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ position: 'absolute', left: '2.5rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(16px)', border: '1px solid rgba(0,0,0,0.1)', padding: '1.5rem', width: 220, zIndex: 2, boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)' }}>运动类型</span>
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              {['←', '→'].map((a) => (
                <span key={a} style={{ width: 24, height: 24, border: '1px solid rgba(0,0,0,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', cursor: 'pointer', borderRadius: 2, color: '#111' }}>{a}</span>
              ))}
            </div>
          </div>
          {types.map((t, i) => (
            <div key={t.key}
              onClick={() => setChosenType(t.key === chosenType ? null : t.key)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.7rem 0', borderTop: i > 0 ? '1px solid rgba(0,0,0,0.06)' : 'none', cursor: 'pointer', opacity: chosenType && chosenType !== t.key ? 0.35 : 1, transition: 'opacity 0.2s' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: t.color, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, lineHeight: 1.2, color: '#111' }}>{t.label}</div>
                <div style={{ fontSize: '0.6rem', color: 'rgba(0,0,0,0.4)', marginTop: '0.15rem' }}>{t.sub}</div>
              </div>
              {chosenType === t.key && (
                <span style={{ marginLeft: 'auto', fontSize: '0.6rem', color: t.color }}>✓</span>
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
