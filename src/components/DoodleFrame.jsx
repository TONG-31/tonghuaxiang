import { useMemo } from 'react'
import { useInView } from '../hooks/useInView'
import './DoodleFrame.css'

/* 简单的确定性随机数，保证每次渲染出的涂鸦都一样 */
function mulberry32(seed) {
  let a = seed >>> 0
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/* 生成一条“手绘”的波浪形闭合路径 */
function wobblyPath(w, h, seed, rough) {
  const rnd = mulberry32(seed)
  const pts = []
  const jitter = (n) => (rnd() - 0.5) * n

  const edges = [
    [0, 0, w, 0],
    [w, 0, w, h],
    [w, h, 0, h],
    [0, h, 0, 0],
  ]
  const seg = 3 // 每条边中间的抖动点数
  for (const [x1, y1, x2, y2] of edges) {
    pts.push([x1 + jitter(rough), y1 + jitter(rough)])
    for (let i = 1; i <= seg; i++) {
      const t = i / (seg + 1)
      pts.push([x1 + (x2 - x1) * t + jitter(rough), y1 + (y2 - y1) * t + jitter(rough)])
    }
  }

  // Catmull-Rom 转三次贝塞尔，得到平滑闭合曲线
  let d = `M ${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`
  for (let i = 0; i < pts.length; i++) {
    const p0 = pts[(i - 1 + pts.length) % pts.length]
    const p1 = pts[i]
    const p2 = pts[(i + 1) % pts.length]
    const p3 = pts[(i + 2) % pts.length]
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`
  }
  return d + ' Z'
}

/**
 * 不规则线条全包裹容器：给任意内容套上一层“手绘波浪线”边框，
 * 入场时线条会像被画出来一样逐段出现。
 */
export default function DoodleFrame({
  children,
  seed = 1,
  rough = 16,
  className = '',
  style,
  draw = true,
  forceIn = false,
}) {
  const [ref, inView] = useInView()
  const W = 400
  const H = 300

  const main = useMemo(() => wobblyPath(W, H, seed, rough), [seed, rough])
  const soft = useMemo(() => wobblyPath(W, H, seed + 97, rough - 4), [seed, rough])

  return (
    <div
      ref={ref}
      className={`doodle-frame ${inView || forceIn ? 'is-in' : ''} ${className}`}
      style={style}
    >
      <svg
        className="doodle-frame__svg"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path className="df-line df-line--soft" d={soft} pathLength={1} />
        <path className="df-line df-line--main" d={main} pathLength={1} />
        {/* 角落的小装饰：波点 + 小星星 */}
        <g className="df-deco">
          <circle cx={W * 0.06} cy={H * 0.055} r={3} />
          <circle cx={W * 0.93} cy={H * 0.08} r={2.4} />
          <circle cx={W * 0.9} cy={H * 0.94} r={3.2} />
          <circle cx={W * 0.08} cy={H * 0.92} r={2} />
          <path d={`M ${W * 0.955} ${H * 0.04} l 2 4 4 2 -4 2 -2 4 -2 -4 -4 -2 4 -2 Z`} />
          <path d={`M ${W * 0.03} ${H * 0.72} l 1.6 3.2 3.2 1.6 -3.2 1.6 -1.6 3.2 -1.6 -3.2 -3.2 -1.6 3.2 -1.6 Z`} />
        </g>
      </svg>
      <div className="doodle-frame__content" style={{ padding: 16 }}>{children}</div>
    </div>
  )
}