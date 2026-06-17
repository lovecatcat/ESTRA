/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ESTRA 深色编辑风格设计令牌
        bg: {
          primary: '#262423',   // 页面主背景
          elevated: '#302E2D', // 悬浮面板
          card: '#1C1B1A',     // 卡片背景
        },
        accent: {
          DEFAULT: '#DDD4C1',  // 暖石色 — 标题 / 强调文字
          muted: '#A9A294',    // 次级暖石 — dim 文字
        },
        border: {
          DEFAULT: 'rgba(221,212,193,0.15)',
          strong: 'rgba(221,212,193,0.30)',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'DM Sans', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      fontSize: {
        'act-label': ['7px', { lineHeight: '8.2px', letterSpacing: '0.05em', fontWeight: '500' }],
        'hero': ['50px', { lineHeight: '54px', fontWeight: '500' }],
        'hero-sub': ['24px', { lineHeight: '26px' }],
      },
      spacing: {
        'nav': '48px',
      },
    },
  },
  plugins: [],
}
