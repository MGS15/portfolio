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
				'dock': '#617EAF'
			},
			fontFamily: {
				'poiret-one': ['Poiret One', 'sans-serif'],
				'pixelify-sans': ['Pixelify Sans', 'sans-serif'],
				'press-start': ['"Press Start 2P"', 'cursive']
			},
			backgroundImage: {
				'wallpaper': "url('src/assets/background.jpeg')"
			},
			boxShadow: {
				'bottomShadow': 'inset 0 -3px 5px 0px rgba(0, 0, 0, 0.9)',
				'topShadow': 'inset 0 3px 5px 0px rgba(0, 0, 0, 0.9)',
			}
		},
	},
	plugins: [],
}

