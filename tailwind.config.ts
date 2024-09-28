import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem',
        lg: '1.125rem',
        xl: '1.25rem',
      },
      colors: {
        black: {
          DEFAULT: '#060606',
          '700': '#131313',
        },
        gray: {
          '500': '#C0C0C0',
          '600': '#222222',
          '700': '#373737',
        },
        pink: {
          DEFAULT: '#E876FF',
        },
      },
      keyframes: {
        wiggle: {
          '0%': { height: '0px', width: '0px' },
          '100%': { height: '5.625rem', width: '7.5rem' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-out',
      },
      screens: {
        md: '769px',
        sm: '651px',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
};
export default config;
