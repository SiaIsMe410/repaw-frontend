'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { big: '3.6kg',  label: 'CO₂ 减排量',    sub: '每回收利用 1kg Nike 废旧纺织品，可减少 3.6kg CO₂ 排放' },
  { big: '6000L',  label: '节约水资源',      sub: '每 1kg 废料再利用，可节约 6,000 升清洁水资源' },
  { big: '90%',    label: '生产端减废',      sub: 'AI 设计数字化转型目标：实现生产端 90% 废料减量' },
  { big: '1.26亿', label: '城镇犬猫',        sub: '是新生儿数量的 16 倍，宠物市场增长动力强劲' },
  { big: '484亿',  label: '市场规模 (元)',   sub: '中国宠物用品市场年规模，CAGR 达 29.3%' },
  { big: '200+',   label: '无废城市建设',    sub: '「十五五」生态环境部推动 200 城市「无废城市」建设' },
]

export default function ImpactSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from('.impact-card', {
      opacity: 0, y: 30, stagger: 0.08, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: '.impact-grid', start: 'top 80%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} id="impact" style={{ background: 'var(--color-sage)', padding: '8rem 3rem', '--eyebrow-line': 'rgba(255,255,255,0.3)', '--eyebrow-line-opacity': '1' } as React.CSSProperties}>
      <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }}>可持续运动</p>
      <h2 className="font-display" style={{ fontSize: 'clamp(48px,7vw,100px)', lineHeight: 0.93, marginBottom: '1.5rem' }}>
        每次运动<br />都在改变
      </h2>
      <p style={{ fontSize: '0.97rem', fontWeight: 300, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', maxWidth: 520, marginBottom: '4.5rem' }}>
        REPAW 以 Nike 废料再生为材料基础，将可持续理念融入运动场景。你们共同完成的每一次户外运动，都同时推动了环境与生命力的双重改善。
      </p>
      <div className="impact-grid grid grid-cols-1 md:grid-cols-3" style={{ gap: 1, background: 'rgba(255,255,255,0.12)' }}>
        {stats.map((s) => (
          <div key={s.label} className="impact-card" style={{ padding: '2.5rem', background: 'var(--color-sage)', transition: 'filter 0.3s', cursor: 'default' }}
            onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1.12)')}
            onMouseLeave={(e) => (e.currentTarget.style.filter = '')}>
            <span className="font-display block" style={{ fontSize: 'clamp(2.8rem,4.5vw,4.5rem)', color: 'var(--color-acid)', lineHeight: 1, marginBottom: '0.6rem' }}>{s.big}</span>
            <span className="font-ui block" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.88)', marginBottom: '0.4rem' }}>{s.label}</span>
            <span style={{ fontSize: '0.77rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.55 }}>{s.sub}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
