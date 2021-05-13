module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      1200: "120rem",
      750: "75rem",
      600: "60rem",
      500: "50rem",
      400: "40rem"
    },
    extend: {
      cursor: {
        "zoom-in": "zoom-in",
        "zoom-out": "zoom-out"
      },
      backgroundImage: (theme) => ({
        "black-cover":
          "linear-gradient(180deg,rgb(0 0 0 / 83%) 0,rgb(0 0 0 / 75%) 3.5%,rgb(0 0 0 / 60%) 7%,rgb(0 0 0 / 50%) 10.35%,rgb(0 0 0 / 35%) 13.85%,rgba(0,0,0,.262) 17.35%,rgba(0,0,0,.237) 20.85%,rgba(0,0,0,.213) 24.35%,rgba(0,0,0,.188) 27.85%,rgba(0,0,0,.165) 31.35%,rgba(0,0,0,.144) 34.85%,rgba(0,0,0,.126) 38.35%,rgba(0,0,0,.112) 41.85%,rgba(0,0,0,.103) 45.35%,rgba(0,0,0,.1) 48.85%,rgba(0,0,0,.103) 52.35%,rgba(0,0,0,.112) 55.85%,rgba(0,0,0,.126) 59.35%,rgba(0,0,0,.144) 62.85%,rgba(0,0,0,.165) 66.35%,rgba(0,0,0,.188) 69.85%,rgba(0,0,0,.213) 73.35%,rgba(0,0,0,.237) 76.85%,rgba(0,0,0,.262) 80.35%,rgba(0,0,0,.285) 83.85%,rgba(0,0,0,.306) 87.35%,rgba(0,0,0,.324) 90.85%,rgba(0,0,0,.338) 94.35%,rgba(0,0,0,.347) 97.85%,rgba(0,0,0,.35))"
      }),
      rotate: {
        360: "360deg"
      }
    }
  },
  variants: {
    extend: {
      display: ["hover"],
      cursor: ["active"],
      translate: ["hover, group-hover"],
      rotate: ["active"]
    }
  },
  plugins: []
};
