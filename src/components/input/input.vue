<script lang="ts" setup>
import myThrottle from '../../utils/MyThrottle';
import { inputProps} from './input'
defineOptions({
	name: 'MyInput'
})
const props = defineProps(inputProps)
const emit = defineEmits<{
	(e: 'update:modelValue', value: string | number): void
	(e: 'input', value: string | number): void
}>()
const handleInput = (e: Event) =>{
	const { value } = e.target as HTMLInputElement
	console.log("此时传入的是：",value)
	emit('update:modelValue',value)
	throttledEmit(value)
}
const throttledEmit = myThrottle((val: string | number) =>{
	
	emit('input',val)
},500)
</script>
<template>
	<div class="my-input" :class="{ 'is-disabled': disabled }">
		<input
			class="my-input__inner"
			:value="modelValue"
			:placeholder="placeholder"
			:disabled="disabled"
			@input="handleInput"
		/>
	</div>
</template>
<style lang="scss" scoped>
.my-input {
  display: inline-block;
  width: 100%;
}
.my-input__inner {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  transition: border-color 0.2s;
}
.my-input__inner:focus {
  outline: none;
  border-color: #409eff;
}
.is-disabled .my-input__inner {
  background-color: #f5f7fa;
  cursor: not-allowed;
}
</style>