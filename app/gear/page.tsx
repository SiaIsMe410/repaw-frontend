'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import NikeByYouBar from '@/components/shared/NikeByYouBar'
import GearCarousel from '@/components/gear/GearCarousel'
import GearFeaturedScroll from '@/components/gear/GearFeaturedScroll'
import GearChooseType from '@/components/gear/GearChooseType'
import GearCustomizeSection from '@/components/gear/GearCustomizeSection'

export default function GearPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', color: '#111', paddingTop: '5rem' }}>

      <NikeByYouBar />

      {/* 01 · 顶部轮播 */}
      <GearCarousel />

      {/* 02 · Hero 文字 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ padding: '4rem 3rem 3.5rem', textAlign: 'center' }}>
        <p className="font-ui" style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.32)', marginBottom: '1.25rem' }}>
          REPAW · Nike By You
        </p>
        <h1 style={{ fontSize: 'clamp(28px,3.2vw,42px)', fontWeight: 700, lineHeight: 1.15, marginBottom: '1rem', color: '#111' }}>
          打造宠物的<span style={{ color: 'var(--color-acid)' }}>梦想装备</span>
        </h1>
        <p style={{ fontSize: '1rem', fontWeight: 400, lineHeight: 1.65, color: 'rgba(0,0,0,0.5)', maxWidth: 560, margin: '0 auto 2rem' }}>
          以 Nike 废料再生为基础材料，每件装备都承载主人与宠物共同的运动故事。选择场景，定制专属，让 Do It Together 从理念变成穿在身上的一切。
        </p>
        <Link href="/shop" className="font-ui no-underline inline-block hover:-translate-y-0.5 transition-transform"
          style={{ fontSize: '0.88rem', fontWeight: 700, padding: '0.9rem 2.5rem', background: '#111', color: '#fff', borderRadius: '100px' }}>
          商店
        </Link>
      </motion.div>

      {/* 03 · 精选款式 */}
      <GearFeaturedScroll />

      {/* 04 · 选择运动类型 */}
      <GearChooseType />

      {/* 05 · 个性化定制 */}
      <GearCustomizeSection />

    </div>
  )
}
