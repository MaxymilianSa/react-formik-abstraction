import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      denim: 'rgb(var(--color-denim) / <alpha-value>)',
      grey: 'rgb(var(--color-grey) / <alpha-value>)',
      purple: 'rgb(var(--color-purple) / <alpha-value>)',
      'very-light-grey': 'rgb(var(--color-very-light-grey) / <alpha-value>)',
      white: 'rgb(var(--color-white) / <alpha-value>)',
      'sky-blue': 'rgb(var(--color-sky-blue) / <alpha-value>)',
      'light-blue': 'rgb(var(--color-light-blue) / <alpha-value>)',
      background: 'rgb(var(--color-background) / <alpha-value>)',
      'border-color': 'rgb(var(--color-border-color) / <alpha-value>)',
      'red-errors': 'rgb(var(--color-red-errors) / <alpha-value>)',
    },
    extend: {
      fontFamily: {
        primary: ['Ubuntu', ...fontFamily.sans],
      },
      backgroundImage: {
        'mobile-pattern': "url('/assets/images/mobile-background.png')",
        'desktop-pattern': "url('/assets/images/background.png')",
      },
      boxShadow: {
        base: '0px 25px 40px -20px rgba(0, 0, 0, 0.0951141)',
      },
    },
  },
  plugins: [],
};
