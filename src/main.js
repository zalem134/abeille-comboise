import { createApp as createClientApp, createSSRApp } from 'vue'
import './assets/main.css'
import App from './App.vue'

const inBrowser = typeof window !== 'undefined'

export const createApp = () => (
  process.env.NODE_ENV === 'production'
    ? createSSRApp(App)
    : createClientApp(App)
)

if (inBrowser) {
  createApp().mount('#app')
}

