'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const paths = [
  {
    num: '01',
    type: 'DIY 剪裁',
    title: '你的布料，我们的版型',
    body: '我们将旧衣裁切成半成品寄回你手中，附赠设计版型图，自己动手剪裁拼接成宠物装备——每一刀都是你的故事延续。',
    tag: '低门槛 · 高参与度',
    img: '/版型.png',
    cardBg: 'rgba(255,255,255,0.05)',
  },
  {
    num: '02',
    type: '废料重生',
    title: '废料做骨，旧衣做芯',
    body: '以Nike工厂边角废料制成宠物垫、玩具外壳等半成品，用户自行填充喜欢的内芯材质，赋予废料第二次完整的生命。',
    tag: '零废料 · 可持续',
    img: '/家具.png',
    cardBg: 'rgba(0,0,0,0.3)',
  },
  {
    num: '03',
    type: '线下体验',
    title: '线下工坊，手工定制',
    body: '将废旧衣物带到线下合作手工坊，在引导下亲手制作宠物玩具、项圈配件等，体验从衣物到装备的完整制作旅程。',
    tag: '体验感 · 社群连接',
    img: '/线下空间.png',
    cardBg: 'rgba(255,255,255,0.05)',
  },
  {
    num: '04',
    type: '高端定制',
    title: '小众定制，精品寄回',
    body: '衣物邮寄过来，完成从拆解、设计到制作的全流程高端个性化定制。小众限量，每件作品附有完整生命周期可视化档案。',
    tag: '稀缺 · 价值留存 · 价格最高',
    img: '/高端.png',
    cardBg: 'rgba(0,0,0,0.3)',
    premium: true,
  },
]

const lifecycleStages = ['收件', '鉴定', '拆解', '设计', '制作', '品检', '交付', '档案']

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

function LifecycleBar() {
  return (
    <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
      <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.75rem' }}>生命周期追踪</p>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0 }}>
        {lifecycleStages.map((s, i) => (
          <div key={s} style={{ display: 'flex', alignItems: 'flex-start', flex: 1 }}>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-acid)', margin: '0 auto 5px' }} />
              <span style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.04em', display: 'block' }}>{s}</span>
            </div>
            {i < lifecycleStages.length - 1 && (
              <div style={{ height: 1, flex: 1, background: 'rgba(200,255,0,0.3)', marginTop: '2px' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function WorkshopSection() {
  return (
    <section id="custom" className="relative overflow-hidden"
      style={{ background: 'var(--color-rust)', color: 'var(--color-site-white)', padding: '8rem 3rem' }}>

      <span className="absolute pointer-events-none select-none font-display leading-none"
        style={{ top: '-1.5rem', right: '-2rem', fontSize: '22vw', color: 'rgba(255,255,255,0.05)' }}>YOURS</span>

      {/* 标题区 */}
      <div className="relative" style={{ marginBottom: '4rem' }}>
        <motion.p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }} {...fadeUp(0)}>
          专属定制
        </motion.p>
        <motion.h2 className="font-display" style={{ fontSize: 'clamp(45px,7vw,95px)', lineHeight: 1, marginBottom: '1.5rem' }} {...fadeUp(0.1)}>
          旧衣服的<br /><span style={{ color: 'var(--color-acid)' }}>4 个走向</span>
        </motion.h2>
        <motion.p style={{ maxWidth: 520, fontSize: '0.97rem', fontWeight: 300, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)' }} {...fadeUp(0.2)}>
          一件旧衣物，可以有四种不同的归宿。选择你与它的关系——亲自动手，还是交给匠人？就地重生，还是永久留存？
        </motion.p>
      </div>

      {/* 4 个走向卡片 */}
      <div className="relative grid grid-cols-1 md:grid-cols-2" style={{ gap: '3px' }}>
        {paths.map((p, i) => (
          <motion.div key={p.num} {...fadeUp(0.1 + i * 0.1)}
            className="relative overflow-hidden group"
            style={{ background: p.cardBg, minHeight: 380 }}>

            {/* 背景图 */}
            <div className="absolute inset-0 pointer-events-none transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.6 }} />
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(160deg, transparent 30%, rgba(0,0,0,0.65) 100%)' }} />

            <div className="relative" style={{ padding: '2rem 2rem 2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>

              {/* 顶部：编号 + 类型标签 */}
              <div className="flex items-start justify-between" style={{ marginBottom: 'auto' }}>
                <span className="font-display" style={{ fontSize: '4rem', lineHeight: 1, color: 'var(--color-acid)', opacity: 0.85 }}>{p.num}</span>
                <span className="font-ui" style={{
                  fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                  background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
                  padding: '0.3rem 0.7rem', color: 'rgba(255,255,255,0.65)',
                }}>{p.type}</span>
              </div>

              {/* 底部：生命周期（高端专属）+ 标题 + 正文 + 标签 */}
              <div style={{ paddingTop: '2.5rem' }}>
                {p.premium && <LifecycleBar />}
                <h3 className="font-display" style={{ fontSize: 'clamp(22px,2.2vw,30px)', lineHeight: 1.2, marginBottom: '0.75rem', marginTop: p.premium ? '1.25rem' : 0 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.82rem', fontWeight: 300, lineHeight: 1.72, color: 'rgba(255,255,255,0.52)', marginBottom: '1rem' }}>
                  {p.body}
                </p>
                <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-acid)' }}>
                  {p.tag}
                </span>
              </div>
            </div>

            {/* hover 边框高亮 */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ border: '1px solid rgba(200,255,0,0.25)' }} />
          </motion.div>
        ))}
      </div>

      {/* 底部 CTA */}
      <motion.div className="flex items-center" style={{ marginTop: '4rem', gap: '2rem' }} {...fadeUp(0.5)}>
        <Link href="/gear" className="inline-flex items-center gap-3 no-underline font-ui font-bold tracking-[0.12em] uppercase hover:-translate-y-0.5 transition-transform"
          style={{ background: 'var(--color-acid)', color: 'var(--color-site-black)', fontSize: '0.82rem', padding: '1rem 2rem' }}>
          选择你的定制路径 →
        </Link>
        <span className="font-ui" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}>
          每条路径都是一次循环的开始
        </span>
      </motion.div>

    </section>
  )
}
