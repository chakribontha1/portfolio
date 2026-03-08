/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#05070F', 2: '#080C18', 3: '#0C1220' },
        accent: { DEFAULT: '#6EE7B7', 2: '#34D399' },
        ink: { DEFAULT: '#EEF2FF', 2: '#94A3B8', 3: '#475569' },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
