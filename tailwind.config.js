const defaultTheme = require("tailwindcss/defaultTheme");
const { nextui } = require("@nextui-org/react");

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Roboto", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    darkMode: "class",
    plugins: ["prettier-plugin-tailwindcss", nextui()],
};