'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const events = [
  { date: '每月第一个周末', title: '城市夜跑\n搭子集结', desc: '召集城市里的宠物夜跑搭子，共同完成 5km 城市夜跑路线。REPAW 反光装备统一亮相，用速度与光影书写「Do It Together」的城市故事。', meta: [{ label: '时间', value: '每月首周六 20:00' }, { label: '地点', value: '城市中央公园' }, { label: '参与', value: '开放报名' }] },
  { date: '季度徒步', title: '山野搭子\n联合行动', desc: '每季度组织一次郊野徒步，宠物与主人共同挑战 10km 山野路线，专业向导全程陪同，REPAW 山野系列装备全套体验。', meta: [{ label: '难度', value: '初级友好' }, { label: '距离', value: '8–12 km' }] },
  { date: '双周飞盘', title: '飞盘搭子\n草坪派对', desc: '每两周一次的草坪飞盘聚会，专业教练教授飞盘技巧，宠物参与趣味飞盘接盘挑战，享受最纯粹的运动快乐。', meta: [{ label: '地点', value: '指定草坪' }, { label: '装备', value: '免费体验' }] },
  { date: '每月第三个周日', title: 'DIY\n工作坊', desc: '带上你的废弃衣物，来工作坊现场与 REPAW 设计师一起完成属于你和宠物的专属拼贴定制服。从材料挑选到图案剪裁，亲手为毛孩子打造独一无二的运动装备。', meta: [{ label: '时间', value: '每月第三周日 14:00' }, { label: '人数', value: '限额 20 组' }, { label: '材料', value: '自带废弃布料' }] },
]

export default function CommunitySection() {
  return (
    <section id="community" style={{ background: '#0D0D0F', padding: '8rem 3rem' }}>
      <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
        <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>运动社群</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(45px,7vw,95px)', lineHeight: 1, marginBottom: '1.5rem' }}>
          一起出发<br />不止装备
        </h2>
        <p style={{ fontSize: '0.97rem', fontWeight: 300, lineHeight: 1.85, color: 'rgba(245,242,236,0.55)', maxWidth: 520, marginBottom: '4rem' }}>
          REPAW 社群定期组织线下运动活动，连接每一对「主人 + 宠物」的运动团队，让 Do It Together 成为真实的生活场景。
        </p>
      </motion.div>

      <div style={{ display: 'flex', gap: 2, overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: '0.5rem', marginInline: '-3rem', paddingInline: '3rem' }}
        className="community-scroll">
        {events.map((ev, i) => (
          <motion.div key={i}
            style={{ flexShrink: 0, width: 'clamp(300px, 38vw, 480px)', scrollSnapAlign: 'start', border: '1px solid rgba(255,255,255,0.06)', padding: '2.5rem', background: i === 0 ? 'rgba(200,255,0,0.04)' : 'transparent', transition: 'all 0.3s', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(200,255,0,0.25)'; e.currentTarget.style.background = 'rgba(200,255,0,0.03)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = i === 0 ? 'rgba(200,255,0,0.04)' : 'transparent'; }}>
            <div>
              <div className="font-display flex items-center gap-3" style={{ fontSize: '0.95rem', letterSpacing: '0.15em', color: 'var(--color-acid)', marginBottom: '1rem' }}>
                <span style={{ width: 20, height: 1, background: 'rgba(200,255,0,0.5)', display: 'block' }} />{ev.date}
              </div>
              <h3 className="font-display" style={{ fontSize: '2.2rem', lineHeight: 1, marginBottom: '1rem', whiteSpace: 'pre-line' }}>{ev.title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'rgba(245,242,236,0.45)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{ev.desc}</p>
            </div>
            <div className="flex gap-6 flex-wrap">
              {ev.meta.map((m) => (
                <div key={m.label} className="font-ui" style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.4)' }}>
                  {m.label} <span style={{ color: 'var(--color-acid)' }}>{m.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`.community-scroll::-webkit-scrollbar{height:2px}.community-scroll::-webkit-scrollbar-track{background:rgba(255,255,255,0.04)}.community-scroll::-webkit-scrollbar-thumb{background:rgba(200,255,0,0.3)}`}</style>

      <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link href="/community" className="font-ui no-underline hover:-translate-y-0.5 transition-transform inline-block"
          style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.9rem 2rem', background: 'var(--color-acid)', color: 'var(--color-site-black)' }}>
          查看全部活动 + 线下空间 →
        </Link>
        <Link href="/community" className="font-ui no-underline"
          style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.35)', transition: 'color 0.2s' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-site-white)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,242,236,0.35)')}>
          在线报名活动 ↗
        </Link>
      </div>
    </section>
  )
}
