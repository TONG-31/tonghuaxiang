import { useMemo } from 'react'

/* 占位二维码：结构类似真二维码（含三个定位角），后续替换成你的真实微信二维码图片即可 */
export default function FakeQr({ size = 29, seed = 2026 }) {
  const cells = useMemo(() => {
    let a = seed >>> 0
    const rnd = () => {
      a |= 0
      a = (a + 0x6d2b79f5) | 0
      let t = Math.imul(a ^ (a >>> 15), 1 | a)
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
    const grid = []
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const inFinder =
          (x < 8 && y < 8) || (x >= size - 8 && y < 8) || (x < 8 && y >= size - 8)
        grid.push(inFinder ? false : rnd() < 0.46)
      }
    }
    return grid
  }, [size, seed])

  const finder = (fx, fy) => (
    <g key={`${fx}-${fy}`}>
      <rect x={fx} y={fy} width={7} height={7} fill="#fff" />
      <rect x={fx} y={fy} width={7} height={7} fill="none" stroke="#111111" strokeWidth={1} />
      <rect x={fx + 1} y={fy + 1} width={5} height={5} fill="#111111" />
      <rect x={fx + 2} y={fy + 2} width={3} height={3} fill="#fff" />
    </g>
  )

  const rects = []
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = y * size + x
      if (cells[i]) rects.push(<rect key={i} x={x} y={y} width={1} height={1} fill="#111111" />)
    }
  }

  return (
    <svg viewBox={`0 0 ${size} ${size}`} role="img" aria-label="微信二维码（占位）">
      <rect width={size} height={size} fill="#fff" />
      {rects}
      {finder(0, 0)}
      {finder(size - 8, 0)}
      {finder(0, size - 8)}
      <rect x={size / 2 - 1} y={size / 2 - 1} width={2} height={2} fill="#555555" />
    </svg>
  )
}