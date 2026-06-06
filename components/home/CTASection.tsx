import Link from 'next/link'

export default function CTASection() {
  return (
    <section style={{ background: 'var(--color-acid)', color: 'var(--color-site-black)', textAlign: 'center', padding: '8rem 3rem', position: 'relative', overflow: 'hidden', '--eyebrow-line': 'rgba(10,10,10,0.25)', '--eyebrow-line-opacity': '1' } as React.CSSProperties}>
      {/* Ghost "GO" background text */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display pointer-events-none select-none leading-none whitespace-nowrap"
        style={{ fontSize: '40vw', color: 'rgba(10,10,10,0.04)' }}>
        GO
      </span>

      <div className="relative">
        <p className="eyebrow" style={{ justifyContent: 'center', color: 'rgba(10,10,10,0.4)', marginBottom: '1.5rem', letterSpacing: '0.3em' }}>立即行动</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(60px,10vw,140px)', lineHeight: 0.93, color: 'var(--color-site-black)', marginBottom: '2rem' }}>
          一起<br />出发
        </h2>
        <p style={{ fontSize: '0.97rem', fontWeight: 300, lineHeight: 1.85, color: 'rgba(10,10,10,0.5)', maxWidth: 440, margin: '0 auto 2.5rem' }}>
          它穿着你的记忆，和你站在新的起跑线上。不是因为不得不——是因为你们的故事，还想要第二章。
        </p>
        <Link href="/gear" className="font-ui inline-flex items-center gap-3 no-underline hover:-translate-y-0.5 transition-transform"
          style={{ background: 'var(--color-site-black)', color: 'var(--color-acid)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '1.1rem 2.5rem' }}>
          立即定制装备 →
        </Link>
      </div>
    </section>
  )
}
