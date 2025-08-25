/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,css}"],
  theme: {
    screens: {
      mobile: {'max': '500px'},
      onlytablet: {'min': '500px', 'max': '850px'},
      tablet: {'min': '500px',},
      onlylaptop: {'min': '850px', 'max': '1280px'},
      laptop: {'min': '850px', },
      desktop: {'min': '1280px'} ,
    },
    colors: {
      'primary': "#4D5562",
      'secondary': "#040711",
      'terciary': "#F9FAFB",
      'iron': "#D2D5DA",
      'bright-grey': "#394150",
      'periwinkle-blue': "#7CA9F3",
      'sapphire': "#263FA9"
    },
    fontFamily: {
      sans: ["DMSans Regular", "sans-serif"],
      serif: ["DMSans Regular", "serif"],
      "medium": ["DMSans Medium", "serif"],
      "regular": ["DMSans Regular", "serif"],
      "semibold": ["DMSans SemiBold", "serif"],
      "bold": ["DMSans Bold", "serif"],
      "black": ["DMSans Black", "serif"],
    },
    extend: {
      borderRadius: {
        "5": "5px",
        "sm": "10px",
        "small": "15px",
        "md": "20px",
        "lg": "100px",
      },
      backgroundColor: {
        "transparent": "transparent"
      },
      maxWidth: {
        "1250": "1250px"
      },
      fontSize: {
        "text-8": "8px",
        "text-10": "10px",
      },
      border: {
        'primary': "#4D5562",
        'periwinkle-blue': "#7CA9F3",
      }
    }
  },
  plugins: [],
}

