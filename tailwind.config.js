/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        matlab: {
          blue: '#0076A8',
          orange: '#FF6B00',
        }
      },
      aspectRatio: {
        'w-16': 16,
        'h-9': 9,
      }
    },
  },
  plugins: [],
}