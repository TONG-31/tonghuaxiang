import { siteConfig } from '../config'
import DoodleFrame from './DoodleFrame'

// 每张照片轻微倾斜，保留“随手贴”的手绘感（一排 2 张，共 5 排）
const rots = [-1.8, 1.6, 1.2, -1.4, -2, 1.8, 1.4, -1.6, -1.2, 1.8]

export default function PhotographySection() {
  const { photos } = siteConfig

  return (
    <div>
      <header className="sec-head">
        <span className="sec-head__en">{photos.en}</span>
        <h2 className="sec-head__title">{photos.title}</h2>
        <p className="sec-head__desc">{photos.desc} —— 都是平凡日子里，让我心动的片刻。</p>
      </header>

      <div className="photo-grid">
        {photos.items.map((p, i) => (
          <figure className="photo-item" key={p.src} style={{ '--d': `${(i % 2) * 0.1}s` }}>
            <DoodleFrame seed={i * 13 + 5} rough={i % 2 ? 18 : 14} style={{ transform: `rotate(${rots[i]}deg)` }}>
              <img className="photo-item__img" src={p.src} alt={p.title} style={{ aspectRatio: '4 / 3' }} />
            </DoodleFrame>
            <figcaption className="photo-item__cap">
              <b>✦ {p.title}</b>
              {p.date ? <span>{p.date}</span> : null}
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="sec-note">{photos.note}</p>
    </div>
  )
}