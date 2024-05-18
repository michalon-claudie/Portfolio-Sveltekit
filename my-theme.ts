
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
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
		// primary | #144da9 
		"--color-primary-50": "220 228 242", // #dce4f2
		"--color-primary-100": "208 219 238", // #d0dbee
		"--color-primary-200": "196 211 234", // #c4d3ea
		"--color-primary-300": "161 184 221", // #a1b8dd
		"--color-primary-400": "91 130 195", // #5b82c3
		"--color-primary-500": "20 77 169", // #144da9
		"--color-primary-600": "18 69 152", // #124598
		"--color-primary-700": "15 58 127", // #0f3a7f
		"--color-primary-800": "12 46 101", // #0c2e65
		"--color-primary-900": "10 38 83", // #0a2653
		// secondary | #7b76db 
		"--color-secondary-50": "235 234 250", // #ebeafa
		"--color-secondary-100": "229 228 248", // #e5e4f8
		"--color-secondary-200": "222 221 246", // #deddf6
		"--color-secondary-300": "202 200 241", // #cac8f1
		"--color-secondary-400": "163 159 230", // #a39fe6
		"--color-secondary-500": "123 118 219", // #7b76db
		"--color-secondary-600": "111 106 197", // #6f6ac5
		"--color-secondary-700": "92 89 164", // #5c59a4
		"--color-secondary-800": "74 71 131", // #4a4783
		"--color-secondary-900": "60 58 107", // #3c3a6b
		// tertiary | #e4b4e4 
		"--color-tertiary-50": "251 244 251", // #fbf4fb
		"--color-tertiary-100": "250 240 250", // #faf0fa
		"--color-tertiary-200": "248 236 248", // #f8ecf8
		"--color-tertiary-300": "244 225 244", // #f4e1f4
		"--color-tertiary-400": "236 203 236", // #eccbec
		"--color-tertiary-500": "228 180 228", // #e4b4e4
		"--color-tertiary-600": "205 162 205", // #cda2cd
		"--color-tertiary-700": "171 135 171", // #ab87ab
		"--color-tertiary-800": "137 108 137", // #896c89
		"--color-tertiary-900": "112 88 112", // #705870
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
		// warning | #e64747 
		"--color-warning-50": "251 227 227", // #fbe3e3
		"--color-warning-100": "250 218 218", // #fadada
		"--color-warning-200": "249 209 209", // #f9d1d1
		"--color-warning-300": "245 181 181", // #f5b5b5
		"--color-warning-400": "238 126 126", // #ee7e7e
		"--color-warning-500": "230 71 71", // #e64747
		"--color-warning-600": "207 64 64", // #cf4040
		"--color-warning-700": "173 53 53", // #ad3535
		"--color-warning-800": "138 43 43", // #8a2b2b
		"--color-warning-900": "113 35 35", // #712323
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