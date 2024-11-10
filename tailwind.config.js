/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				"background-light": "var(--background-light)",
				"background-bold": "var(--background-bold)",
				"text-color": "var(--text-color)",
				"text-primary": "var(--text-primary)",
				"text-green": "var(--text-green)",
				"background-card": "var(--background-card)",
				link: "var(--link)",
				"opposite-black": "var(--opposite-black)",
			},
		},
	},
	plugins: [],
};
