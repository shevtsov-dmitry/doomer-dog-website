/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "windows-terminal": ["windows_command_prompt", "monospace"],
      },
      screens: {
        laptop: "1700px",
        mobile: "1133px",
      },
      colors: {},
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
