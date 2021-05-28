const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            book: {
            main: "#86425f",
            second: "#c7889c",
            neutral: "#aca7aa",
            dark: "#637077",
            light: "#f5edf4",
            lighter: "#f5edf494",
            gray: "#6d6d6d",
            black: "#111",
            white: "#FEFEFE"
            }
        },

        fontFamily: {
            sans: ["Source Sans Pro", "sans-serif"]
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
