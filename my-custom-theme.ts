
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "16px",
		"--theme-rounded-container": "24px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #023164 
		"--color-primary-50": "217 224 232", // #d9e0e8
		"--color-primary-100": "204 214 224", // #ccd6e0
		"--color-primary-200": "192 204 216", // #c0ccd8
		"--color-primary-300": "154 173 193", // #9aadc1
		"--color-primary-400": "78 111 147", // #4e6f93
		"--color-primary-500": "2 49 100", // #023164
		"--color-primary-600": "2 44 90", // #022c5a
		"--color-primary-700": "2 37 75", // #02254b
		"--color-primary-800": "1 29 60", // #011d3c
		"--color-primary-900": "1 24 49", // #011831
		// secondary | #7377e8 
		"--color-secondary-50": "234 235 252", // #eaebfc
		"--color-secondary-100": "227 228 250", // #e3e4fa
		"--color-secondary-200": "220 221 249", // #dcddf9
		"--color-secondary-300": "199 201 246", // #c7c9f6
		"--color-secondary-400": "157 160 239", // #9da0ef
		"--color-secondary-500": "115 119 232", // #7377e8
		"--color-secondary-600": "104 107 209", // #686bd1
		"--color-secondary-700": "86 89 174", // #5659ae
		"--color-secondary-800": "69 71 139", // #45478b
		"--color-secondary-900": "56 58 114", // #383a72
		// tertiary | #dd9fe9 
		"--color-tertiary-50": "250 241 252", // #faf1fc
		"--color-tertiary-100": "248 236 251", // #f8ecfb
		"--color-tertiary-200": "247 231 250", // #f7e7fa
		"--color-tertiary-300": "241 217 246", // #f1d9f6
		"--color-tertiary-400": "231 188 240", // #e7bcf0
		"--color-tertiary-500": "221 159 233", // #dd9fe9
		"--color-tertiary-600": "199 143 210", // #c78fd2
		"--color-tertiary-700": "166 119 175", // #a677af
		"--color-tertiary-800": "133 95 140", // #855f8c
		"--color-tertiary-900": "108 78 114", // #6c4e72
		// success | #ffffff 
		"--color-success-50": "255 255 255", // #ffffff
		"--color-success-100": "255 255 255", // #ffffff
		"--color-success-200": "255 255 255", // #ffffff
		"--color-success-300": "255 255 255", // #ffffff
		"--color-success-400": "255 255 255", // #ffffff
		"--color-success-500": "255 255 255", // #ffffff
		"--color-success-600": "230 230 230", // #e6e6e6
		"--color-success-700": "191 191 191", // #bfbfbf
		"--color-success-800": "153 153 153", // #999999
		"--color-success-900": "125 125 125", // #7d7d7d
		// warning | #e77408 
		"--color-warning-50": "251 234 218", // #fbeada
		"--color-warning-100": "250 227 206", // #fae3ce
		"--color-warning-200": "249 220 193", // #f9dcc1
		"--color-warning-300": "245 199 156", // #f5c79c
		"--color-warning-400": "238 158 82", // #ee9e52
		"--color-warning-500": "231 116 8", // #e77408
		"--color-warning-600": "208 104 7", // #d06807
		"--color-warning-700": "173 87 6", // #ad5706
		"--color-warning-800": "139 70 5", // #8b4605
		"--color-warning-900": "113 57 4", // #713904
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #495a8f 
		"--color-surface-50": "228 230 238", // #e4e6ee
		"--color-surface-100": "219 222 233", // #dbdee9
		"--color-surface-200": "210 214 227", // #d2d6e3
		"--color-surface-300": "182 189 210", // #b6bdd2
		"--color-surface-400": "128 140 177", // #808cb1
		"--color-surface-500": "73 90 143", // #495a8f
		"--color-surface-600": "66 81 129", // #425181
		"--color-surface-700": "55 68 107", // #37446b
		"--color-surface-800": "44 54 86", // #2c3656
		"--color-surface-900": "36 44 70", // #242c46
		
	}
}