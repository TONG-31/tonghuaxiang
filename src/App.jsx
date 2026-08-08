import { useCallback, useState } from 'react'
import DotsBackground from './components/DotsBackground'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import CollectionCards from './components/CollectionCards'
import Overlay from './components/Overlay'
import Footer from './components/Footer'

export default function App() {
  const [active, setActive] = useState(null)

  const open = useCallback((id) => setActive(id), [])
  const close = useCallback(() => setActive(null), [])

  return (
    <>
      <DotsBackground />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Marquee />
        <CollectionCards onOpen={open} />
        <Footer />
      </main>
      <Overlay active={active} onClose={close} />
    </>
  )
}