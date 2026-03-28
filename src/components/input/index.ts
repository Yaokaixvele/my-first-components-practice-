import Input from './input.vue'
import type { App, Plugin } from 'vue'

// 1. 定义一个混合类型：组件类型 + 插件类型
type SFCWithInstall<T> = T & Plugin

// 2. 将 Input 强制断言为这个混合类型
const MyInput = Input as SFCWithInstall<typeof Input>

// 3. 此时再添加 install 方法，TS 就能理解了
MyInput.install = (app: App) => {
  // 注意：确保你的 input.vue 里定义了 name: 'MyInput'
  app.component(MyInput.name as string, MyInput)
}

// 4. 导出这个“增强版”的组件
export default MyInput