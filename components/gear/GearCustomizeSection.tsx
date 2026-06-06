'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function GearCustomizeSection() {
  return (
    <section style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingBottom: '6rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        style={{ textAlign: 'center', padding: '4rem 3rem 3rem', maxWidth: 580, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(22px,2.6vw,34px)', fontWeight: 700, lineHeight: 1.2, marginBottom: '0.9rem', color: '#111' }}>
          个性化定制，从你们开始
        </h2>
        <p style={{ fontSize: '0.97rem', fontWeight: 400, lineHeight: 1.65, color: 'rgba(0,0,0,0.5)', marginBottom: '2rem' }}>
          不知道从哪里开始？我们邀请 REPAW 设计师分享定制技巧与灵感，在一系列短片中，点燃属于你们的专属创意。
        </p>
        <Link href="/shop" className="font-ui no-underline inline-block hover:-translate-y-0.5 transition-transform"
          style={{ fontSize: '0.88rem', fontWeight: 700, padding: '0.9rem 2.5rem', background: '#111', color: '#fff', borderRadius: '100px' }}>
          探索装备
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
        style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ width: '100%', aspectRatio: '16/7', background: '#ede9e3', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <span style={{ fontSize: '16rem', opacity: 0.13, userSelect: 'none', marginRight: '12rem' }}>🐕</span>
        </div>

        <div style={{ position: 'absolute', right: '4rem', top: '15%', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.25 }}
            style={{
              background: '#fff', borderRadius: '12px',
              boxShadow: '0 24px 72px rgba(0,0,0,0.16)',
              width: 'clamp(200px,17vw,260px)', overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
            }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem 1rem 0.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#111', cursor: 'pointer' }}>完成</span>
            </div>
            <div style={{ background: '#f5f5f5', margin: '0 0.75rem', borderRadius: 6, aspectRatio: '3/4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem' }}>
              🦺
            </div>
            <div style={{ display: 'flex', gap: '0.4rem', margin: '0.5rem 0.75rem 0' }}>
              {['🦺', '🦮', '🐾'].map((e, i) => (
                <div key={i} style={{ flex: 1, aspectRatio: '1', background: i === 0 ? '#e8e8e8' : '#f5f5f5', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', border: i === 0 ? '1.5px solid #111' : '1px solid transparent' }}>
                  {e}
                </div>
              ))}
            </div>
            <div style={{ padding: '0.9rem 1rem 1.1rem', borderTop: '1px solid rgba(0,0,0,0.06)', marginTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 500, color: '#111' }}>山野徒步背心</span>
              <span style={{ fontSize: '0.78rem', fontWeight: 500, color: '#111' }}>¥ 528</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
