/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // some classes are generated dynamically via template strings or
  // conditional rendering; make sure purge/JIT doesn’t drop them.
  safelist: [
    'bg-indigo-50',
    'text-indigo-700',
    'font-semibold',
    'shadow-sm',
    'text-gray-600',
    'hover:bg-gray-100',
    'bg-indigo-500',
    'bg-purple-500',
    'bg-emerald-500'
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
