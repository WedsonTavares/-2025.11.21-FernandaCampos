/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.{html,js}", "./**/*.{html,js}"],  
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: ['"DM Serif Display"', 'serif'],
      secondary: ['Jost', 'sans-serif'],
    },
    backgroundImage: {
      hero: "url('/assets/hero/fotoHero.jpg')",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#292f36",
          hover: "#343e4a",
        },
        secondary: "#4d5053",
        accent: {
          DEFAULT: "#cda274",
          secondary: "#f4f0ec",
          hover: "#b88c5d",
        },
        custom: "#d5b3aa",
      },
    },
  },
  plugins: [],
};
