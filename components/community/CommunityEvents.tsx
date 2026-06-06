'use client'
import { motion } from 'framer-motion'

export const events = [
  {
    id: 'night-run',
    date: '每月首周六 20:00',
    tag: '城市夜跑',
    title: '城市夜跑搭子集结',
    desc: '召集城市里的宠物夜跑搭子，共同完成 5km 城市夜跑路线。REPAW 反光装备统一亮相，用速度与光影书写「Do It Together」的城市故事。',
    meta: [{ label: '地点', value: '城市中央公园' }, { label: '参与', value: '开放报名' }, { label: '装备', value: '反光系列' }],
    color: '#C8FF00',
  },
  {
    id: 'hiking',
    date: '每季度首月第三周日',
    tag: '山野徒步',
    title: '山野搭子联合行动',
    desc: '每季度组织一次郊野徒步，宠物与主人共同挑战 10km 山野路线，专业向导全程陪同，REPAW 山野系列装备全套体验。',
    meta: [{ label: '难度', value: '初级友好' }, { label: '距离', value: '8–12 km' }, { label: '装备', value: '山野系列' }],
    color: '#7EC8A4',
  },
  {
    id: 'frisbee',
    date: '每两周一次 周六 15:00',
    tag: '草坪飞盘',
    title: '飞盘搭子草坪派对',
    desc: '每两周一次的草坪飞盘聚会，专业教练教授飞盘技巧，宠物参与趣味飞盘接盘挑战，享受最纯粹的运动快乐。',
    meta: [{ label: '地点', value: '指定草坪' }, { label: '装备', value: '免费体验' }, { label: '难度', value: '全年龄友好' }],
    color: '#FF6B35',
  },
  {
    id: 'diy',
    date: '每月第三周日 14:00',
    tag: 'DIY 工作坊',
    title: 'DIY 工作坊',
    desc: '带上你的废弃衣物，来工作坊现场与 REPAW 设计师一起完成属于你和宠物的专属拼贴定制服。从材料挑选到图案剪裁，亲手为毛孩子打造独一无二的运动装备。',
    meta: [{ label: '人数', value: '限额 20 组' }, { label: '材料', value: '自带废弃布料' }, { label: '费用', value: '免费参与' }],
    color: '#C8FF00',
  },
]

interface Props {
  onRegister: (event: typeof events[0]) => void
}

export default function CommunityEvents({ onRegister }: Props) {
  return (
    <div style={{ paddingInline: '3rem', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <motion.h2 className="font-display" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', marginBottom: '3rem' }}
        initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        线上报名活动
      </motion.h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 2 }}>
        {events.map((ev, i) => (
          <motion.div key={ev.id}
            style={{ border: '1px solid rgba(255,255,255,0.06)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.5rem', transition: 'border-color 0.3s' }}
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}>
            <div>
              <div className="font-ui" style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: ev.color, marginBottom: '0.5rem' }}>{ev.tag}</div>
              <div className="font-ui" style={{ fontSize: '0.7rem', color: 'rgba(245,242,236,0.3)', marginBottom: '1rem' }}>{ev.date}</div>
              <h3 className="font-display" style={{ fontSize: '1.8rem', lineHeight: 1.05, marginBottom: '1rem' }}>{ev.title}</h3>
              <p style={{ fontSize: '0.8rem', color: 'rgba(245,242,236,0.45)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{ev.desc}</p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {ev.meta.map((m) => (
                  <div key={m.label} className="font-ui" style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.35)' }}>
                    {m.label} <span style={{ color: ev.color }}>{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => onRegister(ev)} className="font-ui"
              style={{ padding: '0.85rem', background: 'transparent', border: `1px solid ${ev.color}`, color: ev.color, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = ev.color; e.currentTarget.style.color = 'var(--color-site-black)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = ev.color }}>
              立即报名 →
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
