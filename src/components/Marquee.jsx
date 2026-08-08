const items = [
  '摄影作品',
  '明信片贩卖中',
  '记录身边的小美好',
  '手写心意 · 邮寄远方',
  '欢迎来找我玩',
  '把温柔寄给你',
]

export default function Marquee() {
  const line = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {line.map((t, i) => (
          <span className="marquee__item" key={i}>
            {t}
            <span className="marquee__dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}