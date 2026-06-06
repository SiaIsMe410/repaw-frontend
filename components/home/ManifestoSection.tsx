'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  { num: '01', sport: '夜跑', title: '同频共振', body: '宠物天然的运动节律与主人步频高度契合，夜晚的街道因彼此的陪伴而不再孤独。反光装备让你们在城市暗夜中同步发光。' },
  { num: '02', sport: '徒步', title: '共克挑战', body: '崎岖山路考验的是彼此的信任。宠物的登山本能让它成为你最可靠的山野伙伴，专业防护装备确保它在复杂地形中同样出色。' },
  { num: '03', sport: '飞盘', title: '纯粹快乐', body: '飞盘弧线划过天空，宠物全力飞扑的瞬间是运动中最纯粹的喜悦。这是属于你们的运动语言，无需言语，只需共同的冲劲。' },
  { num: '04', sport: '日常', title: '可持续装备', body: '以 Nike 废料再生材料为基础，打造兼具功能性、美学性与环保理念的宠物运动装备，让每次运动都承载对地球的责任。' },
]

export default function ManifestoSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from('.manifesto-panel', {
      opacity: 0, y: 40, stagger: 0.12, duration: 0.75, ease: 'power2.out',
      scrollTrigger: { trigger: '.manifesto-grid', start: 'top 80%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} id="manifesto" className="relative overflow-hidden" style={{ background: 'var(--color-site-white)', color: 'var(--color-site-black)', padding: '8rem 3rem', '--eyebrow-line': 'rgba(10,10,10,0.3)', '--eyebrow-line-opacity': '1' } as React.CSSProperties}>
      <span className="absolute top-0 right-[-2rem] font-display leading-none pointer-events-none select-none"
        style={{ fontSize: '18vw', color: 'transparent', WebkitTextStroke: '1px rgba(10,10,10,0.055)' }}>
        TOGETHER
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end mb-20">
        <div>
          <p className="eyebrow" style={{ color: 'rgba(10,10,10,0.4)', marginBottom: '2.5rem' }}>品牌理念</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(45px,7vw,95px)', lineHeight: 1, color: '#0A0A0A', marginBottom: '2rem' }}>
            宠物不只是<br />陪伴者
          </h2>
          <p style={{ fontSize: '0.97rem', fontWeight: 300, lineHeight: 1.85, color: 'rgba(10,10,10,0.55)', maxWidth: 520 }}>
            你跑过的每一公里，它都陪你重新跑一遍——穿着你的旧衣。REPAW 把废弃运动服转化为宠物的定制战衣，让循环经济从理念，变成穿在身上的一切。
          </p>
        </div>
        <motion.blockquote
          className="font-display"
          style={{ fontSize: 'clamp(1.5rem,2.3vw,2.8rem)', lineHeight: 1.4, color: '#0A0A0A', borderLeft: '4px solid var(--color-acid)', paddingLeft: '1.5rem', marginLeft: '0rem' }}
          initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          Just Do It 是你一个人的决心。<br />
          Just Do It, together 是你们<span style={{ color: 'var(--color-acid)', fontWeight: 900 }}>两个人的默契。</span>
        </motion.blockquote>
      </div>

      <div className="manifesto-grid grid grid-cols-2 md:grid-cols-4" style={{ borderTop: '1px solid rgba(10,10,10,0.1)' }}>
        {pillars.map((p) => (
          <div key={p.num} className="manifesto-panel" style={{ padding: '2.5rem 2rem', borderRight: '1px solid rgba(10,10,10,0.1)', transition: 'background 0.3s', cursor: 'default' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(200,255,0,0.07)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '')}>
            <span className="font-ui inline-block" style={{ background: '#0A0A0A', color: 'var(--color-acid)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.2rem 0.5rem', marginBottom: '1rem' }}>{p.sport}</span>
            <div className="font-display" style={{ fontSize: '4.5rem', color: 'rgba(10,10,10,0.06)', lineHeight: 1, marginBottom: '1rem' }}>{p.num}</div>
            <h3 className="font-ui" style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.75rem' }}>{p.title}</h3>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'rgba(10,10,10,0.48)' }}>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
