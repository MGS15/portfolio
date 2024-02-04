/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,ts,jsx,tsx}',
		'./index.html',
	],
	theme: {
		extend: {
			colors: {
				'primary': '#485B63',
				'secondary': '#C9C7AF',
				'accent': '#F2CC8F',
				'background': '#E3E1C9',
				'text': '#000000',
			},
			fontFamily: {
				'poiret-one': ['Poiret One', 'sans-serif'],
				'pixelify-sans': ['Pixelify Sans', 'sans-serif'],
				'press-start': ['"Press Start 2P"', 'cursive']
			}
		},
	},
	plugins: [],
}

