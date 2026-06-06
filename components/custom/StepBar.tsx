interface Props {
  step: number
}

export default function StepBar({ step }: Props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem' }}>
      {[{ n: '01', label: '宠物信息' }, { n: '02', label: '定制设计' }].map((s, i) => (
        <div key={s.n} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {i > 0 && <div style={{ width: 28, height: 1, background: 'rgba(0,0,0,0.18)' }} />}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', opacity: step === i + 1 ? 1 : 0.38 }}>
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: step === i + 1 ? '#111' : 'transparent', border: '1.5px solid #111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.6rem', fontWeight: 700, color: step === i + 1 ? '#fff' : '#111' }}>{s.n}</span>
            </div>
            <span style={{ fontSize: '0.78rem', fontWeight: step === i + 1 ? 700 : 400 }}>{s.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
