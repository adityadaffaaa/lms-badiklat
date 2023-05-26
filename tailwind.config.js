const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.jsx",
  ],

  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway",
      },
      fontSize: {
        heading1: ["40px", { fontWeight: "800" }],
        heading2: ["36px", { fontWeight: "700" }],
        heading3: ["28px", { fontWeight: "600" }],
        heading4: ["24px", { fontWeight: "600" }],
        heading5: ["18px", { fontWeight: "600" }],
        paragraph1: ["16px", { fontWeight: "700" }],
        paragraph2: ["16px", { fontWeight: "400" }],
        paragraph3: ["14px", { fontWeight: "700" }],
        paragraph4: ["14px", { fontWeight: "400" }],
        paragraph5: ["12px", { fontWeight: "400" }],
      },
      colors: {
        warm10: "#03071E",
        warm20: "#370617",
        warm30: "#6A040F",
        warm40: "#9D0208",
        warm50: "#D00000",
        warm60: "#DC2F02",
        warm70: "#E85D04",
        warm80: "#F48C06",
        warm90: "#FAA307",
        warm100: "#FFBA08",
        skyBlue10: "#CAF0F8",
        skyBlue20: "#ADE8F4",
        skyBlue30: "#90E0EF",
        skyBlue40: "#48CAE4",
        skyBlue50: "#00B4D8",
        skyBlue60: "#00A5D0",
        skyBlue70: "#0096C7",
        skyBlue80: "#0077B6",
        skyBlue90: "#023E8A",
        skyBlue100: "#03045E",
      },
      boxShadow: {
        defaultShadow: "0px 4px 24px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        defaultDropShadow: "0px 4px 24px rgba(0, 0, 0, 0.1)",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
