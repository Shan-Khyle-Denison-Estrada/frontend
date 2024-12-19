/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      height: {
        'viewport-minus-navbar': 'calc(100vh - 70px)',
        'viewport-minus-adminnav': 'calc(100vh - 65px)',
        'id-long': '324px', //Real life height: 3.375 inches or 324 pixels @ 96 PPI
        'id-long-large': '486px',
      },
      width: {
        'id-short': '204px', //Real life width: 2.125 inches or 204 pixels @ 96 PPI
        'id-short-large': '306px',
      },
    },

  colors: {
    main: '#990000',
    secondary: '#ffffff',
    hovColText: '#570000', //Designated color for when user is hovering over texts
    hovColBut: '#D9D9D9', //Designated color for when user is hovering over buttons
    actColBut: '#240505', //Designated color for when user is hovering over buttons
    black: '#000000',
    secOpt: '#D9D9D9',
  },
  fontFamily: {
    sans: ['Arial'],
    body: ["Inter"],
  },

  screens: {
    'xsm': '300px',
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },

  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
      datatables: true,
    }),
  ],
}

