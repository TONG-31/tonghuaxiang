import { useEffect, useRef, useState } from 'react'

// 元素进入视口时触发一次，返回 [ref, inView]
export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px', ...options },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, inView]
}