import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from "@/router/router";
import components from '@/components/UI';

import './sass/App.sass'
import BootstrapVue3 from 'bootstrap-vue-3'

const app = createApp(App);

app
    .use(router)
    .use(store)
    .use(BootstrapVue3)

components.forEach(component => {
        app.component(component.name, component)
    }
)

app.mount('#app');



