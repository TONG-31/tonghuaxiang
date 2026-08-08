import { siteConfig } from '../config'
import DoodleFrame from './DoodleFrame'
import { ArrowDoodles, Sparkle } from './Deco'

export default function PostcardSection() {
  const { postcards, purchase } = siteConfig

  return (
    <div>
      <header className="sec-head">
        <span className="sec-head__en">{postcards.en}</span>
        <h2 className="sec-head__title">{postcards.title}</h2>
        <p className="sec-head__desc">{postcards.desc}，把温柔装进信封寄给你。</p>
      </header>

      {/* 主要位置：一套 8 张明信片 */}
      <div className="postcards__grid">
        {postcards.items.map((p, i) => (
          <div className="postcard-item" key={p.src}>
            <DoodleFrame seed={i * 17 + 3} rough={i % 2 ? 16 : 12} forceIn>
              <img src={p.src} alt={p.name} />
            </DoodleFrame>
            <span className="postcard-item__meta">
              {p.name}
              {p.tag ? <em className="postcard-item__tag">{p.tag}</em> : null}
            </span>
          </div>
        ))}
      </div>

      <p className="postcards__price">
        {postcards.price}
        <small>{postcards.priceNote}</small>
      </p>

      {/* 购买渠道：微信二维码 */}
      <div className="purchase">
        <div className="purchase__text">
          <span className="purchase__label">
            <Sparkle />
            {purchase.label}
            <Sparkle />
          </span>
          <p className="purchase__sub">
            微信扫码添加我，或直接搜索微信号
            <br />
            <b>{purchase.wechatId}</b>
          </p>
          <p className="purchase__hint">{purchase.hint}</p>
        </div>

        <div className="purchase__arrows">
          <ArrowDoodles />
        </div>

        <div className="purchase__qr">
          <div className="qr-box">
            <DoodleFrame seed={55} rough={18} forceIn style={{ background: '#fff' }}>
              <img src="/wechat-qr.jpg" alt="微信二维码" />
            </DoodleFrame>
          </div>
          <p className="purchase__qr-tip">
            长按识别 · 添加好友
          </p>
        </div>
      </div>
    </div>
  )
}