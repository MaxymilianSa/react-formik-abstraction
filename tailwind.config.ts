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
      error: 'rgb(var(--color-error) / <alpha-value>)',
      success: 'rgb(var(--color-success) / <alpha-value>)',
    },
    extend: {
      fontFamily: {
        primary: ['Ubuntu', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
