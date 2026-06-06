'use client'
import { useRef } from 'react'
import { gearItems } from '@/lib/gear-data'

const featuredPrices = ['¥ 588', '¥ 468', '¥ 528', '¥ 328', '¥ 488']

export default function GearFeaturedScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    if (!scrollRef.current) return
    const card = scrollRef.current.firstElementChild as HTMLElement
    const step = card ? card.offsetWidth + 24 : 400
    scrollRef.current.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <div style={{ paddingBottom: '5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '3rem 5rem 2rem' }}>
        <h2 style={{ fontSize: 'clamp(18px,2vw,26px)', fontWeight: 700, letterSpacing: '-0.01em', color: '#111' }}>精选款式</h2>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {(['←', '→'] as const).map((arrow, i) => (
            <button key={arrow} onClick={() => scroll(i === 0 ? -1 : 1)}
              style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(0,0,0,0.15)', background: 'rgba(0,0,0,0.04)', color: '#111', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.09)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.04)')}>
              {arrow}
            </button>
          ))}
        </div>
      </div>

      <div ref={scrollRef}
        style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingLeft: '3rem', paddingBottom: '1rem' }}
        className="featured-scroll">
        {gearItems.map((item, idx) => (
          <div key={item.id}
            style={{ flexShrink: 0, width: 'clamp(260px,30vw,380px)', scrollSnapAlign: 'start', cursor: 'pointer', borderLeft: '1px solid rgba(0,0,0,0.08)' }}
            className="group">
            <div style={{ aspectRatio: '1/1', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: '1rem' }}>
              <span className="group-hover:scale-105 transition-transform duration-500 block select-none"
                style={{ fontSize: '7rem', opacity: 0.88 }}>
                {item.emoji}
              </span>
            </div>
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: '0.2rem', lineHeight: 1.3, color: '#111' }}>{item.name}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(0,0,0,0.42)', marginBottom: '0.5rem', lineHeight: 1.4 }}>{item.description}</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111' }}>{featuredPrices[idx]}</div>
            </div>
          </div>
        ))}
        <div style={{ flexShrink: 0, width: '3rem' }} />
      </div>
      <style>{`.featured-scroll::-webkit-scrollbar{display:none}`}</style>
    </div>
  )
}
