import { createApp } from "vue";
import { createPinia } from "pinia";
import 'vuetify/styles';
import axios from "axios";
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import App from "./App.vue";
import router from "./router";

const axiosInstance = axios.create({
    withCredentials: true,
});
const pinia = createPinia();
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        iconfont: 'mdi', // Set the default icon font to use
    },
});

const app = createApp(App);
app.use(router)
app.use(vuetify).use(pinia).mount("#app");
app.config.globalProperties.$axios = { ...axiosInstance};
