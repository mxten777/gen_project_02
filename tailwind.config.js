module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        premium: {
          // CSS 변수 기반 다이내믹 컬러
          bg: 'var(--background)',
          'bg-secondary': 'var(--background-secondary)',
          primary: 'var(--primary)',
          'primary-hover': 'var(--primary-hover)',
          accent: 'var(--accent)',
          'accent-hover': 'var(--accent-hover)',
          card: 'var(--surface)',
          surface: 'var(--surface)',
          'surface-secondary': 'var(--surface-secondary)',
          border: 'var(--border)',
          'border-secondary': 'var(--border-secondary)',
          text: 'var(--foreground)',
          'text-secondary': 'var(--foreground-secondary)',
          muted: 'var(--foreground-muted)',
          success: 'var(--success)',
          warning: 'var(--warning)',
          error: 'var(--error)',
          info: 'var(--info)'
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // 프리미엄 그림자
        'premium-sm': '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        'premium': '0 4px 16px 0 rgba(15, 23, 42, 0.08)',
        'premium-md': '0 8px 32px 0 rgba(15, 23, 42, 0.12)',
        'premium-lg': '0 16px 64px 0 rgba(15, 23, 42, 0.16)',
        'premium-xl': '0 24px 96px 0 rgba(15, 23, 42, 0.20)',
        // 카드 그림자
        'card': '0 2px 8px 0 rgba(15, 23, 42, 0.04)',
        'card-hover': '0 4px 16px 0 rgba(15, 23, 42, 0.08)',
        // 글로우 효과
        'glow': '0 0 20px 0 rgba(249, 115, 22, 0.3)',
        'glow-accent': '0 0 32px 0 rgba(249, 115, 22, 0.4)',
      },
      backgroundImage: {
        // 프리미엄 그래디언트
        'gradient-premium': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        'gradient-accent': 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
        'gradient-success': 'linear-gradient(135deg, #22C55E 0%, #34D399 100%)',
        'gradient-card': 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
        // 미묘한 패턴
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.02"/%3E%3C/svg%3E")',
      },
      borderRadius: {
        premium: '1rem',
        card: '0.75rem',
      },
      spacing: {
        premium: '2rem',
        card: '1.5rem',
      },
    },
  },
  plugins: [],
};