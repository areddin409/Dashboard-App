module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"]
    },
    extend: {
      fontSize: {
        14: "14px"
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)"
      },
      borderWidth: {
        1: "1px"
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)"
      },
      textColors: {
        main: "##1A97F5"
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px"
      },
      height: {
        80: "80px"
      },
      minHeight: {
        590: "590px"
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://cdni.iconscout.com/illustration/premium/thumb/investment-earnings-5718971-4777777.png')"
        // linear-gradient(to bottom, rgba(59, 129, 202, 0.8), rgba(59, 129, 202, 0.1)),
        // "linear-gradient(to bottom, rgba('#20232A',0.8), rgba('#33373E',0.5)), url('https://static.vecteezy.com/system/resources/previews/006/411/808/original/business-flat-drawing-businessman-riding-bicycle-on-arrow-worker-riding-bike-on-rising-arrow-business-metaphor-successful-businessman-go-up-at-bicycle-chart-go-up-cartoon-illustration-vector.jpg')"
      }
    }
  },
  plugins: []
};
