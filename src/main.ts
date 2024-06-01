import './assets/main.css'

import { createApp } from 'vue'
import { setupWorker } from 'msw/browser'
import { handlers } from './mocks/handlers'
export const worker = setupWorker(...handlers)
await worker.start()

import App from './App.vue'
import router from './router';
import store from './store.js'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


/* add icons to the library */
const app = createApp(App)
app.use(router)

store.dispatch('fetchAllJobs').then(() => {
    app.use(store)
    app.mount('#app')
});