'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const notices = [
  {
    title: '线上预约回收',
    body: '在网站提交回收申请，填写品牌、品类与数量；我们安排上门取件或就近寄送回收袋。',
  },
  {
    title: '指定回收点',
    body: '可前往合作门店、社区回收站或快递点投递 Nike 旧衣与生产废料，现场获得回收凭证。',
  },
  {
    title: '回收要求',
    body: '旧衣须保持清洁、干燥、无严重破损，不收潮湿、污染或含大量金属配件的纺织品。',
  },
]

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
})

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: '1px solid rgba(255,255,255,0.12)',
  color: 'var(--color-site-white)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9rem',
  padding: '0.9rem 1rem',
  outline: 'none',
  transition: 'border-color 0.2s',
}

export default function RecycleSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', type: '', qty: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="recycle" style={{ background: 'var(--color-site-black)', padding: '8rem 3rem', '--eyebrow-line': 'rgba(255,255,255,0.15)', '--eyebrow-line-opacity': '1' } as React.CSSProperties}>
      <motion.p className="eyebrow" style={{ color: 'rgba(245,242,236,0.35)', marginBottom: '1.5rem' }} {...fadeUp(0)}>旧衣回收</motion.p>
      <motion.h2 className="font-display" style={{ fontSize: 'clamp(48px,7vw,100px)', lineHeight: 0.93, marginBottom: '1.5rem' }} {...fadeUp(0.08)}>
        让废料<br /><span style={{ color: 'var(--color-acid)' }}>重新出发</span>
      </motion.h2>
      <motion.p style={{ fontSize: '0.97rem', fontWeight: 300, lineHeight: 1.85, color: 'rgba(245,242,236,0.45)', maxWidth: 520, marginBottom: '4rem' }} {...fadeUp(0.15)}>
        我们提供线上回收预约与指定回收点两种渠道，支持 Nike 运动服饰与面料废料回收。请确保旧衣干净、无明显异味，并按分类提交，便于后续再生处理。
      </motion.p>

      {/* 须知卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 1, background: 'rgba(255,255,255,0.06)', marginBottom: '5rem' }}>
        {notices.map((n, i) => (
          <motion.div key={n.title} style={{ padding: '2rem 2rem', background: 'var(--color-site-black)', borderTop: '2px solid transparent', transition: 'border-color 0.3s' }}
            {...fadeUp(0.2 + i * 0.08)}
            onMouseEnter={(e) => (e.currentTarget.style.borderTopColor = 'var(--color-acid)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderTopColor = 'transparent')}>
            <h3 className="font-ui" style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-site-white)' }}>{n.title}</h3>
            <p style={{ fontSize: '0.82rem', color: 'rgba(245,242,236,0.45)', lineHeight: 1.7 }}>{n.body}</p>
          </motion.div>
        ))}
      </div>

      {/* 预约表单 */}
      <motion.div style={{ maxWidth: 640, border: '1px solid rgba(255,255,255,0.08)', padding: '2.5rem' }} {...fadeUp(0.3)}>
        <h3 className="font-ui" style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.5)', marginBottom: '2rem' }}>
          线上预约回收
        </h3>

        {submitted ? (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', padding: '2.5rem 0' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
            <p className="font-display" style={{ fontSize: '1.8rem', color: 'var(--color-acid)', marginBottom: '0.75rem' }}>预约已提交</p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(245,242,236,0.45)', lineHeight: 1.7 }}>
              我们将在 1–2 个工作日内联系你确认取件安排。感谢你的回收行动。
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label className="font-ui" style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.35)', display: 'block', marginBottom: '0.6rem' }}>姓名</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="你的姓名" style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-acid)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')} />
              </div>
              <div>
                <label className="font-ui" style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.35)', display: 'block', marginBottom: '0.6rem' }}>联系电话</label>
                <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="手机号码" style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-acid)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1rem', marginBottom: '1.75rem' }}>
              <div>
                <label className="font-ui" style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.35)', display: 'block', marginBottom: '0.6rem' }}>衣物类型</label>
                <input type="text" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                  placeholder="例：Nike 运动 T恤、卫衣、面料废料" style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-acid)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')} />
              </div>
              <div>
                <label className="font-ui" style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.35)', display: 'block', marginBottom: '0.6rem' }}>数量 (件)</label>
                <input type="number" min="1" value={form.qty} onChange={(e) => setForm({ ...form, qty: e.target.value })}
                  placeholder="预计回收件数" style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-acid)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')} />
              </div>
            </div>
            <button type="submit" className="font-ui hover:-translate-y-0.5 transition-transform"
              style={{ background: 'var(--color-acid)', color: 'var(--color-site-black)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '1rem 2.5rem', border: 'none', cursor: 'pointer' }}>
              提交预约 →
            </button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
