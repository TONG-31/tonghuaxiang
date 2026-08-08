// 一组手绘小装饰 SVG

export function Star({ size = 18, style }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} style={style} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 l2.2 5.6 6 .5 -4.6 3.9 1.5 5.9 -5.1-3.2 -5.1 3.2 1.5-5.9 -4.6-3.9 6-.5 Z" />
    </svg>
  )
}

export function Sparkle({ size = 16, style }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} style={style} fill="currentColor" aria-hidden="true">
      <path d="M12 0 C13 6 18 11 24 12 C18 13 13 18 12 24 C11 18 6 13 0 12 C6 11 11 6 12 0 Z" />
    </svg>
  )
}

export function CameraDoodle({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 220 160" fill="none" stroke="#111111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path className="cam-line cam-line-1" pathLength={1} d="M58 52 h-14 a8 8 0 0 0 -8 8 v52 a8 8 0 0 0 8 8 h136 a8 8 0 0 0 8 -8 v-52 a8 8 0 0 0 -8 -8 h-14 l-8 -14 a8 8 0 0 0 -7 -4 h-72 a8 8 0 0 0 -7 4 Z" />
      <circle className="cam-line cam-line-2" pathLength={1} cx="112" cy="88" r="28" />
      <circle className="cam-line cam-line-2" pathLength={1} cx="112" cy="88" r="13" fill="#cfcfcf" fillOpacity="0.55" />
      <path className="cam-line cam-line-3" pathLength={1} d="M172 60 l6 -10" />
      <path className="cam-line cam-line-3" pathLength={1} d="M66 40 l-8 12" />
      <path className="cam-line cam-line-3" pathLength={1} d="M40 78 l12 -2" />
    </svg>
  )
}

export function ArrowDoodles({ className }) {
  // 三条指向右方的手绘箭头，动画逐条画出
  return (
    <svg className={className} viewBox="0 0 170 150" fill="none" stroke="#111111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path className="arrow-line" pathLength={1} d="M8 30 C 60 16 100 22 138 44" />
      <path className="arrow-line arrow-line--2" pathLength={1} d="M8 78 C 58 66 96 72 132 90" />
      <path className="arrow-line arrow-line--3" pathLength={1} d="M10 122 C 50 108 90 112 128 128" />
      <g stroke="#111111" strokeWidth="4.4">
        <path className="arrow-head" d="M138 44 l-14 -2 m14 2 l-8 12" />
        <path className="arrow-head" d="M132 90 l-14 -3 m14 3 l-7 13" />
        <path className="arrow-head" d="M128 128 l-13 -5 m13 5 l-5 13" />
      </g>
    </svg>
  )
}

export function SquiggleUnderline({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true">
      <path pathLength={1} d="M4 14 C 24 4 40 18 60 10 S 96 16 116 8 S 156 14 196 8" />
    </svg>
  )
}