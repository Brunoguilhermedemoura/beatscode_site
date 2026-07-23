import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00a651',
        'primary-dark': '#007a3d',
        'primary-soft': '#1bd46a',
        dark: '#0a0f0c',
        'dark-2': '#121a15',
        'dark-3': '#1a241c',
        surface: '#f4f7f5',
        ink: '#0e1611',
        muted: '#5c6b62',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
