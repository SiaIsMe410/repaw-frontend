const items = [
  'DO IT TOGETHER','夜跑搭子','NIGHT RUN','徒步拍档',
  'TRAIL HIKE','飞盘追逐','FRISBEE TIME','一起运动','一起舒适','MOVE TOGETHER',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div style={{ background: 'var(--color-acid)', color: 'var(--color-site-black)', overflow: 'hidden', whiteSpace: 'nowrap', padding: '0.7rem 0' }}>
      <div className="inline-flex" style={{ animation: 'ticker 28s linear infinite' }}>
        {doubled.map((item, i) => (
          <span key={i} className="font-display inline-block" style={{ fontSize: '1rem', letterSpacing: '0.12em', padding: '0 2.5rem' }}>
            {item}
            <span style={{ display: 'inline-block', width: 5, height: 5, background: 'rgba(10,10,10,0.4)', borderRadius: '50%', margin: '0 0.5rem', verticalAlign: 'middle' }} />
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  )
}
