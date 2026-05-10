export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        background: '#050505',
        surface: '#0d0d0d',
        surfaceHover: '#141414',
        border: '#1f1f1f',
        primary: '#39ff14', // Electric green
        primaryDim: 'rgba(57, 255, 20, 0.1)',
        textMain: '#ffffff',
        textMuted: '#888888',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
