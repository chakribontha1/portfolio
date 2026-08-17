/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: 'rgb(var(--bg-rgb) / <alpha-value>)', 2: 'var(--bg-2)' },
        accent: {
          DEFAULT: 'rgb(var(--accent-rgb) / <alpha-value>)',
          2: 'rgb(var(--accent-2-rgb) / <alpha-value>)',
          contrast: 'var(--accent-contrast)',
        },
        ink: { DEFAULT: 'rgb(var(--text-rgb) / <alpha-value>)', 2: 'var(--text-2)', 3: 'var(--text-3)' },
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2rem',
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
