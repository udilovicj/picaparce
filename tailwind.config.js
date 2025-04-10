/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'text-slide': 'textSlide 12s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'background-shift': 'backgroundShift 15s ease infinite',
        'glow-pulse': 'glowPulse 8s ease-in-out infinite',
        'pattern-shift': 'patternShift 20s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        textSlide: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-25%)' },
        },
        backgroundShift: {
          '0%, 100%': { 
            'background-position': '0% 50%',
            'filter': 'brightness(1)' 
          },
          '50%': { 
            'background-position': '100% 50%',
            'filter': 'brightness(1.05)' 
          },
        },
        glowPulse: {
          '0%, 100%': { 
            'opacity': 0.3,
            'transform': 'scale(1)' 
          },
          '50%': { 
            'opacity': 0.6,
            'transform': 'scale(1.2)' 
          },
        },
        patternShift: {
          '0%': { 'background-position': '0% 0%' },
          '100%': { 'background-position': '100% 100%' }
        },
      },
      colors: {
        brand: {
          50: '#fff8eb',
          100: '#ffecc7',
          200: '#ffd98a',
          300: '#ffc14e',
          400: '#ffa722',
          500: '#ff9800',
          600: '#e27200',
          700: '#bb4d02',
          800: '#983d08',
          900: '#7c340c',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'texture': "url('/texture.png')",
      },
      boxShadow: {
        'glow': '0 0 20px 5px var(--tw-shadow-color)',
        'neon': '0 0 5px theme(colors.amber.400), 0 0 20px theme(colors.amber.700)',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.6)',
        },
        '.text-shadow-lg': {
          textShadow: '0 8px 16px rgba(0, 0, 0, 0.7)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }
      addUtilities(newUtilities)
    },
  ],
};