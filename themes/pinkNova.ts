import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const pinkNovaTheme: CustomThemeConfig = {
	name: 'pink-nova',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Outfit, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Outfit, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '4px',
		'--theme-border-base': '4px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '255 255 255',
		'--on-warning': '255 255 255',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #b934b2
		'--color-primary-50': '245 225 243', // #f5e1f3
		'--color-primary-100': '241 214 240', // #f1d6f0
		'--color-primary-200': '238 204 236', // #eeccec
		'--color-primary-300': '227 174 224', // #e3aee0
		'--color-primary-400': '206 113 201', // #ce71c9
		'--color-primary-500': '185 52 178', // #b934b2
		'--color-primary-600': '167 47 160', // #a72fa0
		'--color-primary-700': '139 39 134', // #8b2786
		'--color-primary-800': '111 31 107', // #6f1f6b
		'--color-primary-900': '91 25 87', // #5b1957
		// secondary | #6e3a94
		'--color-secondary-50': '233 225 239', // #e9e1ef
		'--color-secondary-100': '226 216 234', // #e2d8ea
		'--color-secondary-200': '219 206 228', // #dbcee4
		'--color-secondary-300': '197 176 212', // #c5b0d4
		'--color-secondary-400': '154 117 180', // #9a75b4
		'--color-secondary-500': '110 58 148', // #6e3a94
		'--color-secondary-600': '99 52 133', // #633485
		'--color-secondary-700': '83 44 111', // #532c6f
		'--color-secondary-800': '66 35 89', // #422359
		'--color-secondary-900': '54 28 73', // #361c49
		// tertiary | #d0eda9
		'--color-tertiary-50': '248 252 242', // #f8fcf2
		'--color-tertiary-100': '246 251 238', // #f6fbee
		'--color-tertiary-200': '243 251 234', // #f3fbea
		'--color-tertiary-300': '236 248 221', // #ecf8dd
		'--color-tertiary-400': '222 242 195', // #def2c3
		'--color-tertiary-500': '208 237 169', // #d0eda9
		'--color-tertiary-600': '187 213 152', // #bbd598
		'--color-tertiary-700': '156 178 127', // #9cb27f
		'--color-tertiary-800': '125 142 101', // #7d8e65
		'--color-tertiary-900': '102 116 83', // #667453
		// success | #656f55
		'--color-success-50': '232 233 230', // #e8e9e6
		'--color-success-100': '224 226 221', // #e0e2dd
		'--color-success-200': '217 219 213', // #d9dbd5
		'--color-success-300': '193 197 187', // #c1c5bb
		'--color-success-400': '147 154 136', // #939a88
		'--color-success-500': '101 111 85', // #656f55
		'--color-success-600': '91 100 77', // #5b644d
		'--color-success-700': '76 83 64', // #4c5340
		'--color-success-800': '61 67 51', // #3d4333
		'--color-success-900': '49 54 42', // #31362a
		// warning | #865043
		'--color-warning-50': '237 229 227', // #ede5e3
		'--color-warning-100': '231 220 217', // #e7dcd9
		'--color-warning-200': '225 211 208', // #e1d3d0
		'--color-warning-300': '207 185 180', // #cfb9b4
		'--color-warning-400': '170 133 123', // #aa857b
		'--color-warning-500': '134 80 67', // #865043
		'--color-warning-600': '121 72 60', // #79483c
		'--color-warning-700': '101 60 50', // #653c32
		'--color-warning-800': '80 48 40', // #503028
		'--color-warning-900': '66 39 33', // #422721
		// error | #d7e3a5
		'--color-error-50': '249 251 242', // #f9fbf2
		'--color-error-100': '247 249 237', // #f7f9ed
		'--color-error-200': '245 248 233', // #f5f8e9
		'--color-error-300': '239 244 219', // #eff4db
		'--color-error-400': '227 235 192', // #e3ebc0
		'--color-error-500': '215 227 165', // #d7e3a5
		'--color-error-600': '194 204 149', // #c2cc95
		'--color-error-700': '161 170 124', // #a1aa7c
		'--color-error-800': '129 136 99', // #818863
		'--color-error-900': '105 111 81', // #696f51
		// surface | #863be1
		'--color-surface-50': '237 226 251', // #ede2fb
		'--color-surface-100': '231 216 249', // #e7d8f9
		'--color-surface-200': '225 206 248', // #e1cef8
		'--color-surface-300': '207 177 243', // #cfb1f3
		'--color-surface-400': '170 118 234', // #aa76ea
		'--color-surface-500': '134 59 225', // #863be1
		'--color-surface-600': '121 53 203', // #7935cb
		'--color-surface-700': '101 44 169', // #652ca9
		'--color-surface-800': '80 35 135', // #502387
		'--color-surface-900': '66 29 110' // #421d6e
	}
};
