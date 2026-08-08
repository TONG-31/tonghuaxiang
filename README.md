# 桐花巷的小站 · 摄影作品集 & 明信片贩卖

一名普通女大学生的个人网站：黑白灰线条涂鸦 · 波点元素 · PC 端（版心 1700px）。

## 功能

- **欢迎区（Hero）**：欢迎语、自我介绍依次动态出现，手绘相机涂鸦 + 手写体标题
- **摄影作品集**：大标题卡片，点击展开，10 张照片「一排 2 张 × 5 排」网格，每张用「不规则手绘线条」全包裹
- **明信片介绍**：大标题卡片，点击展开；主位展示一套 8 张同版式明信片（手绘线条包裹），下方为「购买渠道」→ 箭头 → 微信二维码

## 运行

```bash
# 需要 Node.js 18+ 与 pnpm
pnpm install
pnpm dev        # 开发预览：http://localhost:5173
pnpm build      # 生产构建
pnpm preview    # 预览构建产物
```

## 目录结构

```
├─ public/
│  ├─ photos/        # 摄影作品图片（当前为占位 SVG，替换为同名真实照片即可）
│  ├─ postcards/     # 明信片图片（同上）
│  └─ favicon.svg
├─ src/
│  ├─ config.js      # ★ 个人信息集中配置（名字、介绍、微信号、标题文案）
│  ├─ App.jsx
│  ├─ components/
│  │  ├─ DoodleFrame.jsx    # ★ 不规则手绘线条包裹容器
│  │  ├─ Hero.jsx           # 欢迎区
│  │  ├─ CollectionCards.jsx# 两个大标题入口卡片
│  │  ├─ PhotographySection.jsx
│  │  ├─ PostcardSection.jsx
│  │  ├─ FakeQr.jsx         # 占位二维码（换成真实二维码图片即可）
│  │  ├─ DotsBackground.jsx # 漂浮波点背景
│  │  └─ ...
│  └─ styles/global.css     # 设计系统（配色、动画、布局）
```

## 如何替换成你自己的内容

1. **文字/微信号/定价**：全部在 `src/config.js` 一个文件里改（名字、简介、`wechatId` 微信号、`price` 价格、照片/明信片标题）。
2. **摄影作品**：10 张照片放进 `public/photos/`（`photo-1` ~ `photo-10`，可 jpg/png，改 config 里的 src 路径），标题/日期在 config 的 `photos.items` 改。
3. **明信片**：一套 8 张放进 `public/postcards/`（`postcard-1` ~ `postcard-8`），名字/标签在 config 的 `postcards.items` 改。
4. **微信二维码**：把真实二维码图片放到 `public/`（如 `wechat-qr.png`），在 `PostcardSection.jsx` 中把 `<FakeQr />` 换成 `<img src="/wechat-qr.png" alt="微信二维码" />`。
5. **风格**：全局配色/字体/动画集中在 `src/styles/global.css` 顶部的 `:root` 变量。

## 预览截图

见 `outputs/preview/`。