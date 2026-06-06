interface Props {
  label: string
  hint: string
  icon: string
  imgSrc: string | null
  onClick: () => void
}

export default function UploadArea({ label, hint, icon, imgSrc, onClick }: Props) {
  return (
    <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
      <div style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem' }}>{label}</div>
      <div style={{ fontSize: '0.72rem', color: 'rgba(0,0,0,0.4)', marginBottom: '0.85rem' }}>{hint}</div>
      <div onClick={onClick}
        style={{ border: `2px dashed ${imgSrc ? '#111' : 'rgba(0,0,0,0.15)'}`, minHeight: 110, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', background: imgSrc ? '#fafafa' : 'transparent', transition: 'border-color 0.2s', padding: '1rem' }}>
        {imgSrc ? (
          <img src={imgSrc} alt="" style={{ maxHeight: 130, maxWidth: '100%', objectFit: 'contain' }} />
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>{icon}</div>
            <div style={{ fontSize: '0.78rem', fontWeight: 600 }}>点击上传图片</div>
            <div style={{ fontSize: '0.68rem', color: 'rgba(0,0,0,0.35)', marginTop: '0.2rem' }}>支持 JPG / PNG</div>
          </div>
        )}
      </div>
    </div>
  )
}
