import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const sharlayanTheme: CustomThemeConfig = {
	name: 'sharlayan',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '4px',
		'--theme-border-base': '4px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #A4CEED
		'--color-primary-50': '241 248 252', // #f1f8fc
		'--color-primary-100': '237 245 251', // #edf5fb
		'--color-primary-200': '232 243 251', // #e8f3fb
		'--color-primary-300': '219 235 248', // #dbebf8
		'--color-primary-400': '191 221 242', // #bfddf2
		'--color-primary-500': '164 206 237', // #A4CEED
		'--color-primary-600': '148 185 213', // #94b9d5
		'--color-primary-700': '123 155 178', // #7b9bb2
		'--color-primary-800': '98 124 142', // #627c8e
		'--color-primary-900': '80 101 116', // #506574
		// secondary | #83BBE6
		'--color-secondary-50': '236 245 251', // #ecf5fb
		'--color-secondary-100': '230 241 250', // #e6f1fa
		'--color-secondary-200': '224 238 249', // #e0eef9
		'--color-secondary-300': '205 228 245', // #cde4f5
		'--color-secondary-400': '168 207 238', // #a8cfee
		'--color-secondary-500': '131 187 230', // #83BBE6
		'--color-secondary-600': '118 168 207', // #76a8cf
		'--color-secondary-700': '98 140 173', // #628cad
		'--color-secondary-800': '79 112 138', // #4f708a
		'--color-secondary-900': '64 92 113', // #405c71
		// tertiary | #5B90AE
		'--color-tertiary-50': '230 238 243', // #e6eef3
		'--color-tertiary-100': '222 233 239', // #dee9ef
		'--color-tertiary-200': '214 227 235', // #d6e3eb
		'--color-tertiary-300': '189 211 223', // #bdd3df
		'--color-tertiary-400': '140 177 198', // #8cb1c6
		'--color-tertiary-500': '91 144 174', // #5B90AE
		'--color-tertiary-600': '82 130 157', // #52829d
		'--color-tertiary-700': '68 108 131', // #446c83
		'--color-tertiary-800': '55 86 104', // #375668
		'--color-tertiary-900': '45 71 85', // #2d4755
		// success | #A4CEED
		'--color-success-50': '241 248 252', // #f1f8fc
		'--color-success-100': '237 245 251', // #edf5fb
		'--color-success-200': '232 243 251', // #e8f3fb
		'--color-success-300': '219 235 248', // #dbebf8
		'--color-success-400': '191 221 242', // #bfddf2
		'--color-success-500': '164 206 237', // #A4CEED
		'--color-success-600': '148 185 213', // #94b9d5
		'--color-success-700': '123 155 178', // #7b9bb2
		'--color-success-800': '98 124 142', // #627c8e
		'--color-success-900': '80 101 116', // #506574
		// warning | #83BBE6
		'--color-warning-50': '236 245 251', // #ecf5fb
		'--color-warning-100': '230 241 250', // #e6f1fa
		'--color-warning-200': '224 238 249', // #e0eef9
		'--color-warning-300': '205 228 245', // #cde4f5
		'--color-warning-400': '168 207 238', // #a8cfee
		'--color-warning-500': '131 187 230', // #83BBE6
		'--color-warning-600': '118 168 207', // #76a8cf
		'--color-warning-700': '98 140 173', // #628cad
		'--color-warning-800': '79 112 138', // #4f708a
		'--color-warning-900': '64 92 113', // #405c71
		// error | #4F7B89
		'--color-error-50': '229 235 237', // #e5ebed
		'--color-error-100': '220 229 231', // #dce5e7
		'--color-error-200': '211 222 226', // #d3dee2
		'--color-error-300': '185 202 208', // #b9cad0
		'--color-error-400': '132 163 172', // #84a3ac
		'--color-error-500': '79 123 137', // #4F7B89
		'--color-error-600': '71 111 123', // #476f7b
		'--color-error-700': '59 92 103', // #3b5c67
		'--color-error-800': '47 74 82', // #2f4a52
		'--color-error-900': '39 60 67', // #273c43
		// surface | #464D45
		'--color-surface-50': '227 228 227', // #e3e4e3
		'--color-surface-100': '218 219 218', // #dadbda
		'--color-surface-200': '209 211 209', // #d1d3d1
		'--color-surface-300': '181 184 181', // #b5b8b5
		'--color-surface-400': '126 130 125', // #7e827d
		'--color-surface-500': '70 77 69', // #464D45
		'--color-surface-600': '63 69 62', // #3f453e
		'--color-surface-700': '53 58 52', // #353a34
		'--color-surface-800': '42 46 41', // #2a2e29
		'--color-surface-900': '34 38 34' // #222622
	}
};
