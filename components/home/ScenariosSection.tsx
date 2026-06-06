'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const scenarios = [
  {
    id: 'night', badge: 'Night Run · 夜跑', title: '暗夜\n同行者', num: '01', bgImage: '/夜跑.png',
    desc: '城市夜晚，两道身影并肩奔跑。REPAW 夜跑系列采用高亮度反光面料，让你和宠物在暗夜中同步发光，守护每一步的安全节拍。',
    tags: ['反光材料', 'LED 安全灯', '轻量马甲'], icon: '🌙', bg: '#060A14',
    glow: 'radial-gradient(ellipse 60% 60% at 30% 60%, rgba(0,120,255,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 70% 30%, rgba(200,255,0,0.08) 0%, transparent 60%)',
    glowHover: 'radial-gradient(ellipse 70% 70% at 30% 60%, rgba(0,120,255,0.2) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 70% 30%, rgba(200,255,0,0.14) 0%, transparent 60%)',
    badgeColor: 'rgba(100,180,255,0.8)', badgeBorder: 'rgba(100,180,255,0.4)',
  },
  {
    id: 'trail', badge: 'Trail Hike · 徒步', title: '山野\n拍档', num: '02', bgImage: '/徒步.png',
    desc: '徒步路上，最好的向导不是地图，而是你的宠物。REPAW 山野系列配备防滑防护靴与耐磨背带，为复杂地形中的「双人团队」提供全方位支持。',
    tags: ['防滑保护靴', '耐磨背带', '轻量水袋'], icon: '⛰️', bg: '#1C2B1A',
    glow: 'radial-gradient(ellipse 60% 60% at 50% 40%, rgba(80,160,40,0.15) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 20% 80%, rgba(200,255,0,0.06) 0%, transparent 60%)',
    glowHover: 'radial-gradient(ellipse 70% 70% at 50% 40%, rgba(80,160,40,0.25) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 20% 80%, rgba(200,255,0,0.1) 0%, transparent 60%)',
    badgeColor: 'rgba(140,210,80,0.9)', badgeBorder: 'rgba(140,210,80,0.4)',
  },
  {
    id: 'frisbee', badge: 'Frisbee · 飞盘', title: '飞扑\n瞬间', num: '03', bgImage: '/飞盘.png',
    desc: '飞盘轨迹是你和宠物的独特语言。REPAW 飞盘系列以弹性护甲保护它全力飞扑的身体，快干面料应对高强度运动的每一滴汗水。',
    tags: ['弹性护甲', '快干面料', '飞盘套装'], icon: '🥏', bg: '#1F1208',
    glow: 'radial-gradient(ellipse 60% 60% at 60% 35%, rgba(255,140,0,0.15) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 30% 70%, rgba(200,255,0,0.06) 0%, transparent 60%)',
    glowHover: 'radial-gradient(ellipse 70% 70% at 60% 35%, rgba(255,140,0,0.25) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 30% 70%, rgba(200,255,0,0.1) 0%, transparent 60%)',
    badgeColor: 'rgba(255,160,40,0.9)', badgeBorder: 'rgba(255,160,40,0.4)',
  },
]

export default function ScenariosSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    scenarios.forEach((_, i) => {
      gsap.from(`.sc-card-${i}`, {
        opacity: 0, y: 36, duration: 0.75, ease: 'power2.out',
        scrollTrigger: { trigger: `.sc-card-${i}`, start: 'top 85%' },
      })
    })
  }, { scope: ref })

  return (
    <section ref={ref} id="scenarios" style={{ background: 'var(--color-site-black)', paddingBottom: 0 }}>
      {/* Header */}
      <div style={{ padding: '8rem 3rem 1rem' }}>
        <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>运动场景</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(45px,7vw,95px)', lineHeight: 1 }}>
          你们的<br /><span style={{ color: 'var(--color-acid)'}}>运动时刻</span>
        </h2>
        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.8, color: 'rgba(245,242,236,0.45)', maxWidth: 480 }}>
          从暗夜街道到山野小径，REPAW 为每一种运动场景打造专属装备——让你和你的伙伴，都能以最好的状态出发。
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 2 }}>
        {scenarios.map((sc, i) => (
          <Link
            key={sc.id}
            href={`/shop?activity=${sc.id}`}
            className={`sc-card-${i} sc-card relative flex flex-col justify-end cursor-pointer no-underline`}
            style={{ minHeight: 480, overflow: 'hidden', background: sc.bg }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              const glow = el.querySelector<HTMLElement>('.sc-glow')
              const icon = el.querySelector<HTMLElement>('.sc-icon')
              const cta  = el.querySelector<HTMLElement>('.sc-cta')
              if (glow) glow.style.background = sc.glowHover
              if (cta)  { cta.style.opacity = '1';  cta.style.transform = 'translateY(0)' }
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              const glow = el.querySelector<HTMLElement>('.sc-glow')
              const icon = el.querySelector<HTMLElement>('.sc-icon')
              const cta  = el.querySelector<HTMLElement>('.sc-cta')
              if (glow) glow.style.background = sc.glow
              if (cta)  { cta.style.opacity = '0';  cta.style.transform = 'translateY(8px)' }
            }}
          >
            {/* 背景图片 */}
            <div className="absolute inset-0" style={{
              backgroundImage: `url(${sc.bgImage})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
            }} />

            {/* 深色蒙层，保证文字可读 */}
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.72) 100%)',
            }} />

            {/* Glow layer */}
            <div className="sc-glow absolute inset-0" style={{ background: sc.glow, transition: 'background 0.5s' }} />


            {/* Large number */}
            <span className="absolute font-display" style={{ top: '2rem', right: '2rem', fontSize: '6rem', color: 'rgba(255,255,255,0.04)', lineHeight: 1 }}>
              {sc.num}
            </span>

            {/* Bottom content */}
            <div className="relative" style={{ zIndex: 2, padding: '2.5rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.75) 60%)' }}>
              <span className="font-ui inline-block" style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', border: `1px solid ${sc.badgeBorder}`, color: sc.badgeColor, padding: '0.25rem 0.65rem', marginBottom: '1rem' }}>
                {sc.badge}
              </span>
              <div className="flex flex-wrap" style={{ gap: '0.5rem', marginBottom: '1rem' }}>
                {sc.tags.map((t) => (
                  <span key={t} className="font-ui" style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.08)', color: 'rgba(245,242,236,0.5)', padding: '0.2rem 0.5rem' }}>
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="font-display" style={{ fontSize: '3.5rem', lineHeight: 0.95, letterSpacing: '-0.01em', marginBottom: '0.75rem', whiteSpace: 'pre-line' }}>
                {sc.title}
              </h3>
              <p style={{ fontSize: '0.82rem', lineHeight: 1.65, color: 'rgba(245,242,236,0.55)', marginBottom: '1.5rem' }}>
                {sc.desc}
              </p>
              <span className="sc-cta font-ui flex items-center" style={{ gap: '0.5rem', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-acid)', opacity: 0, transform: 'translateY(8px)', transition: 'opacity 0.3s, transform 0.3s' }}>
                探索{sc.id === 'night' ? '夜跑' : sc.id === 'trail' ? '徒步' : '飞盘'}装备 →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
