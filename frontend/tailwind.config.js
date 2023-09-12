module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        midnight: {
          darkest:"#2c262d",
          dark:"#2d2c31",
          light:"#4a4556",
          blue:"#524f65",
          red:"#423141"
        },
        leopold: {
          darkpurple:"#312342",
          darkblue:"#18233a",
          skyblue:"#83c2ce",
          waterblue:"#4eb8c3",
          lime:"#cfe633",
        }
      }
    }
  },
  variants: {
    extend: {
      display: ["group-hover"],
    }
  },
  plugins: []
};
