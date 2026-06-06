'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
})

const stats = [
  { num: '1.26亿', label: '城镇犬猫数量' },
  { num: '484亿',  label: '宠物用品市场规模' },
  { num: '29.3%',  label: '行业年增速 CAGR' },
]

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-end overflow-hidden"
      style={{ minHeight: '100vh', padding: '4rem 3rem 4.5rem', background: 'var(--color-site-black)' }}>

      {/* 背景图片 */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'url(/骑车.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 1,
      }} />

      {/* 深色蒙层，保证文字可读 */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.88) 100%)',
      }} />

      {/* Radial gradient overlay — always present */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 60% 60% at 70% 40%, rgba(200,255,0,0.04) 0%, transparent 70%),
                     radial-gradient(ellipse 40% 50% at 20% 70%, rgba(200,255,0,0.025) 0%, transparent 60%)`,
      }} />

      {/* 文字内容区，z-index 确保在遮罩层上方 */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.p className="font-ui flex items-center" style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-acid)', marginBottom: '1.5rem', gap: '1rem' }} {...fade(0.2)}>
          <span style={{ display: 'block', width: 32, height: 1, background: 'var(--color-acid)', flexShrink: 0 }} />
          Do It Together · 宠物是你最好的运动搭子
        </motion.p>

        <motion.div style={{ marginBottom: '2.5rem' }} {...fade(0.4)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/新 slogan.png" alt="JUST DÖ IT . TOGETHER!" style={{ width: 'clamp(480px,72vw,1200px)', height: 'auto', display: 'block' }} />
        </motion.div>

        <motion.p style={{ maxWidth: 750, fontSize: '0.97rem', fontWeight: 300, lineHeight: 1.8, color: 'rgba(245,242,236,0.55)', marginBottom: '2.8rem' }} {...fade(0.6)}>
          它不会问你「还有多远」。它不会看你的配速，也不会抱怨天气。
          它只是——跟上来。<br />
          REPAW 以 Nike 废料再生材料打造专属宠物运动装备，让你们一起，把 Just Do It 变成 Just Do It. Together.
        </motion.p>

        <motion.div className="flex items-center" style={{ gap: '2rem' }} {...fade(0.8)}>
          <Link href="/#scenarios" className="inline-flex items-center no-underline font-ui font-bold tracking-[0.12em] uppercase"
            style={{ gap: '0.75rem', background: 'var(--color-acid)', color: 'var(--color-site-black)', fontSize: '0.82rem', padding: '1rem 2rem', transition: 'transform 0.2s, background 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = '#d4ff1a' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.background = 'var(--color-acid)' }}>
            探索运动场景 →
          </Link>
          <Link href="/#manifesto" className="font-ui font-semibold tracking-[0.1em] uppercase no-underline flex items-center"
            style={{ fontSize: '0.82rem', color: 'rgba(245,242,236,0.55)', gap: '0.5rem', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-site-white)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,242,236,0.55)')}>
            了解理念 ↓
          </Link>
        </motion.div>
      </div>

      {/* Stats — right side */}
      <motion.div className="absolute hidden lg:flex flex-col" style={{ right: '3rem', bottom: '4rem', gap: '2rem', zIndex: 1 }} {...fade(1.0)}>
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: 'right' }}>
            <span className="font-display block" style={{ fontSize: '2.8rem', color: 'var(--color-acid)', lineHeight: 1 }}>{s.num}</span>
            <span className="font-ui" style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.35)' }}>{s.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Scroll hint — left side */}
      <span className="absolute hidden lg:flex items-center font-ui"
        style={{ left: '3rem', bottom: '4rem', writingMode: 'vertical-lr', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.28)', gap: '1rem', zIndex: 1 }}>
        <span style={{ width: 1, height: 60, background: 'rgba(245,242,236,0.15)', display: 'block' }} />
        向下滚动
      </span>

    </section>
  )
}
