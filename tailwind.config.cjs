module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      smmobile: "300px",
      // => @media (min-width: 640px) { ... }

      mobile: "425px",
      // => @media (min-width: 640px) { ... }

      tablet: "768px",
      // => @media (min-width: 1024px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1440px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
