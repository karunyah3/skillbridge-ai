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
        brand: {
          50: '#f0f4ff',
          100: '#dbe4fe',
          200: '#bfd0fe',
          300: '#93b1fd',
          400: '#608bfb',
          500: '#3b66f6',
          600: '#2547eb',
          700: '#1d34d8',
          800: '#1e2cb0',
          900: '#1e298a',
          950: '#171c54',
        },
        cyber: {
          cyan: '#00f2fe',
          blue: '#4facfe',
          purple: '#7928ca',
          pink: '#ff0080',
          emerald: '#10b981',
          amber: '#f59e0b',
        },
        dark: {
          bg: '#0a0d18',
          surface: '#111728',
          card: '#161f36',
          border: '#232f4f',
          muted: '#64748b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(59, 102, 246, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 242, 254, 0.6)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(20, 27, 45, 0.95) 0%, rgba(10, 13, 24, 0.98) 100%)',
        'cyber-gradient': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'accent-gradient': 'linear-gradient(135deg, #7928ca 0%, #ff0080 100%)',
      }
    },
  },
  plugins: [],
}
