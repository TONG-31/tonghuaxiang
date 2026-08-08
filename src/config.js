// ============================================================
//  桐花巷小站 · 个人配置（改这里就行）
//  - 名字 / 介绍 / 微信号 / 价格
//  - 摄影作品：public/photos 里的图片 + 下面 photos.items 的 标题/日期
//  - 明信片：public/postcards 里的图片 + 下面 postcards.items 的 名字/标签
// ============================================================

export const siteConfig = {
  name: '桐花巷',
  nameEn: 'tong hua xiang',
  badge: 'hi ～ 欢迎来到桐花巷',
  intro: [
    '一名普通的女大学生，热爱生活，热爱摄影。',
    '喜欢用相机收藏路边、窗边、海边的每个小瞬间，',
    '也喜欢把喜欢的照片做成明信片，寄给远方的你。',
  ],

  // ---------- 摄影作品集（10 张 = 一排 2 张 × 5 排） ----------
  photos: {
    title: '摄影作品集',
    en: 'photography',
    desc: '生活里随手捕捉的小瞬间',
    note: '更多照片整理中，敬请期待 ✦',
    items: [
      { src: '/photos/photo-1.jpg', title: '生活碎片 01', date: '' },
      { src: '/photos/photo-2.jpg', title: '生活碎片 02', date: '' },
      { src: '/photos/photo-3.jpg', title: '生活碎片 03', date: '' },
      { src: '/photos/photo-4.jpg', title: '生活碎片 04', date: '' },
      { src: '/photos/photo-5.jpg', title: '生活碎片 05', date: '' },
      { src: '/photos/photo-6.jpg', title: '生活碎片 06', date: '' },
      { src: '/photos/photo-7.jpg', title: '生活碎片 07', date: '' },
      { src: '/photos/photo-8.jpg', title: '生活碎片 08', date: '' },
      { src: '/photos/photo-9.jpg', title: '生活碎片 09', date: '' },
      { src: '/photos/photo-10.jpg', title: '生活碎片 10', date: '' },
    ],
  },

  // ---------- 明信片（2 张真实 + 6 张空白待补充 = 一套 8 张） ----------
  postcards: {
    title: '明信片贩卖中',
    en: 'postcards · for sale',
    desc: '一套 8 张，都是我的照片，亲手排版、亲笔写下祝福',
    price: '价格待定',
    priceNote: '定价中，敬请期待 ✦ 也可以告诉我你想写的祝福语',
    items: [
      { src: '/postcards/postcard-1.jpg', name: '明信片·01', tag: '新品' },
      { src: '/postcards/postcard-2.jpg', name: '明信片·02', tag: '新品' },
      { src: '/postcards/postcard-3.svg', name: '敬请期待', tag: '' },
      { src: '/postcards/postcard-4.svg', name: '敬请期待', tag: '' },
      { src: '/postcards/postcard-5.svg', name: '敬请期待', tag: '' },
      { src: '/postcards/postcard-6.svg', name: '敬请期待', tag: '' },
      { src: '/postcards/postcard-7.svg', name: '敬请期待', tag: '' },
      { src: '/postcards/postcard-8.svg', name: '敬请期待', tag: '' },
    ],
  },

  // ---------- 购买渠道 ----------
  purchase: {
    label: '购买渠道',
    wechatId: 'Happiness080301',
    hint: '微信扫码添加我，或搜索微信号添加，备注「明信片」更方便我找到你哦～',
  },

  footer: '摄影 · 明信片 · 生活',
  copyright: '© 2026 桐花巷',
}