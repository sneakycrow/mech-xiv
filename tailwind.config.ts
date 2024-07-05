import { join } from 'path';
import type { Config } from 'tailwindcss';
import { sharlayanTheme } from './themes';

import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	darkMode: 'selector',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		fontFamily: {
			sans: ['Outfit', 'sans-serif'],
			mono: [
				'ui-monospace',
				'SFMono-Regular',
				'Menlo',
				'Monaco',
				'Consolas',
				'Liberation Mono',
				'Courier New',
				'monospace'
			]
		},
		fontSize: {
			xs: '0.9rem',
			sm: '1rem',
			base: ['1.25rem', { lineHeight: '1.5rem' }],
			lg: ['1.5rem', { lineHeight: '1.8rem' }],
			xl: ['2rem', { lineHeight: '2.2rem' }],
			'2xl': ['3.2rem', { lineHeight: '3.4rem' }],
			'3xl': ['3.8rem', { lineHeight: '4rem' }],
			'4xl': ['4.5rem', { lineHeight: '4.7rem' }],
			'5xl': ['5.5rem', { lineHeight: '5.7rem' }]
		},
		extend: {}
	},
	plugins: [
		skeleton({
			themes: {
				custom: [sharlayanTheme]
			}
		})
	]
} satisfies Config;

export default config;
