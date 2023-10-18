const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				principal: "#0F323E",
				secundario: "#f6f2ef",
				terciario: "#F3E45C",
				white: "#FFFFFF",
			},
		},
		fontFamily: {
			sans: ["Montserrat", "sans-serif"],
			serif: ["Playfair Display", "serif"],
		},
	},
	plugins: [nextui()],
};
