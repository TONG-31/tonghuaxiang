import { useEffect } from 'react'
import PhotographySection from './PhotographySection'
import PostcardSection from './PostcardSection'

export default function Overlay({ active, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = active ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, onClose])

  if (!active) return null

  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay__panel" onClick={(e) => e.stopPropagation()}>
        <button className="overlay__close" onClick={onClose} aria-label="关闭">
          ✕
        </button>
        {active === 'photos' ? <PhotographySection /> : <PostcardSection />}
      </div>
    </div>
  )
}