/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif", "sans-serif"],
            },
            colors: {
                primary: "#0a68ff",
                grayText: "#808089",
                grayBorder: "#dddde3",
                hoverActive: "#D7E3FB",
            },
            width: {
                categoryWidth: "calc(100% - 208px)",
            },
        },
    },
    plugins: [],
};
