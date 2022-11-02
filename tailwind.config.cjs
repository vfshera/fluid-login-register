/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				'cut-text': {
					'0%,10%': { width: '0' },
					'70%': { width: '100%' }
				}
			}
		}
	},
	plugins: []
};
