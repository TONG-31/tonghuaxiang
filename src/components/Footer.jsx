import { siteConfig } from '../config'
import { Sparkle } from './Deco'

export default function Footer() {
  return (
    <footer className="footer container">
      <p className="footer__hand">
        <Sparkle style={{ marginRight: 8 }} />
        {siteConfig.footer}
        <Sparkle style={{ marginLeft: 8 }} />
      </p>
      <p className="footer__meta">
        {siteConfig.copyright} · 用 React + Vite 认真搭建 · 感谢你的来访
      </p>
    </footer>
  )
}