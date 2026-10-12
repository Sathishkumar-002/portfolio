/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0B1120',
        card: '#111827',
        'card-border': '#1E293B',
        primary: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
          light: '#60A5FA',
          glow: 'rgba(59, 130, 246, 0.4)',
        },
        secondary: {
          DEFAULT: '#38BDF8',
          hover: '#0EA5E9',
        },
        accent: {
          DEFAULT: '#06B6D4',
          hover: '#0891B2',
          glow: 'rgba(6, 182, 212, 0.4)',
        },
        aws: {
          orange: '#FF9900',
          squid: '#232F3E',
        },
        devops: {
          blue: '#2496ED',
          purple: '#844FBA',
          green: '#22C55E',
        },
        text: {
          DEFAULT: '#F9FAFB',
          muted: '#9CA3AF',
          dim: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient-x': 'gradientX 15s ease infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(15px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        gradientX: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        'grid-pattern': "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
