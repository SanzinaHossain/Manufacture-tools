module.exports = {
    content: ["./src/**/*.{html,js}"],
    daisyui: {
      themes: [
        {
          doctortheme: {
          primary:" #b9770e ",
          secondary:" #f4d03f ",
          neutral: "#dc7633",
          },
        },
      ],
    },
    plugins: [require('daisyui')],
  }
  