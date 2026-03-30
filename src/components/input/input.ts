import type { ExtractPropTypes, PropType } from "vue"

export const inputProps = {
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  placeholder: {
    type: String,
    default: '请输入内容'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  throttle: {
    type: Number,
    default: 400
  }
} as const
export type InputProps = ExtractPropTypes<typeof inputProps>