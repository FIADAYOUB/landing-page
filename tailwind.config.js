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
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow:{
        'woke' : '0px 9.9px 21.6px rgba(9, 151, 124, 0.41)',
        '3xl': '0px 2px 10px 0px rgba(58, 53, 65, 0.1)',
        '4xl': '0 1px 3px 0 rgba(0, 0, 0, 0.2),0 1px 2px 0 rgba(0, 0, 0, 0.16)',
        '5xl': '0 10px 15px -3px rgba(0, 0, 0, 0.2),0 4px 6px -2px rgba(0, 0, 0, 0.15)'
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