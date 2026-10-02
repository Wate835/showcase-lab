/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: ({ colors }) => ({
      background: {
        50: '#EFF1F6',
      },
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#282B2E',
      white: colors.white,
      slate: colors.slate,
      gray: {
        100: '#F4F6F9',
        200: '#EAEDF1',
        300: '#E9E9E9',
        400: '#D7D7D7',
        500: '#7B7E87',
        600: '#D8DBDF',
      },
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: '#E2061A',
      orange: '#FBA801',
      amber: colors.amber,
      yellow: '#FAC81A',
      lime: colors.lime,
      green: '#05AE71',
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: {
        100: '#ECF5FF',
        200: '#02A8EA',
        300: '#02A8EA33',
        400: '#02A8EA0A',
        500: '#BFDBFE',
      },
      blue: '#2161AB',
      primary: '#3B82F6',
      cobalt: '#1D4ED8',
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    }),
    keyframes: {
      slideDown: {
        '0%': { height: 0 },
        '100%': { height: 'var(--radix-collapsible-content-height)' },
      },
      slideUp: {
        '0%': { height: 'var(--radix-collapsible-content-height)' },
        '100%': { height: 0 },
      },
    },
    animation: {
      'slide-down': 'slideDown 0.3s linear',
      'slide-up': 'slideUp 0.3s linear',
    },
    screens: {
      xl: { max: '1920px' },
      lg: { max: '1440px' },
      md: { max: '1024px' },
      sm: { max: '768px' },
      xs: { max: '560px' },
    },
    extend: {
      borderRadius: {
        '3xl': '20px',
      },
      // screens: {
      //   xs: '375px',
      //   s: '768px',
      //   m: '1024px',
      //   lg: '1440px',
      //   xl: '1920px',
      // },
      gridTemplateColumns: {
        auto: 'repeat(auto-fill, minmax(60px, 1fr))',
      },
      boxShadow: {
        base: '0px 0px 24px 0px #9391A424',
        dark: '0px 0px 40px 0px #67667329',
      },
    },
  },
  plugins: [],
};
