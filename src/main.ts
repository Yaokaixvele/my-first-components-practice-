import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Input from './components/input/index.ts'

const app = createApp(App)
app.use(Input)
app.mount('#app')
