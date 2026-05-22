/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#050505',
        'electric-blue': '#0066FF',
        'neon-purple': '#9D00FF',
        'cyan': '#00D9FF',
        'soft-white': '#F5F5F5',
      },
      fontFamily: {
        futuristic: ['Space Grotesk', 'sans-serif'],
        modern: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 102, 255, 0.6)',
        'neon-purple': '0 0 20px rgba(157, 0, 255, 0.6)',
        'neon-cyan': '0 0 20px rgba(0, 217, 255, 0.6)',
        'glow': '0 0 40px rgba(0, 102, 255, 0.4)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 102, 255, 0.6)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(0, 102, 255, 0.8)' },
        },
        'rotate-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-neon': 'linear-gradient(135deg, #0066FF, #9D00FF)',
      },
    },
  },
  plugins: [],
}
