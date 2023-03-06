import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
import SummernoteEditor from 'vue3-summernote-editor';
import vSelect from "vue-select";


import './assets/main.css'


const app = createApp(App)


app.use(router)
app.component("v-select", vSelect)
app.component('SummernoteEditor', SummernoteEditor);
app.mount('#app')

import 'vue-select/dist/vue-select.css'

