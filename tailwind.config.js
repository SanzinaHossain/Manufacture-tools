module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
      themes:[
        {
          screens: {
            sm: '400px',
            // => @media (min-width: 576px) { ... }
          },
        }
      ]
    },
    daisyui: {
      themes: [
        {
          doctortheme: {
          primary:"#b5e7a0",
          secondary:"#86af49",
          accent:"#e3eaa7",
          },
        },
      ],
    },
    plugins: [require("daisyui")],
  }
  