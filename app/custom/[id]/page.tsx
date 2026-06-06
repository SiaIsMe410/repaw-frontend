'use client'
import { useState, useRef } from 'react'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { gearItems } from '@/lib/gear-data'
import Link from 'next/link'
import NikeByYouBar from '@/components/shared/NikeByYouBar'
import StepBar from '@/components/custom/StepBar'
import UploadArea from '@/components/custom/UploadArea'

const catBreeds = ['英短', '美短', '蓝猫', '橘猫', '布偶', '暹罗', '波斯猫', '缅因猫', '其他']
const dogBreeds = ['金毛', '边牧', '柯基', '泰迪', '法斗', '拉布拉多', '哈士奇', '萨摩耶', '其他']
const sizes     = ['XS', 'S', 'M', 'L', 'XL']
const sizeHint  = 'XS: <3kg · S: 3–6kg · M: 6–12kg · L: 12–20kg · XL: 20kg+'

const colorMap: Record<string, { hex: string; name: string }[]> = {
  night: [
    { hex: '#1a1a2e', name: '深夜黑' }, { hex: '#0f3460', name: '午夜蓝' },
    { hex: '#533483', name: '星空紫' }, { hex: '#8ab4f8', name: '晨光蓝' },
    { hex: '#c8e6ff', name: '霜白' },
  ],
  trail: [
    { hex: '#1a3a1a', name: '森林深绿' }, { hex: '#2d6a00', name: '苔绿' },
    { hex: '#52c41a', name: '嫩绿' }, { hex: '#c8b560', name: '卡其' },
    { hex: '#d4b896', name: '沙色' },
  ],
  frisbee: [
    { hex: '#7f2a00', name: '烈焰橙' }, { hex: '#d46b08', name: '琥珀' },
    { hex: '#fa8c16', name: '金橙' }, { hex: '#ffd591', name: '金黄' },
    { hex: '#fff3cd', name: '奶白' },
  ],
}

const priceMap: Record<string, string> = {
  'reflective-vest': '¥ 588', 'trail-boots': '¥ 468',
  'sport-harness': '¥ 528', 'led-collar': '¥ 328', 'trail-pack': '¥ 488',
}

export default function ProductCustomPage() {
  const params  = useParams()
  const product = gearItems.find(g => g.id === (params?.id as string))

  const [step, setStep]               = useState(1)
  const [petType, setPetType]         = useState<'cat' | 'dog' | null>(null)
  const [breed, setBreed]             = useState('')
  const [size, setSize]               = useState('')
  const [colorIdx, setColorIdx]       = useState(0)
  const [clothingImg, setClothingImg] = useState<string | null>(null)
  const [petImg, setPetImg]           = useState<string | null>(null)
  const [ordered, setOrdered]         = useState(false)

  const clothingRef = useRef<HTMLInputElement>(null)
  const petImgRef   = useRef<HTMLInputElement>(null)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>, set: (s: string) => void) => {
    const file = e.target.files?.[0]
    if (file) set(URL.createObjectURL(file))
  }

  if (!product) {
    return (
      <div style={{ minHeight: '100vh', background: '#fff', paddingTop: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
        <p style={{ color: 'rgba(0,0,0,0.5)' }}>找不到该产品</p>
        <Link href="/shop" style={{ color: '#111', fontWeight: 700 }}>← 返回商店</Link>
      </div>
    )
  }

  const colors = colorMap[product.activity] ?? colorMap.night
  const price  = priceMap[product.id] ?? '¥ 488'

  if (ordered) {
    return (
      <div style={{ minHeight: '100vh', background: '#fff', paddingTop: '5rem' }}>
        <NikeByYouBar />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', flexDirection: 'column', gap: '1.5rem', textAlign: 'center', padding: '3rem 2rem' }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
              <path d="M2 12l8 8L26 2" stroke="#c8ff00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,36px)', fontWeight: 700 }}>下单成功！</h2>
          <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.95rem', maxWidth: 380, lineHeight: 1.7 }}>
            你的专属 {product.name} 已进入制作流程，以 Nike 废料为原材料，预计 7–14 天送达。
          </p>
          <div style={{ padding: '1.5rem 2rem', background: '#f5f5f5', textAlign: 'left', maxWidth: 320, width: '100%' }}>
            <div style={{ fontSize: '0.68rem', color: 'rgba(0,0,0,0.4)', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>订单摘要</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{product.name}</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{price}</span>
            </div>
            <div style={{ fontSize: '0.78rem', color: 'rgba(0,0,0,0.45)', lineHeight: 1.6 }}>
              尺寸 {size} · {petType === 'cat' ? '小猫' : '小狗'} {breed && `· ${breed}`}<br />
              颜色：{colors[colorIdx].name}
            </div>
          </div>
          <Link href="/shop" className="no-underline font-ui"
            style={{ padding: '0.9rem 2.5rem', background: '#111', color: '#fff', borderRadius: 100, fontSize: '0.85rem', fontWeight: 700 }}>
            继续购物
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#fff', color: '#111', paddingTop: '5rem' }}>
      <NikeByYouBar />

      <AnimatePresence mode="wait">
        {step === 1 ? (
          /* ── Step 1: 宠物信息 ── */
          <motion.div key="step1"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            style={{ maxWidth: 560, margin: '0 auto', padding: '3rem 2rem 6rem' }}>
            <StepBar step={1} />

            <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', marginBottom: '0.4rem' }}>{product.activityLabel}</div>
            <h1 style={{ fontSize: 'clamp(20px,2.8vw,30px)', fontWeight: 700, marginBottom: '2.5rem' }}>{product.name} — 个性定制</h1>

            {/* 宠物类型 */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.75rem' }}>宠物类型</div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {[{ v: 'cat' as const, label: '小猫', emoji: '🐱' }, { v: 'dog' as const, label: '小狗', emoji: '🐶' }].map(t => (
                  <button key={t.v} onClick={() => { setPetType(t.v); setBreed('') }}
                    style={{ flex: 1, padding: '1.25rem 1rem', border: `2px solid ${petType === t.v ? '#111' : 'rgba(0,0,0,0.12)'}`, background: petType === t.v ? '#111' : '#fff', color: petType === t.v ? '#fff' : '#111', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', transition: 'all 0.2s', borderRadius: 4 }}>
                    <span style={{ fontSize: '2rem' }}>{t.emoji}</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 品种 */}
            {petType && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.75rem' }}>宠物品种</div>
                <input type="text" value={breed} onChange={e => setBreed(e.target.value)}
                  placeholder="输入品种名称，或从下方选择..."
                  style={{ width: '100%', padding: '0.65rem 1rem', border: `1.5px solid ${breed ? '#111' : 'rgba(0,0,0,0.15)'}`, fontSize: '0.85rem', outline: 'none', borderRadius: 4, marginBottom: '0.75rem', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#111')}
                  onBlur={e => (e.currentTarget.style.borderColor = breed ? '#111' : 'rgba(0,0,0,0.15)')} />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {(petType === 'cat' ? catBreeds : dogBreeds).map(b => (
                    <button key={b} onClick={() => setBreed(b)}
                      style={{ padding: '0.38rem 0.85rem', border: `1.5px solid ${breed === b ? '#111' : 'rgba(0,0,0,0.15)'}`, background: breed === b ? '#111' : '#fff', color: breed === b ? '#fff' : '#111', cursor: 'pointer', fontSize: '0.78rem', fontWeight: breed === b ? 700 : 400, borderRadius: 100, transition: 'all 0.2s' }}>
                      {b}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 尺寸 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.75rem' }}>产品尺寸</div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {sizes.map(s => (
                  <button key={s} onClick={() => setSize(s)}
                    style={{ flex: 1, padding: '0.65rem 0', border: `1.5px solid ${size === s ? '#111' : 'rgba(0,0,0,0.15)'}`, background: size === s ? '#111' : '#fff', color: size === s ? '#fff' : '#111', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 700, borderRadius: 4, transition: 'all 0.2s' }}>
                    {s}
                  </button>
                ))}
              </div>
              <p style={{ fontSize: '0.7rem', color: 'rgba(0,0,0,0.38)', marginTop: '0.5rem' }}>{sizeHint}</p>
            </div>

            <button onClick={() => petType && size && setStep(2)} disabled={!petType || !size}
              style={{ width: '100%', padding: '1rem', background: petType && size ? '#111' : 'rgba(0,0,0,0.08)', color: petType && size ? '#fff' : 'rgba(0,0,0,0.28)', border: 'none', cursor: petType && size ? 'pointer' : 'default', fontSize: '0.88rem', fontWeight: 700, borderRadius: 100, transition: 'all 0.2s' }}>
              下一步 → 开始定制设计
            </button>
          </motion.div>
        ) : (
          /* ── Step 2: 定制设计 ── */
          <motion.div key="step2"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', minHeight: 'calc(100vh - 10rem)', alignItems: 'flex-start' }}>

            {/* 左侧：选项 */}
            <div style={{ flex: '0 0 480px', maxWidth: 480, padding: '2.5rem 2rem 5rem 3rem', overflowY: 'auto' }}>
              <StepBar step={2} />
              <h2 style={{ fontSize: 'clamp(18px,2.2vw,26px)', fontWeight: 700, marginBottom: '2.5rem' }}>{product.name}</h2>

              {/* 颜色 */}
              <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem' }}>颜色</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(0,0,0,0.4)', marginBottom: '1rem' }}>已选：{colors[colorIdx].name}</div>
                <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                  {colors.map((c, ci) => (
                    <button key={ci} onClick={() => setColorIdx(ci)}
                      style={{ width: 38, height: 38, borderRadius: '50%', background: c.hex, border: '1.5px solid rgba(0,0,0,0.12)', cursor: 'pointer', boxShadow: ci === colorIdx ? '0 0 0 2px #fff, 0 0 0 4px #111' : 'none', transition: 'box-shadow 0.15s' }} />
                  ))}
                </div>
              </div>

              {/* 上传废弃衣物 */}
              <input ref={clothingRef} type="file" accept="image/*" style={{ display: 'none' }}
                onChange={e => handleFile(e, setClothingImg)} />
              <UploadArea label="上传废弃衣物" hint="你的废弃布料将成为这件装备的原材料"
                icon="👕" imgSrc={clothingImg} onClick={() => clothingRef.current?.click()} />

              {/* 上传宠物照片 */}
              <input ref={petImgRef} type="file" accept="image/*" style={{ display: 'none' }}
                onChange={e => handleFile(e, setPetImg)} />
              <UploadArea label="上传宠物照片" hint="AI 将根据照片生成你家宠物的专属效果图"
                icon={petType === 'cat' ? '🐱' : '🐶'} imgSrc={petImg} onClick={() => petImgRef.current?.click()} />

              <button onClick={() => setStep(1)}
                style={{ fontSize: '0.78rem', color: 'rgba(0,0,0,0.4)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textDecoration: 'underline', marginTop: '0.5rem' }}>
                ← 返回修改宠物信息
              </button>
            </div>

            {/* 右侧：预览 + 下单 */}
            <div style={{ flex: 1, flexShrink: 0, borderLeft: '1px solid rgba(0,0,0,0.08)', padding: '2.5rem 2.5rem', position: 'sticky', top: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', marginBottom: '1rem' }}>效果预览</div>

              <div style={{ aspectRatio: '1/1', background: colors[colorIdx].hex + '1a', border: `1.5px solid ${colors[colorIdx].hex}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', position: 'relative', overflow: 'hidden' }}>
                <span style={{ fontSize: '6.5rem', userSelect: 'none' }}>{product.emoji}</span>
                {petImg && (
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.55)', padding: '0.4rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <img src={petImg} alt="" style={{ width: 28, height: 28, objectFit: 'cover', borderRadius: '50%' }} />
                    <span style={{ fontSize: '0.65rem', color: '#fff', fontWeight: 600 }}>AI 渲染效果图</span>
                  </div>
                )}
                {!petImg && (
                  <div style={{ position: 'absolute', bottom: '0.6rem', right: '0.75rem', fontSize: '0.62rem', color: 'rgba(0,0,0,0.3)', fontWeight: 600 }}>上传照片后生成效果图</div>
                )}
              </div>

              <div style={{ marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.38)', marginBottom: '0.3rem' }}>{product.activityLabel}</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.2rem' }}>{product.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(0,0,0,0.42)', lineHeight: 1.5, marginBottom: '0.75rem' }}>{product.description}</div>
                <div style={{ fontSize: '0.73rem', color: 'rgba(0,0,0,0.45)', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <span>颜色：{colors[colorIdx].name}</span>
                  <span>尺寸：{size}</span>
                  <span>{petType === 'cat' ? '🐱' : '🐶'} {breed || '未选品种'}</span>
                </div>
              </div>

              <div style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.5rem' }}>{price}</div>

              <button onClick={() => setOrdered(true)}
                style={{ width: '100%', padding: '1rem', background: '#111', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 700, borderRadius: 100, marginBottom: '0.75rem', transition: 'opacity 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                一键下单
              </button>
              <p style={{ fontSize: '0.68rem', color: 'rgba(0,0,0,0.32)', textAlign: 'center', lineHeight: 1.6 }}>
                以 Nike 废料再生为原材料<br />预计 7–14 天送达
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
