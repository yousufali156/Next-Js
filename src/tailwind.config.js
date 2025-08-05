/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Toggle dark mode with class (e.g., <html className="dark">)


  content: [
    './app/**/*.{js,jsx,ts,tsx}',       // App Router (Next.js 13+)
    './pages/**/*.{js,jsx,ts,tsx}',     // Pages Router (optional fallback)
    './components/**/*.{js,jsx,ts,tsx}', // Component folder
    './src/**/*.{js,jsx,ts,tsx}',       // Optional: if you use /src structure
  ],

  theme: {
    extend: {
      colors: {
        indigo: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
        },
        yellow: {
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          700: '#B45309',
          900: '#78350F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        bounce: 'bounce 0.6s ease-in-out',
        fade: 'fadeIn 0.8s ease-in forwards',
        slide: 'slideUp 0.5s ease-out',
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
