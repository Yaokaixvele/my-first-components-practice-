import type { ExtractPropTypes } from "vue"
export const buttonProps = {
	width: {
		type: String,
		default: "auto"
	},
	height: {
		type: String,
		default: "32px"
	},
	type: {
		type: String,
		default: "blue"
	},
	disabled:{
		type: Boolean,
		default: false
	}
} as const
export type ButtonProps = ExtractPropTypes<typeof buttonProps>