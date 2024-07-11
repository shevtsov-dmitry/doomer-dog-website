/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,css}'],
    theme: {
        extend: {
            fontFamily: {
                'windows-terminal': ['Windows Command Prompt', 'Serif'],
            },
            screens: {
                laptop: '1700px',
                mobile: '1133px',
            },
            colors: {},
        },
    },
    plugins: ['prettier-plugin-tailwindcss'],
}
