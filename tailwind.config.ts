import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        // this is a sample of how this can work
        "black-blue": "#0D1E2E",
        "dark-blue": "#213B54",
        "medium-blue": "#0B1E49",
        "light-blue": "#87A9CF",
        "beige": "#E1CBD7",
        "light-pink": "#C18FB4"
      },
      minWidth: {
        'mobile': '500px',
      },
      maxWidth: {
        'mobile': '600px'
      },
      width: {
        '110': '110%',
        '120': '120%',
        '130': '130%',
        '60vw': '60vw',
        '50vw': '50vw',
        '70vw': '70vw',
        '80vw': '80vw',
        '90vw': '90vw',
        '100vw': '100vw',

      },
      height: {
        '0.1': '1px',
        '110': '110%',
        '120': '120%',
        '130': '130%',
      },
      inset: {
        "100": "100vw",
        "200": "200vw",
        "300": "300vw",
        "400": "400vw",
        "500": "500vw",
        "600": "600vw",
        "700": "700vw",
        "800": "800vw",
        "900": "900vw",
        "1000": "1000vw",
        "mini": "4%;"
      },
      left: {
        "mini": "4%;"
      },
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100"
      }
    },
  },

  plugins: [],
}
export default config
