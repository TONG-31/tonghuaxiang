import { useMemo } from 'react'

// 固定铺满全屏的浅紫色波点，缓慢漂浮
export default function DotsBackground({ count = 26 }) {
  const dots = useMemo(() => {
    const rnd = (() => {
      let a = 7
      return () => {
        a = (a * 16807) % 2147483647
        return a / 2147483647
      }
    })()
    const colors = ['#d9d9d9', '#c4c4c4', '#e6e6e6', '#ececec', '#aaaaaa']
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: rnd() * 100,
      top: rnd() * 100,
      size: 6 + rnd() * 22,
      ring: rnd() > 0.55,
      pink: rnd() > 0.82,
      color: colors[Math.floor(rnd() * colors.length)],
      t: 7 + rnd() * 9,
      dl: rnd() * 6,
      o: 0.35 + rnd() * 0.45,
    }))
  }, [count])

  return (
    <div className="dots" aria-hidden="true">
      {dots.map((d) => (
        <span
          key={d.id}
          className={`dots__dot ${d.ring ? 'dots__dot--ring' : 'dots__dot--fill'} ${d.pink ? 'dots__dot--pink' : ''}`}
          style={{
            left: `${Math.min(d.left, 88)}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            '--t': `${d.t}s`,
            '--dl': `${d.dl}s`,
            '--c': d.color,
            opacity: d.o,
          }}
        />
      ))}
    </div>
  )
}