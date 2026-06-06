'use client'
import { Activity } from '@/lib/gear-data'

const colorOptions    = ['#111111', '#3b6fff', '#52c41a', '#fa8c16', '#d4d4d4', '#c8ff00']
const materialOptions = ['再生面料', '防水材质', '透气网布', '速干材料']
const clothingOptions = ['T恤', '卫衣', '外套', '裤子', '连衣裙']
const furnitureOptions = ['椅子', '沙发', '桌子', '收纳架', '地毯']

interface Props {
  openSec: Record<string, boolean>
  toggleSec: (k: string) => void
  active: Activity | 'all'
  setActive: (a: Activity | 'all') => void
  pickup: boolean
  setPickup: (v: boolean) => void
  selColors: string[]
  setSelColors: (c: string[]) => void
  selMats: string[]
  setSelMats: (m: string[]) => void
  selClothing: string[]
  setSelClothing: (c: string[]) => void
  selFurniture: string[]
  setSelFurniture: (f: string[]) => void
}

function Checkbox({ checked, color }: { checked: boolean; color?: string }) {
  return (
    <div style={{ width: 16, height: 16, border: `1.5px solid ${checked ? '#111' : 'rgba(0,0,0,0.25)'}`, background: checked ? '#111' : 'transparent', borderRadius: 3, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {checked && <svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>}
    </div>
  )
}

function SectionHeader({ label, open, onToggle }: { label: string; open: boolean; onToggle: () => void }) {
  return (
    <button onClick={onToggle}
      style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.9rem 1.25rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, color: '#111' }}>
      {label}
      <span style={{ display: 'inline-block', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none', fontSize: '0.7rem' }}>▾</span>
    </button>
  )
}

export default function ShopSidebar({ openSec, toggleSec, active, setActive, pickup, setPickup, selColors, setSelColors, selMats, setSelMats, selClothing, setSelClothing, selFurniture, setSelFurniture }: Props) {
  const toggleArr = <T,>(arr: T[], v: T, set: (a: T[]) => void) =>
    set(arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v])

  return (
    <aside style={{ width: 220, flexShrink: 0, borderRight: '1px solid rgba(0,0,0,0.08)', minHeight: '80vh' }}>
      {/* 线下自取 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.25rem', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>线下自取</span>
        <div onClick={() => setPickup(!pickup)}
          style={{ width: 38, height: 20, borderRadius: 100, background: pickup ? '#111' : '#d4d4d4', position: 'relative', cursor: 'pointer', transition: 'background 0.2s', flexShrink: 0 }}>
          <div style={{ position: 'absolute', width: 16, height: 16, borderRadius: '50%', background: '#fff', top: 2, left: pickup ? 20 : 2, transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
        </div>
      </div>

      {/* 运动类型 */}
      <div style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <SectionHeader label="运动类型" open={openSec['运动类型']} onToggle={() => toggleSec('运动类型')} />
        {openSec['运动类型'] && (
          <div style={{ paddingBottom: '0.75rem' }}>
            {[{ v: 'all' as const, l: '全部' }, { v: 'night' as const, l: '城市夜跑' }, { v: 'trail' as const, l: '山野徒步' }, { v: 'frisbee' as const, l: '草坪飞盘' }].map(t => (
              <div key={t.v} onClick={() => setActive(t.v)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '0.45rem 1.25rem', cursor: 'pointer' }}>
                <Checkbox checked={active === t.v} />
                <span style={{ fontSize: '0.82rem', fontWeight: active === t.v ? 700 : 400 }}>{t.l}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 颜色 */}
      <div style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <SectionHeader label="颜色" open={openSec['颜色']} onToggle={() => toggleSec('颜色')} />
        {openSec['颜色'] && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', padding: '0.25rem 1.25rem 1rem' }}>
            {colorOptions.map(c => (
              <div key={c} onClick={() => toggleArr(selColors, c, setSelColors)}
                style={{ width: 26, height: 26, borderRadius: '50%', background: c, cursor: 'pointer', border: `1.5px solid ${c === '#d4d4d4' ? 'rgba(0,0,0,0.15)' : 'transparent'}`, boxShadow: selColors.includes(c) ? '0 0 0 2px #fff, 0 0 0 3.5px #111' : 'none', transition: 'box-shadow 0.15s' }} />
            ))}
          </div>
        )}
      </div>

      {/* 材质 */}
      <div style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <SectionHeader label="材质" open={openSec['材质']} onToggle={() => toggleSec('材质')} />
        {openSec['材质'] && (
          <div style={{ paddingBottom: '0.75rem' }}>
            {materialOptions.map(m => (
              <div key={m} onClick={() => toggleArr(selMats, m, setSelMats)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '0.45rem 1.25rem', cursor: 'pointer' }}>
                <Checkbox checked={selMats.includes(m)} />
                <span style={{ fontSize: '0.82rem' }}>{m}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 衣物 */}
      <div style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <SectionHeader label="衣物" open={openSec['衣物']} onToggle={() => toggleSec('衣物')} />
        {openSec['衣物'] && (
          <div style={{ paddingBottom: '0.75rem' }}>
            {clothingOptions.map(c => (
              <div key={c} onClick={() => toggleArr(selClothing, c, setSelClothing)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '0.45rem 1.25rem', cursor: 'pointer' }}>
                <Checkbox checked={selClothing.includes(c)} />
                <span style={{ fontSize: '0.82rem' }}>{c}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 家具 */}
      <div style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <SectionHeader label="家具" open={openSec['家具']} onToggle={() => toggleSec('家具')} />
        {openSec['家具'] && (
          <div style={{ paddingBottom: '0.75rem' }}>
            {furnitureOptions.map(f => (
              <div key={f} onClick={() => toggleArr(selFurniture, f, setSelFurniture)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '0.45rem 1.25rem', cursor: 'pointer' }}>
                <Checkbox checked={selFurniture.includes(f)} />
                <span style={{ fontSize: '0.82rem' }}>{f}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  )
}
