/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./*.html",            // adjust as needed
      "./src/**/*.{js,ts}",  // if using JS/TS files in /src
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Aptos Narrow"', 'sans-serif'],
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            zoomIn: {
                '0%': { opacity: '0', transform: 'scale(0.9)' },
                '100%': { opacity: '1', transform: 'scale(1)' },
            },
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'zoom-in': 'zoomIn 0.6s ease-out forwards',
            },
        },
    },
    plugins: [],
}
