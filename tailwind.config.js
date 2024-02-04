/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,ts,jsx,tsx}',
		'./index.html',
	],
	theme: {
		extend: {
			colors: {
				'primary': '#0B142B',
				'secondary': '#2E70C8',
				'accent': '#CB70AF',
				'background': '#0B142B',
				'text': '#D9CBDA',
			},
			fontFamily: {
				'poiret-one': ['Poiret One', 'sans-serif'],
				'pixelify-sans': ['Pixelify Sans', 'sans-serif'],
				'press-start': ['"Press Start 2P"', 'cursive']
			},
			backgroundImage: {
				'wallpaper': "url('src/assets/background.jpeg')"
			}
		},
	},
	plugins: [],
}

