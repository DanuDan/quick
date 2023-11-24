/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2F80ED",
          black: "#4F4F4F",
          gray: "#828282",
          white: "#E0E0E0",
        },
        indicator: {
          orange: "#F8B76B",
          purple: "#8785FF",
          red: "#EB5757",
          yellow: "#F2C94C",
        },
        chats: {
          orange: "#E5A443",
          orangeLight: "#FCEED3",
          purple: "#9B51E0",
          purpleLight: "#EEDCFF",
          green: "#43B78D",
          greenLight: "#D2F2EA",
        },
        strickers: {
          white: "#E9F3FF",
          orange: "#FDCFA4",
          yellow: "#F9E9C3",
          tosca: "#AFEBDB",
          green: "#CBF1C2",
          taro: "#CFCEF9",
          purple: "#F9E0FD"
        }
      },
      screens: {
        "3xl" : "1700px"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
