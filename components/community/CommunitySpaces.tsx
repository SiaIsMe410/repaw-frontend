'use client'
import { motion } from 'framer-motion'

const spaces = [
  { city: '上海', name: 'REPAW 上海旗舰空间', address: '静安区南京西路 1038 号', hours: '周一至周日 10:00–21:00', tags: ['跑步机', '装备试穿', 'DIY 工作台'] },
  { city: '北京', name: 'REPAW 北京体验中心', address: '朝阳区三里屯太古里南区 B1', hours: '周二至周日 11:00–20:00', tags: ['宠物友好', '飞盘草坪', '装备试穿'] },
  { city: '深圳', name: 'REPAW 深圳社区站', address: '南山区海岸城购物中心 3F', hours: '周一至周六 10:00–21:00', tags: ['DIY 工作台', '装备试穿', '社群活动'] },
  { city: '成都', name: 'REPAW 成都生活空间', address: '锦江区东大街 158 号', hours: '周二至周日 10:00–20:00', tags: ['宠物友好', 'DIY 工作台', '跑步机'] },
]

export default function CommunitySpaces() {
  return (
    <div style={{ paddingInline: '3rem', paddingTop: '5rem', paddingBottom: '6rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <motion.h2 className="font-display" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', marginBottom: '0.75rem' }}
        initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        线下体验空间
      </motion.h2>
      <motion.p style={{ fontSize: '0.9rem', color: 'rgba(245,242,236,0.4)', marginBottom: '3rem' }}
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }}>
        前往附近的 REPAW 体验空间，试穿装备、参加工作坊，或预约专属的宠物运动咨询。
      </motion.p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 2 }}>
        {spaces.map((sp, i) => (
          <motion.div key={sp.city}
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', padding: '2rem', transition: 'all 0.3s' }}
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(200,255,0,0.25)'; e.currentTarget.style.background = 'rgba(200,255,0,0.03)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)' }}>
            <div className="font-ui" style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-acid)', marginBottom: '0.75rem' }}>{sp.city}</div>
            <h3 className="font-ui" style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{sp.name}</h3>
            <p style={{ fontSize: '0.78rem', color: 'rgba(245,242,236,0.4)', marginBottom: '0.35rem' }}>{sp.address}</p>
            <p style={{ fontSize: '0.72rem', color: 'rgba(245,242,236,0.28)', marginBottom: '1.25rem' }}>{sp.hours}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {sp.tags.map((t) => (
                <span key={t} className="font-ui" style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.08em', padding: '0.2rem 0.6rem', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(245,242,236,0.45)' }}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
