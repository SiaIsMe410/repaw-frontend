'use client'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const links = [
  { href: '/',            label: '首页' },
  { href: '/#manifesto',  label: '理念' },
  { href: '/#scenarios',  label: '运动场景' },
  { href: '/#custom',     label: '定制' },
  { href: '/#community',  label: '社群' },
  { href: '/#recycle',    label: '回收' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const pathname = usePathname()
  const forceDark = pathname === '/gear' || pathname === '/shop' || pathname.startsWith('/custom/')
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 80)
      if (forceDark) setHidden(y > 80)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [forceDark])

  const dark = forceDark || scrolled

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{
        padding: '1.5rem 3rem',
        background: dark ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: dark ? 'blur(12px)' : 'none',
        borderBottom: dark ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.35s ease, background 0.3s, backdrop-filter 0.3s',
      }}
    >
      <Link href="/" className="font-display no-underline" style={{ fontSize: '2rem', letterSpacing: '0.1em', color: 'var(--color-site-white)', position: 'relative', zIndex: 1 }}>
        RE<span style={{ color: 'var(--color-acid)' }}>PAW</span>
      </Link>

      <ul className="hidden md:flex list-none" style={{ gap: '2.5rem' }}>
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="font-ui no-underline"
              style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-site-white)', opacity: 0.65, transition: 'opacity 0.2s', display: 'block' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.65')}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center">
        <Link
          href="/gear"
          className="font-ui no-underline"
          style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'var(--color-acid)', color: 'var(--color-site-black)', padding: '0.55rem 1.2rem', transition: 'all 0.2s' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#d4ff1a'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-acid)'; e.currentTarget.style.transform = '' }}
        >
          Nike By You
        </Link>
      </div>
    </nav>
  )
}
