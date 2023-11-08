import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'

// ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
