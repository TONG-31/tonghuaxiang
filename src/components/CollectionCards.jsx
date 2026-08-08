import { useInView } from '../hooks/useInView'
import { siteConfig } from '../config'
import DoodleFrame from './DoodleFrame'

export default function CollectionCards({ onOpen }) {
  const [ref, inView] = useInView()
  const inCls = inView ? 'is-in' : ''

  return (
    <section className="cards container" id="cards">
      <div ref={ref} className="cards__grid">
        {/* 摄影作品集卡片 */}
        <div className={`reveal ${inCls}`} style={{ '--d': '0s' }}>
          <DoodleFrame seed={11} rough={20}>
            <button
              className="entry-card"
              onClick={() => onOpen('photos')}
              aria-label="打开摄影作品集"
            >
              <span className="entry-card__kicker">photography</span>
              <h2 className="entry-card__title">{siteConfig.photos.title}</h2>
              <p className="entry-card__desc">{siteConfig.photos.desc}</p>
              <div className="entry-card__thumb mini-grid">
                <img src="/photos/photo-1.jpg" alt="晴天与单车" />
                <img src="/photos/photo-3.jpg" alt="夏日的海" />
                <img src="/photos/photo-5.jpg" alt="窗台的花" />
              </div>
              <span className="entry-card__open">点我打开 ✦</span>
            </button>
          </DoodleFrame>
        </div>

        {/* 明信片卡片 */}
        <div className={`reveal ${inCls}`} style={{ '--d': '0.18s' }}>
          <DoodleFrame seed={29} rough={18}>
            <button
              className="entry-card"
              onClick={() => onOpen('postcards')}
              aria-label="打开明信片介绍"
            >
              <span className="entry-card__kicker">postcards · for sale</span>
              <h2 className="entry-card__title">{siteConfig.postcards.title}</h2>
              <p className="entry-card__desc">{siteConfig.postcards.desc}</p>
              <div className="entry-card__thumb mini-postcard">
                <img src="/postcards/postcard-1.svg" alt="海边的风明信片" />
              </div>
              <span className="entry-card__open">点我打开 ✦</span>
            </button>
          </DoodleFrame>
        </div>
      </div>
    </section>
  )
}