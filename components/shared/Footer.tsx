'use client'
import Link from 'next/link'

const cols = [
  { title: '装备', links: [{ label: '夜跑系列', href: '/gear' }, { label: '徒步系列', href: '/gear' }, { label: '飞盘系列', href: '/gear' }, { label: '定制专区', href: '/custom' }] },
  { title: '社群', links: [{ label: '夜跑集结', href: '/#community' }, { label: '山野行动', href: '/#community' }, { label: '飞盘派对', href: '/#community' }, { label: '加入社群', href: '/#community' }] },
  { title: '关于', links: [{ label: '品牌理念', href: '/#manifesto' }, { label: '可持续承诺', href: '/#impact' }, { label: 'ESG 报告', href: '#' }, { label: '联系我们', href: '#' }] },
]

const socials = [
  { label: '微', title: '微博' },
  { label: '信', title: '微信' },
  { label: '红', title: '小红书' },
  { label: '音', title: '抖音' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-site-black)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '5rem 3rem 2rem' }}>
      {/* 2fr 1fr 1fr 1fr grid — matches demo */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
        {/* Brand column */}
        <div>
          <div className="font-display" style={{ fontSize: '2.5rem', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
            RE<span style={{ color: 'var(--color-acid)' }}>PAW</span>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'rgba(245,242,236,0.35)', lineHeight: 1.7, maxWidth: 260, marginBottom: '2rem' }}>
            与宠物一起 Do It Together。夜跑、徒步、飞盘，每一个运动场景都因你的搭子而完整。
          </p>
          {/* Social buttons */}
          <div className="flex" style={{ gap: '0.75rem' }}>
            {socials.map((s) => (
              <a key={s.label} href="#" title={s.title}
                className="font-ui flex items-center justify-center transition-all"
                style={{ width: 34, height: 34, border: '1px solid rgba(255,255,255,0.12)', fontSize: '0.85rem', textDecoration: 'none', color: 'rgba(245,242,236,0.5)', transition: 'border-color 0.2s, color 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-acid)'; e.currentTarget.style.color = 'var(--color-acid)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(245,242,236,0.5)' }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {cols.map((col) => (
          <div key={col.title}>
            <h5 className="font-ui" style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.28)', marginBottom: '1.5rem' }}>
              {col.title}
            </h5>
            <ul className="flex flex-col list-none" style={{ gap: '0.75rem' }}>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} style={{ fontSize: '0.83rem', color: 'rgba(245,242,236,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-site-white)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,242,236,0.5)')}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-between items-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2rem', fontSize: '0.73rem', color: 'rgba(245,242,236,0.22)', gap: '1rem' }}>
        <span>© 2026 REPAW · Nike 运动基因 × 宠物搭子</span>
        <span className="font-ui inline-flex items-center gap-2" style={{ fontSize: '0.68rem', letterSpacing: '0.1em', color: 'rgba(200,255,0,0.6)' }}>♻ 废料再生 · 一起运动 · 一起舒适</span>
        <span>滕玥 · 陆睿 · 刘馨阳 · 吴柔影 · 毛文越 · 张昆鹏</span>
      </div>
    </footer>
  )
}
