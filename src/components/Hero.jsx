import { siteConfig } from '../config'
import { Star, SquiggleUnderline, CameraDoodle } from './Deco'

export default function Hero() {
  const scrollToCards = () => {
    document.getElementById('cards')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="top">
      <div className="hero__inner container">
        <span className="hero__badge reveal-item" style={{ '--d': '0.15s' }}>
          <Star />
          {siteConfig.badge}
        </span>

        <h1 className="hero__title reveal-item" style={{ '--d': '0.4s' }}>
          你好，我是
          <span className="hero__name">{siteConfig.name}</span>
          <SquiggleUnderline className="hero__underline" />
        </h1>

        <p className="hero__en reveal-item" style={{ '--d': '0.65s' }}>
          {siteConfig.nameEn} · a girl who loves life &amp; photography
        </p>

        <p className="hero__intro reveal-item" style={{ '--d': '0.85s' }}>
          {siteConfig.intro.map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>

        <div className="hero__actions reveal-item" style={{ '--d': '1.1s' }}>
          <button className="btn btn--solid" onClick={scrollToCards}>看看我的摄影 ✦</button>
          <button className="btn btn--ghost" onClick={scrollToCards}>逛逛明信片</button>
        </div>

        <CameraDoodle className="hero__camera reveal-item" style={{ '--d': '1.35s' }} />
      </div>

      <div className="hero__scrollhint">
        scroll
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4 v12 m-5 -5 l5 5 5 -5" />
        </svg>
      </div>
    </section>
  )
}