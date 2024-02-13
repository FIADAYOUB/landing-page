/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        'primary-base': '#ff284f',
        'primary-lighten': '#ffc9d0',
        'secondary-base': '#154733',
        'secondary-lighten': '#2d956c',
        'secondary-darken': '#007e60',
        'accent-base': '#48a4e5',
        'accent-lighten': '#e3ffff',
        'error-base': '#ff7600',
        'info-base': '#2196f3',
        'success-base': '#4caf50',
        'warning-base': '#fb8c00',
        'tertiary-base': '#ffe2ce',
        'tertiary-lighten': '#ffffff',
        },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        'woke': '0px 9.9px 21.6px rgba(9, 151, 124, 0.41)',
        '3xl': '0px 2px 10px 0px rgba(58, 53, 65, 0.1)',
        '4xl': '0 1px 3px 0 rgba(0, 0, 0, 0.2),0 1px 2px 0 rgba(0, 0, 0, 0.16)',
        '5xl': '0 10px 15px -3px rgba(0, 0, 0, 0.2),0 4px 6px -2px rgba(0, 0, 0, 0.15)',
        'card': '0px 1px 3px -0.8px rgba(255,255,255,.1), 0px 2px 3px -1px rgba(255,255,255,.1), 0px 5px 5px 2.5px rgba(255,255,255,.1)'
      },
      transitionProperty: {
        'width': 'width'
      },
      backgroundImage: {
        'gradient-top': 'linear-gradient(-55deg,transparent 50%,rgba(0,0,0,.2) 0)',
        'gradient-bottom': 'linear-gradient(-55deg,rgba(0,0,0,.2) 50%,transparent 0)',
        'gradient-reviews': "linear-gradient(180deg,rgba(35,35,35,.74) 0%,rgba(35,35,35,0) 100%)",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: []
};