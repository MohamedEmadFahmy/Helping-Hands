/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#4fab9b",
				secondary: "#d9d9d9",
				seconadryGrey: "#ececec",

				primaryShades: {
					100: "#dceeeb",
					200: "#b9ddd7",
					300: "#95cdc3",
					400: "#72bcaf",
					500: "#4fab9b",
					600: "#3f897c",
					700: "#2f675d",
					800: "#20443e",
					900: "#10221f",
				},
				secondaryShades: {
					100: "#f7f7f7",
					200: "#f0f0f0",
					300: "#e8e8e8",
					400: "#e1e1e1",
					500: "#d9d9d9",
					600: "#aeaeae",
					700: "#828282",
					800: "#575757",
					900: "#2b2b2b",
				},
			},
			fontFamily: {
				sans: ["Roboto", "sans-serif"],
			},
			gridTemplateColumns: {
				"70/30": "70% 28%",
			},
		},
	},
	plugins: [],
};
