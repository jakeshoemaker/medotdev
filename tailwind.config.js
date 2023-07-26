/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './server/components/templates/*.html',
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    fontFamily: {
        body: ["JetBrains Mono"]
    },
    extend: {
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

