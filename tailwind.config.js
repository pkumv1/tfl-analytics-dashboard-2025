/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(red|orange|yellow|green|blue|purple|slate|pink|indigo)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /text-(red|orange|yellow|green|blue|purple|slate|pink|indigo)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /border-(red|orange|yellow|green|blue|purple|slate|pink|indigo)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
}