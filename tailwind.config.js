/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- Add this line
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#050505',
        light: '#FAFAFA',
        accent: '#3B82F6', 
        muted: '#64748b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};