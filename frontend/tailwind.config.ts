import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			width: {
				'42': '167px', // Custom width
			},
			height: {
				'40': '158px', // Custom height
			},
			spacing: {
				'4': '15.91px', // For top positioning, you might round this to a close standard size or use a custom value
			},
		},
	},
	plugins: [],
};
export default config;
