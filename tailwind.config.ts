import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink: '#111827', purple: '#6657e8', lavender: '#f0efff' }, borderRadius: { '2xl': '1rem' }, boxShadow: { card: '0 4px 18px rgba(34, 42, 80, .04)' } } },
  plugins: [require('tailwindcss-animate')]
}
export default config
