'use client'
import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Activity } from '@/lib/gear-data'
import { gearItems } from '@/lib/gear-data'
import NikeByYouBar from '@/components/shared/NikeByYouBar'
import ShopSidebar from '@/components/shop/ShopSidebar'
import ShopProductGrid from '@/components/shop/ShopProductGrid'

const sortOptions = ['推荐', '价格从低到高', '价格从高到低', '最新上架']

function ShopContent() {
  const searchParams = useSearchParams()
  const initActivity = searchParams.get('activity') as Activity | null

  const [active, setActive]           = useState<Activity | 'all'>(initActivity ?? 'all')
  const [showSidebar, setShowSidebar] = useState(true)
  const [sort, setSort]               = useState('推荐')
  const [sortOpen, setSortOpen]       = useState(false)
  const [pickup, setPickup]           = useState(false)
  const [selColors, setSelColors]     = useState<string[]>([])
  const [selMats, setSelMats]         = useState<string[]>([])
  const [selClothing, setSelClothing] = useState<string[]>([])
  const [selFurniture, setSelFurniture] = useState<string[]>([])
  const [openSec, setOpenSec]         = useState<Record<string, boolean>>({
    '运动类型': true, '颜色': false, '材质': false, '衣物': false, '家具': false,
  })

  const visible = gearItems.filter(g => active === 'all' || g.activity === active)
  const toggleSec = (k: string) => setOpenSec(p => ({ ...p, [k]: !p[k] }))

  return (
    <div style={{ minHeight: '100vh', background: '#fff', color: '#111', paddingTop: '5rem' }}>
      <NikeByYouBar />

      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 2rem', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <h1 style={{ fontSize: '1rem', fontWeight: 700 }}>Nike By You ({visible.length})</h1>
          <button onClick={() => setShowSidebar(!showSidebar)}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', color: '#111' }}>
            {showSidebar ? '隐藏筛选' : '显示筛选'}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M4 8h8M6 12h4" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        </div>
        <div style={{ position: 'relative' }}>
          <button onClick={() => setSortOpen(!sortOpen)}
            style={{ fontSize: '0.78rem', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', color: '#111', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            排序 <span style={{ display: 'inline-block', transition: 'transform 0.2s', transform: sortOpen ? 'rotate(180deg)' : 'none' }}>▾</span>
          </button>
          {sortOpen && (
            <div style={{ position: 'absolute', right: 0, top: 'calc(100% + 8px)', background: '#fff', border: '1px solid rgba(0,0,0,0.12)', minWidth: 160, zIndex: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              {sortOptions.map(s => (
                <button key={s} onClick={() => { setSort(s); setSortOpen(false) }}
                  style={{ display: 'block', width: '100%', textAlign: 'left', padding: '0.65rem 1rem', fontSize: '0.78rem', background: s === sort ? '#f5f5f5' : 'none', border: 'none', cursor: 'pointer', fontWeight: s === sort ? 700 : 400, color: '#111' }}>
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sidebar + Grid */}
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        {showSidebar && (
          <ShopSidebar
            openSec={openSec} toggleSec={toggleSec}
            active={active} setActive={setActive}
            pickup={pickup} setPickup={setPickup}
            selColors={selColors} setSelColors={setSelColors}
            selMats={selMats} setSelMats={setSelMats}
            selClothing={selClothing} setSelClothing={setSelClothing}
            selFurniture={selFurniture} setSelFurniture={setSelFurniture}
          />
        )}
        <ShopProductGrid visible={visible} showSidebar={showSidebar} />
      </div>
    </div>
  )
}

export default function ShopPage() {
  return (
    <Suspense>
      <ShopContent />
    </Suspense>
  )
}
