module.exports = {
    content: ["./src/**/*.{html,js}"],
    daisyui: {
      themes: [
        {
          toolstheme: {
          primary:"#b9770e",
          secondary:"#f4d03f",
         
          },
        },
      ],
    },
    plugins: [require('daisyui')],
  }
  