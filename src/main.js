import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import "vuetify/styles"
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)
const vuetify = createVuetify({
    components: components,
    directives: directives,
})
// su dung ca thu vien ben ngoai
app.use(vuetify);

// gan component app vao trong ung dung
app.mount('#app');
