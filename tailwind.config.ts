/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }
        md: '768px',
        // => @media (min-width: 768px) { ... }
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '4xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-hind)'],
        noto: ['var(--font-noto)'],
      },
      // Option from figma
      boxShadow: {
        mood: '0px 4.8px 8px 0px rgba(196, 196, 196, 0.20), 4.8px 0px 8px 0px rgba(196, 196, 196, 0.20)',
      },
      borderWidth: {
        DEFAULT: '0.7px',
      },
      colors: {
        'ts-green': '#00AD50',
        'ts-green-600': '#009D49',
        'ts-green-50': '#E6F7EE',
        'ts-dark-blue': '#04304B',
        'ts-purple': '#7A60D8',
        'ts-faded-purple': '#AD9FF1',
        'ts-white': '#FFFFFF',
        'ts-maroon': '#991541',
        'ts-grey': '#9C9C9C',
        'ts-grey-50': '#F4F4F4',
        'ts-grey-900': '#3E3E3E',
        'ts-accent-grey-400': '#A9A9A9',
        'ts-accent-grey-600': '#868686',
        'ts-ash': '#FAFAFA',
        'ts-light-white': '#edeef0',
        'ts-red': '#F84528',
        'ts-red-500': '#EA2424',
        'ts-red-600': '#D52121',
        'ts-violet-500': '#D81E5B',
        'ts-orange': '#FFA11F',
        'ts-Green': '#00B195',
        'ts-normal-blue': '#1F78D1',
        'ts-black-primary': '#010101',
        'ts-black': '#020202',
        'ts-black-300': '#555',
        'ts-black-400': '#353535',
        'ts-dark-green': '#248175',
        'ts-modal-ash': '#ECEEF0',
        'ts-modal-red': '#9CC741',
        'ts-brown': '#7D7D7D',

        // shadcn styles
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        // card: {
        //   DEFAULT: 'hsl(var(--card))',
        //   foreground: 'hsl(var(--card-foreground))',
        // },
      },
      // borderRadius: {
      //   lg: 'var(--radius)',
      //   md: 'calc(var(--radius) - 2px)',
      //   sm: 'calc(var(--radius) - 4px)',
      // },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
