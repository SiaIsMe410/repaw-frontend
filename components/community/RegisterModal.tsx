'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface Event {
  id: string
  date: string
  title: string
  color: string
}

interface Props {
  event: Event
  onClose: () => void
}

export default function RegisterModal({ event, onClose }: Props) {
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', pet: '' })

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
      onClick={onClose}>
      <motion.div initial={{ opacity: 0, y: 32, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: 'var(--color-site-black)', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem', width: '100%', maxWidth: 480 }}
        onClick={(e) => e.stopPropagation()}>

        {done ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
            <p className="font-display" style={{ fontSize: '1.6rem', color: 'var(--color-acid)', marginBottom: '0.75rem' }}>报名成功</p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(245,242,236,0.45)', lineHeight: 1.7, marginBottom: '2rem' }}>
              我们会在活动前 2 天通过短信发送详细集合地点与注意事项。
            </p>
            <button onClick={onClose} className="font-ui"
              style={{ background: 'var(--color-acid)', color: 'var(--color-site-black)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', border: 'none', cursor: 'pointer' }}>
              关闭
            </button>
          </div>
        ) : (
          <>
            <div style={{ borderLeft: `3px solid ${event.color}`, paddingLeft: '1rem', marginBottom: '2rem' }}>
              <div className="font-ui" style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.4)', marginBottom: '0.3rem' }}>{event.date}</div>
              <div className="font-display" style={{ fontSize: '1.4rem', lineHeight: 1.1 }}>{event.title}</div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setDone(true) }} noValidate>
              {[
                { key: 'name', label: '姓名', placeholder: '你的姓名' },
                { key: 'phone', label: '手机号', placeholder: '活动通知联系号码' },
                { key: 'pet', label: '宠物品种', placeholder: '例：边境牧羊犬、布偶猫' },
              ].map((f) => (
                <div key={f.key} style={{ marginBottom: '1rem' }}>
                  <label className="font-ui" style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.35)', display: 'block', marginBottom: '0.5rem' }}>{f.label}</label>
                  <input required type="text" placeholder={f.placeholder}
                    value={form[f.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: 'var(--color-site-white)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', padding: '0.85rem 1rem', outline: 'none', transition: 'border-color 0.2s' }}
                    onFocus={(e) => (e.target.style.borderColor = event.color)}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')} />
                </div>
              ))}
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button type="submit" className="font-ui"
                  style={{ flex: 1, background: event.color, color: 'var(--color-site-black)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.9rem', border: 'none', cursor: 'pointer' }}>
                  确认报名 →
                </button>
                <button type="button" onClick={onClose} className="font-ui"
                  style={{ padding: '0.9rem 1.2rem', border: '1px solid rgba(255,255,255,0.15)', background: 'transparent', color: 'rgba(245,242,236,0.5)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>
                  取消
                </button>
              </div>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}
